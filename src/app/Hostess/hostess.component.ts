import {Component, ViewEncapsulation, ViewContainerRef, ViewChild} from '@angular/core';
import {HostessService} from './hostess.service';
import {ToastOptions} from 'ng2-toastr';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {Observable} from 'rxjs/Observable';
import {LoginService} from '../shared/login.service';
import {Router} from "@angular/router";
import {SharedService} from '../shared/Shared.Service';
import {StaffService} from '../selectstaff/select-staff.service';

@Component({
  selector: 'hostess',
  templateUrl: './hostess.component.html',
  styleUrls: ['./hostess.component.css'],
  providers: [ToastsManager, ToastOptions]
})
export class HostessComponent {
  private bookingid;
  private username;
  private pic;
  public restaurantName;
  public truflUserList;
  private selectedRow: Number;
  private RestaurantId;
  public showProfile: boolean = false;
  private profileData: any = [];
  public currentSelectedUser: string;
  //Parameters to pass in Api
  private usertype: any;
  private truflid: any;
  private restaurantid: any;
  private restarauntid;
  private rowdata: any = {};
  private data: any;
  private statusmessage;
  private errorcode;
  private showtable: any = false;
  private emptybookingid;
  public commonmessage;
  showDialog = false;
  public acceptdata;
  public acceptsidenavdata;
  private isempty;
/*  public wailistLoader: boolean = false;*/
  private notifydata;
  public style = {};
/*  public colorsLoader: boolean = false;*/
  constructor(private hostessService: HostessService, private loginService: LoginService, private selectstaff: StaffService, private _toastr: ToastsManager, vRef: ViewContainerRef, private router: Router, private sharedService: SharedService) {
    this._toastr.setRootViewContainerRef(vRef);
    this.restaurantName = this.loginService.getRestaurantName();
    this.restarauntid = this.loginService.getRestaurantId();
    this.getWaitListData(this.restarauntid);
  }

  ngOnInit() {
    if (localStorage.getItem("stylesList") == null) {
      this.dummy();
    }
  }

  getWaitListData(restarauntid) {
    //Displaying trufl user's list
/*    this.wailistLoader = true;*/
    this.hostessService.getTruflUserList(restarauntid).subscribe((res: any) => {
      this.truflUserList = res._Data;
      this.statusmessage = res._StatusMessage;
      this.errorcode = res._ErrorCode;
      this.truflUserList.OfferAmount = (+this.truflUserList.OfferAmount);
      this.truflUserList.map(function (user) {
        var currentDate = new Date();
        var currenthours = currentDate.getHours();
        let currentminutes = currentDate.getMinutes();
        let currenttime = (currenthours * 60) + currentminutes;
        if (user.WaitListTime != null) {
          let waitedtime = new Date(user.WaitListTime);
          let hours = waitedtime.getHours();
          let minutes = waitedtime.getMinutes();
          let remainingwaitedtime = (hours * 60) + (minutes);
          let totalremainingtime = currenttime - remainingwaitedtime;
          user.totalremainingtime = totalremainingtime;
        }
      })
    /*  this.wailistLoader = false;*/
    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
    });
  }

  //Functinality for trufl user's list
  watlistUserDetails(data, index) {
    this.data = data;
    this.bookingid = data.BookingID;
    localStorage.setItem('editguestDetails', JSON.stringify(data));
    this.selectedRow = index;
    this.showProfile = true;
    this.currentSelectedUser = data.Email;
    this.RestaurantId = data.RestaurantID;
    this.username = data.UserName;
    this.pic = data.pic;
    this.profileData = data;
    this.usertype = data.TruflMemberType;
    this.truflid = data.TruflUserID;
    this.restaurantid = data.RestaurantID;
    this.usertype = data.TruflMemberType;

  }

  Remove(bookingid, item) {
    this.commonmessage = "Are you sure you want to remove " + item.UserName + " from the waitlist? This cannot be undone. ";
    this.showProfile = false;
    this.showDialog = !this.showDialog;
    this.emptybookingid = bookingid;
    this.isempty = "empty";
  }

