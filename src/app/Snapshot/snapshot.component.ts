
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from "@angular/router";
import { SnapshotService } from "./Snapshot.Service";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastOptions } from 'ng2-toastr';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { StaffService } from '../selectstaff/select-staff.service';
import { OtherSettingsService } from '../defaultsettings/othersettings/other-settings.service'
import { concat } from 'rxjs/observable/concat';
import * as cloneDeep from 'lodash/cloneDeep';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.css'],
  providers: [SnapshotService, ToastsManager, ToastOptions]
})
export class SnapShotComponent implements OnInit {
  public isCapacitydiv: boolean = true;
  public isServerdiv: boolean = false;
  public isTablediv: boolean = false;
  public CapacityLiast: any = [];
  public ServerWiseList: any = [];
  public TableWiseList: any = [];
  public ServerDetailsList: any = [];
  public isDrop: any = [];
  public tblResLength: any;
  public className: any = [];
  public switchUser: boolean = true;
  public checkDrop: boolean = false;
  public emptyTbl: boolean = false;
  public restID = localStorage.getItem('restaurantid');
  public RestaurantAdminID = localStorage.getItem('LoggedInUser');
  public serverTblNO: any;
  public guestName: string;
  public emailAddress: string;
  public mobileNumber: string;
  public style;
  private errorcode: any;
  private statusmessage: any;
  public modalRef: BsModalRef;
  public Tables: any = [];
  public tableIndex: string;
  public showProfile: any = false;
  public flyoutTable: any = [];
  public selectedTableList: any = [];
  public selectedTableTypeList: any = [];
  public classapply: boolean = false;
  public activeServer: any;
  public partySize: any = 0;
  public totalTableSelcted: any;
  public partySizeIncrese: boolean = false;
  public tableSizeIncrese: boolean = false;
  public tooManyTableCheck: any;
  public selectedTableNumbers:string;
  public selectedHostessName: string;
  public selectedHostessID: string;
  public selectedSeatedTableType: string;
  public selectedTableName: string;
  public selectedtableObj: any = [];
  public HostessNameExist: any;
  public othersettingdetails: any = [];
  public getseatedinfoPrice_settings: any;
  public RestaurantGetSeatedDetailsList: any;
  public gsnTable: any = [];
  public gsnTableExist: boolean = false;
  public gsnDropped: boolean = false;
  public seatflyout: boolean = false;
  public gsnflyout: boolean = false;
  public gsnEditable: boolean = false;
  public flyoutDropped: boolean = false;
  public leastOccupiedHostessObj: any;
 // public disableSub: boolean=false;
  /* public ByCapacityTblLoader: boolean = false;
   public ByServerTblLoader: boolean = false;
   public ByTableLoader: boolean = false;
   public ServerListLoader: boolean = false;
   public colorsLoader: boolean = false;*/


  constructor(private router: Router, private _SnapshotService: SnapshotService, private selectstaff: StaffService, private modalService: BsModalService, private _toastr: ToastsManager, vRef: ViewContainerRef, private _othersettingsservice: OtherSettingsService) {
    this._toastr.setRootViewContainerRef(vRef);
    //this.style = JSON.parse(localStorage.getItem("stylesList")) || [];
    console.log(this.style);
    this.loadData();
  }


