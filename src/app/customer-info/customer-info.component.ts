import {OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';
import { ToastOptions } from 'ng2-toastr';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css'],
  providers: [ToastsManager, ToastOptions]
})
export class CustomerInfoComponent implements OnInit {

    public newCustDiv: boolean;
    public addOfferAmnt: boolean;

    constructor(private router: Router, private _toastr: ToastsManager, vRef: ViewContainerRef, public _loginservice: LoginService) {

        this._toastr.setRootViewContainerRef(vRef);

        this.newCustDiv = true;
        this.addOfferAmnt = true;
    }

  ngOnInit() {
  }
  onRadioClicked(event) {
      if (event.target.value === 'newCust') {
          this.newCustDiv = true;
      }
      else {
          this.newCustDiv = false;
      }
  }

  onRadioCustAddClicked(event) {
      if (event.target.value === 'addWaitlist') {
          this.addOfferAmnt = true;
      }
      else if (event.target.value ==='makeOffer') {
          this.addOfferAmnt = false;
      }
  }
}
