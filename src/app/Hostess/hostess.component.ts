import { Component, ViewContainerRef } from '@angular/core';
import { HostessService } from './hostess.service';
import { ToastOptions } from 'ng2-toastr';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { LoginService } from '../shared/login.service';
import { Router } from "@angular/router";
import { SharedService } from '../shared/Shared.Service';
import { StaffService } from '../selectstaff/select-staff.service';
import { OtherSettingsService } from '../defaultsettings/othersettings/other-settings.service';
import * as cloneDeep from 'lodash/cloneDeep';

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
  private billamount: any;
  private rewardtype: any;
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
  public exclusionDialog = false;
  public acceptdata;
  public acceptsidenavdata;
  private isempty;
  private notifydata;
  public exclusiondata: any;
  public style = {};
  public selectedrowindex: any;
  public currentRoute;
  public sort: any;
  /*added*/
  public issideOpen: boolean = false;
  public servers: any;
  public restID = localStorage.getItem('restaurantid');
  public TruflMember: any;
  public RestaurantMember: any;
  public servers_array = [];
  public servers_Data = [];
  public DefaultTableNowPrice: any;
  public truflUser_list: any = [];
  public clonedObject: any = [];
  public suggestedbid: any;
  public increment: any;
  public pinedwaitlist: any = [];
  public today: any;
  public reservedate: any;
  public diffMs: any;
  private diffMins: any;
  public TimeAdded: any;
  public getothersettingsinfo: any;
  public isMessageEdit: boolean = false;
  public isEdit: boolean = true;
  public acceptedMobileDeviceID:any;
  public acceptedTruflUserID: any;
  public refreshdata: any;
  public changeIconDataResponse: any; 
  public showserver: boolean = true;
  public turn_getseated: any = [];
  public showServers: boolean = false;
  public getServerFlyOut: boolean = true;
  public LoggedInUser: any;
  public guestinfoflyout: boolean = false;
  public serversflyout: boolean = false;
  public getseatedflyout: boolean = false;
  public recordsFound: boolean = false;
  public availableServeres: any;
  /*added*/
   public DOB:any;