  Ok() {
    if (this.isempty === 'empty') {
      this.hostessService.postUpdateEmptyBookingStatus(this.emptybookingid).subscribe((res: any) => {
        this.getWaitListData(this.restarauntid);
      }, (err) => {
        if (err === 0) {
          this._toastr.error('network error')
        }
      })
      this.showDialog = !this.showDialog;
    }
    else if (this.isempty === 'accept') {
      this.hostessService.sendmessage(this.acceptdata.TruflUserID).subscribe((res: any) => {
        if (res._Data[0].TruflUserID) {
          this.hostessService.changeicon(this.restarauntid, this.acceptdata.BookingID).subscribe((res: any) => {
            this.showDialog = !this.showDialog;
            this.getWaitListData(this.restarauntid);
          }, (err) => {
            if (err === 0) {
              this._toastr.error('an error occured')
            }
          });
        }
      }, (err) => {
        if (err === 0) {
          this._toastr.error('an error occured')
        }
      });
    }
    else if (this.isempty === 'acceptsidenav') {
      this.hostessService.sendmessage(this.acceptsidenavdata.TruflUserID).subscribe((res: any) => {
        if (res._Data[0].TruflUserID) {
          this.hostessService.changeicon(this.restarauntid, this.acceptsidenavdata.BookingID).subscribe((res: any) => {
            this.getWaitListData(this.restarauntid);
            this.showDialog = !this.showDialog;
            if (res != null) {
              this.showProfile = false;
            }
          }, (err) => {
            if (err === 0) {
              this._toastr.error('an error occured')
            }
          });
        }
      }, (err) => {
        if (err === 0) {
          this._toastr.error('an error occured')
        }
      });
    }
    else if (this.isempty === 'notify') {
      this.hostessService.sendmessage(this.notifydata.TruflUserID).subscribe((res: any) => {
        if (res._Data[0].TruflUserID) {
          this.hostessService.changeiconpush(this.restarauntid, this.notifydata.BookingID).subscribe((res: any) => {
            this.getWaitListData(this.restarauntid);
            this.showDialog = !this.showDialog;
            if (res != null) {
              this.showProfile = false;
            }
          }, (err) => {
            if (err === 0) {
              this._toastr.error('an error occured')
            }
          });
        }
      }, (err) => {
        if (err === 0) {
          this._toastr.error('an error occured')
        }
      });
    }
  }

  Cancel() {
    this.showDialog = !this.showDialog;
  }

  //print functionality
  printrow(item) {
    this.truflid = item.TruflUserID;
    this.restaurantid = item.RestaurantID;
    this.usertype = item.TruflMemberType;
    this.showProfile = false;
    var WinPrint = window.open('', '_blank', 'left=0,top=0,width=800,height=400,toolbar=0,scrollbars=0,status=0');
    WinPrint.document.write('<html><head><title></title>');
    WinPrint.document.write('<link rel="stylesheet" href="assets/css/print.css" media="print" type="text/css"/>');
    WinPrint.document.write('</head><body> <h1>Receipt</h1>');
    var arr = [
      {
        key: "TRUFL STATUS",
        value: ''
      },
      {
        key: this.restaurantName,
        value: ""
      },
      {
        key: "GUEST NAME",
        value: item.UserName
      },
      {
        key: "PARTY SIZE",
        value: item.PartySize
      },
      {key: "WAIT QUOTED", value: item.Quoted},
      {key: "TIME QUOTED", value: item.TimeWaited},
      {key: "TRUFL OFFER /RESERVATION", value: item.OfferAmount},
      {key: "THIS VISIT", value: item.ThisVisit},
      {key: "RELATIONSHIP", value: item.Relationship},
      {key: "SEATING AND PREFERENCES", value: item.SeatingPreferences},
      {key: "FOOD AND DRINK PREFERENCES", value: item.FoodAndDrinkPreferences}
    ];

    WinPrint.document.write('<table>');
    arr.map(function (obj, index) {
      if (index === 0 || index === 1) {
        WinPrint.document.write('<tr><th>' + obj.key + '</th><td>' + document.getElementById('tick_' + index).innerHTML + '</td></tr>');
      }

      else {
        WinPrint.document.write('<tr><th>' + obj.key + '</th><td>' + obj.value + '</td></tr>');
      }

    });

    WinPrint.document.write('</table>');
    WinPrint.document.write('</body>');
    setTimeout(function () {
      WinPrint.focus();
      WinPrint.print();
      WinPrint.close();
    }, 1000);
    return false;
  }

