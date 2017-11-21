import { Component, Input, Output, EventEmitter, SimpleChange, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from '../shared/Shared.Service';
import { EditGuestService } from './editguest.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app_edit',
    templateUrl: './editguest.component.html',
    styleUrls: ['./editguest.style.css']
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

    constructor(private sharedService: SharedService, public editGuestService: EditGuestService, private router: Router) {              


    }

    ngOnInit() {

        this.editguestdetails = localStorage.getItem('editguestDetails');
        this.editguest_details = JSON.parse(this.editguestdetails)

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


    }
    


    onSubmit(guestdetails: any, form: NgForm) {
    
        localStorage.setItem('editguestDetails', JSON.stringify(guestdetails));       
        var obj = {
            "RestaurantID": this.restaurent_Id,
            "TruflUserID": this.trufl_id,
            "FullName": guestdetails['UserName'],
            "Email": guestdetails['Email'],
            "ContactNumber": guestdetails['PhoneNumber'],
            "Relationship": guestdetails['Relationship'],
            "ThisVisit": guestdetails['ThisVisit'],
            "FoodAndDrink": guestdetails ['FoodAndDrinkPreferences'],
            "SeatingPreferences": guestdetails['SeatingPreferences'],
            "Description": guestdetails['Description'],
            "BookingID": this.booking_id,
            "TableNumbers": ''

        }
        console.log(obj);

        if (this.number == 1) {

            this.editGuestService.editGuestDetails(obj, this.number).subscribe((res: any) => {

                console.log(res);
                if (res._ErrorCode == '50000') {
                    //  this.router.navigate(['editguest']);
                    this.show_message = true;
                    this.error_message = "Email Id Already Exists";
                  //  this.data.PartySize = this.PartySize;
                    this.edit_guest = localStorage.getItem('editguestDetails');
                    this.data = JSON.parse(this.edit_guest);
                    console.log(this.data);
                    localStorage.setItem('acceptoffer rowdata', JSON.stringify(this.data));                 

                }
                else {            


                    this.sharedService.email_error = '';
                    this.router.navigate(['waitlist']);
                }



            })


        }
        else if (this.number == 2) {
            this.sharedService.uniqueid = "edit_guest";


            this.edit_guest = localStorage.getItem('editguestDetails');


           // this.data = this.sharedService.editguestDetails;
            this.data = JSON.parse(this.edit_guest);
            this.data.PartySize = this.PartySize;
            this.data.TruflUserID = this.trufl_id;
            this.data.BookingID = this.booking_id;
            this.data.RestaurantID = this.restaurent_Id;

            localStorage.setItem('acceptoffer rowdata', JSON.stringify(this.data));
           
            this.router.navigate(['seataGuest'])
        }

        form.resetForm();
    }


    get(number: any) {
        this.number = number;
        console.log(this.number,"this is NO");
    }

    EditCancel() {

        this.router.navigate(['waitlist']);
    }


    change(data: any) {
        this.show_message = false;

    }

}