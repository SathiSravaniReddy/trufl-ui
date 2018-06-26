import { Component, ViewContainerRef } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';
import { TrunongetseatedService } from '../turnOnGetSeatedNow/trunOngetseated.component.Service'
import { OtherSettingsService } from '../defaultsettings/othersettings/other-settings.service'
import { ToastOptions } from 'ng2-toastr';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { SeataguestService } from '../seataguest/seataguest.service'
import { StaffService } from '../selectstaff/select-staff.service';

@Component({
    selector: 'turnOngetseated',
    templateUrl: './turnOngetseated.Component.html',
    styleUrls: ['./turnOngetseated.component.css'],
    providers: [ToastsManager, ToastOptions]
})
export class turnOngetseated {
    public isSubmit: boolean = false;
    public isGetSeated: boolean = false;
    private trunongetseatedinfo;
    private tabletype;
    private getseatedinfo;
    private tabledesc;
    private seatedCopy;
    private seatedobject: any = {};
    private restarauntid;
    private othersettingdetails;
    private errorcode: any;
    private statusmessage: any;
    private availableindex;
    private showerror = false;
    private tabletypeofseated;
    private comparedtabletype;
    public isenable;
    public available_tables: any;
    public getseatedinfo_settings: any = [];
    public show_error_priceoutofrange: boolean = false;
    //added code
    public restID = localStorage.getItem('restaurantid');
    public before_sort: any;
    public seatguestdetails: any;
    public style = {};
    public selected_objects: any = [];
    public table_type = [];
    public req = [];
    
    //added code end

    constructor(private _trunongetseated: TrunongetseatedService, private loginService: LoginService, private router: Router, private _othersettingsservice: OtherSettingsService, private _toastr: ToastsManager, vRef: ViewContainerRef, private seataguestService: SeataguestService, private selectstaff: StaffService) {
        this._toastr.setRootViewContainerRef(vRef);
        this.restarauntid = loginService.getRestaurantId();
        var that = this;

        this.style = JSON.parse(localStorage.getItem("stylesList")) || [];
        this.getseated(this.restID);
        this._othersettingsservice.getOtherSettingsDetails(this.restarauntid).
            subscribe((res: any) => {
                this.othersettingdetails = res._Data;   ///settings value if no data then this should consider
                //   var temp_var = this.othersettingdetails[0].TableNowCapacity;

                //this.tabletype.forEach(item_data => {
                //    if (item_data.TableType == temp_var) {

                //        this.available_tables = item_data.Available;
                //    }
                //})

                this.getseatedinfo_settings = [];

                this.getseatedinfo_settings.push({
                    "OfferAmount": this.othersettingdetails[0].TableNowCapacity * this.othersettingdetails[0].DefaultTableNowPrice,
                    "NumberOfTables": this.othersettingdetails[0].TableNowCapacity,
                    "DefaultTableNowPrice": this.othersettingdetails[0].DefaultTableNowPrice,
                    "DiningTime": this.othersettingdetails[0].DiningTime,
                    "Geofence": this.othersettingdetails[0].Geofence,
                    "MaximumGuests": this.othersettingdetails[0].MaximumGuests,
                    "RestaurantNotificationMsg": this.othersettingdetails[0].RestaurantNotificationMsg,
                    "TableNowCapacity": this.othersettingdetails[0].TableNowCapacity,
                });
               // this.getseatedinfofromdb();

            }, (err) => {
                if (err === 0) {
                    this._toastr.error('network error')
                }
            });

    }

    //added
    public getseated(restID: any) {
        this.seataguestService.getseateddetails(restID).subscribe((res: any) => {
            //this.before_sort = res._Data;
            console.log(res);
            if (res._Data.SeatAGuest.length > 0) {
                this.before_sort = res._Data.SeatAGuest;
                /* if (res._Data.GetSeatedAvbl.length > 0) {
                     this.getTableType = res._Data.GetSeatedAvbl[0].TableType;
                     this.TotalSelectable = res._Data.GetSeatedAvbl[0].TotalSelectable;
                 }*/
            }

            if (res._Data.length == 0) {
                this.seataguestService.emptyResponse(restID).subscribe((res: any) => {
                    this.errorcode = res._ErrorCode;
                    this.statusmessage = res._Data;
                    if (this.errorcode == 50000) {
                        this._toastr.error(this.statusmessage);
                    }
                })
            }
            else {
                if (res._Data.SeatAGuest.length > 0) {
                    this.seatguestdetails = this.before_sort.sort(function (a, b) {
                        return a.TableNumber - b.TableNumber;
                    })
                }
               
                /*  this.tblResLength = res._Data.length;
                  this.filterHostids = this.removeDuplicates(this.seatguestdetails, 'HostessID');*/

            }
        }, (err) => {
            if (err === 0) {
                this._toastr.error('network error')
            }
        });
    }


