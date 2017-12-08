
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
    private seatedCopy;
    private selectedtabletype;
    private seatedobject: any = {};
    private restarauntid;
    private othersettingdetails;
  private errorcode: any;
  private statusmessage: any;
  private available;
  private showerror = false;
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

            console.log(this.tabletype,"Available");
            this.getseatedinfo = res._Data.GetSeatedNow;
          this.seatedCopy = JSON.parse(JSON.stringify(this.getseatedinfo));
            this.getseatedinfo.map(function (item) {
              item.OfferAmount = "$" + item.OfferAmount;
            })
            this._othersettingsservice.getOtherSettingsDetails(restarauntid).subscribe((res: any) => {
                this.othersettingdetails = res._Data;

            })


           },(err) => {if(err === 0){this._toastr.error('network error')}});


    }
    tabletypes(value) {
        this.tabledesc = value.TableTypeDesc;
      this.getseatedinfo[0].NumberOfTables = value.Available;
        this.getseatedinfo[0].TableType = value.TableType;
        this.getseatedinfo[0].OfferAmount = "$"+this.getseatedinfo[0].TableType * this.othersettingdetails[0].DefaultTableNowPrice;

        this.seatedobject.RestaurantID = this.restarauntid;
        this.seatedobject.TableType = this.getseatedinfo[0].TableType;
        this.seatedobject.NumberOfTables = this.getseatedinfo[0].NumberOfTables;
        console.log(this.seatedobject.NumberOfTables,"this.seatedobject.NumberOfTables");
        this.seatedobject.Amount = this.getseatedinfo[0].OfferAmount;
    }
    updateAvailable(value) {

      if (value <= this.seatedCopy[0].NumberOfTables) {
        this.showerror =false;
        this.seatedobject.NoOfTables = value;
      }
      else{
       this.showerror =true;
      }
    }
  updatePrice(value){
    this.getseatedinfo[0].OfferAmount =value;
    this.seatedobject.Amount = value;
  }
    addPrice() {
        this.getseatedinfo[0].OfferAmount = +(this.getseatedinfo[0].OfferAmount.toString().replace(new RegExp('\\$', 'g'), ''));
        this.getseatedinfo[0].OfferAmount = this.getseatedinfo[0].OfferAmount + 5;
        this.getseatedinfo[0].OfferAmount = '$' + this.getseatedinfo[0].OfferAmount;
    }
    subPrice() {

        this.getseatedinfo[0].OfferAmount = +(this.getseatedinfo[0].OfferAmount.toString().replace(new RegExp('\\$', 'g'), ''));
        this.getseatedinfo[0].OfferAmount = this.getseatedinfo[0].OfferAmount - 5;
        this.getseatedinfo[0].OfferAmount = '$' + this.getseatedinfo[0].OfferAmount;
    }
    submit() {

          var obj = {
            'RestaurantID': this.restarauntid,
            'TableType': this.getseatedinfo[0].TableType,
            'NoOfTables': this.getseatedinfo[0].NumberOfTables,
            'Amount': +(this.getseatedinfo[0].OfferAmount.toString().replace(new RegExp('\\$', 'g'), ''))
          };
            this._trunongetseated.postTrungetseatednow(obj).subscribe((res: any) => {
              this.statusmessage=res._StatusMessage;
              this.errorcode=res._ErrorCode;

              if (this.errorcode === "0"){
                this.isSubmit = !this.isSubmit;
                this.seatedobject.RestaurantID = this.restarauntid;
                this.seatedobject.TableType = this.getseatedinfo[0].TableType;
                this.seatedobject.NumberOfTables = this.getseatedinfo[0].NumberOfTables;
                console.log(this.seatedobject.NumberOfTables,"this.seatedobject.NumberOfTables");
                this.seatedobject.Amount = this.getseatedinfo[0].OfferAmount;
              }
              else if(this.errorcode === "1"){
                this._toastr.error(this.statusmessage);
              }

            },(err) => {if(err === 0){this._toastr.error('network error')}});

    }
}
