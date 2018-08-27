import { Component, ViewContainerRef } from '@angular/core';
import { Location } from '@angular/common';
import { OnInit } from '@angular/core';
import { SeatedService } from './seated.service';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';
import { HostessService } from '../Hostess/hostess.service';
import { ToastOptions } from 'ng2-toastr';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { OtherSettingsService } from '../defaultsettings/othersettings/other-settings.service'
import { StaffService } from '../selectstaff/select-staff.service';
import * as cloneDeep from 'lodash/cloneDeep';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'seated',
  templateUrl: './seated.component.html',
  styleUrls: ['./seated.component.css'],
  providers: [ToastsManager, ToastOptions]
})
export class SeatedComponent implements OnInit {

  public seatedinfo: any = [];
  public isenabled = false;
  private restaurantName: any;
  private restarauntid: any;
  private truflid;
  public items: any = [];
  private otherdiningtime;
  private othersettingsdetails: any = {};
  private activeServersDataList: any = {};
  private errorcode: any;
  private statusmessage: any;
  showDialog = false;
  public availableServeres: any;
  private emptybookingid;
  public commonmessage;
  private isempty;
  private billamount: any;
  private rewardtype: any;
  public showProfile: boolean = false;
  public showserversflyout: boolean = false;
  public currentSelectedUser: string;
  private username;
  private pic;
  private profileData: any = [];
  private tableTypeArr: any = [];
  private usertype: any;
  public serversflyout: boolean = false;
  public emptyTablesList: string = '';
  private tableTypesArrayList: any = [];
  public checkDropList: string = '';  
  private RestaurantId;
  private selectedRow: Number;
  private data: any;
  private bookingid;
  public Source_seatedinfo: any;
  private restaurantid: any;
  public selectedTableInfo: any = [];
  public TablesAssigned = [];
  public finalSortedTables: any = [];
  public largePartiesList: any = [];
  public ConsolidatedlargePartiesList: any = [];
  public tablesAssignedToTops: any = {};
  public serversListSegration: any = [];  
  public tableTypes: any = {};
  public serversObject: any = [];
  public finalServersObject: any = [];
  public consolidatedServersObject: any = [];
  public multiLatblesSet: any = [];
  public unique_array: any;
  public multiLatbleslist: any = {};
  private isEdit: any = {};
  private sortedListrByServers: any = {};
  private serversListArray: any = [];
  private consolidatedServersList: any = [];
  private selectedServerID: string = '' ;
  private selectedRestaurantID: string = '' ;
  private selectedBookingID: string = '';
  private multipleBookingIDs: string = '';
  private noProfilePicture: boolean = false;
  /*added code*/
  public style;
  public restID = localStorage.getItem('restaurantid');
  public SessionID = localStorage.getItem('SessionID');
  public offerType: any;
  public sorted_seatedinfo: any;
  public modalRef: BsModalRef;
  public serverTblNO: any;
  public ServerDetailsList: any = [];
  public tableBookingId: any;
  public show: boolean = true;
  public selectTableBookingId: any;
  public selectTablePartySize: any;
  public noSeatedTables: boolean = false;
  public openDate: any;
  public tableCircleColor: any;
  public tableslength: number;
  /*added code end*/
  constructor(private seatedService: SeatedService, private hostessService: HostessService, private loginService: LoginService, private _othersettings: OtherSettingsService, private router: Router, private _toastr: ToastsManager, vRef: ViewContainerRef, private selectstaff: StaffService, private modalService: BsModalService, private location: Location) {

    this._toastr.setRootViewContainerRef(vRef);
    this.restaurantName = this.loginService.getRestaurantName();
    this.restarauntid = this.loginService.getRestaurantId();
    this.style = JSON.parse(localStorage.getItem("stylesList")) || [];
    //called first time before the ngOnInit()
    /*servers List for model */
    this.seatedService.GetServerDetails(this.restID).subscribe(res => {
      this.ServerDetailsList = res._Data.ManageServer;
     // console.log(this.ServerDetailsList);
      /*     this.ServerListLoader = false;*/
    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
    })
    /*servers List for model end */
   
  }

