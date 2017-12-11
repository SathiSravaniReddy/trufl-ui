import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { SeataguestService } from './seataguest.service'
import { Pipe, PipeTransform } from '@angular/core';
import { SharedService } from '../shared/Shared.Service';
import { Router } from '@angular/router';
import { ToastOptions } from 'ng2-toastr';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
    selector: 'seataGuest',
    templateUrl: './seataguest.component.html',
    styleUrls: ['./seataguest.style.css'],
    providers: [ToastsManager, ToastOptions]

})

export class SeataGuestComponent implements OnInit {
    public seatguestdetails: any = [];
    public seatedimages: any = [];
    public imagesarray: any = [];
    public final_array: any = [];
    public imagepath: any;
    public filterHostids: any;
    public filterHostrecords: any = [];
    public show: any;
    public filteredarray: any
    public trimmedArray: any = [];
    public filteredhostessArray: any = [];
    public user_accept: any;
    public count = 0;
    public selected_objects: any = [];
    public error_message: any;
    public showmessage = false;
    public imageborder: any;
    public active: boolean = false;
    public servers: any;
    public waitlist: any;
    public issideOpen: boolean = false;
    public before_sort: any;
    public wailistLoader: boolean = false;
    public serversLoader: boolean = false;
    public SeatAGuestTblLoader: boolean = false;
    //public wailistLoader: boolean = false;

    public iswaitlistOpen: boolean = true;
    public isserversOpen: boolean = false;
    public restID = localStorage.getItem('restaurantid');
    public select_tab: any;
    public unique_id: any;
    public guest_details: any;
    public getrowData: any;

    public isDrop: any = [];
    public tblResLength: any;
    public className: any = [];
    public classNameHiostId: any = [];
    public toogleBool: boolean = true;
    public style = {};
    public error_msg: any;
    public errorcode;
    public statusmessage;
    ngOnInit() {
        this.imagepath = 'data:image/JPEG;base64,';
        this.getseated(this.restID);
        this.getwaitlist();
        this.show = true;
        this.getrowData = localStorage.getItem('acceptoffer rowdata');
        this.user_accept = JSON.parse(this.getrowData);
        this.unique_id = this.sharedService.uniqueid;
    }

    public removeDuplicates(originalArray, objKey) {
        var values = [];
        var value;
        for (var i = 0; i < originalArray.length; i++) {
            value = originalArray[i][objKey];
            if (values.indexOf(value) === -1) {
                this.trimmedArray.push(originalArray[i]);
                values.push(value);
            }
        }
        return this.trimmedArray;
    }
    constructor(private seataguestService: SeataguestService, public sharedService: SharedService, private router: Router, private _toastr: ToastsManager, vRef: ViewContainerRef) {
        this.style = JSON.parse(localStorage.getItem("stylesList"))|| [];
        this._toastr.setRootViewContainerRef(vRef);
    }

    public getseated(restID: any) {
        this.seataguestService.getseateddetails(restID).subscribe((res: any) => {
            this.before_sort = res._Data;
            if(res._Data.length == 0){
              this.seataguestService.emptyResponse(restID).subscribe((res:any)=>{
                this.errorcode = res._ErrorCode;
                this.statusmessage = res._Data;
                if (this.errorcode == 50000) {
                  this._toastr.error(this.statusmessage);
                }
              })
            }
            else{
              this.SeatAGuestTblLoader = true;
              this.seatguestdetails = this.before_sort.sort(function (a, b) {
                return a.TableNumber - b.TableNumber;
              })
              this.tblResLength = res._Data.length;
              this.filterHostids = this.removeDuplicates(this.seatguestdetails, 'HostessID');
              this.SeatAGuestTblLoader = false;
            }
        },(err) => {if(err === 0){this._toastr.error('network error')}});
    }

