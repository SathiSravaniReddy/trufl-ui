import { Component, Input, Output, EventEmitter, SimpleChange, OnChanges, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from '../shared/Shared.Service';
import { EditGuestService } from './editguest.service';
import { Router } from '@angular/router';
import { ToastOptions } from 'ng2-toastr';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
    selector: 'app_edit',
    templateUrl: './editguest.component.html',
    styleUrls: ['./editguest.style.css'],
    providers: [ToastsManager, ToastOptions]
})
export class EditGuestComponent {
    public data: any = {};
    public message: any;
    public number: any;
    public restaurentId: any;
    public UserId: any;
    public UserType: any;
    public editguestdetails: any;
    public error_message: any;
    public show_message: boolean = false;
    public PartySize: any;
    public restaurent_Id: any;
    public booking_id: any;
    public trufl_id: any;
    public editguest_details: any;
    public edit_guest: any;
    public error_msg: any;
    public email_ids: any;
    public button_disabled: boolean;
    public current_email: any;

    constructor(private sharedService: SharedService, public editGuestService: EditGuestService, private router: Router, private _toastr: ToastsManager, vRef: ViewContainerRef) {
        this._toastr.setRootViewContainerRef(vRef);

    }

    ngOnInit() {
        this.editguestdetails = localStorage.getItem('editguestDetails');
        this.editguest_details = JSON.parse(this.editguestdetails);
        console.log(this.editguest_details);

        if (this.editguest_details) {
            this.data = this.editguest_details;
        }
        if (this.data) {
            this.PartySize = this.data.PartySize;
            this.restaurent_Id = this.data.RestaurantID;
            this.booking_id = this.data.BookingID;
            this.trufl_id = this.data.TruflUserID;

        }

        this.sharedService.uniqueid = "editguest";
        localStorage.setItem('acceptoffer rowdata', JSON.stringify(this.data));

        if (this.sharedService.email_error) {
            this.error_message = this.sharedService.email_error;
            this.show_message = true;
        }



       
        this.editGuestService.emailverify().subscribe((res: any) => {

            console.log(res);
                this.email_ids = res._Data;
            
            }, (err) => {
            if (err === 0) { this._toastr.error('network error') }
        })

        










    }

    onSubmit(guestdetails: any, form: NgForm) {

        console.log(guestdetails);
        this.error_msg = "an error occured";
        localStorage.setItem('guest_modified', JSON.stringify(guestdetails));
        var obj = {
            "RestaurantID": this.restaurent_Id,
            "TruflUserID": this.trufl_id,
            "FullName": guestdetails['UserName'],
            "Email": guestdetails['Email'],
            "ContactNumber": guestdetails['PhoneNumber'],
            "Relationship": guestdetails['Relationship'],
            "ThisVisit": guestdetails['ThisVisit'],
            "FoodAndDrink": guestdetails['FoodAndDrinkPreferences'],
            "SeatingPreferences": guestdetails['SeatingPreferences'],
            "Description": guestdetails['Description'],
            "BookingID": this.booking_id,
            "TableNumbers": ''

        }

        this.data = guestdetails;
        if (guestdetails.Email != '')
        {
          var keepGoing = true;

          this.email_ids.map((item, index) => {
              if (keepGoing) {
                  if (guestdetails['Email'] == item.Email && this.editguest_details.TruflUserID != item.TruflUserID) {
                      this.show_message = true;
                      this.error_message = "Email Id Already Exists";
                      keepGoing=false
                  }
              }

          })
              
          
          if (this.number == 1 && keepGoing==true) {
                      this.editGuestService.editGuestDetails(obj, this.number).subscribe((res: any) => {
                          if (res._ErrorCode == '1') {
                              window.setTimeout(() => {
                                  this._toastr.error(this.error_msg);

                              }, 500);
                          }
                          else if (res._ErrorCode == '0') {
                              this.sharedService.email_error = '';
                              this.router.navigate(['waitlist']);
                          }

                      }, (err) => { if (err === 0) { this._toastr.error('network error') } })
                   }

          if (this.number == 2 && keepGoing == true) {
                      this.sharedService.uniqueid = "edit_guest";
                      this.edit_guest = localStorage.getItem('guest_modified');
                      this.data = JSON.parse(this.edit_guest);
                      this.data.PartySize = this.PartySize;
                      this.data.TruflUserID = this.trufl_id;
                      this.data.BookingID = this.booking_id;
                      this.data.RestaurantID = this.restaurent_Id;
                      localStorage.setItem('acceptoffer rowdata', JSON.stringify(this.data));
                      this.router.navigate(['seataGuest'])
                      }


             
           }



          //  })
        
            else{
                if (this.number == 1) {
                    this.editGuestService.editGuestDetails(obj, this.number).subscribe((res: any) => {
                        if (res._ErrorCode == '1') {
                            window.setTimeout(() => {
                                this._toastr.error(this.error_msg);

                            }, 500);
                        }
                        else if (res._ErrorCode == '0') {
                            this.sharedService.email_error = '';
                            this.router.navigate(['waitlist']);
                        }

                    }, (err) => { if (err === 0) { this._toastr.error('network error') } })
                }
                else if (this.number == 2) {
                    this.sharedService.uniqueid = "edit_guest";
                    this.edit_guest = localStorage.getItem('guest_modified');
                    this.data = JSON.parse(this.edit_guest);
                    this.data.PartySize = this.PartySize;
                    this.data.TruflUserID = this.trufl_id;
                    this.data.BookingID = this.booking_id;
                    this.data.RestaurantID = this.restaurent_Id;
                    localStorage.setItem('acceptoffer rowdata', JSON.stringify(this.data));
                    this.router.navigate(['seataGuest'])
                }

          }
       
                      
               

      //  form.resetForm();
    }

    get(number: any) {
        this.number = number;
    }
    EditCancel() {
        this.router.navigate(['waitlist']);
    }
    change(data: any) {
        this.show_message = false;
    }

    //emailverify(email: any) {

    //    this.current_email = email;   
    //    if (this.current_email != '') {
    //        this.email_ids.map((item) => {
    //            if (this.current_email == item.Email) {                   
    //                this.show_message = true;
    //                this.error_message = "Email Id Already Exists";                   
    //                return;
    //            }


              



               

    //        })
    //    }

    //}

}
