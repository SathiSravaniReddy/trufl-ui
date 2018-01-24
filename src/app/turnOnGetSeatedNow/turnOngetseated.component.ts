import {Component, ViewContainerRef} from '@angular/core';
import {LoginService} from '../shared/login.service';
import {Router} from '@angular/router';
import {TrunongetseatedService} from '../turnOnGetSeatedNow/trunOngetseated.component.Service'
import {OtherSettingsService} from '../defaultsettings/othersettings/other-settings.service'
import {ToastOptions} from 'ng2-toastr';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
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
  private tabledesc;
  private seatedCopy;
  private seatedobject: any = {};
  private restarauntid;
  private othersettingdetails;
  private errorcode: any;
  private statusmessage: any;
  private availableindex;
  private showerror = false;
  private tabletypeofseated;
  private comparedtabletype;
private isenable;
  constructor(private _trunongetseated: TrunongetseatedService, private loginService: LoginService, private router: Router, private _othersettingsservice: OtherSettingsService, private _toastr: ToastsManager, vRef: ViewContainerRef,) {
    this._toastr.setRootViewContainerRef(vRef);
    this.restarauntid = loginService.getRestaurantId();
    var that = this;
    this._trunongetseated.getTrungetseated(this.restarauntid).subscribe((res: any) => {
      this.trunongetseatedinfo = res._Data;
      console.log(this.trunongetseatedinfo,"this.trunongetseatedinfo");
      this.tabletype = res._Data.TableType;
      this.getseatedinfo = res._Data.GetSeatedNow;
      this.isenable=this.getseatedinfo[0].IsEnabled;
      console.log( this.getseatedinfo[0].IsEnabled,"dzfsdfsdfdsd");
      this.tabletypeofseated = this.getseatedinfo[0].TableType;
      this.comparedtabletype = this.tabletype.filter(function (item) {
        return item.TableType == that.tabletypeofseated;
      });
      this.availableindex = this.tabletype.findIndex(x => x.TableType == that.tabletypeofseated);
      this.seatedobject.TableType = this.getseatedinfo[0].TableType;
      this.seatedobject.NumberOfTables = this.getseatedinfo[0].NumberOfTables;
      this.seatedobject.Amount = "$"+this.getseatedinfo[0].OfferAmount;
      this.seatedCopy = JSON.parse(JSON.stringify(this.tabletype));
      this.seatedCopy[this.availableindex].Available = this.comparedtabletype[0].Available;
      this.comparedtabletype = this.getseatedinfo.map(function (item) {
        item.OfferAmount = "$" + item.OfferAmount;
      });

      this._othersettingsservice.getOtherSettingsDetails(this.restarauntid).subscribe((res: any) => {
        this.othersettingdetails = res._Data;

      })


    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
    });
  }
  turngetseated() {
    var that = this;
    this.isenable = false;
    let restarauntid;
    restarauntid = this.loginService.getRestaurantId();
    this.isGetSeated = !this.isGetSeated;




  }

  tabletypes(value, index) {
    this.availableindex = index;
    this.tabledesc = value.TableTypeDesc;
    this.getseatedinfo[0].NumberOfTables = value.Available;
    this.getseatedinfo[0].TableType = value.TableType;
    this.getseatedinfo[0].OfferAmount = "$" + this.getseatedinfo[0].TableType * this.othersettingdetails[0].DefaultTableNowPrice;
    this.seatedobject.RestaurantID = this.restarauntid;
    this.seatedobject.TableType = this.getseatedinfo[0].TableType;
    this.seatedobject.NumberOfTables = this.getseatedinfo[0].NumberOfTables;
    this.seatedobject.Amount = this.getseatedinfo[0].OfferAmount;
  }

  updateAvailable(value) {
    if (value <= this.seatedCopy[this.availableindex].Available) {
      this.showerror = false;
      this.seatedobject.NoOfTables = value;
    }
    else {
      this.showerror = true;
    }
  }

  updatePrice(value) {
    this.getseatedinfo[0].OfferAmount = value;
    this.seatedobject.Amount = value;
  }

  addPrice() {
    this.getseatedinfo[0].OfferAmount = +(this.getseatedinfo[0].OfferAmount.toString().replace(new RegExp('\\$', 'g'), ''));
    this.getseatedinfo[0].OfferAmount = this.getseatedinfo[0].OfferAmount + 5;
    this.getseatedinfo[0].OfferAmount = '$' + this.getseatedinfo[0].OfferAmount;
  }

  subPrice() {

    this.getseatedinfo[0].OfferAmount = +(this.getseatedinfo[0].OfferAmount.toString().replace(new RegExp('\\$', 'g'), ''));
    if (this.getseatedinfo[0].OfferAmount > 0) {
      this.getseatedinfo[0].OfferAmount = this.getseatedinfo[0].OfferAmount - 5;

    }
    this.getseatedinfo[0].OfferAmount = '$' + this.getseatedinfo[0].OfferAmount;
  }

  submit() {

    var obj = {
      'RestaurantID': this.restarauntid,
      'TableType': this.getseatedinfo[0].TableType,
      'NoOfTables': this.getseatedinfo[0].NumberOfTables,
      'Amount': +(this.getseatedinfo[0].OfferAmount.toString().replace(new RegExp('\\$', 'g'), '')),
      'IsEnabled': true
    };
    this._trunongetseated.postTrungetseatednow(obj).subscribe((res: any) => {
      this.statusmessage = res._StatusMessage;
      this.errorcode = res._ErrorCode;

      if (this.errorcode === "0") {
        this.isSubmit = !this.isSubmit;
        this.seatedobject.RestaurantID = this.restarauntid;
        this.seatedobject.TableType = this.getseatedinfo[0].TableType;
        this.seatedobject.NumberOfTables = this.getseatedinfo[0].NumberOfTables;
        this.seatedobject.Amount = this.getseatedinfo[0].OfferAmount;
      }
      else if (this.errorcode === "1") {
        this._toastr.error(this.statusmessage);
      }

    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
    });

  }
  cancel(){

    var obj = {
      'RestaurantID': this.restarauntid,
      'TableType': this.getseatedinfo[0].TableType,
      'NoOfTables': this.getseatedinfo[0].NumberOfTables,
      'Amount': +(this.getseatedinfo[0].OfferAmount.toString().replace(new RegExp('\\$', 'g'), '')),
      'IsEnabled': false
    };
    this._trunongetseated.postTrungetseatednow(obj).subscribe((res: any) => {
      this.statusmessage = res._StatusMessage;
      this.errorcode = res._ErrorCode;

      if (this.errorcode === "0") {
        this.isSubmit = false;
        this.isenable =false;
        this.isGetSeated = false;


      }
      else if (this.errorcode === "1") {
        this._toastr.error(this.statusmessage);
      }

    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
    });

  }
}