    selectseats(selectseats: any) {
        this.seatguestdetails.forEach((itemdata, index) => {
            if (itemdata.TableNumber == selectseats.TableNumber && itemdata.TableStatus == false) {
                this.seatguestdetails[index].TableStatus = !this.seatguestdetails[index].TableStatus;
                this.imageborder = true;
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
                this.selected_objects[index] = selectseats;
                if (selectseats.TableStatus == true) {
                    this.count = this.count + selectseats.TableType;
                }
                else {
                    this.count = this.count - selectseats.TableType;
                }
            }
            else {
                this.selected_objects.push(selectseats);
                this.count = this.count + selectseats.TableType;
            }
        }
        else {
            this.selected_objects.push(selectseats);
            this.count = this.count + selectseats.TableType;
        }
        if (this.count > 0 && this.count < this.user_accept.PartySize) {
            this.showmessage = true;
            this.active = false;
            this.toogleBool = true;
            this.error_message = "please select another table to accommodate this large party";
        } else if (this.count == 0) {
            this.showmessage = false;
            this.active = false;
            this.toogleBool = true;
        }
        else {
            this.active = true;
            this.showmessage = false;
            this.toogleBool = false;
        }
    }

    public gethostess(HostessID: any) {
        this.show = !this.show;
        let copyoffinalarry = this.seatguestdetails;
        this.filteredarray = copyoffinalarry.filter(function (tag) {
            return tag.HostessID == HostessID;
        });
        this.filteredhostessArray = this.trimmedArray.filter(function (tag) {
            return tag.HostessID == HostessID;
        })
    }
    getservers() {
        this.select_tab = 'servers';
        this.iswaitlistOpen = false;
        this.isserversOpen = true;
        this.serversLoader = true;
        this.seataguestService.getservers(this.restID).subscribe((res: any) => {
            this.servers = res._Data;
            this.serversLoader = false;
        },(err) => {if(err === 0){this._toastr.error('network error')}})
    }

    getwaitlist() {
        this.select_tab = 'waitlist';
        this.isserversOpen = false;
        this.iswaitlistOpen = true;
        this.wailistLoader = true;
        this.seataguestService.getwaitlist(this.restID).subscribe((res: any) => {
            this.waitlist = res._Data;
            this.waitlist.map(function (user) {
                var currentDate = new Date();
                var currenthours = currentDate.getHours();
                let currentminutes = currentDate.getMinutes();
                let currenttime = (currenthours * 60) + currentminutes;
                if (user.WaitListTime != null) {
                    let waitedtime = new Date(user.WaitListTime);
                    let hours = waitedtime.getHours();
                    let minutes = waitedtime.getMinutes();
                    let remainingwaitedtime = (hours * 60) + (minutes);
                    let totalremainingtime = currenttime - remainingwaitedtime;
                    user.totalremainingtime = totalremainingtime;
                }
            },(err) => {if(err === 0){this._toastr.error('network error')}})
            this.wailistLoader = false;
        })
    }

    PreviousPage() {
       if (this.unique_id == "addguest") {
            this.router.navigate(['addGuest']);
        }
        else if (this.unique_id == "edit_guest") {

            this.sharedService.editguestDetails = this.user_accept;
            this.router.navigate(['editguest']);
        }
        else if (this.unique_id == "notify") {
            this.router.navigate(['waitlist']);
        }
        else if (this.unique_id == "accept_offer") {
            this.router.navigate(['waitlist']);
        }
        else if (this.unique_id == "accept_offersidenav") {
            this.router.navigate(['waitlist']);
        }
        else {
            this.router.navigate(['waitlist']);
        }
    }

    confirm() {
        this.error_msg = "an error occured";
        var table_array = [];
        this.selected_objects.forEach((table, index) => {
            if (table.TableStatus == true) {
                table_array.push(table.TableNumber);
            }
        })

        var table_numbers = table_array.join();

        if (this.restID) {
            var restID = JSON.parse(this.restID);
        }
        if (this.user_accept.PartySize) {
            var partysize = JSON.parse(this.user_accept['PartySize']);

        }
        if (this.user_accept.waitquoted) {
            var QuotedTime = JSON.parse(this.user_accept['waitquoted'])
        }
        if (this.unique_id == "addguest") {

            var addobj = {
                "RestaurantID": restID,
                "FullName": this.user_accept.UserName,
                "Email": this.user_accept.email,
                "ContactNumber": this.user_accept.mobile,
                "UserType": 'TU',
                "PartySize": partysize,
                "QuotedTime": QuotedTime,
                "Relationship": this.user_accept.relationship,
                "ThisVisit": this.user_accept.visit,
                "FoodAndDrink": this.user_accept.food,
                "SeatingPreferences": this.user_accept.seating,
                "Description": this.user_accept.notes,
                "WaitListTime": null,
                "BookingStatus": 3,
                "TableNumbers": table_numbers,

            }
            this.seataguestService.newguestconfirmation(addobj).subscribe((res: any) => {

                if (res._ErrorCode == '1') {
                    window.setTimeout(() => {
                        this._toastr.error(this.error_msg);

                    }, 500);
                }
            else if (res._ErrorCode == '50000') {
                    this.sharedService.email_error = "Email Id Already Exists";
                    this.router.navigate(['addGuest']);
                }
                else if (res._ErrorCode == '0') {
                    this.sharedService.email_error = '';
                    this.router.navigate(['seated']);
                }
            },(err) => {if(err === 0){this._toastr.error('network error')}})
        }
        else if (this.unique_id == "edit_guest") {
           var editobject = {
                "RestaurantID": this.user_accept.RestaurantID,
                "TruflUserID": this.user_accept.TruflUserID,
                "FullName": this.user_accept.UserName,
                "Email": this.user_accept.Email,
                "ContactNumber": this.user_accept.PhoneNumber,
                "Relationship": this.user_accept.Relationship,
                "ThisVisit": this.user_accept.ThisVisit,
                "FoodAndDrink": this.user_accept.FoodAndDrinkPreferences,
                "SeatingPreferences": this.user_accept.SeatingPreferences,
                "Description": this.user_accept.Description,
                "BookingID": this.user_accept.BookingID,
                "TableNumbers": table_numbers
            }
           this.seataguestService.editguestconfirmation(editobject).subscribe((res: any) => {

               if (res._ErrorCode == '1') {
                   window.setTimeout(() => {
                       this._toastr.error(this.error_msg);

                   }, 500);
               }
               else if (res._ErrorCode == '50000') {
                    this.sharedService.email_error = "Email Id Already Exists";
                    this.router.navigate(['editguest']);
                    localStorage.setItem('editguestDetails', JSON.stringify(this.user_accept));
                }
               else if (res._ErrorCode == '0'){
                    this.sharedService.email_error = '';
                    this.router.navigate(['seated']);
                }
            },(err) => {if(err === 0){this._toastr.error('network error')}})
        }
        else if (this.unique_id == "notify") {
            this.seataguestService.UpdateWaitListNotify(this.user_accept.BookingID, table_numbers).subscribe((res: any) => {

                if (res._ErrorCode == '1') {
                    window.setTimeout(() => {
                        this._toastr.error(this.error_msg);

                    }, 500);
                }
                else if (res._ErrorCode == '0'){
                    this.router.navigate(['seated']);
                }
            },(err) => {if(err === 0){this._toastr.error('network error')}})
        }
        else if (this.unique_id == "accept_offer") {
            this.seataguestService.UpdateWaitListAccept(this.user_accept.BookingID, table_numbers).subscribe((res: any) => {
                if (res._ErrorCode == '1') {
                    window.setTimeout(() => {
                        this._toastr.error(this.error_msg);
                    }, 500);
                }
                else if (res._ErrorCode == '0'){
                    this.router.navigate(['seated']);
                }

            },(err) => {if(err === 0){this._toastr.error('network error')}})

        }
        else if (this.unique_id == "accept_offersidenav") {
            this.seataguestService.UpdateWaitListAccept(this.user_accept.BookingID, table_numbers).subscribe((res: any) => {

                if (res._ErrorCode == '1') {
                    window.setTimeout(() => {
                        this._toastr.error(this.error_msg);

                    }, 500);
                }
                else if (res._ErrorCode == '0'){
                    this.router.navigate(['seated']);
                }
            },(err) => {if(err === 0){this._toastr.error('network error')}})
        }
        else if (this.unique_id == "tables_sidenav") {
            this.seataguestService.UpdateWaitListAccept(this.user_accept.BookingID, table_numbers).subscribe((res: any) => {

                if (res._ErrorCode == '1') {
                    window.setTimeout(() => {
                        this._toastr.error(this.error_msg);

                    }, 500);
                }
                else if (res._ErrorCode == '0'){
                    this.router.navigate(['seated']);
                }
            },(err) => {if(err === 0){this._toastr.error('network error')}})
        }
    }
}


