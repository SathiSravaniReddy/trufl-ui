import {Component, OnInit, ViewContainerRef} from '@angular/core';
import { Router } from "@angular/router";
import { ToastOptions } from 'ng2-toastr';
import { manageService } from './manage.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {LoginService} from '../shared/login.service';
@Component({
  selector: 'manage',
    templateUrl: './manage.component.html',
  providers: [ToastsManager, ToastOptions]

})
export class ManageComponent implements OnInit {
  private restID = localStorage.getItem('restaurantid');
  private errorcode: any;
  private statusmessage: any;
  public data: any = {};
  constructor(private router: Router, private _manageService: manageService, private _toastr: ToastsManager, vRef: ViewContainerRef,private loginservice:LoginService) {
      this._toastr.setRootViewContainerRef(vRef);

    }

    ngOnInit() {
    }

    /* Service call to set the selected start service time. */
    
  closeService() {
    this._manageService.closeService(this.restID).subscribe(res => {
      this.statusmessage = res._StatusMessage;
      this.errorcode = res._ErrorCode;
      if (this.errorcode === 0) {
        this._toastr.success("All services are closed");
      }
      else if (this.errorcode === 1) {
        this._toastr.error(this.statusmessage);
      }
    }, (err) => { if (err === 0) { this._toastr.error('network error') } })
  }
   
}
