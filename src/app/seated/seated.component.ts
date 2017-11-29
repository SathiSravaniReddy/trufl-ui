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
        })
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

    emptyTable(bookingid) {
        this.seatedService.postUpdateEmptyBookingStatus(bookingid).subscribe((res: any) => {

        })
        this.getSeatedDetails(this.restarauntid);
    }
    checkDrop(seatinfo, bookingid) {
        this.seatedService.postUpdateCheckReceived(bookingid).subscribe((res: any) => {

        })
        if (seatinfo.BookingID == bookingid) {
            seatinfo.CheckReceived = true;

        }
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
}





















