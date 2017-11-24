import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SnapshotService } from "./Snapshot.Service";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
    selector: 'snapshot',
    templateUrl: './snapshot.component.html',
    styleUrls: ['./snapshot.component.css'],
    providers: [SnapshotService]
})
export class SnapShotComponent implements OnInit {
    public isCapacitydiv: boolean = true;
    public isServerdiv: boolean = false;
    public isTablediv: boolean = false;
    public CapacityLiast: any = [];
    public ServerWiseList: any = [];
    public TableWiseList: any = [];
    public TblLoader: boolean=false;
    public ServerDetailsList: any = [];
    public isDrop: any = [];
    public tblResLength:any;
    public className: any = [];
    public switchUser: boolean = true;
    public checkDrop: boolean = false;
    public emptyTbl: boolean = false;
    public restID = localStorage.getItem('restaurantid');
    public serverTblNO: any;
    public style;
  public modalRef: BsModalRef;
    constructor(private router: Router, private _SnapshotService: SnapshotService,private modalService: BsModalService) {
        this.style = JSON.parse(localStorage.getItem("stylesList"));

        this.isCapacitydiv = true;
        this.isServerdiv = false;
        this.isTablediv = false;

        this.loadCapacityTable();

        this.loadServerViseTable();

        this.loadServerTable();

        this._SnapshotService.GetServerDetails(this.restID).subscribe(res => {
            this.ServerDetailsList = res._Data.ManageServer;
            console.log(this.ServerDetailsList, "SErverlist");
        })

    }

    ngOnInit() {

    }
  public openModal(template) {
    this.modalRef = this.modalService.show(template); // {3}
  }

    loadServerTable() {
        this._SnapshotService.GetTablewiseSnap(this.restID).subscribe(res => {
            this.TableWiseList = res._Data;
            console.log(this.TableWiseList.HostessID,"TableWiseList.HostessID");
            this.tblResLength = res._Data.length;
            for (let i = 0; i < res._Data.length; i++) {
                if (res._Data[i].TableStatus == true) {
                        this.className[i] = 'divBlur divCol2Style';
                }
                else {
                        this.className[i] = 'divCol2Style';
                }
            }
        })
    }

    loadCapacityTable(){
        this._SnapshotService.GetCapacitywise(this.restID).subscribe(res => {
            this.CapacityLiast = res._Data;
        })
    }

    loadServerViseTable() {
        this._SnapshotService.GetServerwiseSnap(this.restID).subscribe(res => {
            this.ServerWiseList = res._Data;
        })
    }

    arrFalse(i: any)
    {
        for (let j = 0; j < this.tblResLength; j++)
        {
            if (i == j)
            {
                this.isDrop[j] = !this.isDrop[j];
            }
            else {
                this.isDrop[j] = false;
            }
        }
    }

    switchtblModal(tblno: any, index: any,template:any) {
        this.switchUser = true;
        this.checkDrop = false;
        this.emptyTbl = false
        this.serverTblNO = tblno;
        this.isDrop[index] = false;
        this.openModal(template);
    }

    switchServer(serverID:any)
    {
        this._SnapshotService.switchServer(serverID, this.restID, this.serverTblNO).subscribe((res: any) => {
            if (res._StatusMessage == 'Success') {
                this.loadServerTable();
                this.loadCapacityTable();
                this.loadServerViseTable();
            }
        })
      this.modalRef.hide();
    }
  dismissmodal(){
    this.modalRef.hide();
  }
    checkDroped(tblno: any,index:any) {
        this.isDrop[index] = false;
        this.checkDrop = true;
        this.switchUser = false;
        this.emptyTbl = false;

        this._SnapshotService.dropCheck("CHECK", this.restID, tblno).subscribe((res: any) => {
            if (res._StatusMessage == 'Success') {
                alert("Ckeck dropped successfuly.");
                this.loadCapacityTable();
                this.loadServerViseTable();
            }
        })
    }

    emptyTable(tblno: any, index: any) {
        this.isDrop[index] = false;
        this.emptyTbl = true;
        this.switchUser = false;
        this.checkDrop = false

        this._SnapshotService.emptyTable("EMPTY", this.restID, tblno).subscribe((res: any) => {
            console.log(res._StatusMessage);
            if (res._StatusMessage == 'Success')
            {
                this.loadServerTable();
                this.loadCapacityTable();
                this.loadServerViseTable();
            }
        })
    }
}