    //select seats
    selectseats(selectseats: any) {
        this.seatguestdetails.forEach((itemdata, index) => {
            if (itemdata.TableNumber == selectseats.TableNumber && itemdata.TableStatus == false) {
                this.seatguestdetails[index].TableStatus = !this.seatguestdetails[index].TableStatus;
                return;
            }
            else {
                if (itemdata.TableNumber == selectseats.TableNumber && itemdata.TableStatus == true) {
                    this.seatguestdetails[index].TableStatus = !this.seatguestdetails[index].TableStatus;
                    return;
                }
            }
        })
        if (this.selected_objects.length) {
            let index = this.selected_objects.findIndex(function (selectedobject) {
                return selectedobject.TableNumber === selectseats.TableNumber;
            })
            if (index >= 0) {
                this.selected_objects.splice(index, 1);
            }
            else {
                this.selected_objects.push(selectseats);
            }
        }
        else {
            this.selected_objects.push(selectseats);
        }

        this.req = [];
        this.selected_objects.forEach((itemdata, index) => {
            var nooftabs = this.selected_objects.filter(
                obj => obj.TableType === itemdata.TableType).length;
            if (this.req.filter(
                obj => obj.TableType === itemdata.TableType).length == 0)
                this.req.push({
                    "RestaurantID": itemdata.RestaurantID,
                    "TableType": itemdata.TableType,
                    "NumberOfTables": nooftabs,
                    "OfferAmount": itemdata.TableType * this.getseatedinfo_settings[0].DefaultTableNowPrice,
                    "TablesAllocated": nooftabs,
                    "TableNumbers": itemdata.TableNumber,
                    "IsEnabled": true,

                });
        });
      
        

    }
   

    postgetseated() {
      
    }


    //added code end


    /* Function to assign colors to servers. */
    public dummy() {
        /*      this.colorsLoader = true;*/
        var colorsList = '477B6C,8D6C8D,51919A,9A8A4A,9A7047,48588E,919A62,86a873,048ba8,3c6997,bb9f06';
        this.selectstaff.assignServercolor(colorsList, this.restID).subscribe((res: any) => {
            console.log(res);

            for (let i = 0; i < res._Data.length; i++) {
                this.style[res._Data[i].UserID] = {
                    "background-color": res._Data[i].backgroundcolor,
                    "border": res._Data[i].border,
                    "border-radius": res._Data[i].borderradius
                }
            }
            localStorage.setItem("stylesList", JSON.stringify(this.style));
            /*     this.colorsLoader = false;*/
        }, (err) => {
            if (err === 0) {
                this._toastr.error('network error')
            }
        });
    }
    PreviousPage() {
        this.router.navigateByUrl('/waitlist');
    }




    getseatedinfofromdb() {

        this._trunongetseated.getTrungetseated(this.restarauntid).subscribe((res: any) => {
            this.trunongetseatedinfo = res._Data;
            this.getseatedinfo = null;

            this.tabletype = res._Data.TableType;
            if (this.tabletype != null || this.tabletype != undefined) {
                this.getseatedinfo = res._Data.GetSeatedNow; //db value


                if (res._Data.GetSeatedNow == null || res._Data.GetSeatedNow.length == 0) {
                    // console.log(this.getseatedinfo_settings[0].TableNowCapacity);

                    this.getseatedinfo.push({
                        "TableType": this.getseatedinfo_settings[0].TableNowCapacity,
                        "NumberOfTables": this.getseatedinfo_settings[0].NumberOfTables,
                        "OfferAmount": this.getseatedinfo_settings[0].OfferAmount
                    });


                }
                else this.isenable = this.getseatedinfo[0].IsEnabled;
                this.tabletypeofseated = this.getseatedinfo[0].TableType;
                this.comparedtabletype = res._Data.TableType.filter(function (item) {
                    return item.TableType == res._Data.GetSeatedNow[0].TableType;
                });
                this.availableindex = this.tabletype.findIndex(x => x.TableType
                    == this.tabletypeofseated);
                this.seatedobject.TableType = this.getseatedinfo[0].TableType;
                this.seatedobject.NumberOfTables = this.getseatedinfo[0].NumberOfTables;
                this.seatedobject.Amount = "$" + this.getseatedinfo[0].OfferAmount;
                this.seatedCopy = JSON.parse(JSON.stringify(this.tabletype));
                if (this.comparedtabletype.length == 0)
                    this.seatedCopy.push({ "Available": 0 });
                else
                    this.seatedCopy[this.availableindex].Available = this.comparedtabletype[0].Available;
                this.comparedtabletype = this.getseatedinfo.map(function (item) {
                    item.OfferAmount = "$" + item.OfferAmount;
                });
            }
            else {
                //error message no table avaialble
                alert("There are no tables available for selection.")
            }


        }, (err) => {
            if (err === 0) {
                this._toastr.error('network error')
            }
        });





    }