  loadData() {
  
   this.Tables = [];
    this.showProfile = false;
    this.flyoutTable= [];
    this.selectedTableList = [];
    this.selectedTableTypeList = [];
    this.classapply= false;
    this.isCapacitydiv = true;
    this.isServerdiv = false;
    this.isTablediv = false;
    this. partySize= 0;
    this.partySizeIncrese = false;
    this.tableSizeIncrese= false;
    this.selectedtableObj= [];
    this.othersettingdetails= [];
    this.RestaurantGetSeatedDetailsList=[];
    this.gsnTable= [];
    this.gsnTableExist= false;
    this.gsnDropped= false;
    this.seatflyout= false;
    this.gsnflyout= false;
    this.gsnEditable= false;
    this.flyoutDropped= false;
    /*     this.ServerListLoader = true;*/

    this._SnapshotService.GetServerDetails(this.restID).subscribe(res => {
      this.ServerDetailsList = res._Data.ManageServer;
      /*     this.ServerListLoader = false;*/
    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
    })

    this._SnapshotService.GetRestaurantGetSeatedNow(this.restID).subscribe(res => {
      this.RestaurantGetSeatedDetailsList = res._Data.GetSeatedNow;
      if (res._Data.GetSeatedNow == undefined) {
        this.RestaurantGetSeatedDetailsList = []
      }
      if (this.RestaurantGetSeatedDetailsList.length > 0) {
        this.gsnTableExist = true;
      }
    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
    })

    this._othersettingsservice.getOtherSettingsDetails(this.restID).
      subscribe((res: any) => {
        this.othersettingdetails = res._Data;
        this.getseatedinfoPrice_settings = {
          "DefaultTableNowPrice": this.othersettingdetails[0].DefaultTableNowPrice,
          "MinimumTableNowPrice": this.othersettingdetails[0].MinimumTableNowPrice
        };

      }, (err) => {
        if (err === 0) {
          this._toastr.error('network error')
        }
      });
    this.loadCapacityTable();
    this.loadServerTable();
    this.loadServerViseTable();
  }
  ngOnInit() {
    if (localStorage.getItem("stylesList") == null) {
      this.dummy();
    }
  }

 
  SeatflyoutClicks() {
    this.seatflyout = true;
    this.gsnflyout = false;

    if (this.showProfile == false) {
      this.showProfile = true;
    }
    //else {
    //  this.loadData();
    //}
  }

  gsnflyoutClicks() {
    this.seatflyout = false;
    this.gsnflyout = true;

    if (this.showProfile == false) {
      this.showProfile = true;
    }
    //else {
    //  this.loadData();
    //}
  }

  public openProile(value, selectdropdiv) {
    if (!this.showProfile) {
      if (value.IconStatus == 4) {
      if (value.selected == false && value.GetSeatedNow == false) {
        value.selected = true;
        this.selectedTableList.push(value);

        this.flyoutTable = cloneDeep(this.Tables);
        for (let j = 0; j < this.flyoutTable.length; j++) {
          this.flyoutTable[j].Tables = [];
        }

        this.selectedTableTypeList = [];
        for (let m = 0; m < this.selectedTableList.length; m++) {
          this.selectedTableTypeList.push(this.selectedTableList[m].TableType);
        }
        this.selectedTableTypeList.sort(function (a, b) { return a - b });
        if (this.gsnEditable == true) {
          this.RestaurantGetSeatedDetailsList.push(value);
          this.gsnTable = cloneDeep(this.Tables);
          for (let j = 0; j < this.gsnTable.length; j++) {
            this.gsnTable[j].Tables = [];
          }
        }
        for (let j = 0; j < this.Tables.length; j++) {
          for (let m = 0; m < this.selectedTableList.length; m++) {
            for (let h = 0; h < this.Tables[j].Tables.length; h++) {
              if (this.Tables[j].Tables[h].TableTypeDesc == this.selectedTableList[m].TableTypeDesc)
                if (this.Tables[j].Tables[h].TableNumber == this.selectedTableList[m].TableNumber) {
                  this.flyoutTable[j].Tables.push(this.selectedTableList[m]);
                }
            }
          }
          if (this.gsnEditable == true) {
            for (let m = 0; m < this.RestaurantGetSeatedDetailsList.length; m++) {

              if (this.Tables[j].TableName == this.RestaurantGetSeatedDetailsList[m].TableTypeDesc) {
                this.gsnTable[j].Tables.push(this.RestaurantGetSeatedDetailsList[m]);
              }
              for (let h = 0; h < this.Tables[j].Tables.length; h++) {
                if (this.Tables[j].Tables[h].TableNumber == this.RestaurantGetSeatedDetailsList[m].TableNumber) {

                  this.Tables[j].Tables[h].gsnSelected = true;
                }

              }
            }
          }
        }
        console.log("table Selected");
        console.log(value);
        console.log("table selected left");
        console.log(this.flyoutTable);
        console.log("selectedTableTypeList");
        console.log(this.selectedTableTypeList);
        this.partySize = 0;
        this.totalTableSelcted = 0;
        for (let i = 0; i < this.selectedTableTypeList.length; i++) {
          this.partySize += this.selectedTableTypeList[i];
          this.totalTableSelcted += this.selectedTableTypeList[i];
        }
      }
      else if (value.selected == true) {
        for (let j = 0; j < this.flyoutTable.length; j++) {
          for (let h = 0; h < this.flyoutTable[j].Tables.length; h++) {
            if (this.flyoutTable[j].Tables[h].TableTypeDesc == value.TableTypeDesc)
              if (this.flyoutTable[j].Tables[h].TableNumber == value.TableNumber) {
                this.flyoutTable[j].Tables.splice(h, 1);
              }
          }
        }
        for (let j = 0; j < this.gsnTable.length; j++) {
          for (let h = 0; h < this.gsnTable[j].Tables.length; h++) {
            if (this.gsnTable[j].Tables[h].TableTypeDesc == value.TableTypeDesc)
              if (this.gsnTable[j].Tables[h].TableNumber == value.TableNumber) {
                this.gsnTable[j].Tables.splice(h, 1);
              }
          }
        }
        for (let j = 0; j < this.selectedTableList.length; j++) {
          if (this.selectedTableList[j].TableTypeDesc == value.TableTypeDesc) {
            if (this.selectedTableList[j].TableNumber == value.TableNumber) {
              this.selectedTableList.splice(j, 1);
            }
          }
        }
        for (let j = 0; j < this.RestaurantGetSeatedDetailsList.length; j++) {
          if (this.RestaurantGetSeatedDetailsList[j].TableTypeDesc == value.TableTypeDesc) {
            if (this.RestaurantGetSeatedDetailsList[j].TableNumber == value.TableNumber) {
              this.RestaurantGetSeatedDetailsList.splice(j, 1);
            }
          }
        }
        for (let j = 0; j < this.Tables.length; j++) {
          for (let h = 0; h < this.Tables[j].Tables.length; h++) {
            if (this.Tables[j].Tables[h].TableTypeDesc == value.TableTypeDesc)
              if (this.Tables[j].Tables[h].TableNumber == value.TableNumber) {
                this.Tables[j].Tables[h].selected = false;
              }
          }
        }
        this.selectedTableTypeList = [];
        for (let m = 0; m < this.selectedTableList.length; m++) {
          this.selectedTableTypeList.push(this.selectedTableList[m].TableType);
        }
        this.totalTableSelcted = 0;
        for (let i = 0; i < this.selectedTableTypeList.length; i++) {
          this.totalTableSelcted += this.selectedTableTypeList[i];
        }
      }
    }
  }
  }

