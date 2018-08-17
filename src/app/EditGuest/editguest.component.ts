import {Component, ViewContainerRef} from '@angular/core';
import {NgForm} from '@angular/forms';
import {SharedService} from '../shared/Shared.Service';
import {SeatedService} from '../seated/seated.service'
import {EditGuestService} from './editguest.service';
import {Router} from '@angular/router';
import {ToastOptions} from 'ng2-toastr';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { saveAs } from 'file-saver';
import { BsDatepickerConfig, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app_edit',
  templateUrl: './editguest.component.html',
  styleUrls: ['./editguest.style.css'],
  providers: [ToastsManager, ToastOptions]
})
export class EditGuestComponent {
  public data: any = {};
  public number: any;
  public editguestdetails: any;
  public error_message: any;
  public show_message: boolean = false;
  public PartySize: any;
  public editguest_details: any;
  public edit_guest: any;
  public error_msg: any;
  public email_ids: any;
  public DOB: any;
  public showsaveandseataguest;
  public active: boolean;
  public keepGoing: boolean = false;

  datePickerConfig: Partial<BsDatepickerModule>;

  constructor(private sharedService: SharedService, public editGuestService: EditGuestService, private router: Router, private _toastr: ToastsManager, vRef: ViewContainerRef, private seatedservice: SeatedService) {
    this._toastr.setRootViewContainerRef(vRef);
    this.showsaveandseataguest = JSON.parse(this.seatedservice.getEnableEditinfo());

    //Datepicker 
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-default',
        showWeekNumbers: false,
        dateInputFormat: 'DD/MM/YYYY'
      });


  }

  ngOnInit() {
    this.editguestdetails = localStorage.getItem('isEdit');
    this.editguest_details = JSON.parse(this.editguestdetails);
    if (this.editguest_details) {
      this.data = this.editguest_details;
      this.data.DOB = new Date(this.data.DOB);
      //console.log(this.data);
    }
    if (localStorage.getItem("uniqueid") == 'edit_guest') {
      this.active = true;
    }
    else if (localStorage.getItem("uniqueid") == 'seated') {
      this.active = false;
    }
    // this.sharedService.uniqueid = "editguest";
    localStorage.setItem('acceptoffer rowdata', JSON.stringify(this.data));

    if (this.sharedService.email_error) {
      this.error_message = this.sharedService.email_error;
      this.show_message = true;
    }

    this.editGuestService.emailverify().subscribe((res: any) => {
        this.email_ids = res._Data;

        console.log(this.email_ids);


    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
    })
  }
  getToday(): any {
    return new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  }

  isNumberKey(event: any) { // without type info
    var x = event.target.value;
    event.target.value = x.replace(/[^0-9\.]/g, '');

  }

  onSubmit(guestdetails: any, value: number) {
    this.number = value;
   // console.log(guestdetails);
    if(guestdetails.Relationship == undefined) {
      guestdetails.Relationship = '';
    }
    if (guestdetails.SeatingPreferences == undefined) {
      guestdetails.SeatingPreferences = '';
    } 


    this.error_msg = "an error occured";
    
    var obj = {
      "RestaurantID": this.editguest_details.RestaurantID,
      "TruflUserID": this.editguest_details.TruflUserID,
      "FullName": guestdetails['UserName'],
      "Email": guestdetails['Email'],
      "ContactNumber": guestdetails['PhoneNumber'],
      "Relationship": guestdetails['Relationship'],
      "ThisVisit": guestdetails['ThisVisit'],
      "FoodAndDrink": guestdetails['FoodAndDrinkPreferences'],
      "SeatingPreferences": guestdetails['SeatingPreferences'],
      "Description": guestdetails['Description'],
      "BookingID": this.editguest_details.BookingID,
      "DOB": new Date(this.editguest_details.DOB),
      "TableNumbers": '',
      "SeatedTableType":''

    }
   // console.log(obj);
//email duplication checking
    if (guestdetails.Email != '') {
      var keepGoing = true;
      this.email_ids.map((item, index) => {
        if (keepGoing) {
          if (guestdetails.Email.toLowerCase().indexOf(item.Email.toLowerCase()) > -1 && this.editguest_details.TruflUserID != item.TruflUserID) {
            this.show_message = true;
            this.error_message = "Email Id Already Exists";
            keepGoing = false
          }
        }

      })
//email duplication checking end
      // add user to waitlist
      if (this.number == 1 && keepGoing == true) {
        this.editguestdetails = guestdetails;
        this.editguestdetails.PartySize = this.editguest_details.PartySize;
        this.editguestdetails.TruflUserID = this.editguest_details.TruflUserID;
        this.editguestdetails.BookingID = this.editguest_details.BookingID;
        this.editguestdetails.RestaurantID = this.editguest_details.RestaurantID;
        this.editguestdetails.OfferType = this.editguest_details.OfferType;
        this.editguestdetails.DOB = new Date(this.editguest_details.DOB + " UTC");
        localStorage.setItem('editguestDetails', JSON.stringify(this.editguestdetails));

        this.editGuestService.editGuestDetails(obj, this.number).subscribe((res: any) => {
           
          if (res._ErrorCode == 1) {
            window.setTimeout(() => {
              this._toastr.error(this.error_msg);

            }, 500);
          }
          else if (res._ErrorCode == 0) {

            this.sharedService.email_error = '';
            if (localStorage.getItem("uniqueid") == 'edit_guest') {
             // this.router.navigate(['waitlist']);
              this.router.navigateByUrl('/waitlist');
            }
            else if (localStorage.getItem("uniqueid") == 'seated') {
             // this.router.navigate(['seated']);
              this.router.navigateByUrl('/seated');
            }

          }

        }, (err) => {
          if (err === 0) {
            this._toastr.error('network error')
          }
        })
      }
      //move to seataguest
      if (this.number == 2 && keepGoing == true) {
        this.sharedService.uniqueid = "edit_guest";
        this.editguestdetails = guestdetails;
        this.editguestdetails.PartySize = this.editguest_details.PartySize;
        this.editguestdetails.TruflUserID = this.editguest_details.TruflUserID;
        this.editguestdetails.BookingID = this.editguest_details.BookingID;
        this.editguestdetails.RestaurantID = this.editguest_details.RestaurantID;
        this.editguestdetails.OfferType = this.editguest_details.OfferType;
        this.editguestdetails.DOB = new Date(this.editguest_details.DOB);
        localStorage.setItem('editguestDetails', JSON.stringify(this.editguestdetails));

        localStorage.setItem('acceptoffer rowdata', JSON.stringify(this.editguestdetails));
        if (localStorage.getItem("uniqueid") == 'edit_guest') {
         // this.router.navigate(['seataGuest']);
          this.router.navigateByUrl('/seataGuest');
        }
        else if (localStorage.getItem("uniqueid") == 'seated') {
        //  this.router.navigate(['seated']);
          this.router.navigateByUrl('/seated');
        }
      }     

      if (this.number == 3 && keepGoing == true) {
        console.log(obj, "objdetails");
        this.Emailverify(obj);
      }



    }

    else {
      // add user to waitlist
      if (this.number == 1) {
        this.editguestdetails = guestdetails;
        this.editguestdetails.PartySize = this.editguest_details.PartySize;
        this.editguestdetails.TruflUserID = this.editguest_details.TruflUserID;
        this.editguestdetails.BookingID = this.editguest_details.BookingID;
        this.editguestdetails.RestaurantID = this.editguest_details.RestaurantID;
        this.editguestdetails.OfferType = this.editguest_details.OfferType;
        this.editguestdetails.DOB = new Date(this.editguest_details.DOB);
        localStorage.setItem('editguestDetails', JSON.stringify(this.editguestdetails));
        this.editGuestService.editGuestDetails(obj, this.number).subscribe((res: any) => {
          console.log(res);
          if (res._ErrorCode == 1) {
            window.setTimeout(() => {
              this._toastr.error(this.error_msg);

            }, 500);
          }
          else if (res._ErrorCode == 0) {
            this.sharedService.email_error = '';
            if (localStorage.getItem("uniqueid") == 'edit_guest') {
            //  this.router.navigate(['waitlist']);
              this.router.navigateByUrl('/waitlist');
            }
            else if (localStorage.getItem("uniqueid") == 'seated') {
             // this.router.navigate(['seated']);
              this.router.navigateByUrl('/seated');
            }
          }

        }, (err) => {
          if (err === 0) {
            this._toastr.error('network error')
          }
        })
      }
      else if (this.number == 2) {
        //move to seataguest
        this.sharedService.uniqueid = "edit_guest";
        this.editguestdetails = guestdetails;
        this.editguestdetails.PartySize = this.editguest_details.PartySize;
        this.editguestdetails.TruflUserID = this.editguest_details.TruflUserID;
        this.editguestdetails.BookingID = this.editguest_details.BookingID;
        this.editguestdetails.RestaurantID = this.editguest_details.RestaurantID;
        this.editguestdetails.OfferType = this.editguest_details.OfferType;
        this.editguestdetails.DOB = new Date(this.editguest_details.DOB);
        localStorage.setItem('editguestDetails', JSON.stringify(this.editguestdetails));
        localStorage.setItem('acceptoffer rowdata', JSON.stringify(this.data));
        if (localStorage.getItem("uniqueid") == 'edit_guest') {
          //this.router.navigate(['seataGuest']);
          this.router.navigateByUrl('/seataGuest');
        }
        else if (localStorage.getItem("uniqueid") == 'seated') {
         // this.router.navigate(['seated']);
          this.router.navigateByUrl('/seated');
        }
      }
      else if (this.number == 3) {
        console.log(obj,"objdetails");
        this.Emailverify(obj);
      }

    }
  }

  get(number: any) {
    this.number = number;
    if (this.number == 1) {
      if (localStorage.getItem("uniqueid") == 'edit_guest') {
       // this.router.navigate(['waitlist']);
        this.router.navigateByUrl('/waitlist');
      }
      else if (localStorage.getItem("uniqueid") == 'seated') {
       // this.router.navigate(['seated']);
        this.router.navigateByUrl('/seated');
      }
    } else {
      if (localStorage.getItem("uniqueid") == 'edit_guest') {
      //  this.router.navigate(['seataGuest']);
        this.router.navigateByUrl('/seataGuest');
      }
      else if (localStorage.getItem("uniqueid") == 'seated') {
      //  this.router.navigate(['seated']);
        this.router.navigateByUrl('/seated');
      }
    }
  }

  EditCancel() {
    // this.router.navigate(['waitlist']);
    if (localStorage.getItem("uniqueid") == 'edit_guest') {
     // this.router.navigate(['waitlist']);
      this.router.navigateByUrl('/waitlist');
    }
    else if (localStorage.getItem("uniqueid") == 'seated') {
     // this.router.navigate(['seated']);
      this.router.navigateByUrl('/seated');
    }
  }

  change(data: any) {
    this.show_message = false;
  }


  public Emailverify(guestdetails: any) {
    var arr = [];
    /*added code*/
     arr.push({
       FullName: guestdetails.FullName,
       Email: guestdetails.Email,
       ContactNumber: guestdetails.ContactNumber,
     //  PartySize: guestdetails.PartySize,
      // QuotedTime: guestdetails.Quoted,
       DOB: new Date(guestdetails.DOB),
      Relationship: guestdetails.Relationship,
      ThisVisit: guestdetails.ThisVisit,
      FoodAndDrink: guestdetails.FoodAndDrink,
      SeatingPreferences: guestdetails.SeatingPreferences,
      Description: guestdetails.Description

    })
    console.log(arr);
    var csvData = this.ConvertToCSV(arr);
    let file = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(file, 'Report.csv');  
    
  }

  // convert Json to CSV data in Angular2
  ConvertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';
    var row = "";

    for (var index in objArray[0]) {
      //Now convert each value to string and comma-separated
      row += index + ',';
    }
    row = row.slice(0, -1);
    //append Label row with line break
    str += row + '\r\n';

    for (var i = 0; i < array.length; i++) {
      var line = '';
      for (var index in array[i]) {
        if (line != '') line += ','

        line += array[i][index];
      }
      str += line + '\r\n';
    }
    return str;
  }
  /*added code end*/

}
