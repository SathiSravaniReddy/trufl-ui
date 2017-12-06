
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
    private data:any;
    private statusmessage;
    private errorcode;
    private showtable :any=false;
    private emptybookingid;
    public commonmessage;
    public indexs;
    showDialog = false;
    public acceptdata;
    public acceptsidenavdata;
     private isempty;
    public wailistLoader: boolean = false;
    constructor(private hostessService: HostessService, private loginService: LoginService, private _toastr: ToastsManager, vRef: ViewContainerRef, private router: Router,private sharedService: SharedService) {
        this._toastr.setRootViewContainerRef(vRef);

        this.restaurantName = this.loginService.getRestaurantName();
        this.restarauntid = this.loginService.getRestaurantId();


        this.getWaitListData(this.restarauntid);



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

    Remove(bookingid,item) {
      this.commonmessage="Are you sure you want to remove " +item.UserName + " from the waitlist? This cannot be undone. ";
        this.showProfile = false;
      this.showDialog = !this.showDialog;
      this.emptybookingid=bookingid;
      this.isempty="empty";

    }
  Ok(){
    if (this.isempty === 'empty') {
      this.hostessService.postUpdateEmptyBookingStatus(this.emptybookingid).subscribe((res: any) => {
        this.getWaitListData(this.restarauntid);
      }, (err) => {
        if (err === 0) {
          this._toastr.error('network error')
        }
      })
      this.showDialog = !this.showDialog;
    }
    else if(this.isempty === 'accept'){


      this.hostessService.sendmessage(this.acceptdata.TruflUserID).subscribe((res: any) => {
        if (res._Data[0].TruflUserID) {
          this.hostessService.changeicon(this.acceptdata.BookingID).subscribe((res: any) => {
            this.showDialog = !this.showDialog;
            this.getWaitListData(this.restarauntid);

          },(err) => {if(err === 0){this._toastr.error('an error occured')}});
        }

      },(err) => {if(err === 0){this._toastr.error('an error occured')}});


    }
    else if(this.isempty === 'acceptsidenav')
    {
      this.hostessService.sendmessage(this.acceptsidenavdata.TruflUserID).subscribe((res: any) => {
        if (res._Data[0].TruflUserID) {
          this.hostessService.changeicon(this.acceptsidenavdata.BookingID).subscribe((res: any) => {
            console.log(res,"res");
            this.showDialog = !this.showDialog;
            this.getWaitListData(this.restarauntid);
            if (res!=null) {
              this.showProfile = false;
            }
          },(err) => {if(err === 0){this._toastr.error('an error occured')}});
        }

      },(err) => {if(err === 0){this._toastr.error('an error occured')}});

    }

  }
  Cancel(){
    this.showDialog = !this.showDialog;
  }
  //print functionality
    printrow(item) {
        console.log(item);
        var WinPrint = window.open('', '_blank', 'left=0,top=0,width=800,height=400,toolbar=0,scrollbars=0,status=0');
        WinPrint.document.write('<html><head><title></title>');
        WinPrint.document.write('<link rel="stylesheet" href="http://localhost:63200/css/print.css" media="print" type="text/css"/>');
        WinPrint.document.write('</head><body>');


        var arr = [
          {
            key: "TRUFL STATUS",
            value : ''
          },
          {
            key: this.restaurantName,
            value: ""
          },
          {
            key: "Guset name",
            value: item.UserName
          },
          {
            key: "party size",
            value: item.PartySize
          },
          { key: "wait quoted", value: item.Quoted},
          { key: "time quoted", value: item.totalremainingtime},
          { key: "trufl offer/reservation", value:item.OfferAmount}
        ];

        //WinPrint.document.write('<table><tr *ngFor="let rowinfo of arr;"><th>{{rowinfo.key}}</th><td>{{rowinfo.value}}</td></tr>');
      WinPrint.document.write('<table>');
      arr.map(function (obj, index) {
        WinPrint.document.write('<tr><th>' + obj.key  + '</th><td>' + obj.value + '</td></tr>');
      });




        WinPrint.document.write('</table>');



      WinPrint.document.write('</body>');

        setTimeout(function () {

            WinPrint.focus();
            WinPrint.print();
            WinPrint.close();
        },1000);


      return false;
    }
    //Functionality for closing side nav
    closeProile() {
        this.showProfile = false;
    }

   //accept offer
    acceptoffer(data) {
     //this.showtable=true;


      console.log(data, "data");
        this.sharedService.uniqueid = "accept_offer";
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




    //changeaccepticontotable
  changeaccepticon(data) {
    this.acceptdata=data;

    this.isempty='accept';
    this.commonmessage="Are you sure you want to accept this offer, and instruct " +data.UserName +  " to report immediately to the host station? This cannot be undone. ";
    this.showProfile = false;
    this.showDialog = !this.showDialog;


  }
  //acceptofferside nav
  changeaccepticonsidenav(data){
    this.acceptsidenavdata = data;
    this.isempty='acceptsidenav';
    this.commonmessage="Are you sure you want to accept this offer, and instruct " +data.UserName +  " to report immediately to the host station? This cannot be undone. ";
    this.showProfile = false;
    this.showDialog = !this.showDialog;
console.log(data,"adjlashfsdjlfhsdls");

this.showtable =true;




  }
}