  public addTable(value) {
      
    if (value.selected == false && value.GetSeatedNow == false) {
      for (let j = 0; j < this.Tables.length; j++) {
        for (let h = 0; h < this.Tables[j].Tables.length; h++) {
          if (this.Tables[j].Tables[h].TableTypeDesc == value.TableTypeDesc)
            if (this.Tables[j].Tables[h].TableNumber == value.TableNumber) {
              this.Tables[j].Tables[h].selected = true;
            }
        }
      }
        this.selectedTableList.push(value);
        this.flyoutTable = cloneDeep(this.Tables);
        for (let j = 0; j < this.flyoutTable.length; j++) {
          this.flyoutTable[j].Tables = [];
        }
        this.selectedTableTypeList = [];
        for (let m = 0; m < this.selectedTableList.length; m++) {
          this.selectedTableTypeList.push(this.selectedTableList[m].TableType);
        }
        this.selectedTableTypeList.sort(function (a, b) { return a - b });
        for (let j = 0; j < this.Tables.length; j++) {
          for (let m = 0; m < this.selectedTableList.length; m++) {
            for (let h = 0; h < this.Tables[j].Tables.length; h++) {
              if (this.Tables[j].Tables[h].TableTypeDesc == this.selectedTableList[m].TableTypeDesc)
                if (this.Tables[j].Tables[h].TableNumber == this.selectedTableList[m].TableNumber) {
                  this.flyoutTable[j].Tables.push(this.selectedTableList[m]);
                }
            }
          }
      }
      this.totalTableSelcted = 0;
      for (let i = 0; i < this.selectedTableTypeList.length; i++) {
        this.totalTableSelcted += this.selectedTableTypeList[i];
      }

      if (parseInt(this.partySize) > this.totalTableSelcted) {
        this.partySizeIncrese = true;
      } else {
        this.partySizeIncrese = false;
      }
        console.log("table Selected");
        console.log(value);
        console.log("table selected left");
        console.log(this.flyoutTable);
        console.log("selectedTableTypeList");
        console.log(this.selectedTableTypeList);
      }
    
  }