  //Functionality for closing side nav
  closeProile() {
    this.showProfile = false;
  }

  //accept offer
  acceptoffer(data) {
    //this.showtable=true;
    this.sharedService.uniqueid = "accept_offer";
    this.sharedService.useraccept = data;
    this.hostessService.setRowData(data);
    this.router.navigateByUrl('/seataGuest');
  }

  //tables sidenav
  tablessidenav(data) {
    this.sharedService.uniqueid = "tables_sidenav";
    this.sharedService.useraccept = data;
    this.hostessService.setRowData(data);
    this.router.navigateByUrl('/seataGuest');
  }

  //notify
  notify(data) {

    this.notifydata = data;
    this.commonmessage = "Are you sure you want to instruct " + data.UserName + "to report immediately to the host station to be seated? This cannot be undone. ";
    this.showProfile = false;
    this.showDialog = !this.showDialog;
    this.isempty = 'notify';
    this.sharedService.uniqueid = "notify";
    this.sharedService.useraccept = data;
    this.hostessService.setRowData(data);
  }

  //routing
  waitlistPage() {
    this.router.navigateByUrl('/waitlist');
  }

  seatedPage() {
    this.router.navigateByUrl('/seated');
  }

  snapshotPage() {
    this.router.navigateByUrl('/snapshot');
    this._toastr.error(this.statusmessage);
  }

  settingsPage() {
    this.router.navigateByUrl('/defaultSettings');
  }

  Addguest() {
    this.router.navigateByUrl('/addGuest');
  }

  editguest() {
    this.router.navigateByUrl('/editguest');
  }

  navigateToaddGuest() {
    localStorage.removeItem("acceptoffer rowdata");
    this.router.navigateByUrl('/addGuest');
  }

  //changeaccepticontotable
  changeaccepticon(data) {
    this.acceptdata = data;
    this.isempty = 'accept';
    this.commonmessage = "Are you sure you want to accept this offer, and instruct " + data.UserName + " to report immediately to the host station? This cannot be undone. ";
    this.showProfile = false;
    this.showDialog = !this.showDialog;
  }

  //acceptofferside nav
  changeaccepticonsidenav(data) {
    this.acceptsidenavdata = data;
    this.isempty = 'acceptsidenav';
    this.commonmessage = "Are you sure you want to accept this offer, and instruct " + data.UserName + " to report immediately to the host station? This cannot be undone. ";
    this.showProfile = false;
    this.showDialog = !this.showDialog;
    this.showtable = true;
  }

  public dummy() {
  /*    this.colorsLoader = true;*/
    var colorsList = '477B6C,8D6C8D,51919A,9A8A4A,9A7047,48588E,919A62,86a873,048ba8,3c6997,bb9f06';
    this.selectstaff.assignServercolor(colorsList, this.restarauntid).subscribe((res: any) => {
      for (let i = 0; i < res._Data.length; i++) {
        this.style[res._Data[i].UserID] = {
          "background-color": res._Data[i].backgroundcolor,
          "border": res._Data[i].border,
          "border-radius": res._Data[i].borderradius
        }
      }
      localStorage.setItem("stylesList", JSON.stringify(this.style));
   /*   this.colorsLoader = false;*/
    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
    });
  }
}
