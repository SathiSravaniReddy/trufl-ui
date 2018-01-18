import {OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';
import { ToastOptions } from 'ng2-toastr';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Component, ViewContainerRef } from '@angular/core';
import { CustomeInfoService } from './customer-info.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css'],
  providers: [ToastsManager, ToastOptions]
})
export class CustomerInfoComponent implements OnInit {

    public newCustDiv: boolean;
    public addOfferAmnt: boolean;
    public customer_details: any;
    public restID = localStorage.getItem('restaurantid');
    public data: any = {};
    public value: any;
    //public trulfluserid: any;
    public restaurentid: any;
   // public partysize: any;
   // public quoted: any;
   // public OfferAmount: any;

    constructor(private router: Router, private _toastr: ToastsManager, vRef: ViewContainerRef, public _loginservice: LoginService, public customeInfoService: CustomeInfoService) {

        this._toastr.setRootViewContainerRef(vRef);

        this.newCustDiv = true;
        this.addOfferAmnt = true;
    }

    ngOnInit() {
        

        this.customeInfoService.getcustomerinfo(this.restID).subscribe((res: any) => {
            console.log(res._Data.Table);
            this.customer_details = res._Data.Table;
            
        }, (err) => {
            if (err === 0) {
                this._toastr.error('network error')
            }
        })


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

  update(value: any) {   
      if (this.addOfferAmnt == false) {
          this.data.addOfferAmnt = parseInt(value) * 50;
          if (isNaN(this.data.addOfferAmnt)) {
              this.data.addOfferAmnt = '';
          }

      }
    

  }

  
  onSubmit(customer_info: any, form: NgForm) {
    
      if (customer_info.BookingID === null || customer_info.BookingID === undefined) {
          customer_info.BookingID =0
      }
      if (customer_info.OfferAmount === null || customer_info.OfferAmount === undefined) {
          customer_info.OfferAmount = 0;
      }
     
      if (customer_info.TruflUserCardDataID === null || customer_info.TruflUserCardDataID === undefined) {
          customer_info.TruflUserCardDataID =0
      }

      if (customer_info.TruflTCID === null || customer_info.TruflTCID === undefined) {
          customer_info.TruflTCID =0
      }

      
      if (customer_info.Quoted === null || customer_info.Quoted === undefined) {
          customer_info.Quoted = ''
      }
     
      if (customer_info.LoggedInUser === null || customer_info.LoggedInUser === undefined) {
          customer_info.LoggedInUser=0
      }


    
      if (customer_info.TruflUserID) {
          customer_info.TruflUserID = JSON.parse(customer_info.TruflUserID)
      }

      if (this.restID) {
          this.restaurentid = JSON.parse(this.restID)
      }


      if (customer_info.OfferAmount) {
          customer_info.OfferAmount = JSON.parse(customer_info.OfferAmount)
      }
      if (customer_info.PartySize) {
          customer_info.PartySize = JSON.parse(customer_info.PartySize)
      }

      if (customer_info.Quoted) {
          customer_info.Quoted = JSON.parse(customer_info.Quoted)
      }

      if (customer_info.PartySize === null || customer_info.PartySize === undefined) {
          customer_info.PartySize  =""
      }

      if (customer_info.Quoted === null || customer_info.Quoted === undefined) {
          customer_info.Quoted =""
      }

      let obj = {
          BookingID:customer_info.BookingID,
          TruflUserID: customer_info.TruflUserID ,
          RestaurantID: this.restaurentid,
          PartySize: customer_info.PartySize,
          OfferType: 4,
          OfferAmount: customer_info.OfferAmount,
          Quoted: customer_info.Quoted,    
          BookingStatus: 2,         
          TruflUserCardDataID: customer_info.TruflUserCardDataID,
          TruflTCID: customer_info.TruflTCID,       
          LoggedInUser: customer_info.LoggedInUser,         
      };    
      this.customeInfoService.addnewcustomer(obj).subscribe((res: any) => {
          console.log(res);
      }, (err) => {
          if (err === 0) {
              this._toastr.error('network error')
          }
      })

    }
 
}