  public addGsnTable(value) {
    if (this.gsnEditable) {
      if (value.gsnSelected == false) {
        for (let j = 0; j < this.Tables.length; j++) {
          for (let h = 0; h < this.Tables[j].Tables.length; h++) {
            if (this.Tables[j].Tables[h].TableTypeDesc == value.TableTypeDesc)
              if (this.Tables[j].Tables[h].TableNumber == value.TableNumber) {
                this.Tables[j].Tables[h].gsnSelected = true;
                this.Tables[j].Tables[h].IconStatus = 2;
              }
          }
        }
        value.gsnSelected = true;
        value.IconStatus = 2;
        this.RestaurantGetSeatedDetailsList.push(value);
        this.gsnTable = cloneDeep(this.Tables);
        for (let j = 0; j < this.gsnTable.length; j++) {
          this.gsnTable[j].Tables = [];
        }
        this.selectedTableTypeList = [];
        for (let m = 0; m < this.RestaurantGetSeatedDetailsList.length; m++) {
          this.selectedTableTypeList.push(this.RestaurantGetSeatedDetailsList[m].TableType);
        }
        this.selectedTableTypeList.sort(function (a, b) { return a - b });
        for (let j = 0; j < this.Tables.length; j++) {
          for (let m = 0; m < this.RestaurantGetSeatedDetailsList.length; m++) {
            if (this.Tables[j].TableName == this.RestaurantGetSeatedDetailsList[m].TableTypeDesc)
                this.gsnTable[j].Tables.push(this.RestaurantGetSeatedDetailsList[m]);
          }
        }
        console.log("table Selected");
        console.log(value);
        console.log("table selected left");
        console.log(this.gsnTable);
        console.log("selectedTableTypeList");
        console.log(this.RestaurantGetSeatedDetailsList);
      }
    }

  }

  public chekDrag(value) {
    if (value == 1) {
      return false;
    } else {
      return true;
    }
  }
  public drag(event, tableTops) {
    localStorage.setItem("tableDeSelected", JSON.stringify(tableTops));
   // var a = JSON.parse(event.dataTransfer.getData("tableDeSelected"));
    localStorage.setItem("componentDraggedId", event.target.id);
  }

  public allowDrop(event) {
    event.preventDefault();
  }

  public drop(event) {
    event.preventDefault();
    for (let i = 0; i < event.path.length; i++) {
      if (event.path[i].id == "flyoutTableDrop") {
        this.flyoutDropped = true
      } 
    }
    var data = cloneDeep(localStorage.getItem("componentDraggedId"));
    var value = cloneDeep(JSON.parse(localStorage.getItem("tableDeSelected")));
    localStorage.removeItem("componentDraggedId");
    localStorage.removeItem("tableDeSelected");
    if (data == "TableSelectedOutsideFlyout") {
      if (this.flyoutDropped == true) {
        if (this.seatflyout && value.IconStatus==4) {
          this.addTable(value);
          this.flyoutDropped = false;
        } else if (this.gsnflyout == true && value.IconStatus == 4) {
          this.addGsnTable(value);
          this.flyoutDropped = false;
        }
      }

    } else if (data == "flyoutTableAdded")
    {
      this.flyoutDropped = false;
      if (event.target.parentNode.id != "flyoutTableDrop") {
        if (this.seatflyout && value.IconStatus == 4) {
          for (let j = 0; j < this.flyoutTable.length; j++) {
            for (let h = 0; h < this.flyoutTable[j].Tables.length; h++) {
              if (this.flyoutTable[j].Tables[h].TableTypeDesc == value.TableTypeDesc)
                if (this.flyoutTable[j].Tables[h].TableNumber == value.TableNumber) {
                  this.flyoutTable[j].Tables.splice(h, 1);
                }
            }
          }
          for (let j = 0; j < this.selectedTableList.length; j++) {
            if (this.selectedTableList[j].TableTypeDesc == value.TableTypeDesc) {
              if (this.selectedTableList[j].TableNumber == value.TableNumber) {
                this.selectedTableList.splice(j, 1);
              }
            }
          }
          for (let j = 0; j < this.Tables.length; j++) {
            for (let h = 0; h < this.Tables[j].Tables.length; h++) {
              if (this.Tables[j].Tables[h].TableTypeDesc == value.TableTypeDesc)
                if (this.Tables[j].Tables[h].TableNumber == value.TableNumber) {
                  this.Tables[j].Tables[h].selected = false;
                }
            }
          }
          this.selectedTableTypeList = [];
          for (let m = 0; m < this.selectedTableList.length; m++) {
            this.selectedTableTypeList.push(this.selectedTableList[m].TableType);
          }
          this.totalTableSelcted = 0;
          for (let i = 0; i < this.selectedTableTypeList.length; i++) {
            this.totalTableSelcted += this.selectedTableTypeList[i];
          }
          if (parseInt(this.partySize) > this.totalTableSelcted) {
            this.partySizeIncrese = true;
          } else {
            this.partySizeIncrese = false;
          }
        }
        else if (this.gsnflyout == true && value.IconStatus == 2) {
          if (this.gsnEditable) {
            for (let j = 0; j < this.gsnTable.length; j++) {
              for (let h = 0; h < this.gsnTable[j].Tables.length; h++) {
                if (this.gsnTable[j].Tables[h].TableTypeDesc == value.TableTypeDesc)
                  if (this.gsnTable[j].Tables[h].TableNumber == value.TableNumber) {
                    this.gsnTable[j].Tables.splice(h, 1);
                  }
              }
            }
            for (let j = 0; j < this.RestaurantGetSeatedDetailsList.length; j++) {
              if (this.RestaurantGetSeatedDetailsList[j].TableTypeDesc == value.TableTypeDesc) {
                if (this.RestaurantGetSeatedDetailsList[j].TableNumber == value.TableNumber) {
                  this.RestaurantGetSeatedDetailsList.splice(j, 1);
                }
              }
            }
            for (let j = 0; j < this.Tables.length; j++) {
              for (let h = 0; h < this.Tables[j].Tables.length; h++) {
                if (this.Tables[j].Tables[h].TableTypeDesc == value.TableTypeDesc)
                  if (this.Tables[j].Tables[h].TableNumber == value.TableNumber) {
                    this.Tables[j].Tables[h].gsnSelected = false;
                    this.Tables[j].Tables[h].IconStatus = 4;
                  }
              }
            }
            console.log("table selected left");
            console.log(this.gsnTable);
            console.log("selectedTableTypeList");
            console.log(this.RestaurantGetSeatedDetailsList);
          }
        }
       
      }
    }
  
  }