public DOBDate:any;
public DOBMonth:any;
  public isDesc: boolean = false;
  public column: string = 'UserName';
  public direction: number;
  public select_tab: any;
  public currentMessagedata: any;
  public currentIndex: any;
  public currentOrientation = 'vertical';
  public waitListGsnList: any;
  public table: any = [];
  public subTables: any = [];
  public openDate: any;
  constructor(private hostessService: HostessService, private loginService: LoginService, private selectstaff: StaffService, private _toastr: ToastsManager, vRef: ViewContainerRef, private router: Router, private sharedService: SharedService, private _otherservice: OtherSettingsService) {
    this._toastr.setRootViewContainerRef(vRef);
    this.restaurantName = this.loginService.getRestaurantName();
    this.restarauntid = this.loginService.getRestaurantId();
    this.openDate = localStorage.getItem('OpenDate');
    this.getWaitListData(this.restarauntid, this.openDate);
    //aded
    this.othersettings();
     
    //added end
    document.getElementById('myId').className = localStorage.getItem("restaurantTheme");

    this.hostessService.GetRestaurantGetSeatedNow(this.restarauntid).subscribe((res: any) => {
      this.waitListGsnList = res._Data.GetSeatedNow;
      let arrList;
      if (this.waitListGsnList.length) {
        console.log("GSN List");
         console.log(this.waitListGsnList);
        arrList = [2, 4, 6, 8];
        arrList.forEach((val) => {
          let amount;
          this.table.push({
            tableName: val + "-Tops",
            tables: this.waitListGsnList.filter((item) => {
              if (item.TableType === val) {
                amount = item.OfferAmount
              }
              return (item.TableType === val);
            }),
            offerAmount: "$ "+amount 
          });
        });
      }

    });
   

  }


  public guestflyoutClicks() {    

    if (this.profileData.length == 0) {
      this.recordsFound = false;
      this.showProfile = true;      
      this.guestinfoflyout = true;
      this.serversflyout = false;
      this.getseatedflyout = false;
    }
    else {
      this.recordsFound = true;
      this.showProfile = true;
      this.guestinfoflyout = true;
      this.serversflyout = false;
      this.getseatedflyout = false;
    }

  }

  public serverflyoutClicks() {
    this.getAvailableServersList();
    this.showProfile = true;
    this.guestinfoflyout = false;
    this.getseatedflyout = false;
    this.serversflyout = true;

    

  }
  public gsnflyoutClicks() {
    this.showProfile = true;
    this.guestinfoflyout = false;
    this.serversflyout = false;
    this.getseatedflyout = true;
  }

  ngOnInit() {
    /*added*/
    this.select_tab = 'servers'
    //this.getservers();   
   
    /*added end*/
    if (localStorage.getItem("stylesList") == null) {
      this.dummy();

    }
    this.sortTruffleList(this.column);

    this.sort=setInterval(() => {
      //this.refreshWaitlist();
      this.isDesc = !this.isDesc
      this.sortTruffleList(this.column);
    }, 60000);

    /*this.refreshdata = setInterval(() => {
      this.getWaitListData(this.restarauntid);
    }, 10000);*/

  }

  ngOnDestroy() {
    if (this.sort) {
      clearInterval(this.sort);
    }
    if (this.refreshdata) {
      clearInterval(this.refreshdata);
    }
  }


  /*added  code*/
  public othersettings() {
    this._otherservice.getOtherSettingsDetails(this.restarauntid).subscribe((res: any) => {

      this.DefaultTableNowPrice = res._Data[0].DefaultTableNowPrice;
      // // console.log(this.DefaultTableNowPrice);
    })
  }
  
  
  getWaitListData(restarauntid, openDate) {
    //Displaying trufl user's list
    this.hostessService.getTruflUserList(restarauntid, openDate).subscribe((res: any) => {
        this.truflUserList = res._Data;

        console.log(this.truflUserList);
     
      /*added code*/
      this.truflUser_list = [];
      res._Data.forEach((item) => {
        this.TimeAdded = new Date(item.ReservationWaitListTime);
        if (item.DOB) {
         // item.DOB = new Date(item.DOB).getDate() + "-" + (new Date(item.DOB).getMonth() + 1);
        } else {
          item.DOB = "";
        }
       // this.TimeAdded.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        item.TimeAdded = this.TimeAdded;
        if (item.OfferAmount > 0) {
          var g = item.PartySize;

          item.OfferAmount= Math.trunc(item.OfferAmount);
          this.suggestedbid = this.DefaultTableNowPrice * g;

          this.increment = this.suggestedbid / 2;
              
          item.suggestedbid = this.suggestedbid;
          item.increment = this.increment;
          this.truflUser_list.push(item);
          
        }
        else {
            if (!item.OfferAmount.includes(":"))
                         item.OfferAmount = Math.trunc(item.OfferAmount);
          this.truflUser_list.push(item);         
         
        } if (item.BookingStatus == 7) {
            item.OfferAmount = item.WaitListTime; //new Date(item.WaitListTime).toLocaleTimeString().replace(/([\d]+:[\d]{2})(.*)/, "$1")
        }
      })


      /*added code end*/

      this.statusmessage = res._StatusMessage;
      this.errorcode = res._ErrorCode;
      this.truflUserList.OfferAmount = (+this.truflUserList.OfferAmount);
  console.log(this.truflUserList);
    //  this.refreshWaitlist();
    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
    });
  }
  getseated() {
      this.showserver = false;     
      this.select_tab = 'getseated';
      // this.turn_getseated = JSON.parse(localStorage.getItem('turnongetseated'));
      this.turn_getseated = this.sharedService.turn_getseat;
      if (this.turn_getseated == '' || this.turn_getseated == undefined) {
          this.getseatedinfofromdb();

      }
      console.log(this.turn_getseated);
  }
  public getServersInfo() {
      this.select_tab = 'servers';
      this.showserver = true;
      //this.getservers();
  }

  getAvailableServersList() {
    this.hostessService.getAvailableServersList(this.restarauntid).subscribe((res: any) => {
      this.availableServeres = res._Data;
    });
    //console.log("serevers list");
    //console.log(this.availableServeres);
  }

  refreshWaitlist():void {
    this.clonedObject = [];
    this.pinedwaitlist = [];
    this.clonedObject = cloneDeep(this.truflUser_list);
    // // console.log(this.clonedObject, "truflUser_list");
    this.truflUser_list.forEach((item, index) => {
      if (item.BookingStatus == 7) {
        this.today = new Date();
        this.reservedate = new Date(item.ReservationWaitListTime);
        this.diffMs = this.reservedate.getTime() - this.today.getTime(); // This will give difference in milliseconds
        this.diffMins = Math.round(this.diffMs / 60000);
        if (this.diffMins <= 30 && Math.sign(this.diffMins) != -1) {
          item.timeLeft = this.diffMins
          this.pinedwaitlist.push(item);
          this.clonedObject.forEach((item2, index1) => {
            if (item.TruflUserID == item2.TruflUserID) {
              this.clonedObject.splice(index1, 1);
            }

          })
        } else {
          item.timeLeft = this.diffMins
        }
      } else if (item.BookingStatus == 2) {
        item.timeLeft = 31
        this.pinedwaitlist.push(item);
        this.clonedObject.forEach((item1, index1) => {
          if (item.TruflUserID == item1.TruflUserID) {
            this.clonedObject.splice(index1, 1);
          }

        })
      } 

    })
    console.log(this.pinedwaitlist);
  }

  getOpacity(value) {
    if (value.TimeWaited < 0) {
      return `0.3`;
    }
    else if (value.TimeWaited >= 0 && value.TimeWaited <= 9) {
      return `0.4`;
    }
    else if (value.TimeWaited >= 10 && value.TimeWaited <= 19) {
      return `0.5`;
    }
    else if (value.TimeWaited >= 20 && value.TimeWaited <= 29) {
      return `0.6`;
    }
    else if (value.TimeWaited >= 30 && value.TimeWaited <= 39) {
      return `0.7`;
    }
    else if (value.TimeWaited >= 40 && value.TimeWaited <= 49) {
      return `0.8`;
    }
    else if (value.TimeWaited >= 50 && value.TimeWaited <= 59) {
      return `0.9`;
    }
    else if (value.TimeWaited >= 60) {
      return `1`;
    }
    else {
      return {};
    }

  }

  //Functinality for trufl user's list
  watlistUserDetails(data, index) {    
    /*added code*/
   
    // // // console.log(data, "editguest");
    this.RestaurantMember = data.RestaurantMember;
    this.TruflMember = data.TruflMember;
    /*  this.RestaurantMember = 5;
      this.TruflMember = 2;   */

    /*added code end*/

    this.data = data;
    this.selectedrowindex = index;
    this.bookingid = data.BookingID;
    localStorage.setItem('editguestDetails', JSON.stringify(data));
    this.selectedRow = data.UserName+index;
    this.showProfile = true;
    this.currentSelectedUser = data.Email;
    this.RestaurantId = data.RestaurantID;
    this.username = data.UserName;
    this.pic = data.pic;
    this.profileData = data;
    this.usertype = data.TruflMemberType;
    this.truflid = data.TruflUserID;
    this.DOB = data.DOB;
    this.restaurantid = data.RestaurantID;
    this.usertype = data.TruflMemberType;
      this.guestflyoutClicks();
  }

  updateGSNSeated(RestaurantID, BookingID, TruflUserID, openDate) {
    this.hostessService.postupdateGSNSeatedStatus(RestaurantID, BookingID, TruflUserID, openDate).subscribe((res: any) => {

      if (res._StatusMessage == 'Success') {
        this.getWaitListData(this.restarauntid, this.openDate);
        this._toastr.success(this.exclusiondata.UserName + ' has been successfully seated.')
      }
      else{
        this._toastr.error(res._StatusMessage);
      }
    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
    })
  }
  Remove(bookingid, item) {
    this.commonmessage = "Are you sure you want to remove " + item.UserName + " from the waitlist? This cannot be undone. ";
    this.showProfile = false;
    this.showDialog = !this.showDialog;
    this.isMessageEdit = false;
    this.emptybookingid = bookingid;
    this.isempty = "empty";
  }

  Ok() {
    if (this.isempty === 'empty') {
      this.hostessService.postUpdateEmptyBookingStatus(this.emptybookingid).subscribe((res: any) => {
        this.getWaitListData(this.restarauntid, this.openDate);
      }, (err) => {
        if (err === 0) {
          this._toastr.error('network error')
        }
      })
      this.showDialog = !this.showDialog;
    }
    else if (this.isempty === 'exclusion') {
      this.updateGSNSeated(this.exclusiondata.RestaurantID, this.exclusiondata.BookingID, this.exclusiondata.TruflUserID, this.openDate);
      this.exclusionDialog = !this.exclusionDialog;
    }
    else if (this.isempty === 'accept') {
     // this.isMessageEdit = !this.isMessageEdit

      this.billamount = 0;
      this.rewardtype = 'WIN_AUCTION';      
      this.hostessService.sendmessage(this.acceptdata.TruflUserID).subscribe((res: any) => {
        if (res._Data[0].TruflUserID) {
          this.hostessService.changeicon(this.restarauntid, this.acceptdata.BookingID, this.acceptdata.TruflUserID, this.openDate).subscribe((res: any) => {
           this.changeIconDataResponse = res;
            this.errorcode = res._ErrorCode;
            this.showDialog = !this.showDialog;

            if (this.errorcode === 0) {
              this.hostessService.postPremiumUserdetails(this.acceptdata.TruflUserID, this.restarauntid, this.billamount, this.rewardtype).subscribe((res: any) => {

              }, (err) => {
                if (err === 0) {
                  this._toastr.error('an error occured')
                }
              });
              this.getWaitListData(this.restarauntid, this.openDate);

            }
            this.isMessageEdit = true;
            this.acceptedMobileDeviceID = this.acceptdata.MobileDeviceID;
            this.acceptedTruflUserID = this.acceptdata.TruflUserID;
            this.showDialog = true;
            if (res._StatusCode != 200) {
              this.changeaccepticon(this.acceptdata, res._Data, true);
            } else {
              this.changeaccepticon(this.acceptdata, undefined, true);
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
    else if (this.isempty === 'acceptsidenav') {
      this.billamount = 0;
      this.rewardtype = 'WIN_AUCTION';


      this.hostessService.sendmessage(this.acceptsidenavdata.TruflUserID).subscribe((res: any) => {
        if (res._Data[0].TruflUserID) {
          this.hostessService.changeicon(this.restarauntid, this.acceptsidenavdata.BookingID, this.acceptsidenavdata.TruflUserID, this.openDate).subscribe((res: any) => {
            this.errorcode = res._ErrorCode;
            this.showDialog = !this.showDialog;
            if (this.errorcode === 0) {
              this.hostessService.postPremiumUserdetails(this.acceptsidenavdata.TruflUserID, this.restarauntid, this.billamount, this.rewardtype).subscribe((res: any) => {

              }, (err) => {
                if (err === 0) {
                  this._toastr.error('an error occured')
                }
              });
              this.getWaitListData(this.restarauntid, this.openDate);

            }
            if (res != null) {
              this.showProfile = false;
            }
          }, (err) => {
            if (err === 0) {
              this._toastr.error('an error occured')
            }
          });
        }
      });

    }
    else if (this.isempty === 'notify') {
      this.hostessService.sendmessage(this.notifydata.TruflUserID).subscribe((res: any) => {
        if (res._Data[0].TruflUserID) {
          this.hostessService.changeiconpush(this.restarauntid, this.notifydata.BookingID, this.openDate).subscribe((res: any) => {
            this.getWaitListData(this.restarauntid, this.openDate);
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
        if (this.notifydata.MobileDeviceID) {
        this.isMessageEdit = true;
          this.acceptedMobileDeviceID = this.notifydata.MobileDeviceID;
          this.acceptedTruflUserID = this.notifydata.TruflUserID;
          this.notify(this.notifydata,true);
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
  exclusionCancel() {
    this.exclusionDialog = !this.exclusionDialog;
  }
  //push notiofication
  sendMessage(message) {
    var obj = {}
    if (!this.currentMessagedata) {
      obj = {
        "DeviceToken": this.acceptedMobileDeviceID,
        "TruflUserID": this.acceptedTruflUserID,
        "PushNotificationMsg": message
      }
    } else {
      obj = {
        "DeviceToken": this.currentMessagedata.MobileDeviceID,
        "TruflUserID": this.currentMessagedata.TruflUserID,
        "PushNotificationMsg": message
      }
    }

    this.hostessService.pushNotification(obj).subscribe((res: any) => {
      if (res == true) {
        this.showDialog = false;
        this._toastr.success('Message Sent Successfully');

      }
      else {
        this._toastr.error('an error occured')
      }

    })

  }
  //print functionality
  printrow(item, i) {
    
    this.truflid = item.TruflUserID;
    this.restaurantid = item.RestaurantID;
    this.showProfile = false;
    var WinPrint = window.open('', '_blank', 'left=0,top=0,width=800,height=400,toolbar=0,scrollbars=0,status=0');
    WinPrint.document.write('<html><head><title></title>');
    WinPrint.document.write('<link rel="stylesheet" href="assets/css/print.css" media="print" type="text/css"/>');
    WinPrint.document.write('</head><body> <h2 style="text-transform:uppercase;text-align:center;display:block;width:100%;margin:0 0 20px 0;">Receipt</h2>');
    var arr = [
      {
        key: "TRUFL STATUS",
        value: item.TruflMemberName
      },
      {
        key: "RESTAURANT NAME",
        value: this.restaurantName
      },
      {
        key: "GUEST NAME",
        value: item.UserName
      },
      {
        key: "PARTY SIZE",
        value: item.PartySize
      },
      { key: "WAIT QUOTED", value: item.Quoted },
      { key: "TIME QUOTED", value: item.TimeWaited },
      { key: "TRUFL OFFER /RESERVATION", value: item.OfferAmount },
      { key: "THIS VISIT", value: item.ThisVisit },
      { key: "RELATIONSHIP", value: item.Relationship },
      { key: "SEATING AND PREFERENCES", value: item.SeatingPreferences },
      { key: "FOOD AND DRINK PREFERENCES", value: item.FoodAndDrinkPreferences }
    ];

    WinPrint.document.write('<table style="margin-left: -0%;"  width="100%">');
    let selected = this;
      arr.forEach((item) => {
        if (item.key == "undefined" || item.key == "null") {
          item.key = '';
        }
        if (item.value == undefined || item.value == null) {
          item.value = '';
        }
        WinPrint.document.write('<tr><th align="left" style="font-size: 14px;font-weight:400;width:140px;">' + item.key + '</th><td  align="left" style="font-size: 14px;font-weight:400;width:140px;">' + item.value + '</td></tr>');
    })

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
  closeServers() {
    this.showServers = false;
    this.getServerFlyOut = true;
  }

  //accept offer
  acceptoffer(data) {
   // if (!sendmessage) { this.isMessageEdit = false; }
    if (data.OfferType == 5) {
      this.exclusiondata = data;
      this.commonmessage = "Are you sure you want to get " + data.UserName + " to be seated? This cannot be undone.";
      this.showProfile = false;
      this.exclusionDialog = !this.exclusionDialog;
      this.isempty = 'exclusion';
    } else {
      localStorage.setItem("uniqueid", "accept_offer");
      this.sharedService.useraccept = data;
      this.hostessService.setRowData(data);
      this.router.navigateByUrl('/seataGuest');
    }
   
  }

  //tables sidenav
  tablessidenav(data) {
    //this.sharedService.uniqueid = "tables_sidenav";
    localStorage.setItem("uniqueid", "tables_sidenav");
    this.sharedService.useraccept = data;
    this.hostessService.setRowData(data);
    this.router.navigateByUrl('/seataGuest');
  }

  //notify
  notify(data, sendmessage) {
    if (!sendmessage) { this.isMessageEdit = false; }
    this.notifydata = data;
    this.commonmessage = "Are you sure you want to instruct " + data.UserName + " to report immediately to the host station to be seated? This cannot be undone. ";
    this.showProfile = false;
    this.showDialog = !this.showDialog;
    this.isempty = 'notify';
    //this.sharedService.uniqueid = "notify";
    localStorage.setItem("uniqueid", "notify");
    this.sharedService.useraccept = data;
    this.hostessService.setRowData(data);
  }
  //message
  message(data, i) {

    this.currentMessagedata = data;
    this.currentIndex = i;
    this.isEdit = true;
    this.isMessageEdit = true;
    this.showDialog = !this.showDialog;
    this._otherservice.getOtherSettingsDetails(this.restID).subscribe((res: any) => {
      this.getothersettingsinfo = res._Data;
      // // console.log(res);
      this.commonmessage = res._Data[0].RestaurantNotificationMsg;

    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
    });
  }

  //changeaccepticontotable
  changeaccepticon(data,msg,okClicked) {
    this.acceptdata = data;
    this.isempty = 'accept';
    if (data.Accept == 1 && !okClicked) { this.isMessageEdit = false;}
    if (!msg && this.isMessageEdit) {
      this.commonmessage = "Hi! " + data.UserName + " Time to eat! Please see the host station immediately to be seated right away.";
    } else if (msg && this.isMessageEdit) {
      this.commonmessage = msg;
    } else if (!msg && !this.isMessageEdit)
    {
      this.commonmessage = "Are you sure you want to accept this offer, and instruct " + data.UserName + " to report immediately to the host station? This cannot be undone. ";
    }
    this.showProfile = false;
    if (!okClicked) { this.showDialog = !this.showDialog; }
  }

  //acceptofferside nav
  changeaccepticonsidenav(data) {
    this.acceptsidenavdata = data;
    this.isempty = 'acceptsidenav';
    if (this.isMessageEdit) {
      this.commonmessage = "Hi! " + data.UserName + " your wait is over, please meet the hostess and show this message to get seated now.";
    }else if (!this.isMessageEdit) {
      this.commonmessage = "Are you sure you want to accept this offer, and instruct " + data.UserName + " to report immediately to the host station? This cannot be undone. ";
    }
   // this.commonmessage = "Hi! " + data.UserName + "your wait is over, please meet the hostess and show this message to get seated now.";
    this.showProfile = false;
    this.showDialog = !this.showDialog;
    this.showtable = true;
  }

  //routing
  moveTurnOn() {     
      this.router.navigateByUrl('/turnon');
  }

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
    localStorage.setItem("uniqueid", "addguest");
    this.router.navigateByUrl('/addGuest');
  }

  editguest(value) {
    //localStorage.removeItem('isEdit');
   // localStorage.setItem("uniqueid", "edit_guest");

    var value = this.data;
    localStorage.setItem('isEdit', JSON.stringify(value));
    localStorage.setItem('uniqueid', 'edit_guest');
    this.router.navigateByUrl('/editguest');
  }

  navigateToaddGuest() {
    localStorage.removeItem("acceptoffer rowdata");
    this.router.navigateByUrl('/addGuest');
  }

  sortTruffleList(property) {
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  };
  public dummy() {
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
    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
    });
  }
  
  addPrice(index) {
      this.turn_getseated[index].OfferAmount = this.turn_getseated[index].OfferAmount + 5;   
  }

  subPrice(index) {     
      this.turn_getseated[index].OfferAmount = this.turn_getseated[index].OfferAmount - 5;
  
  }

  getseatedinfofromdb() {
      this.hostessService.getTrungetseated(this.restarauntid).subscribe((res: any) => {
          this.turn_getseated = res._Data.GetSeatedNow;
          console.log(res);          
      })
  }
  postTurnGet(turnseatedList:any) {
      console.log(turnseatedList);
      var arr = [];
      turnseatedList.forEach((itemlist) => {          
          var obj = {
              "RestaurantID": itemlist.RestaurantID,
              "TableType": itemlist.TableType ,
              "NoOfTables": itemlist.NumberOfTables,
              "Amount": itemlist.OfferAmount ,
              "TablesNumbers": itemlist.TableNumbers,
              "IsEnabled": true
          }
          arr.push(obj);
      })
    
      this.hostessService.postTrungetseated(arr).subscribe((res: any) => {
          this.turn_getseated = res._Data.GetSeatedNow;
          this.getseated();
      })
  }
  showServerPanel() {    
    this.showServers = true;
  //  this.issideOpen = false;
    this.getServerFlyOut = false;
  }
}