    turngetseated() {
        var that = this;
        this.isenable = false;
        let restarauntid;
        restarauntid = this.loginService.getRestaurantId();
        this.isGetSeated = !this.isGetSeated;
    }
    closeTurngetseated() {
        this.isGetSeated = false;
    }

    tabletypes(value, index) {
        this.availableindex = index;
        this.tabledesc = value.TableTypeDesc;
        this.getseatedinfo[0].NumberOfTables = value.Available;
        this.getseatedinfo[0].TableType = value.TableType;
        this.getseatedinfo[0].OfferAmount = "$" + this.getseatedinfo[0].TableType * this.othersettingdetails[0].DefaultTableNowPrice;
        this.seatedobject.RestaurantID = this.restarauntid;
        this.seatedobject.TableType = this.getseatedinfo[0].TableType;
        this.seatedobject.NumberOfTables = this.getseatedinfo[0].NumberOfTables;
        this.seatedobject.Amount = this.getseatedinfo[0].OfferAmount;
    }

    updateAvailable(value) {
        this.show_error_priceoutofrange = false;
        if (value <= this.seatedCopy[this.availableindex].Available) {
            this.showerror = false;
            this.seatedobject.NoOfTables = value;
        }
        else {
            this.showerror = true;

        }
    }

    updatePrice(value) {
        this.show_error_priceoutofrange = false;
        if (this.getseatedinfo != undefined || this.getseatedinfo != null || this.getseatedinfo != '' ||
            this.getseatedinfo.length != 0) {
            this.isSubmit = false; this.showerror = false; this.show_error_priceoutofrange = false;
            if ((parseInt(this.othersettingdetails[0].MinimumTableNowPrice) *
                (this.getseatedinfo[0].TableType)) >= parseInt(value.replace("$", ""))) {
                this.show_error_priceoutofrange = true;
                this.isSubmit = true;
                this.showerror = true;
            }

            this.getseatedinfo[0].OfferAmount = value;
            this.seatedobject.Amount = value;
        }


    }

    addPrice() {
        this.getseatedinfo[0].OfferAmount = +(this.getseatedinfo[0].OfferAmount.toString().replace(new RegExp('\\$', 'g'), ''));
        this.getseatedinfo[0].OfferAmount = this.getseatedinfo[0].OfferAmount + 5;
        this.getseatedinfo[0].OfferAmount = '$' + this.getseatedinfo[0].OfferAmount;
    }

    subPrice() {

        this.getseatedinfo[0].OfferAmount = +(this.getseatedinfo[0].OfferAmount.toString().replace(new RegExp('\\$', 'g'), ''));
        if (this.getseatedinfo[0].OfferAmount > 0) {
            this.getseatedinfo[0].OfferAmount = this.getseatedinfo[0].OfferAmount - 5;

        }
        this.getseatedinfo[0].OfferAmount = '$' + this.getseatedinfo[0].OfferAmount;
    }

    submit() {

        var obj = {
            'RestaurantID': this.restarauntid,
            'TableType': this.getseatedinfo[0].TableType,
            'NoOfTables': this.getseatedinfo[0].NumberOfTables,
            'Amount': +(this.getseatedinfo[0].OfferAmount.toString().replace(new RegExp('\\$', 'g'), '')),
            'IsEnabled': true
        };
        this._trunongetseated.postTrungetseatednow(obj).subscribe((res: any) => {
            this.statusmessage = res._StatusMessage;
            this.errorcode = res._ErrorCode;

            if (this.errorcode === 0) {
                this.isSubmit = !this.isSubmit;
                this.seatedobject.RestaurantID = this.restarauntid;
                this.seatedobject.TableType = this.getseatedinfo[0].TableType;
                this.seatedobject.NumberOfTables = this.getseatedinfo[0].NumberOfTables;
                this.seatedobject.Amount = this.getseatedinfo[0].OfferAmount;
            }
            else if (this.errorcode === 1) {
                this._toastr.error(this.statusmessage);
            }

        }, (err) => {
            if (err === 0) {
                this._toastr.error('network error')
            }
        });

    }
    cancel() {

        var obj = {
            'RestaurantID': this.restarauntid,
            'TableType': this.getseatedinfo[0].TableType,
            'NoOfTables': this.getseatedinfo[0].NumberOfTables,
            'Amount': +(this.getseatedinfo[0].OfferAmount.toString().replace(new RegExp('\\$', 'g'), '')),
            'IsEnabled': false
        };
        this._trunongetseated.postTrungetseatednow(obj).subscribe((res: any) => {

            this.statusmessage = res._StatusMessage;
            this.errorcode = res._ErrorCode;

            if (this.errorcode === 0) {
                this.isSubmit = false;
                this.isenable = false;
                this.isGetSeated = false;


            }
            else if (this.errorcode === 1) {
                this._toastr.error(this.statusmessage);
            }

        }, (err) => {
            if (err === 0) {
                this._toastr.error('network error')
            }
        });

    }
}