  public partySizeChange() {
    if (parseInt(this.partySize) > this.totalTableSelcted) {
      this.partySizeIncrese = true;
    } else {
      this.partySizeIncrese = false;
    }
  }

  public startGetSeatedNow() {
    for (let j = 0; j < this.gsnTable.length; j++) {
      for (let m = 0; m < this.RestaurantGetSeatedDetailsList.length; m++) {
        if (this.gsnTable[j].TableName == this.RestaurantGetSeatedDetailsList[m].TableTypeDesc)
          this.RestaurantGetSeatedDetailsList[m].OfferAmount = this.gsnTable[j].TableDefaultPricenow;
      }
    }
    this._SnapshotService.startGetSeatedNowSubmit(this.RestaurantGetSeatedDetailsList).subscribe((res: any) => {
      this.statusmessage = res._StatusMessage;
      this.errorcode = res._ErrorCode;
      if (res._StatusMessage == 'Success') {
        this.loadData();
      }
      else if (this.errorcode === 1) {
        this._toastr.error(this.statusmessage);
      }
    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
    })
  }
  public selectLeastOccupied() {
    for (let m = 1; m < this.selectedTableList.length; m++) {
      if (this.selectedTableList[m].HostessID != 0)
      {
        return this.selectedTableList[m]
      }
    }
  }
  public seatThisGuest(guestName, emailAddress, mobileNumber) {
    if (parseInt(this.partySize) != 0) {
      this.tooManyTableCheck = cloneDeep(parseInt(this.partySize));
    for (let i = this.selectedTableTypeList.length - 1; i >= 0; i--) {
      this.tooManyTableCheck -= this.selectedTableTypeList[i];
      if (this.tooManyTableCheck <= 0 && i != 0) {
        this.tableSizeIncrese = true;
        return 0;
      } else {
        this.tableSizeIncrese = false;
      }
    }
    if (this.tableSizeIncrese == false && this.partySizeIncrese == false) {
      if (this.selectedTableList.length > 0) {
        this.selectedtableObj = [];
        this.selectedtableObj.push(this.selectedTableList[0])
        this.selectedTableNumbers = this.selectedTableList[0].TableNumber;
        this.selectedHostessName = this.selectedTableList[0].HostessName;
        this.selectedHostessID = this.selectedTableList[0].HostessID;
        this.selectedSeatedTableType = this.selectedTableList[0].TableType;
        this.selectedTableName = this.selectedTableList[0].TableName;
        for (let i = 0; i < this.ServerWiseList.length; i++) {
          for (let m = 0; m < this.selectedTableList.length; m++) {
            if (this.selectedTableList[m].HostessID == this.ServerWiseList[i].HostessID) {
              this.selectedTableList[m].hostessOccupied = this.ServerWiseList[i].OccupancyPer;
            }
            if (this.selectedTableList[m].HostessID == 0) {
              this.selectedTableList[m].hostessOccupied = 0;
            }
          }
        }
        this.leastOccupiedHostessObj = this.selectLeastOccupied();
        for (let m = 1; m < this.selectedTableList.length; m++) {
          this.HostessNameExist = this.checkHostess(this.selectedTableList[m]);
          if (this.selectedTableList[m].HostessID != 0) {
            if (this.leastOccupiedHostessObj.hostessOccupied > this.selectedTableList[m].hostessOccupied) {
              this.leastOccupiedHostessObj = this.selectedTableList[m];
            }
          }
          if (!this.HostessNameExist) {
            this.selectedtableObj.push(this.selectedTableList[m])
            this.selectedHostessName = this.leastOccupiedHostessObj.HostessName;
            this.selectedHostessID = this.leastOccupiedHostessObj.HostessID;
          }
          this.selectedTableName = this.selectedTableName + "," + this.selectedTableList[m].TableName;
          this.selectedTableNumbers = this.selectedTableNumbers + "," + this.selectedTableList[m].TableNumber;
          this.selectedSeatedTableType = this.selectedSeatedTableType + "," + this.selectedTableList[m].TableType;
        }
      } else {
        this.selectedTableNumbers = this.selectedTableList[0].TableNumber;
        this.selectedHostessName = this.selectedTableList[0].HostessName;
        this.selectedHostessID = this.selectedTableList[0].HostessID;
        this.selectedSeatedTableType = this.selectedTableList[0].TableType;
        this.selectedTableName = this.selectedTableList[0].TableName;
      }
      if (this.guestName == undefined) { this.guestName = "" }
      if (this.emailAddress == undefined) { this.emailAddress = "" }
      if (this.mobileNumber == undefined) { this.mobileNumber = "" }
      var obj = {
        "RestaurantID": this.restID,
        "FullName": this.guestName,
        "Email": this.emailAddress,
        "ContactNumber": this.mobileNumber,
        "UserType": "TU",
        "PartySize": this.partySize,
        "QuotedTime": 0,
        "Relationship": "",
        "ThisVisit": "",
        "FoodAndDrink": "",
        "SeatingPreferences": "",
        "Description": "",
        "WaitListTime": null,
        "BookingStatus": 3,
        "TableNumbers": this.selectedTableNumbers,
        "SeatedTableType": this.selectedSeatedTableType,
        "HostessID": this.selectedHostessID,
        "HostessName": this.selectedHostessName,
        "TableName": this.selectedTableName,
        "RestaurantAdminID": this.RestaurantAdminID,
        "DOB": null
      }

      this._SnapshotService.postSpecificServer(this.restID, this.selectedHostessID, this.selectedTableNumbers).subscribe((res: any) => {
        this.statusmessage = res._StatusMessage;
        this.errorcode = res._ErrorCode;
        if (res._StatusMessage == 'Success') {
          this._SnapshotService.seatThisGuestSubmit(obj).subscribe((res: any) => {
            this.statusmessage = res._StatusMessage;
            this.errorcode = res._ErrorCode;
            if (res._StatusMessage == 'Success') {
              this.loadData();
            }
            else if (this.errorcode === 1) {
              this._toastr.error(this.statusmessage);
            }
          }, (err) => {
            if (err === 0) {
              this._toastr.error('network error')
            }
          })
          // this.loadData();
        }
        else if (this.errorcode === 1) {
          this._toastr.error(this.statusmessage);
        }
      }, (err) => {
        if (err === 0) {
          this._toastr.error('network error')
        }
      })



    }
  }
  }

