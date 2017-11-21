import { Component, OnInit } from '@angular/core';
import { SeataguestService } from './seataguest.service'
import { Pipe, PipeTransform } from '@angular/core';
import { SharedService } from '../shared/Shared.Service';
import { Router } from '@angular/router';
@Component({
    selector: 'seataGuest',
    templateUrl: './seataguest.component.html',
    styleUrls: ['./seataguest.style.css']

})

export class SeataGuestComponent implements OnInit {
    public seatguestdetails: any = [];
    public seatedimages: any = [];
    public imagesarray: any = [];
    public final_array: any = [];
    public imagepath: any;
    public filterHostids: any;
    public filterHostrecords: any = [];;
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

    ngOnInit() {
        this.imagepath = 'data:image/JPEG;base64,';
        this.getseated(this.restID);
        this.getimages();
        this.getwaitlist();
        this.show = true;
        // this.user_accept=this.sharedService.useraccept;
        // console.log(this.user_accept); 

        this.getrowData = localStorage.getItem('acceptoffer rowdata');        
        this.user_accept = JSON.parse(this.getrowData);
        console.log(this.user_accept);

        /* related to save and edit guest*/
        this.unique_id = this.sharedService.uniqueid;
        console.log(this.unique_id);

        /*   this.guest_details = this.sharedService.addSeataguest;
           console.log(this.guest_details);*/
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
    constructor(private seataguestService: SeataguestService, public sharedService: SharedService, private router: Router) {

    }

    public getseated(restID: any) {
        this.seataguestService.getseateddetails(restID).subscribe((res: any) => {
            console.log(res._Data);
            //this.seatguestdetails = res._Data;
            this.before_sort = res._Data;
            this.seatguestdetails = this.before_sort.sort(function (a, b) {

                return a.TableNumber - b.TableNumber;
            })

            this.tblResLength = res._Data.length;
            for (let i = 0; i < res._Data.length; i++) {
                if (res._Data[i].HostessID == 12 || res._Data[i].HostessID == 1023 || res._Data[i].HostessID == 1024 || res._Data[i].HostessID == 1028) {
                        this.className[i] = 'Hostess1 divCol2Style';
                }
                else if (res._Data[i].HostessID == 1029 || res._Data[i].HostessID == 1030 || res._Data[i].HostessID == 1031) {
                       this.className[i] = 'Hostess2 divCol2Style';
                }
                else if (res._Data[i].HostessID == 1032 || res._Data[i].HostessID == 1033 || res._Data[i].HostessID == 1034) {
                     this.className[i] = 'Hostess3 divCol2Style';
                }
                else if (res._Data[i].HostessID == 1035 || res._Data[i].HostessID == 1036 || res._Data[i].HostessID == 1037) {
                      this.className[i] = 'Hostess4 divCol2Style';
                }
                else if (res._Data[i].HostessID == 1038 || res._Data[i].HostessID == 1039 || res._Data[i].HostessID == 1040) {
                   this.className[i] = 'Hostess5 divCol2Style';
                }
                else if (res._Data[i].HostessID == 1043 || res._Data[i].HostessID == 1044 || res._Data[i].HostessID == 1045 || res._Data[i].HostessID == 2021) {
                     this.className[i] = 'Hostess6 divCol2Style';
                 }
                else if ( res._Data[i].HostessID == 0) {
                     this.className[i] = 'Hostess7 divCol2Style';
                }
            }

            this.filterHostids = this.removeDuplicates(this.seatguestdetails, 'HostessID');
            console.log(this.filterHostids, 'filterid');
        })
    }

    public getimages() {
        this.seataguestService.getimages().subscribe((res: any) => {
            this.seatedimages = res._Data;
        })
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
            console.log(this.seatguestdetails, 'Tabl Status');
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
        if ( this.count>0 && this.count < this.user_accept.PartySize) {
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

    styleFn(status, attr) {
        var style = {
            '12':   { 'background-color': '#477B6C', 'border': ' 1px solid #477B6C', 'border-radius': '20px'},
            '1023': { 'background-color': '#477B6C', 'border': ' 1px solid #477B6C', 'border-radius': '20px' },
            '1024': { 'background-color': '#477B6C', 'border': ' 1px solid #477B6C', 'border-radius': '20px' },
            '1027': { 'background-color': '#477B6C', 'border': ' 1px solid #477B6C', 'border-radius': '20px' },
            '1028': { 'background-color': '#477B6C', 'border': ' 1px solid #477B6C', 'border-radius': '20px' },
            '1029': { 'background-color': '#8D6C8D', 'border': ' 1px solid #8D6C8D', 'border-radius': '20px' },
            '1030': { 'background-color': '#8D6C8D', 'border': ' 1px solid #8D6C8D', 'border-radius': '20px' },
            '1031': { 'background-color': '#8D6C8D', 'border': ' 1px solid #8D6C8D', 'border-radius': '20px' },
            '1032': { 'background-color': '#51919A', 'border': ' 1px solid #51919A', 'border-radius': '20px' },
            '1033': { 'background-color': '#51919A', 'border': ' 1px solid #51919A', 'border-radius': '20px' },
            '1034': { 'background-color': '#51919A', 'border': ' 1px solid #51919A', 'border-radius': '20px' },
            '1035': { 'background-color': '#9A8A4A', 'border': ' 1px solid #9A8A4A', 'border-radius': '20px' },
            '1036': { 'background-color': '#9A8A4A', 'border': ' 1px solid #9A8A4A', 'border-radius': '20px' },
            '1037': { 'background-color': '#9A8A4A', 'border': ' 1px solid #9A8A4A', 'border-radius': '20px' },
            '1038': { 'background-color': '#9A7047', 'border': ' 1px solid #9A7047', 'border-radius': '20px' },
            '1039': { 'background-color': '#9A7047', 'border': ' 1px solid #9A7047', 'border-radius': '20px' },
            '1040': { 'background-color': '#9A7047', 'border': ' 1px solid #9A7047', 'border-radius': '20px' },
            '1041': { 'background-color': '#48588E', 'border': ' 1px solid #48588E', 'border-radius': '20px' },
            '1042': { 'background-color': '#48588E', 'border': ' 1px solid #48588E', 'border-radius': '20px' },
            '1043': { 'background-color': '#919A62', 'border': ' 1px solid #919A62', 'border-radius': '20px' },
            '1044': { 'background-color': '#919A62', 'border': ' 1px solid #919A62', 'border-radius': '20px' },
            '1045': { 'background-color': '#919A62', 'border': ' 1px solid #919A62', 'border-radius': '20px' },
            '2021': { 'background-color': '#919A62', 'border': ' 1px solid #919A62', 'border-radius': '20px' },
            'true': { 'background-color': '#919A62', 'border': ' 1px solid #919A62', 'border-radius': '20px' }
        }
        if (status == 0) {
            status = true;
        }
        return status ? style[status] : style['default']; 
    }

    gethostess(HostessID: any) {
        console.log(HostessID);
        this.show = !this.show;
        let copyoffinalarry = this.seatguestdetails;
        this.filteredarray = copyoffinalarry.filter(function (tag) {
            return tag.HostessID == HostessID;
        }); 
        this.filteredhostessArray = this.trimmedArray.filter(function (tag) {
            return tag.HostessID == HostessID;
        })

        for (let i = 0; i < this.filteredarray.length; i++) {
            if (this.filteredarray[i].HostessID == 12 || this.filteredarray[i].HostessID == 1023 || this.filteredarray[i].HostessID == 1024 || this.filteredarray[i].HostessID == 1027 || this.filteredarray[i].HostessID == 1028) {
                 this.classNameHiostId[i] = 'Hostess1 divCol2Style';
            }
            else if (this.filteredarray[i].HostessID == 1029 || this.filteredarray[i].HostessID == 1030 || this.filteredarray[i].HostessID == 1031) {
                 this.classNameHiostId[i] = 'Hostess2 divCol2Style';
            }
            else if (this.filteredarray[i].HostessID == 1032 || this.filteredarray[i].HostessID == 1033 || this.filteredarray[i].HostessID == 1034) {
                    this.classNameHiostId[i] = 'Hostess3 divCol2Style';
            }
            else if (this.filteredarray[i].HostessID == 1035 || this.filteredarray[i].HostessID == 1036 || this.filteredarray[i].HostessID == 1037) {
                   this.classNameHiostId[i] = 'Hostess4 divCol2Style';
            }
            else if (this.filteredarray[i].HostessID == 1038 || this.filteredarray[i].HostessID == 1039 || this.filteredarray[i].HostessID == 1040) {
                    this.classNameHiostId[i] = 'Hostess5 divCol2Style';
            }
            else if (this.filteredarray[i].HostessID == 1043 || this.filteredarray[i].HostessID == 1044 || this.filteredarray[i].HostessID == 1045 || this.filteredarray[i].HostessID == 2021) {
                   this.classNameHiostId[i] = 'Hostess6 divCol2Style';
            }
            else if (this.filteredarray[i].HostessID == 0) {
                  this.classNameHiostId[i] = 'Hostess7 divCol2Style';
            }
        }
    }
    getservers() {   
        this.select_tab = 'servers';
        this.iswaitlistOpen = false;
        this.isserversOpen = true;
        this.seataguestService.getservers(this.restID).subscribe((res: any) => {
            this.servers = res._Data;
            console.log(this.servers);
        })
    }

    getwaitlist() {
        this.select_tab ='waitlist';
        this.isserversOpen = false;
        this.iswaitlistOpen = true;
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
            })
        })
    }


    PreviousPage() {

        console.log("coming");
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
       // console.log("comingh");
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

            console.log("coming into addguest");
            console.log(this.selected_objects);
            console.log(this.user_accept);
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

                console.log(res);
                if (res._ErrorCode == '50000') {
                    console.log("coming inoto failure");
                    this.sharedService.email_error = "Email Id Already Exists";
                    this.router.navigate(['addGuest']);

                }
                else {
                    this.sharedService.email_error = '';
                    this.router.navigate(['seated']);
                }
            })
        }
        else if (this.unique_id == "edit_guest") {


            console.log("coming into editguest");

          //  var restaurentID = JSON.parse(this.user_accept.RestaurantID)

           
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


            console.log(editobject);
           


            this.seataguestService.editguestconfirmation(editobject).subscribe((res: any) => {

                console.log(res);
                // this.sharedService._editguest_bio = editobject;

                if (res._ErrorCode == '50000') {
                    this.sharedService.email_error = "Email Id Already Exists";
                    this.router.navigate(['editguest']);
                  //  this.sharedService.editguestDetails = this.user_accept;
                    localStorage.setItem('editguestDetails', JSON.stringify(this.user_accept));

                }
                else {
                    this.sharedService.email_error = '';
                    // this.sharedService._editguest_bio = '';
                    this.router.navigate(['seated']);
                }

            })


        }
        else if (this.unique_id == "notify") {
             this.seataguestService.UpdateWaitListNotify(this.user_accept.BookingID, table_numbers).subscribe((res: any) => {
                 this.router.navigate(['seated']);
             })
            
          }
        else if (this.unique_id == "accept_offer") {
             this.seataguestService.UpdateWaitListAccept(this.user_accept.BookingID, table_numbers).subscribe((res: any) => {
             })
            this.router.navigate(['seated']);
        }


        else if (this.unique_id == "accept_offersidenav") {
            console.log("coming into accept_offer sidenav");

            this.seataguestService.UpdateWaitListAccept(this.user_accept.BookingID, table_numbers).subscribe((res: any) => {

            })
            this.router.navigate(['seated']);
        }

        else if (this.unique_id == "tables_sidenav") {
            console.log("coming into seated sidenav");

            this.seataguestService.UpdateWaitListAccept(this.user_accept.BookingID, table_numbers).subscribe((res: any) => {

            })
            this.router.navigate(['seated']);
        }
    }
}


