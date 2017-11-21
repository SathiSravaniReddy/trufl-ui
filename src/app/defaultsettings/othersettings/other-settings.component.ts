import { Component,OnInit } from '@angular/core';
import { OtherSettingsService } from '../othersettings/other-settings.service';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/login.service';
@Component({
    selector: 'otherSettings',
    templateUrl: './other-settings.component.html',
    styleUrls: ['./other-settings.component.css'],
   
})
export class OtherSettingsComponent implements OnInit {
    private othersettingsdetails;
    private classie: any = null;
    private otherinfo;
    private othersettingsdefauktprice;
    private othersettinginfo: any = {     
   


    };
    private restarauntid;
    private getothersettingsinfo;
    
    constructor(private _otherservice: OtherSettingsService, private router: Router, private _loginservice: LoginService) {
       
        this.restarauntid = _loginservice.getRestaurantId();
        this.getOtherSelectionsDetails(this.restarauntid);
      
    }
    ngOnInit() {
       
    }
    getOtherSelections() {
        this.getothersettingsinfo[0].RestaurantID = +(this.restarauntid);
        console.log(this.getothersettingsinfo[0], "this.getothersettingsinfo[0]");
        let tempObj = {
            RestaurantID: +(this.getothersettingsinfo[0].RestaurantID),
            DiningTime: +(this.getothersettingsinfo[0].DiningTime),
            Geofence: +(this.getothersettingsinfo[0].Geofence),
            TableNowCapacity: +(this.getothersettingsinfo[0].TableNowCapacity),
            DefaultTableNowPrice: +(this.getothersettingsinfo[0].DefaultTableNowPrice),
            MinimumTableNowPrice: +(this.getothersettingsinfo[0].MinimumTableNowPrice),
        }; 
        
        
        this._otherservice.postOtherSettingsDetails(tempObj).subscribe((res: any) => {
            this.othersettingsdetails = res._Data; 
            console.log(this.othersettingsdetails, "this.othersettingsdetailspostdetails");
           
        });
        
    }
    getOtherSelectionsDetails(restarauntid) {
        var that = this;
        this._otherservice.getOtherSettingsDetails(restarauntid).subscribe((res: any) => {
            this.getothersettingsinfo = res._Data;
            console.log(this.getothersettingsinfo, "this.getothersettingsinfo");
            this.getothersettingsinfo.map(function (item) {
                let otherinfo = item;

                that._otherservice.setDiningExperience(otherinfo.DiningTime);
               that._otherservice.setDefaultgetaTableprice(otherinfo.DefaultTableNowPrice)
                
            })

        });
        this.othersettingsdefauktprice = this._otherservice.getDefaultgetaTableprice();
        console.log(this.othersettingsdefauktprice, "this.othersettingsdefauktprice");
    }

    
    cancel() {
        this.router.navigateByUrl('/defaultSettings');
    }
    savenext() {
        this.getOtherSelections();
       
        this.router.navigateByUrl('/defaultSettings');
    }

   
}