  public checkHostess(HostessValue) {
    for (let j = 0; j < this.selectedtableObj.length; j++) {
      if (HostessValue.HostessName == this.selectedtableObj[j].HostessName) {
        return true;
      } else {}
    }
    return false;
  }


  addPrice(value) {
    value.TableDefaultPricenow +=  5;
    if (value.TableDefaultPricenow > value.TableMinimumPriceNow) {
      value.disableSub = false;
    }
  }

  subPrice(value) {

    value.TableDefaultPricenow -= 5;
    if (value.TableDefaultPricenow < value.TableMinimumPriceNow) {
      value.disableSub = true;
      value.TableDefaultPricenow = value.TableMinimumPriceNow;
    } else {
      value.disableSub = false;
    }
  }

  updatePrice(value) {
    if (value.TableDefaultPricenow < value.TableMinimumPriceNow) {
      value.disableSub = true;
      value.TableDefaultPricenow = value.TableMinimumPriceNow;
    }
    }





  public openModal(template) {
    this.modalRef = this.modalService.show(template); // {3}
  }

  /* Load Table wise info. */
  loadServerTable() {
    this.TableWiseList = [];
    /*      this.ByTableLoader = true;*/
    var QueryType : string = "OPEN";
    this._SnapshotService.GetTablewiseSnap(this.restID, QueryType).subscribe(res => {
      if (res._Data.length == 0) {
        this._SnapshotService.emptyResponse(this.restID).subscribe(res => {
          this.errorcode = res._ErrorCode;
          this.statusmessage = res._Data;
          if (this.errorcode == 50000) {
            this._toastr.error(this.statusmessage);
          }
        })
      }
      else {
        /*added code */
        //res._Data.forEach((eachObj) => {
        //  if (eachObj.TableStatus == false) {
        //    this.TableWiseList.push(eachObj);
        //  }
        //})
        /*added code */
        this.TableWiseList = res._Data;
        this.tblResLength = res._Data.Table4.length;
        for (let j = 0; j < this.tblResLength; j++) {
          if (j == 0) {
            var tableIndex = "Table";
          } else {
            var tableIndex = "Table" + j;
          }
         
          this.TableWiseList[tableIndex];
          for (let h = 0; h < this.TableWiseList[tableIndex].length; h++) {
            this.TableWiseList[tableIndex][h].selected = false;
            this.TableWiseList[tableIndex][h].gsnSelected = false;
          }
          if (this.TableWiseList[tableIndex].length != 0) {
            var innerTables = {
              "TableName": this.TableWiseList[tableIndex][0].TableTypeDesc,
              "bgcolor": "background",
              "TableDefaultPricenow": this.TableWiseList[tableIndex][0].TableType * this.getseatedinfoPrice_settings.DefaultTableNowPrice,
              "TableMinimumPriceNow": this.TableWiseList[tableIndex][0].TableType * this.getseatedinfoPrice_settings.MinimumTableNowPrice,
              "Tables": this.TableWiseList[tableIndex],
              "disableSub":false
            };
            this.Tables.push(innerTables);
            console.log("final object");
            console.log(this.Tables);
            if (this.RestaurantGetSeatedDetailsList == undefined) {
              this.RestaurantGetSeatedDetailsList = []
            }
            if (this.RestaurantGetSeatedDetailsList.length > 0) {
              this.gsnTableExist = true;
              this.gsnTable = cloneDeep(this.Tables);
              for (let j = 0; j < this.gsnTable.length; j++) {
                this.gsnTable[j].Tables = [];
              }
              this.selectedTableTypeList.sort(function (a, b) { return a - b });
              for (let j = 0; j < this.Tables.length; j++) {
                for (let m = 0; m < this.RestaurantGetSeatedDetailsList.length; m++) {
                  if (this.Tables[j].TableName == this.RestaurantGetSeatedDetailsList[m].TableTypeDesc) {
                    this.gsnTable[j].Tables.push(this.RestaurantGetSeatedDetailsList[m]);
                    this.Tables[j].TableDefaultPricenow = this.RestaurantGetSeatedDetailsList[m].OfferAmount;
                  for (let h = 0; h < this.Tables[j].Tables.length; h++) {
                    if (this.Tables[j].Tables[h].TableNumber == this.RestaurantGetSeatedDetailsList[m].TableNumber) {
                        this.Tables[j].Tables[h].gsnSelected = true;
                      }
                  }
                  }
                }
              }
            }
            if (this.gsnTable.length > 0) {
              this.gsnEditable = false;
            } else if (this.gsnTable.length <= 0 || this.gsnTable.length == undefined) {
              this.gsnEditable = true;
            }
            console.log(" this.gsnTable")
            console.log(this.gsnTable);
           
          }
        }

        this.activeServer = this.TableWiseList["Table5"]



        for (let i = 0; i < res._Data.length; i++) {
          if (res._Data[i].TableStatus == true) {
            this.className[i] = 'divBlur divCol2Style cursorPointer';
          }
          else {
            this.className[i] = 'divCol2Style cursorPointer';
          }
        }
        /*       this.ByTableLoader = false;*/
      }
    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
      })
    
  }

  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

