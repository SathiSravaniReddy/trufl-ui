
import { Component, ViewEncapsulation, ViewContainerRef, ViewChild } from '@angular/core';
import { HostessService } from './hostess.service';
import { ToastOptions } from 'ng2-toastr';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../shared/login.service';
import { Router } from "@angular/router";
import { SharedService } from '../shared/Shared.Service';

@Component({
    selector: 'hostess',
    templateUrl: './hostess.component.html',
    styleUrls: ['./hostess.component.css'],
    providers: [ToastsManager, ToastOptions]
})
export class HostessComponent {
    private bookingid;
    private username;
    private pic;
    public restaurantName;
    public truflUserList;
    private selectedRow: Number;
    private currentDate: any;
    private remainingwaitedtime;
    private RestaurantId;
    public showProfile: boolean = false;
    private profileData: any = [];
    private tablesSelected: any = [];
    public currentSelectedUser: string;
    private bioinfo;
    private waitlisttime;
    //Parameters to pass in Api
    private usertype: any;
    private truflid: any;
    private settingsData;
    private bioData: any = [];
    private restaurantid: any;
    private waitedtime;
    private hours;
    private minutes;
    private currenthours;
    private currentminutes;
    private currenttime;
    private totalremainingtime;
    private restarauntid;
    private usernames;
    private partysize;
    private rowdata: any = {};
    private errormessage;
    private data:any;
    private statusmessage;
    private errorcode;
    private showtable;
  showDialog = false;
    public wailistLoader: boolean = false;
    constructor(private hostessService: HostessService, private loginService: LoginService, private _toastr: ToastsManager, vRef: ViewContainerRef, private router: Router,private sharedService: SharedService) {
        this._toastr.setRootViewContainerRef(vRef);

        this.restaurantName = this.loginService.getRestaurantName();
        this.restarauntid = this.loginService.getRestaurantId();


        this.getWaitListData(this.restarauntid);

          this.errormessage=this.loginService.getErrorMessage();

    }



    getWaitListData(restarauntid) {
    //Displaying trufl user's list
        this.wailistLoader = true;
        this.hostessService.getTruflUserList(restarauntid).subscribe((res: any) => {
            this.truflUserList = res._Data;
           this.statusmessage=res._StatusMessage;
           this.errorcode=res._ErrorCode;
            this.truflUserList.OfferAmount = (+this.truflUserList.OfferAmount);
            console.log(this.truflUserList, "this.truflUserList");
        this.truflUserList.map(function (user) {
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
        this.wailistLoader = false;
        },(err) => {if(err === 0){this._toastr.error('network error')}});

    }

    //Functinality for trufl user's list
        watlistUserDetails(data, index) {
        this.data = data;
        this.bookingid = data.BookingID;
        localStorage.setItem('editguestDetails', JSON.stringify(data));
        this.selectedRow = index;
        this.showProfile = true;
        var _that = this;
        this.currentSelectedUser = data.Email;
        this.RestaurantId = data.RestaurantID;
        this.username = data.UserName;
        this.pic = data.pic;
        this.profileData = data;
        this.usertype = data.TruflMemberType;
        this.truflid = data.TruflUserID;
        this.restaurantid = data.RestaurantID;
        this.usertype = data.TruflMemberType;
        this.getBioinformation(this.restaurantid, this.truflid, this.usertype);
    }



    getBioinformation(resid,trufid,usertype) {
        this.hostessService.getBioInformation(resid, trufid, usertype).subscribe((res: any) => {
            this.bioinfo = res._Data;
            this.bioData = this.bioinfo.BioData;



        },(err) => {if(err === 0){this._toastr.error('network error')}});

    }

//print functionality

    Remove(bookingid) {
        this.showProfile = false;
        this.hostessService.postUpdateEmptyBookingStatus(bookingid).subscribe((res: any) => {

        },(err) => {if(err === 0){this._toastr.error('network error')}})

        this.getWaitListData(this.restarauntid);

    }

    printrow(index) {

        if (index === undefined) {
            index = this.selectedRow;
        }
        var prtContent = document.getElementById('printrow_' + index);
        var prtheader = document.getElementById('printrowheader');
var ptrbiodata=document.getElementById('biodata');
            if (prtContent) {
                var WinPrint = window.open('', '_blank', 'left=0,top=0,width=800,height=400,toolbar=0,scrollbars=0,status=0');
                WinPrint.document.write('<html><head><title></title>');
                WinPrint.document.write('<link rel="stylesheet" href="http://localhost:63200/css/print.css" media="print" type="text/css"/>');
                WinPrint.document.write('</head><body>');
                WinPrint.document.write(prtheader.innerHTML);

                WinPrint.document.write(prtContent.innerHTML);


              WinPrint.document.write('</body>');
              WinPrint.document.write(ptrbiodata.innerHTML);
                setTimeout(function () {

                    WinPrint.focus();
                    WinPrint.print();
                    WinPrint.close();
                },1000);

            }
      return false;
    }
    //Functionality for closing side nav
    closeProile() {
        this.showProfile = false;
    }

   //accept offer
    acceptoffer(data) {
     //this.showtable=true;
     this.showDialog = !this.showDialog;
        console.log(data, "data");
        this.sharedService.uniqueid = "accept_offer";
        this.sharedService.useraccept = data;
        this.hostessService.setRowData(data);
        //this.router.navigateByUrl('/seataGuest');
    }
    //acceptoffer sidenav
    acceptoffersidenav(data) {
        console.log(data, "data in sidenav accept");
        this.sharedService.uniqueid = "accept_offersidenav";
        this.sharedService.useraccept = data;
        this.hostessService.setRowData(data);
        this.router.navigateByUrl('/seataGuest');
    }
    //tables sidenav
    tablessidenav(data) {
        console.log(data, "data in sidenav tables");
        this.sharedService.uniqueid = "tables_sidenav";
        this.sharedService.useraccept = data;
        this.hostessService.setRowData(data);
        this.router.navigateByUrl('/seataGuest');
    }
    //notify
    notify(data) {
        this.hostessService.sendmessage(data.TruflUserID).subscribe((res: any) => {
            console.log(res._Data);
        })
        console.log(data, "data");
        this.sharedService.uniqueid = "notify";
        this.sharedService.useraccept = data;
        this.hostessService.setRowData(data);
        this.router.navigateByUrl('/seataGuest');
    }

    //routing
    waitlistPage() {

        this.router.navigateByUrl('/waitlist');



    }
    seatedPage() {

        this.router.navigateByUrl('/seated');


    }
    snapshotPage() {

        this.router.navigateByUrl('/snapshot');

        this._toastr.error(this.statusmessage);

    }
    settingsPage() {

        this.router.navigateByUrl('/defaultSettings');


    }

    Addguest() {

        this.router.navigateByUrl('/addGuest');




    }
    editguest() {

        this.router.navigateByUrl('/editguest');

    }
    navigateToaddGuest() {
      localStorage.removeItem("acceptoffer rowdata");
        this.router.navigateByUrl('/addGuest');

    }
}
