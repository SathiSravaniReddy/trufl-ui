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
    public restaurentid: any;
    public LoggedInUser = localStorage.getItem('LoggedInUser');
    public OfferType: any;
    public amount: any
    public TranType: any = "WAITLIST";

    /* edit customer */
    public edit_customer: any;
    public edit_GetTableNow: any;
    public BookingID: number = 0;
    public edit_object: any = [];
    public PartySize: any;
    public OfferAmount: any;
    public Quoted: any;
    public edit_offerType: any
    public TableType: any;
    public edit_TableNowAmount: any;
    public final_TableNowAmount: any;


      /* edit customer end*/

    constructor(private router: Router, private _toastr: ToastsManager, vRef: ViewContainerRef, public _loginservice: LoginService, public customeInfoService: CustomeInfoService) {

        this._toastr.setRootViewContainerRef(vRef);

        this.newCustDiv = true;
        this.addOfferAmnt = true;
    }

    ngOnInit() {
        

        this.customeInfoService.getcustomerinfo(this.restID).subscribe((res: any) => {
            console.log(res._Data);
            this.customer_details = res._Data.Table;
            this.amount = res._Data.Table1[0].DefaultTableNowPrice;
            console.log(this.amount);
            
        }, (err) => {
            if (err === 0) {
                this._toastr.error('network error')
            }
            })
  }
    onRadioClicked(event, form: NgForm) {
        form.resetForm();
        this.edit_offerType = 0;
       
      if (event.target.value === 'newCust') {
          this.newCustDiv = true;
          this.TranType = "WAITLIST";
          this.BookingID = 0;
      }
      else {
          
          this.newCustDiv = false;
        //  this.TranType = "MAKEANOFFER";
          this.customeInfoService.geteditcustomerinfo(this.restID).subscribe((res: any) => {
              console.log(res._Data.Table);
              this.edit_customer = res._Data.Table;
              console.log(this.edit_customer);
              this.edit_GetTableNow = res._Data.Table1;
              console.log(this.edit_GetTableNow);
              

          }, (err) => {
              if (err === 0) {
                  this._toastr.error('network error')
              }
          })


      }
  }

  onRadioCustAddClicked(event) {
      if (event.target.value === 'addWaitlist') {
          this.addOfferAmnt = true;
          this.TranType = "WAITLIST";
      }
      else if (event.target.value ==='makeOffer') {
          this.addOfferAmnt = false;
          this.TranType = "MAKEANOFFER";
      }
      else if (event.target.value === 'getTbl') {
          this.TranType = "GETTABLENOW";
      }

  }

  update(value: any) {   
      if (this.addOfferAmnt == false) {
          this.data.OfferAmount = parseInt(value) * this.amount;
          if (isNaN(this.data.OfferAmount)) {
              this.data.OfferAmount = '';
          }

      }
    

  }

  onChange(event: any) {
      console.log(event);
      let index = this.edit_customer.findIndex(function (item) {
          return item.BookingID === parseInt(event);
      })      
      console.log(this.edit_customer[index]);
      this.PartySize = this.edit_customer[index].PartySize;      
      this.OfferAmount = this.edit_customer[index].OfferAmount;
      this.Quoted = this.edit_customer[index].Quoted;
      this.edit_offerType = this.edit_customer[index].OfferType;

      console.log(this.edit_offerType);


      this.BookingID = this.edit_customer[index].BookingID;

      this.TableType = this.edit_GetTableNow[0].TableType;
      this.edit_TableNowAmount = this.edit_GetTableNow[0].OfferAmount;
     

   

      var x = Math.ceil(this.PartySize / this.TableType);
      this.final_TableNowAmount = x * this.edit_TableNowAmount;
     
  }


  
  onSubmit(customer_info: any, form: NgForm) {

      console.log(customer_info);
      if (this.TranType == "MAKEANOFFER") {
          this.OfferType = 3
      }
      else if (this.TranType == "WAITLIST") {
          this.OfferType = 4
      }
      else if (this.TranType == "GETTABLENOW") {
          this.OfferType = 5;
          customer_info.OfferAmount = customer_info.final_TableNowAmount;
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
          customer_info.Quoted = 0
      }

      if (customer_info.TruflUserID === null || customer_info.TruflUserID === undefined) {
          customer_info.TruflUserID = 0
      }
    
      if (customer_info.TruflUserID) {
          customer_info.TruflUserID = JSON.parse(customer_info.TruflUserID)
      }

      if (this.restID) {
          this.restaurentid = JSON.parse(this.restID);
      }
      if (this.LoggedInUser) {
          this.LoggedInUser = JSON.parse(this.LoggedInUser);
      }
      
      if (customer_info.PartySize) {
          customer_info.PartySize = JSON.parse(customer_info.PartySize)
      }

      if (customer_info.Quoted) {
          customer_info.Quoted = JSON.parse(customer_info.Quoted)
      }
      if (customer_info.OfferAmount) {
          customer_info.OfferAmount = JSON.parse(customer_info.OfferAmount)
      }


     


      if (customer_info.PartySize === null || customer_info.PartySize === undefined) {
          customer_info.PartySize  =""
      }

      if (customer_info.Quoted === null || customer_info.Quoted === undefined) {
          customer_info.Quoted =""
      }     



      let obj = {
          BookingID: this.BookingID,
          TruflUserID: customer_info.TruflUserID,
          RestaurantID: this.restaurentid,
          PartySize: customer_info.PartySize,
          OfferType: this.OfferType,
          OfferAmount: customer_info.OfferAmount,
          Quoted: customer_info.Quoted,    
          BookingStatus: 2,         
          TruflUserCardDataID: customer_info.TruflUserCardDataID,
          TruflTCID: customer_info.TruflTCID,       
          LoggedInUser: this.LoggedInUser,         
      };
      console.log(obj);
      this.customeInfoService.addnewcustomer(obj).subscribe((res: any) => {
          console.log(res);
      }, (err) => {
          if (err === 0) {
              this._toastr.error('network error')
          }
      })

    }
 
}
