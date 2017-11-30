import {Component, OnInit, ViewContainerRef} from '@angular/core';
import { Router } from "@angular/router";
import { startService } from "./start-service.service";
import { ToastOptions } from 'ng2-toastr';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {LoginService} from '../shared/login.service';
@Component({
    selector: 'startService',
    templateUrl: './start-service.component.html',
  providers: [ToastsManager, ToastOptions]

})
export class StartServiceComponent implements OnInit {
  public time:any;
  private restID = localStorage.getItem('restaurantid');
  private errorcode: any;
  private statusmessage: any;
  private errormessage;
  public startserviceLoader: boolean = false;
    constructor(private router: Router, private _startService: startService, private _toastr: ToastsManager, vRef: ViewContainerRef,private loginservice:LoginService) {
      this._toastr.setRootViewContainerRef(vRef);
      this.errormessage=this.loginservice.getErrorMessage();
      alert ( this.errormessage);

    }
    ngOnInit() {
        this.startserviceLoader = true;
            this._startService.GetRestaurantOpenTime(this.restID).subscribe(res => {
              this.statusmessage=res._StatusMessage;
              this.errorcode=res._ErrorCode;
              if(this.errorcode === "0") {
                let resTime = res._Data.RestaurantWaitListOpen[0].OpenTime;
                let val = resTime.split(':');
                let val2 = val[1];
                let minutes = val2.slice(0, 2);
                if (val2.indexOf("A") >= 0) {
                  if (val[0] == '0') {
                    let valtemp = '00';
                    this.time = (valtemp) + ':' + minutes;
                  }
                  else {
                    this.time = (val[0]) + ':' + minutes;
                  }
                }
                else {
                  if (+val[0] == 12) {
                    this.time = (val[0]) + ':' + minutes;
                  }
                  else {
                    this.time = (+val[0] + 12) + ':' + minutes;
                  }
                }
              }
              else if(this.errorcode === "1"){
                this._toastr.error(this.statusmessage);
              }

        },(err) => {if(err === 0){this._toastr.error('network error')}})

    }
    public next() {

        let val = this.time.split(':');
        if (+val[0] <12) {
            this.time = val[0] + ':' + val[1] + 'AM';
        }
        else if (+val[0] == 12) {
            this.time = val[0] + ':' + val[1] + 'PM';
        }
        else {
            this.time = (+val[0] - 12) + ':' + val[1] + 'PM';
        }
       this._startService.SaveRestaurantOpenTime(this.restID, this.time).subscribe(res => {
         this.statusmessage=res._StatusMessage;
         this.errorcode=res._ErrorCode;
         if(this.errorcode === "0") {
           this.router.navigateByUrl('/selectselections');
         }
         else if(this.errorcode === "1"){
           this._toastr.error(this.statusmessage);
         }
         else{

           this._toastr.error(this.errormessage);
         }
            console.log(res,"timetime");
        },(err) => {if(err === 0){this._toastr.error('network error')}})
    }
}
