
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GuestService } from './addguest.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared/Shared.Service';



@Component({
    selector: 'addGuest',
    templateUrl: './addguest.component.html',
    styleUrls: ['./addguest.style.css']
})
export class AddGuestComponent {


    public data: any = {};
    public guest_info: any;
    public record: any;
    public number: any;
    public saveguestdetails: any = {};
    public restID = localStorage.getItem('restaurantid');

    public error_message: any;
    public show_message: boolean = false;

    //public restID: any;
    public QuotedTime: any;
    public partysize: any;

    constructor(private guestservice: GuestService, private router: Router, private sharedService: SharedService) {

    }
    ngOnInit() {
        this.getguestsdetails();
       // this.saveguestdetails = this.sharedService.addreservation;
        if (this.sharedService.addreservation) {
            this.data = this.sharedService.addreservation;
        }

       /* console.log(this.saveguestdetails);
        if (this.saveguestdetails) {
            this.data = this.saveguestdetails;
        }*/


        if (this.sharedService.email_error) {
            this.error_message = this.sharedService.email_error;
            this.show_message = true;
        }

    }

    public getguestsdetails() {
        this.guestservice.getguestsdetails().subscribe((res: any) => {
            this.guest_info = res.data;

        })

    }



    addtowaitlist(guestdetails: any) {
        console.log(guestdetails);


    }



    onSubmit(guestdetails: any, form: NgForm) {


        console.log(this.number);

        console.log(guestdetails);

        if (this.restID) {
            this.restID = JSON.parse(this.restID);
        }
        if (guestdetails.PartySize) {
            this.partysize = JSON.parse(guestdetails['PartySize']);
            console.log(this.partysize);
        }
        if (guestdetails.waitquoted) {
            this.QuotedTime = JSON.parse(guestdetails['waitquoted'])
        }

        if (guestdetails.waitquoted === null || guestdetails.waitquoted === undefined) {
            this.QuotedTime=''
        }
        if (guestdetails.relationship === null || guestdetails.relationship === undefined) {
            guestdetails.relationship = ''
        }
         if (guestdetails.visit === null || guestdetails.visit === undefined) {
            guestdetails.visit = ''
        }
          if (guestdetails.food === null || guestdetails.food === undefined) {
             guestdetails.food = ''
         }

          if (guestdetails.seating === null || guestdetails.seating === undefined) {
             guestdetails.seating = ''
         }

          if (guestdetails.notes === null || guestdetails.notes == undefined) {
             guestdetails.notes = ''
         }



        var obj = {
            "RestaurantID": this.restID,
            "FullName": guestdetails.UserName,
            "Email": guestdetails.email,
            "ContactNumber": guestdetails.mobile,
            "UserType": 'TU',
            "PartySize": this.partysize,
            "QuotedTime": this.QuotedTime,
            "Relationship": guestdetails.relationship,
            "ThisVisit": guestdetails.visit,
            "FoodAndDrink": guestdetails.food,
            "SeatingPreferences": guestdetails.seating,
            "Description": guestdetails.notes,
            "WaitListTime": null,
            "BookingStatus": 2,
            "TableNumbers": ''
        }

        console.log(obj);




        if (this.number == 1) {
            this.guestservice.addGuestDetails(obj, this.number).subscribe((res: any) => {
                console.log(res);



                if (res._ErrorCode == '50000') {
                    //  this.router.navigate(['editguest']);
                    this.data = obj;
                    this.show_message = true;
                    this.error_message = "Email Id Already Exists";
                    this.data = guestdetails;

                }

                else {
                    this.sharedService.email_error = '';
                    this.router.navigate(['waitlist']);
                }

            })

        }
        else if (this.number == 2) {
            this.sharedService.uniqueid = "addguest";
            // this.sharedService.useraccept = guestdetails;
            // console.log(this.sharedService.addSeataguest);
            this.sharedService.addreservation = guestdetails;
            localStorage.setItem('acceptoffer rowdata', JSON.stringify(guestdetails));
            this.router.navigate(['seataGuest'])
        }

        else if (this.number == 3) {

            console.log("coming")
            this.router.navigate(['reservation']);
            this.sharedService.addreservation = guestdetails;


        }

        form.resetForm();


    }
    get(number: any) {
        this.number = number;
        console.log(this.number);
    }

    editguest(guestrecord: any) {
        this.sharedService.guestDetails = guestrecord;
        this.router.navigate(['editguest']);

    }

    cancel() {
        this.sharedService.email_error = '';
        this.router.navigate(['waitlist']);
    }


    change(data: any) {
        this.show_message = false;

    }


}