  generateArray(obj) {
    return Object.keys(obj).map((key) => { return obj[key] });
  }

  /*get capacity wise table info. */
  loadCapacityTable() {
    /*       this.ByCapacityTblLoader = true;*/
    this._SnapshotService.GetCapacitywise(this.restID).subscribe(res => {
      if (res._Data.length == 0) {
        this._SnapshotService.emptyResponse(this.restID).subscribe(res => {
        })
      }
      else {
        this.CapacityLiast = res._Data;
        /*        this.ByCapacityTblLoader = false;*/
      }
    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
    })
  }

  /* Grt servervise table info. */
  loadServerViseTable() {
    /* this.ByServerTblLoader = true;*/
    this._SnapshotService.GetServerwiseSnap(this.restID).subscribe(res => {
      if (res._Data.length == 0) {
        this._SnapshotService.emptyResponse(this.restID).subscribe(res => {
        })
      }
      else {
        this.ServerWiseList = res._Data;
        /*    this.ByServerTblLoader = false;*/
      }
    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
    })
  }

  /* Function to make the switch server dropdown show and hide */
  arrFalse(i: any) {
    console.log(i);
    for (let j = 0; j < this.tblResLength; j++) {
      if (i == j) {
        this.isDrop[j] = !this.isDrop[j];
      }
      else {
        this.isDrop[j] = false;
      }
    }
  }