  ngOnInit() {
    this.openDate = localStorage.getItem('OpenDate');
    this.getSeatedDetails(this.restarauntid, this.openDate, this.SessionID);
    if (localStorage.getItem("stylesList") == null) {
      this.dummy();
    }


  }

  //subscribe the seated data over here
  getSeatedDetails(restarauntid, openDate, SessionID) {
    this.selectedTableInfo = [];
    this.selectTableBookingId = "";
    let that = this;
    this._othersettings.getOtherSettingsDetails(restarauntid).subscribe((res: any) => {
      this.othersettingsdetails = res._Data;  

      this.otherdiningtime = this.othersettingsdetails[0].DiningTime;
      this.seatedService.getSeatedDetails(restarauntid, this.openDate, this.SessionID).subscribe((res: any) => {
        //this.seatedinfo = res._Data.sort(function (a, b) {
        //  return a.TableNumbers - b.TableNumbers;
        //  })
        // let cloned = this.seatedinfo.map(x => Object.assign({}, x));
        //this.sorted_seatedinfo = this.seatedinfo.sort(function (a, b) {
        //  return a.HostessID - b.HostessID
        //})
        this.activeServersDataList = res._Data.ActiveServers;
        this.sorted_seatedinfo = res._Data.SeatedDetails;
        this.Source_seatedinfo = cloneDeep(res._Data.SeatedDetails);
        // console.log(this.sorted_seatedinfo);
        this.finalServersObject = [];
        this.serversListArray = [];
        //sorting by servers
        for (var server = 0; server < this.sorted_seatedinfo.length; server++) {
          var currentServer = this.sorted_seatedinfo[server].HostessName;
          this.serversListArray.push(currentServer);
        }
        //filnal available servers list
        this.consolidatedServersList = this.serversListArray.filter(function (elem, index, self) {
          return index == self.indexOf(elem);
        });
        // assignint table tops 
        for (var i = 0; i < this.sorted_seatedinfo.length; i++) {
          var tableType = this.sorted_seatedinfo[i].SeatedTableType;
          this.tableTypeArr = tableType.split(",");
          this.multiLatblesSet = [];
          if (this.tableTypeArr.length > 1) {
            this.sorted_seatedinfo[i].TableType = "Large Parties";
          } else {
            this.sorted_seatedinfo[i].TableType = this.tableTypeArr + "-Top";
          }
          if (this.sorted_seatedinfo[i].TableType == "Large Parties") {
            var tableType = this.sorted_seatedinfo[i].SeatedTableType;
            var tableNum = this.sorted_seatedinfo[i].TableNumbers;
            var tablesTypeArr = tableType.split(",");
            var tableNumArr = tableNum.split(",");
            for (var inn = 0; inn < tablesTypeArr.length; inn++) {
              this.multiLatbleslist = {
                "TableTop": tablesTypeArr[inn],
                "TableNumber": tableNumArr[inn]
              }
              this.multiLatblesSet.push(this.multiLatbleslist);
              this.sorted_seatedinfo[i].SeatedTableType = this.multiLatblesSet;
            }
          }
          if (this.sorted_seatedinfo[i].pic == null || this.sorted_seatedinfo[i].pic == '' || this.sorted_seatedinfo[i].pic == undefined) {
            this.noProfilePicture = true;
          } 
        }

        //Assigning Tables to Server;
        for (var ser = 0; ser < this.consolidatedServersList.length; ser++) {
          var top = this.consolidatedServersList[ser];
          this.serversObject = [];
          for (var list = 0; list < this.sorted_seatedinfo.length; list++) {
            this.serversListSegration = {
              "serverName": this.consolidatedServersList[ser],
              "tables": []
            };
            if (this.sorted_seatedinfo[list].HostessName == top) {
              this.serversObject.push(this.sorted_seatedinfo[list]);
            }
            this.serversListSegration.tables = this.serversObject;
          }

          this.finalServersObject.push(this.serversListSegration);

        }
        if (this.finalServersObject.length == 0) {
          this.noSeatedTables = true;
        } 
        //Forming the internal tables struture.
        for (var x = 0; x < this.finalServersObject.length; x++) {
          this.tableTypesArrayList = [];
          for (var tab = 0; tab < this.finalServersObject[x].tables.length; tab++) {
            this.tableTypesArrayList.push(this.finalServersObject[x].tables[tab].TableType);
          }
          var unique_array = []
          this.unique_array = this.tableTypesArrayList.filter(function (elem, index, self) {
            return index == self.indexOf(elem);
          });

          for (var t = 0; t < this.unique_array.length; t++) {
            var top = this.unique_array[t];
            this.TablesAssigned = [];

            for (var s = 0; s < this.finalServersObject[x].tables.length; s++) {
              this.tablesAssignedToTops = {
                "tableTopDescription": this.unique_array[t],
                "TablesAssigned": []
              };
              
              if (top == this.finalServersObject[x].tables[s].TableType) {
                this.TablesAssigned.push(this.finalServersObject[x].tables[s]);

              }
            }
           
            this.tablesAssignedToTops.TablesAssigned = this.TablesAssigned;
            //console.log(this.tablesAssignedToTops);
            //this.finalServersObject[x].tables = []
            this.finalServersObject[x].tables.push(this.tablesAssignedToTops);
            this.noSeatedTables = false;
          }
        }
              
      });
    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
      })
   
  }

  createStarRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }
  createRange(SeatedTableType,tableTop) {
    //console.log(SeatedTableType);
    if (this.finalServersObject.length == 1) {
      var items: any = [];
      if (SeatedTableType.TableType != "Large Parties") {
        if (this.selectTableBookingId != SeatedTableType.BookingID) {
          for (var i = 1; i <= SeatedTableType.SeatedTableType; i++) {
            // var circleObj =
            if (SeatedTableType.BookingID != this.selectTableBookingId) {
              this.selectTableBookingId = SeatedTableType.BookingID
              this.selectTablePartySize = SeatedTableType.PartySize
            }
            this.selectTablePartySize -= 1;
            if (this.selectTablePartySize >= 0) {
              items.push(true);
            } else {
              items.push(false);
            }
          }
          this.tableCircleColor = cloneDeep(items);
          return items;
        } else {
          return this.tableCircleColor;
        }
      } else {
       
          var circleObj = Number(tableTop);
          for (var j = 1; j <= circleObj; j++) {
            if (SeatedTableType.BookingID != this.selectTableBookingId) {
              this.selectTableBookingId = SeatedTableType.BookingID;
              this.selectTablePartySize = SeatedTableType.PartySize;
              this.tableslength = SeatedTableType.SeatedTableType.length;
            }// var circleObj =

            this.selectTablePartySize -= 1;
            if (this.selectTablePartySize >= 0) {
              items.push(true);
            } else {
              items.push(false);
            }
          }
          
        this.tableslength -= 1;
        if (this.tableslength == 0) {
          this.selectTableBookingId = "";
        }
          this.tableCircleColor = cloneDeep(items);
          return items;
        
       
       
      }
    } else {
      var items: any = [];
      if (SeatedTableType.TableType != "Large Parties") {
        if (this.selectTableBookingId != SeatedTableType.BookingID) {
          for (var i = 1; i <= SeatedTableType.SeatedTableType; i++) {
            // var circleObj =
            if (SeatedTableType.BookingID != this.selectTableBookingId) {
              this.selectTableBookingId = SeatedTableType.BookingID
              this.selectTablePartySize = SeatedTableType.PartySize
            }
            this.selectTablePartySize -= 1;
            if (this.selectTablePartySize >= 0) {
              items.push(true);
            } else {
              items.push(false);
            }
          }
          this.tableCircleColor = cloneDeep(items);
          return items;
        } else {
          return this.tableCircleColor;
        }
      } else {

        var circleObj = Number(tableTop);
        for (var j = 1; j <= circleObj; j++) {
          if (SeatedTableType.BookingID != this.selectTableBookingId) {
            this.selectTableBookingId = SeatedTableType.BookingID
            this.selectTablePartySize = SeatedTableType.PartySize
          }// var circleObj =
          this.selectTablePartySize -= 1;
          if (this.selectTablePartySize >= 0) {
            items.push(true);
          } else {
            items.push(false);
          }
        }
        this.tableCircleColor = cloneDeep(items);
        return items;
      }
    }
    
  }
  getOpacity(value) {

    if (value.TimeRemaining >= 61) {
      return `0.3`;
    }
    else if (value.TimeRemaining >= 51 && value.TimeRemaining <= 60) {
      return `0.4`;
    }
    else if (value.TimeRemaining >= 41 && value.TimeRemaining <= 50) {
      return `0.5`;
    }
    else if (value.TimeRemaining >= 31 && value.TimeRemaining <= 40) {
      return `0.6`;
    }
    else if (value.TimeRemaining >= 21 && value.TimeRemaining <= 30) {
      return `0.7`;
    }
    else if (value.TimeRemaining >= 11 && value.TimeRemaining <= 20) {
      return `0.8`;
    }
    else if (value.TimeRemaining >= 6 && value.TimeRemaining <= 10) {
      return `0.9`;
    }
    else if (value.TimeRemaining <= 5) {
      return `1`;
    }
    else {
      return {};
    }

  }

  public toggles = [
    { value: 0 },
    { value: 1 }
  ];

  public get(data: any, type: any) {
    var details = {
      "RestaurantID": data['RestaurantID'],
      "TruflUserID": data['TruflUserID'],
      "AmenitiName": type,
      "AmenitiChecked": !data[type]
    }
    this.isenabled = true;
    if (this.items.length) {
      let index = this.items.findIndex(function (item) {
        return item.TruflUserID === data['TruflUserID'] && item.AmenitiName === type;
      });

      if (index >= 0) {
        this.items[index] = details;
      } else {
        this.items.push(details);
      }
    } else {
      this.items.push(details);
    }
  }

  seatedUserDetails(data, index) {
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
    localStorage.setItem("uniqueid", "seated");

  }

  selectedTable(s,k,t) {
    var arrLength = this.selectedTableInfo.length;
    var finalObject = arrLength - 1;
    var indx = "table" + s + k + t;
    var val = ""+s + k + t;
    if (this.selectedTableInfo.length == 0) {
      document.getElementById(indx).classList.add('divBorder');
      this.selectedTableInfo.push(this.finalServersObject[s].tables[k].TablesAssigned[t]);
     
    } else {
      for (var i = 0; i < this.selectedTableInfo.length; i++) {
        if (this.finalServersObject[s].tables[k].TablesAssigned[t].BookingID == this.selectedTableInfo[i].BookingID) {
          this.selectedTableInfo.splice(i, 1);
          document.getElementById(indx).classList.remove('divBorder');
          break;
        } else if (this.finalServersObject[s].tables[k].TablesAssigned[t].BookingID != this.selectedTableInfo[i].BookingID && i == finalObject) {
          this.selectedTableInfo.push(this.finalServersObject[s].tables[k].TablesAssigned[t]);
          document.getElementById(indx).classList.add('divBorder');
          break;
        }

      }
    }
   // console.log(this.selectedTableInfo);
  }

  closeflyout() {   
    this.getSeatedDetails(this.restarauntid, this.openDate, this.SessionID);
    this.selectedTableInfo = [];
  }

  public serverflyoutClicks() {
    this.getAvailableServersList();
    this.serversflyout = true;
    if (this.showserversflyout == false) {
      this.showserversflyout = true;
    }



  }
  getAvailableServersList() {
    this.hostessService.getAvailableServersList(this.restID).subscribe((res: any) => {
      this.availableServeres = res._Data;
    });
    //console.log("serevers list");
    //console.log(this.availableServeres);
  }

  //Multiple Print Function

  multiplePrint() {
    for (var i = 0; i < this.selectedTableInfo.length; i++) {
      this.printrow(this.selectedTableInfo[i]);
    }
      
  }

  //print functionality
  printrow(item) {
    this.truflid = item.TruflUserID;
    this.restaurantid = item.RestaurantID;
    this.usertype = item.TruflMemberType;
    this.showProfile = false;
    var WinPrint = window.open('', '_blank', 'left=0,top=0,width=800,height=auto,overflow=hidden,toolbar=0,scrollbars=0,status=0');
    WinPrint.document.write('<html><head><title></title><style>*{font-family:arial, sans-serif;}td,th{text-transform:uppercase;color:#000;}</style>');
    WinPrint.document.write('<link rel="stylesheet" href="assets/css/print.css" media="print" type="text/css"/>');
    WinPrint.document.write('</head><body> <h2 style="text-transform:uppercase;font-family:arial, sans-serif;text-align:center;display:block;width:100%;margin:0 0 20px 0;">Receipt</h2>');
    var arr = [
      {
        key: "TRUFL STATUS",
        value: ''
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

    WinPrint.document.write('<table style="margin:0%;"  width="100%">');
    let selected = this;
    arr.forEach((item) => {
      if (item.key == "undefined" || item.key == "null") {
        item.key = '';
      }
      if (item.value == undefined || item.value == null) {
        item.value = '';
      }
      WinPrint.document.write('<tr><th align="left" style="font-size:11px !important; width:140px;">' + item.key + '</th><td  align="left" style="font-size:11px !important;font-weight:400;width:140px;">' + item.value + '</td></tr>');
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

  closeserversflyout() {
    this.showserversflyout = false;
  }


  editguest(value) {
    localStorage.setItem('isEdit', JSON.stringify(value));
    localStorage.setItem('uniqueid', 'seated');
    
    this.router.navigateByUrl('/editguest');
  }

  removeTable(item) {
    let obj1 = {
      "TruflUserID": item.TruflUserID,
      "PushNotificationMsg": "Thank You for dinning with trufl"
    }


    this.hostessService.pushNotification(obj1).subscribe((res: any) => {
      if (res == true) {
        // this.showDialog = false;
        this._toastr.success('Message Sent Successfully');

      }
      else {
        this._toastr.error('an error occured')
      }

    })
    this.showDialog = true;
    this.commonmessage = "Are you sure this table is empty, and you want to remove  table from this list? This cannot be undone";
  }

  emptyTable() {
    this.emptyTablesList = '';
    for (var i = 0; i < this.selectedTableInfo.length; i++) {
      var item = this.selectedTableInfo[i].BookingID;
      if (i == 0) {
        this.emptyTablesList = this.emptyTablesList + item;
      } else if (i > 0) {
        this.emptyTablesList = this.emptyTablesList + "," + item;
      }
    }

    this.seatedService.postUpdateEmptyBookingStatus(this.emptyTablesList).subscribe((res: any) => {

      this.statusmessage = res._StatusMessage;
      this.errorcode = res._ErrorCode;
      if (this.errorcode === 0) {
        this.bookingStatus();
      }
      else if (this.errorcode === 1) {
        this._toastr.error(this.statusmessage);
      }
    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
      })
    this.showDialog = false;


    //this.seatedService.postUpdateEmptyBookingStatus(this.emptyTablesList).subscribe((res: any) => { });
    //// console.log(this.emptyTablesList);
    //this.getSeatedDetails(this.restarauntid);
    //this.showDialog = false;

    //this.showDialog = !this.showDialog;
    //this.emptybookingid = bookingid;
    //this.showProfile = false;
    //this.truflid = seatsinfo.TruflUserID;
    //if (seatsinfo.OfferType === 3) {
    //  this.billamount = seatsinfo.OfferAmount;
    //}
    //else {
    //  this.billamount = null;
    //}
   // this.rewardtype = 'BILL_AMOUNT';
   // this.isempty = "empty";
    // this.commonmessage = "Are you sure this table is empty, and you want to remove  " + seatsinfo.TUserName + " from this list? This cannot be undone";
    
  }

  bookingStatus() {
    for (var i = 0; i < this.selectedTableInfo.length; i++) {
      this.truflid = this.selectedTableInfo[i].TruflUserID;
      this.restarauntid = this.selectedTableInfo[i].RestaurantID;
      this.billamount = this.selectedTableInfo[i].OfferAmount;
      this.offerType = this.selectedTableInfo[i].OfferType;
      this.rewardtype = 'BILL_AMOUNT';

      if (this.billamount != null && this.billamount != '' && (this.offerType == 3 || this.offerType == 5)) {
        this.seatedService.postPremiumUserdetails(this.truflid, this.restarauntid, this.billamount, this.rewardtype).subscribe((res: any) => {
        });
      }

    } 
    this.getSeatedDetails(this.restarauntid, this.openDate, this.SessionID);
}

  checkdrop() {
    this.checkDropList = '';
    for (var i = 0; i < this.selectedTableInfo.length; i++) {
      var item = this.selectedTableInfo[i].BookingID;
      if (i == 0) {
        this.checkDropList = this.checkDropList + item;
      } else if (i > 0) {
        this.checkDropList = this.checkDropList + "," + item;
      }
    }
    this.seatedService.postUpdateCheckReceived(this.checkDropList).subscribe((res: any) => { });
    this.getSeatedDetails(this.restarauntid, this.openDate, this.SessionID);
   // console.log(this.checkDropList);
  }

  autoCheckdrop(selectedTableInfo,value) {
    if (value == 1 || value == 2)
    {
      this.selectedTableInfo.push(selectedTableInfo);
      this.checkDropList = '';
    for (var i = 0; i < this.selectedTableInfo.length; i++) {
      var item = this.selectedTableInfo[i].BookingID;
      if (i == 0) {
        this.checkDropList = this.checkDropList + item;
      } else if (i > 0) {
        this.checkDropList = this.checkDropList + "," + item;
      }
    }
    this.seatedService.postUpdateCheckReceived(this.checkDropList).subscribe((res: any) => { });
      this.getSeatedDetails(this.restarauntid, this.openDate, this.SessionID);
    // console.log(this.checkDropList);
  }
  }
  //checkDrop(seatinfo, bookingid) {
  //  seatinfo.CheckReceived = !seatinfo.CheckReceived;
  //  this.emptybookingid = bookingid;
  //  this.seatedService.postUpdateCheckReceived(this.emptybookingid).subscribe((res: any) => {
  //    this.getSeatedDetails(this.restarauntid);


  //  }, (err) => {
  //    if (err === 0) {
  //      this._toastr.error('network error')
  //    }
  //  })

  //}
  // empty table post over here
  Ok() {
  
    this.emptyTable();


      //this.seatedService.postUpdateEmptyBookingStatus(this.emptybookingid).subscribe((res: any) => {

      //  this.statusmessage = res._StatusMessage;
      //  this.errorcode = res._ErrorCode;
      //  this.showDialog = !this.showDialog;
      //  if (this.errorcode === 0) {
      //    this.getSeatedDetails(this.restarauntid);
      //    if (this.billamount != null && this.billamount != '') {
      //      this.seatedService.postPremiumUserdetails(this.truflid, this.restarauntid, this.billamount, this.rewardtype).subscribe((res: any) => {
      //      });
      //    }
      //  }
      //  else if (this.errorcode === 1) {
      //    this._toastr.error(this.statusmessage);
      //  }
      //}, (err) => {
      //  if (err === 0) {
      //    this._toastr.error('network error')
      //  }
      //})

    
  } 


  /* Function to assign colors to servers. */
  public dummy() {
    /*      this.colorsLoader = true;*/
    var colorsList = '477B6C,8D6C8D,51919A,9A8A4A,9A7047,48588E,919A62,86a873,048ba8,3c6997,bb9f06';
    this.selectstaff.assignServercolor(colorsList, this.restID).subscribe((res: any) => {
     // console.log(res);

      for (let i = 0; i < res._Data.length; i++) {
        this.style[res._Data[i].UserID] = {
          "background-color": res._Data[i].backgroundcolor,
          "border": res._Data[i].border,
          "border-radius": res._Data[i].borderradius
        }
      }
      localStorage.setItem("stylesList", JSON.stringify(this.style));
      /*     this.colorsLoader = false;*/
    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
    });
  }


  Cancel() {
    this.showDialog = !this.showDialog;
  }



  slow( bookingid) {
  //  seatedinfo.jumpcount = 0;
   // alert("Slow");
    this.seatedService.postUpdateExtraTime(bookingid, +5).subscribe((res: any) => {
      this.getSeatedDetails(this.restarauntid, this.openDate, this.SessionID);
    })
  }

  jump( bookingid) {
   // alert("Fast");
    this.seatedService.postUpdateExtraTime(bookingid, -5).subscribe((res: any) => {
      this.getSeatedDetails(this.restarauntid, this.openDate, this.SessionID);
    })
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
  }

  settingsPage() {
    this.router.navigateByUrl('/defaultSettings');
  }

  public hasData(): boolean {
    return (this.seatedinfo != null && this.seatedinfo.length > 0);
  }

  navigateToaddGuest() {
    localStorage.removeItem("acceptoffer rowdata");
    this.router.navigateByUrl('/addGuest');
  }

  switchtblModal(Bid: any, index: any, template: any) {
    // this.switchUser = true;
    // this.checkDrop = false;
    //  this.emptyTbl = false
     
    //this.serverTblNO = tblno;
    //  this.isDrop[index] = false;
      this.tableBookingId = Bid;
    this.openModal(template);
  }
  public openModal(template) {
    this.modalRef = this.modalService.show(template); // {3}
  }
  /* function to call service to switch server  */


  switchMultipleServer(template: any, value) {
    this.multipleBookingIDs = '';
    if (this.selectedTableInfo.length == 0) {
      this.multipleBookingIDs = value.BookingID;
    } else {
      for (var i = 0; i < this.selectedTableInfo.length; i++) {
        if (i + 1 == this.selectedTableInfo.length) {
          this.multipleBookingIDs = this.multipleBookingIDs + this.selectedTableInfo[i].BookingID;
        } else {
          this.multipleBookingIDs = this.multipleBookingIDs + this.selectedTableInfo[i].BookingID + ',';
        }

        //this.tableTypeArr + "-Top";
      }
  }
    this.openModal(template);  
  }

  switchSelectedServer(server) {
    this.seatedService.switchServer(server, this.multipleBookingIDs).subscribe((res: any) => {
      this.statusmessage = res._StatusMessage;
      this.errorcode = res._ErrorCode;
      if (res._StatusMessage == 'Success') {
        // this.loadServerTable();
        //  this.loadCapacityTable();
        //  this.loadServerViseTable();
        
      }
      else if (this.errorcode === 1) {
        this._toastr.error(this.statusmessage);
      }
    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
      })
    this.getSeatedDetails(this.restarauntid, this.openDate, this.SessionID);
    this.modalRef.hide();
  }
  dismissmodal() {
    this.modalRef.hide();
  }

}
