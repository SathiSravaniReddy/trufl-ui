﻿import {Component, ViewContainerRef} from '@angular/core';
import {OnInit} from '@angular/core';
import {SeatedService} from './seated.service';
import {Router} from '@angular/router';
import {LoginService} from '../shared/login.service';
import {ToastOptions} from 'ng2-toastr';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {OtherSettingsService} from '../defaultsettings/othersettings/other-settings.service'
@Component({
  selector: 'seated',
  templateUrl: './seated.component.html',
  styleUrls: ['./seated.component.css'],
  providers: [ToastsManager, ToastOptions]
})
export class SeatedComponent implements OnInit {

  public seatedinfo: any = [];
  public isenabled = false;
  private restaurantName: any;
  private restarauntid:any;
  private truflid;
  public items: any = [];
  private otherdiningtime;
  private othersettingsdetails;
  private errorcode: any;
  private statusmessage: any;
  showDialog = false;
  private emptybookingid;
  public commonmessage;
  private isempty;
  private billamount:any;
  private rewardtype: any;
  public showProfile: boolean = false;
  public currentSelectedUser: string;
  private username;
  private pic;
  private profileData: any = [];
  private usertype: any;
  private RestaurantId;
  private selectedRow: Number;
  private data: any;
  private bookingid;
  private restaurantid: any;
  constructor(private seatedService: SeatedService, private loginService: LoginService, private _othersettings: OtherSettingsService, private router: Router, private _toastr: ToastsManager, vRef: ViewContainerRef) {

    this._toastr.setRootViewContainerRef(vRef);
    this.restaurantName = this.loginService.getRestaurantName();
    this.restarauntid = this.loginService.getRestaurantId();
    //called first time before the ngOnInit()

  }

  ngOnInit() {
    this.getSeatedDetails(this.restarauntid);
  }
//subscribe the seated data over here
  getSeatedDetails(restarauntid) {

    let that = this;
    this._othersettings.getOtherSettingsDetails(restarauntid).subscribe((res: any) => {
      this.othersettingsdetails = res._Data;
      this.otherdiningtime = this.othersettingsdetails[0].DiningTime;

      this.seatedService.getSeatedDetails(restarauntid).subscribe((res: any) => {
         this.seatedinfo = res._Data;
      });
    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
    })
  }
  getOpacity(value){

    if (value.TimeRemaining >61){
      return `1`;

    }
    else if(value.TimeRemaining >51 && value.TimeWaited <=60){
      return `0.7`;

    }
    else if(value.TimeRemaining >41 && value.TimeWaited <=50){
      return `0.6`;

    }
    else if(value.TimeRemaining >31 && value.TimeWaited <=40){
      return `0.5`;

    }
    else if(value.TimeWaited >21 && value.TimeWaited <=30){
      return `0.4`;

    }
    else if(value.TimeRemaining >11 && value.TimeRemaining <=20){
      return `0.3`;

    }
    else if(value.TimeRemaining >6 && value.TimeRemaining <=10){
      return `0.2`;
    }
    else if(value.TimeRemaining < 5){
      return `0.1`;
    }
    else {
      return {};
    }

  }
  public toggles = [
    {value: 0},
    {value: 1}
  ];

  public get(data: any, type: any) {
    var details = {
      "RestaurantID": data['RestaurantID'],
      "TruflUserID": data['TruflUserID'],
      "AmenitiName": type,
      "AmenitiChecked": !data[type]
    }
    this.isenabled = true;

    if (this.items.length) {
      let index = this.items.findIndex(function (item) {
        return item.TruflUserID === data['TruflUserID'] && item.AmenitiName === type;
      });

      if (index >= 0) {
        this.items[index] = details;
      } else {
        this.items.push(details);
      }
    } else {
      this.items.push(details);
    }
  }
  seatedUserDetails(data, index) {
      this.data = data;
      this.bookingid = data.BookingID;
      localStorage.setItem('editguestDetails', JSON.stringify(data));
      this.selectedRow = index;
      this.showProfile = true;
      this.currentSelectedUser = data.Email;
      this.RestaurantId = data.RestaurantID;
      this.username = data.UserName;
      this.pic = data.pic;
      this.profileData = data;
      this.usertype = data.TruflMemberType;
      this.truflid = data.TruflUserID;
      this.restaurantid = data.RestaurantID;
      this.usertype = data.TruflMemberType;

  }
  //Functionality for closing side nav
  closeProile() {
      this.showProfile = false;
  }
  editguest() {
      this.router.navigateByUrl('/editguest');
  }
  

  emptyTable(seatsinfo, bookingid) {
    this.showDialog = !this.showDialog;
    this.emptybookingid = bookingid;
    this.showProfile = false;
    this.truflid = seatsinfo.TruflUserID;
    if (seatsinfo.OfferType === 3) {
      this.billamount = seatsinfo.OfferAmount;
    }
    else {
        this.billamount = null;
    }
    this.rewardtype='BILL_AMOUNT';
    this.isempty = "empty";
    this.commonmessage = "Are you sure this table is empty, and you want to remove  " + seatsinfo.TUserName + " from this list? This cannot be undone";
  }
// empty table post over here
  Ok() {
    if (this.isempty === 'empty') {

        this.seatedService.postUpdateEmptyBookingStatus(this.emptybookingid).subscribe((res: any) => {
          this.statusmessage = res._StatusMessage;
          this.errorcode = res._ErrorCode;
          this.showDialog = !this.showDialog;
          if (this.errorcode === "0") {
              this.getSeatedDetails(this.restarauntid);
            if (this.billamount != null && this.billamount != '') {
              this.seatedService.postPremiumUserdetails(this.truflid, this.restarauntid, this.billamount, this.rewardtype).subscribe((res: any) => {
              });
            }
          }
          else if (this.errorcode === "1") {
            this._toastr.error(this.statusmessage);
          }
        }, (err) => {
          if (err === 0) {
            this._toastr.error('network error')
          }
        })

      }

  }

  Cancel() {
    this.showDialog = !this.showDialog;
  }

  checkDrop(seatinfo, bookingid) {
    seatinfo.CheckReceived = !seatinfo.CheckReceived;
    this.emptybookingid = bookingid;
    this.seatedService.postUpdateCheckReceived(this.emptybookingid).subscribe((res: any) => {
      this.getSeatedDetails(this.restarauntid);


    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
    })

  }

  slow(seatedinfo, bookingid) {

    seatedinfo.jumpcount = 0;
    this.seatedService.postUpdateExtraTime(bookingid, -5).subscribe((res: any) => {
      this.getSeatedDetails(this.restarauntid);
    })
  }

  jump(seatedinfo, bookingid) {

    this.seatedService.postUpdateExtraTime(bookingid, 5).subscribe((res: any) => {
      this.getSeatedDetails(this.restarauntid);
    })
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
  }

  settingsPage() {
    this.router.navigateByUrl('/defaultSettings');
  }

  public hasData(): boolean {
    return (this.seatedinfo != null && this.seatedinfo.length > 0);
  }

  navigateToaddGuest() {
    localStorage.removeItem("acceptoffer rowdata");
    this.router.navigateByUrl('/addGuest');
  }
}





