  switchtblModal(tblno: any, index: any, template: any) {
    this.switchUser = true;
    this.checkDrop = false;
    this.emptyTbl = false
    this.serverTblNO = tblno;
    this.isDrop[index] = false;
    this.openModal(template);
  }

  /* function to call service to switch server  */
  switchServer(serverID: any) {

    this._SnapshotService.switchServer(serverID, this.restID, this.serverTblNO).subscribe((res: any) => {
      this.statusmessage = res._StatusMessage;
      this.errorcode = res._ErrorCode;
      if (res._StatusMessage == 'Success') {
        this.loadData()
      }
      else if (this.errorcode === 1) {
        this._toastr.error(this.statusmessage);
      }
    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
    })
    this.modalRef.hide();
  }

  dismissmodal() {
    this.modalRef.hide();
  }

  /* function to call service to drop check */
  checkDroped(tblno: any, index: any) {
    this.isDrop[index] = false;
    this.checkDrop = true;
    this.switchUser = false;
    this.emptyTbl = false;

    this._SnapshotService.dropCheck("CHECK", this.restID, tblno).subscribe((res: any) => {
      this.statusmessage = res._StatusMessage;
      this.errorcode = res._ErrorCode;
      if (res._StatusMessage == 'Success') {
        alert("Ckeck dropped successfuly.");
        this.loadCapacityTable();
        this.loadServerViseTable();
      }
      else if (this.errorcode === 1) {
        this._toastr.error(this.statusmessage);
      }
    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
    })
  }

  /* function to call service to empty the table */
  emptyTable(tblno: any, index: any) {
    this.isDrop[index] = false;
    this.emptyTbl = true;
    this.switchUser = false;
    this.checkDrop = false

    this._SnapshotService.emptyTable("EMPTY", this.restID, tblno).subscribe((res: any) => {
      this.statusmessage = res._StatusMessage;
      this.errorcode = res._ErrorCode;
      if (res._StatusMessage == 'Success') {
        this.loadServerTable();
        this.loadCapacityTable();
        this.loadServerViseTable();
      }
      else if (this.errorcode === 1) {
        this._toastr.error(this.statusmessage);
      }
    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
    })
  }

  /* Function to assign colors to servers. */
  public dummy() {
    console.log("coming");
    /*      this.colorsLoader = true;*/
    var colorsList = '477B6C,8D6C8D,51919A,9A8A4A,9A7047,48588E,919A62,86a873,048ba8,3c6997,bb9f06';
    this.selectstaff.assignServercolor(colorsList, this.restID).subscribe((res: any) => {

      console.log(res);

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
}
