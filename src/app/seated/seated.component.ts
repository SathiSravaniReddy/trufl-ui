import {Component, ViewContainerRef} from '@angular/core';
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
  private restarauntid;
  public items: any = [];
  public SeatedTblLoader: boolean = false;
  private otherdiningtime;
  private othersettingsdetails;
  private errorcode: any;
  private statusmessage: any;
  showDialog = false;
  private emptybookingid;
  public commonmessage;
  private isempty;

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
    this.SeatedTblLoader = true;
    this._othersettings.getOtherSettingsDetails(restarauntid).subscribe((res: any) => {
      this.othersettingsdetails = res._Data;
      this.otherdiningtime = this.othersettingsdetails[0].DiningTime;

      this.seatedService.getSeatedDetails(restarauntid).subscribe((res: any) => {
        this.seatedinfo = res._Data;
        this.seatedinfo.map(function (user) {
          user.slowcount = 0;
          user.jumpcount = 0;
          user.diningtime = that.otherdiningtime;
          var currentDate = new Date();
          var currenthours = currentDate.getHours();
          let currentminutes = currentDate.getMinutes();
          let totalcurrenttime = (currenthours * 60) + currentminutes;
          if (user.SeatedTime != null) {
            let seatedtime = new Date(user.SeatedTime);
            let hours = seatedtime.getHours();
            let minutes = seatedtime.getMinutes();
            let totalseatedtime = (hours * 60) + (minutes);
            let totalremainingtime = totalcurrenttime - totalseatedtime;
            user.totalremainingtime = totalremainingtime;
            user.totalremainingseatedtime = totalremainingtime;
            user.remainingtime = (user.diningtime - totalremainingtime) + user.ExtraTime;
          }
        })
        this.SeatedTblLoader = false;
      });
    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
    })
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

  emptyTable(seatsinfo, bookingid) {

    this.showDialog = !this.showDialog;
    this.emptybookingid = bookingid;
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
    return (this.seatedinfo != null && this.seatedinfo.length > 0 && !this.SeatedTblLoader );
  }

  navigateToaddGuest() {
    localStorage.removeItem("acceptoffer rowdata");
    this.router.navigateByUrl('/addGuest');
  }
}





















