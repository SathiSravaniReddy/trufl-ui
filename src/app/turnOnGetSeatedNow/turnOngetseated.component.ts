﻿
import {Component, OnInit, ViewContainerRef} from '@angular/core';
import { LoginService } from '../shared/login.service';
import { Router, RouterLinkActive } from '@angular/router';
import { TrunongetseatedService} from '../turnOnGetSeatedNow/trunOngetseated.component.Service'
import { OtherSettingsService} from '../defaultsettings/othersettings/other-settings.service'
import { ToastOptions } from 'ng2-toastr';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
    selector: 'turnOngetseated',
    templateUrl: './turnOngetseated.Component.html',
  providers: [ToastsManager, ToastOptions]
})
export class turnOngetseated {
    public isSubmit: boolean = false;
    public isGetSeated: boolean = false;
    private trunongetseatedinfo;
    private tabletype;
    private getseatedinfo;
    private defaulttableprice;
    private tabledesc;
    private selectedtabletype;
    private seatedobject: any = {};
    private restarauntid;
    private othersettingdetails;
  private errorcode: any;
  private statusmessage: any;
    constructor(private _trunongetseated: TrunongetseatedService, private loginService: LoginService, private router: Router, private _othersettingsservice: OtherSettingsService,private _toastr: ToastsManager, vRef: ViewContainerRef,) {
      this._toastr.setRootViewContainerRef(vRef);
        this.restarauntid = loginService.getRestaurantId();


    }

    turngetseated() {
        var that = this;
        let restarauntid;
        restarauntid=this.loginService.getRestaurantId();
        this.isGetSeated = !this.isGetSeated;

        this._trunongetseated.getTrungetseated(restarauntid).subscribe((res: any) => {
            this.trunongetseatedinfo = res._Data;
            this.tabletype = res._Data.TableType;
            this.getseatedinfo = res._Data.GetSeatedNow;
            this._othersettingsservice.getOtherSettingsDetails(restarauntid).subscribe((res: any) => {
                this.othersettingdetails = res._Data;
                console.log(this.othersettingdetails[0].DefaultTableNowPrice, " this.othersettingdetailskhlh");
                this.getseatedinfo[0].OfferAmount = this.getseatedinfo[0].TableType * this.othersettingdetails[0].DefaultTableNowPrice;
            })



            console.log(this.trunongetseatedinfo, "this.trunongetseatedinfo");
            console.log(this.tabletype, "this.tabletype");
            console.log(this.getseatedinfo, "this.getseatedinfo");
        },(err) => {if(err === 0){this._toastr.error('network error')}});


    }




    tabletypes(value) {
        this.tabledesc = value.TableTypeDesc;
       // this.selectedtabletype = value.TableType;
        this.getseatedinfo[0].TableType = value.TableType;
        //this.defaulttableprice = this._othersettingsservice.getDefaultgetaTableprice();
        // console.log(this.defaulttableprice, "this.defaulttableprice");
        this.getseatedinfo[0].OfferAmount = this.getseatedinfo[0].TableType * this.othersettingdetails[0].DefaultTableNowPrice;
        console.log(this.getseatedinfo[0].OfferAmount, "this.getseatedinfo.OfferAmount");
        this.seatedobject.RestaurantID = this.restarauntid;
        this.seatedobject.TableType = this.getseatedinfo[0].TableType;
        this.seatedobject.NoOfTables = this.getseatedinfo[0].NumberOfTables;
        this.seatedobject.Amount = this.getseatedinfo[0].OfferAmount;

    }
    updateAvailable(value) {
        this.seatedobject.NoOfTables = value;
    }
    addPrice() {

        this.getseatedinfo[0].OfferAmount= this.getseatedinfo[0].OfferAmount+5
    }
    subPrice() {

        this.getseatedinfo[0].OfferAmount = this.getseatedinfo[0].OfferAmount -5

    }
    submit() {

            this._trunongetseated.postTrungetseatednow(this.seatedobject).subscribe((res: any) => {

              this.statusmessage=res._StatusMessage;
              this.errorcode=res._ErrorCode;
              if (this.errorcode === "0"){
                this.isSubmit = !this.isSubmit;
              }
              else if(this.errorcode === "1"){
                this._toastr.error(this.statusmessage);
              }

            },(err) => {if(err === 0){this._toastr.error('network error')}});
        console.log(this.seatedobject, " this.seatedobject");


    }

}
