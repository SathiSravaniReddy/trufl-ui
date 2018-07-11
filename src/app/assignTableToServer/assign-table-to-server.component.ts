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
  public tableAndServerObject: any = [];
  public assignTable: any;
  public isShow: boolean = false;
  public selectstaff: any[] = [];
  public status: boolean = false;
  public FloorNumber: any;
  public highlight: any;
  public selectedServerHostess : any;
  public HostessStatus = 0;
  public assignTablesData: any = [];
  private restarauntid;
  public result = [];
  private currentRowInfo;
  public style = {};
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
  private staffHostessColor: string = '';
  private selectedListServerColor: string = '';
  public restID: any;
  private errorcode: any;
  private activeServersName: string = '';
  private statusmessage: any;
  /*  public staffListLoader: boolean = false;*/
  constructor(private router: Router, private assignTableToServerService: assignTableToServerService, private sharedService: SharedService, private _loginservice: LoginService, private _toastr: ToastsManager, vRef: ViewContainerRef, private _manageserverservice: ManageServersService) {
    this._toastr.setRootViewContainerRef(vRef);
    this.restarauntid = _loginservice.getRestaurantId();
   // this.style = JSON.parse(localStorage.getItem("stylesList"));
  }

  ngOnInit() {
    this.restID = localStorage.getItem('restaurantid');

    this._loginservice.VerifyLogin(this.restarauntid).subscribe((res: any) => {
     // this.getStaffDetails(this.restarauntid);
      
      if (res._Data === 1) {
        this.getAssignTabletoServer(this.restarauntid);
      }
    })

    

  }


  getAssignTabletoServer(restarauntid) {
    this.assignTableToServerService.GetStaffAssignTables(this.restarauntid).subscribe((res: any) => {
      this.result = res._Data;
      this.activeServersData = res._Data.ActiveStaff;
      this.SectionTablesData = res._Data.SectionTables;
      this.assignedTablesList()
      
    })
  }

  createRange(number) {
    var items: number[] = [];
    for (var i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }



  back() {
   this.sharedService.arraydata = [];
    this.router.navigateByUrl('/selectStaff');
  }

  selectedStaff(index) {
    if (this.activeServersData[index].HostessStatus == 0) {
      for (var s = 0; s < this.activeServersData.length; s++ ){
         this.activeServersData[s].HostessStatus = 0;
      }
      this.activeServersData[index].HostessStatus = 1
      this.selectedServerHostess = this.activeServersData[index].TruflUserID;
      this.staffHostessColor = this.activeServersData[index].HostessColor;
      this.activeServersName = this.activeServersData[index].FullName;
      this.assignServer = [];
      this.assignedTablesList();
    }
  }

  selectedTable(index) {
    //let newResult = Object.assign({}, this.result);
    if (this.SectionTablesData[index].HostessID != this.selectedServerHostess){
      this.SectionTablesData[index].HostessID = this.selectedServerHostess;
      this.SectionTablesData[index].HostessColor = this.staffHostessColor;
      this.SectionTablesData[index].HostessName = this.activeServersName;
    }
    else if (this.SectionTablesData[index].HostessID == this.selectedServerHostess) {
      this.SectionTablesData[index].HostessID = 0;
      this.SectionTablesData[index].HostessColor = "";
      this.SectionTablesData[index].HostessName = "Add Server";
    }
  }


  assignedTablesList() {
    for (var i = 0; i < this.activeServersData.length; i++) {
      var serverIn = this.activeServersData[i].TruflUserID;
      var serverCurrentData = this.activeServersData[i];
      this.selectedListServerColor = this.activeServersData[i].HostessColor;
      this.assignTablesData = [];
      this.tableAndServerObject = {
        "FullName": this.activeServersData[i].FullName,  "TruflUserID": this.activeServersData[i].TruflUserID,
        "RestaurantID ": this.activeServersData[i].RestaurantID, "pic": this.activeServersData[i].pic, "TablesAssigned": []
      };
        for (var j = 0; j < this.SectionTablesData.length; j++) {
         // console.log(j)
          var tableInRow = this.SectionTablesData[j].HostessID;
          if (serverIn == tableInRow) {
            this.SectionTablesData[j].AssignedTables = 1;
            this.SectionTablesData[j].HostessName = this.activeServersData[i].FullName;
            this.SectionTablesData[j].HostessColor = this.selectedListServerColor;
            this.assignTablesData.push(this.SectionTablesData[j]);
          }
      }
      this.tableAndServerObject.TablesAssigned = this.assignTablesData;
      this.assignServer.push(this.tableAndServerObject);
      //console.log("assignServer");
      //console.log(this.assignServer);
    }
  }

  switchServer(value) {
    for (var s = 0; s < this.SectionTablesData.length; s++) {
      if (value == this.SectionTablesData[s].TableNumber) {
        this.SectionTablesData[s].HostessID = 0;
        this.SectionTablesData[s].HostessColor = '';
        this.SectionTablesData[s].HostessName = "Add Server";
        this.SectionTablesData[s].AssignedTables = 0;
      }
    }
  }

  next() {
    this.assignedTablesList()
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
    
    this.assignTableToServerService.SaveTableAssignedToStaff(this.SectionTablesData).subscribe((res: any) => { })

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
