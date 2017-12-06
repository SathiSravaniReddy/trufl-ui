import { Component, ViewContainerRef } from '@angular/core';
import { OnInit } from '@angular/core';
import { SeatedService } from './seated.service';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';
import { ToastOptions } from 'ng2-toastr';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { OtherSettingsService } from '../defaultsettings/othersettings/other-settings.service'
@Component({
    selector: 'seated',
    templateUrl: './seated.component.html',
    styleUrls: ['./seated.component.css'],
    providers: [ToastsManager, ToastOptions]
})
export class SeatedComponent implements OnInit {

    public seatedinfo: any = [];
    public isenabled = false;
    private seatedinformation: any;
    private restaurantName: any;
    private diningtime: any;
    private restarauntid;
    public items: any = [];
    private isactive = false;
    private selectedRow;
    private checkreceived;
    public SeatedTblLoader: boolean = false;
    load: boolean = false;
    private otherdiningtime;
    private othersettingsdetails;
    private arr = ['Seated', 'AppServed', 'MenuServed', 'DesertServed', 'CheckReceived', 'Boozing', 'Empty'];
  private errorcode: any;
  private statusmessage: any;
  showDialog = false;
  private emptybookingid;
  private emptytable=false;
  public commonmessage;
  private isempty;
private dummyseatsinfo;
    constructor(private seatedService: SeatedService, private loginService: LoginService, private _othersettings: OtherSettingsService,private router: Router, private _toastr: ToastsManager, vRef: ViewContainerRef) {

        this._toastr.setRootViewContainerRef(vRef);
        this.restaurantName = this.loginService.getRestaurantName();
        this.restarauntid = this.loginService.getRestaurantId();
        //called first time before the ngOnInit()

    }

    ngOnInit() {
        this.getSeatedDetails(this.restarauntid );
    }
    getSeatedDetails(restarauntid) {

        let that = this;
        this.SeatedTblLoader = true;
        this._othersettings.getOtherSettingsDetails(restarauntid).subscribe((res: any) => {
            this.othersettingsdetails = res._Data;
            console.log(this.othersettingsdetails[0].DiningTime, " this.othersettingdetailskhlh");
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
        },(err) => {if(err === 0){this._toastr.error('network error')}})
    }

    public toggles = [
        { value: 0 },
        { value: 1 }
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

    emptyTable(seatsinfo,bookingid) {

      this.showDialog = !this.showDialog;
      this.emptybookingid=bookingid;
      this.isempty="empty";
      this.commonmessage="Are you sure this table is empty, and you want to remove  " +seatsinfo.TUserName+ " from this list? This cannot be undone"  ;
    }
    Ok(){
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
    Cancel(){
this.showDialog = !this.showDialog;
    }
    checkDrop(seatinfo, bookingid) {
      this.isempty='checkdrop';
      seatinfo.CheckReceived=true;
      this.emptybookingid=bookingid;
      this.dummyseatsinfo=seatinfo;
      this.seatedService.postUpdateCheckReceived(this.emptybookingid).subscribe((res: any) => {
        if (this.dummyseatsinfo.BookingID ==  this.emptybookingid) {

          this.dummyseatsinfo.CheckReceived = !this.dummyseatsinfo.CheckReceived;

        }
        this.getSeatedDetails(this.restarauntid);
      },(err) => {if(err === 0){this._toastr.error('network error')}})

    }

    slow(seatedinfo, bookingid) {
        let slowtime;
        if (seatedinfo.slowcount >=1) {
            seatedinfo.slowcount = 0;
        }
        seatedinfo.slowcount++;
        seatedinfo.remainingtime += seatedinfo.slowcount * 5;
        slowtime =  seatedinfo.slowcount * 5;
        console.log(slowtime, "slowtimejkllpjjop");
        seatedinfo.jumpcount = 0;
        this.seatedService.postUpdateExtraTime(bookingid,slowtime).subscribe((res: any) => {

        })
    }
    jump(seatedinfo, bookingid) {
        let jumptime;
        if (seatedinfo.jumpcount >= 1) {
            seatedinfo.jumpcount = 0;
        }
        seatedinfo.jumpcount++;
        seatedinfo.remainingtime -= seatedinfo.jumpcount * 5;
        jumptime = "-" + seatedinfo.jumpcount * 5;
        console.log(jumptime, "jumptimefhdgg");
        seatedinfo.slowcount = 0;
        this.seatedService.postUpdateExtraTime(bookingid,jumptime).subscribe((res: any) => {

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
        return (this.seatedinfo != null && this.seatedinfo.length > 0 && this.SeatedTblLoader == false);
    }
    navigateToaddGuest() {
        localStorage.removeItem("acceptoffer rowdata");
        this.router.navigateByUrl('/addGuest');
    }
}





















