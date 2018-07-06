import {Component, OnInit, ViewContainerRef} from '@angular/core';
import { Router } from "@angular/router";
import { StaffService } from "../selectstaff/select-staff.service";
import { assignTableToServerService } from "./assign-table-to-server.service";
import {SharedService} from '../shared/Shared.Service';
import {LoginService} from '../shared/login.service';
import {ToastOptions} from 'ng2-toastr';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {ManageServersService} from "../defaultsettings/manageservers/manage-servers.service";
import {isNumber} from "@ng-bootstrap/ng-bootstrap/util/util";
@Component({
  selector: 'assignTableToServer',
  templateUrl: './assign-table-to-server.component.html',
  styleUrls: ['./assign-table-to-server.component.css'],
  providers: [ToastsManager, ToastOptions]
})
export class AssignTableToServerComponent implements OnInit {
  private staff_info: any;
  private table_info: any;
  public activeServersData: any;
  public SectionTablesData: any;
  public assignServer: any = [];
  public tableAndServerObject: any;
  public assignTable: any;
  public isShow: boolean = false;
  public selectstaff: any[] = [];
  public status: boolean = false;
  public FloorNumber: any;
  public highlight: any;
  public selectedServerHostess : any;
  public HostessStatus = 0;
  private restarauntid;
  public result = [];
  private currentRowInfo;
  private arr = [];
  public TablesAssigned = [];
  private globalCount = 0;
  private listOfRanges = [];
  public staffSelected: any[] = [];
  private savedList: any = [];
  private selectedTablesList: any = [];
  private flag;
  public sortedSelectedTables: boolean = false;
  private message;
  private staffinforange;
  public restID: any;
  private errorcode: any;
  private statusmessage: any;
  /*  public staffListLoader: boolean = false;*/
  constructor(private router: Router, private assignTableToServerService: assignTableToServerService, private sharedService: SharedService, private _loginservice: LoginService, private _toastr: ToastsManager, vRef: ViewContainerRef, private _manageserverservice: ManageServersService) {
    this._toastr.setRootViewContainerRef(vRef);
    this.restarauntid = _loginservice.getRestaurantId();
  }

  ngOnInit() {
    this.restID = localStorage.getItem('restaurantid');


    this._loginservice.VerifyLogin(this.restarauntid).subscribe((res: any) => {
     // this.getStaffDetails(this.restarauntid);
      
      if (res._Data === 0) {
        this.getAssignTabletoServer(this.restarauntid);
      }
      else if (res._Data === 1) {
        this.getAssignTabletoServer(this.restarauntid);
      }
    })

    

  }

  getAssignTabletoServer(restarauntid) {
    this.assignTableToServerService.GetStaffAssignTables(this.restarauntid).subscribe((res: any) => {
      this.result = res._Data;
      this.activeServersData = res._Data.ActiveStaff;
      this.SectionTablesData = res._Data.SectionTables;
      //if (res._Data === 0) {
      //  this.getStaffDetails(this.restarauntid);
      //}
      //else if (res._Data === 1) {
      //  this.getmanageserversinfo(this.restarauntid);

      //}
    })
  }
  




  back() {
    this.sharedService.arraydata = [];
    this.router.navigateByUrl('/selectselections');
  }

  selectedStaff(index) {
    //let newResult = Object.assign({}, this.result);
    console.log("staff copy");
    console.log(this.result);

    if (this.activeServersData[index].HostessStatus == 0) {
      this.activeServersData[index].HostessStatus = 1
      this.selectedServerHostess = this.activeServersData[index].TruflUserID;
      this.TablesAssigned = [];
      this.tableAndServerObject = {
        "FullName": this.activeServersData[index].FullName, "TruflUserID": this.activeServersData[index].TruflUserID,
        "RestaurantID ": this.activeServersData[index].RestaurantID, "pic": this.activeServersData[index].pic, "TablesAssigned": []
      };
      
      this.assignServer.push(this.tableAndServerObject);
    }
    else if (this.activeServersData[index].HostessStatus == 1) {
      this.activeServersData[index].HostessStatus = 0;
      this.selectedServerHostess = 0;
    }

  }

  selectedTable(index) {
    //let newResult = Object.assign({}, this.result);
    if (this.SectionTablesData[index].HostessID != this.selectedServerHostess){
      this.SectionTablesData[index].HostessID = this.selectedServerHostess;
        this.TablesAssigned.push(this.SectionTablesData[index]);
      
        this.tableAndServerObject.TablesAssigned= this.TablesAssigned;
      this.sortedSelectedTables = true;
      console.log(this.assignServer);
      //this.assignTable.RestaurantID = this.SectionTablesData[index].RestaurantID;
      //this.assignTable.TableNumber = this.SectionTablesData[index].TableNumber;
      //this.assignTable.TableType = this.SectionTablesData[index].TableType;
      //this.assignTable.TableName = this.SectionTablesData[index].TableName;
    }
    else if (this.SectionTablesData[index].HostessID == this.selectedServerHostess) {
      this.SectionTablesData[index].HostessID = 0;
    }
  }

  assign() {
    this.assignTableToServerService.SaveTableAssignedToStaff(this.SectionTablesData).subscribe((res: any) => {
    });
  }

  next() {
    // removing extra parameters for saving
    this.savedList.map(function (obj) {
      delete obj.labelName1;
      delete obj.labelName2;
      delete obj.name;
      delete obj.type;
      Object.keys(obj).filter(function (str) {
        if (str.includes('range')) {
          delete obj[str];
        }
      })
    });
    
    this.assignTableToServerService.SaveSelectedStaff(this.restarauntid, this.staffSelected).subscribe((res: any) => { })

    this.assignTableToServerService.postStaffDetails(this.savedList).subscribe((res: any) => {
      this.statusmessage = res._StatusMessage;
      this.errorcode = res._ErrorCode;
      if (this.errorcode === 0) {
        this.router.navigateByUrl('/reviewSelections');
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
