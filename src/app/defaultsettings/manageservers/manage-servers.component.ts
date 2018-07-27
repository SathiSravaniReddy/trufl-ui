import {Component, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';
import {ManageServersService} from '../manageservers/manage-servers.service';
import {LoginService} from '../../shared/login.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {ToastOptions} from 'ng2-toastr';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {StaffService} from '../../selectstaff/select-staff.service'
import {isNumber} from "@ng-bootstrap/ng-bootstrap/util/util";
@Component({
  selector: 'manageServers',
  templateUrl: './manage-servers.component.html',
  styleUrls: ['./manage-servers.component.css'],
  providers: [ToastsManager, ToastOptions]
})
export class ManageServersComponent {
  private trufluid;
  private manageserverdetails;
  private manageserversrangedetails;
  private restarauntid;
  public isShow: boolean = false;
  public isChecked: boolean = false;
  public result = [];
  private currentRowInfo;
  private arr = [];
  private globalCount = 0;
  private listOfRanges = [];
  private savedList: any = [];
  private flag;
  private message;
  private newuserId;
  private errorcode: any;
  private statusmessage: any;
  public modalRef: BsModalRef;
  public style = [];
  public restID = localStorage.getItem('restaurantid');

  constructor(private router: Router, private _managerservice: ManageServersService, private _loginservice: LoginService, private modalService: BsModalService, private _toastr: ToastsManager, vRef: ViewContainerRef, private selectstaff: StaffService,) {
    this._toastr.setRootViewContainerRef(vRef);
    this.restarauntid = _loginservice.getRestaurantId();
    this.getmanagerServer(this.restarauntid);
  }

  ngOnInit() {
   
  }

  public openModal(template) {
    this.modalRef = this.modalService.show(template, {
      backdrop: 'static'
    });
  }

//subscribing mangeservers details here
  getmanagerServer(restarauntid) {
    var that = this;
    this._managerservice.GetServerwiseSnap(restarauntid).subscribe((res: any) => {
      this.manageserverdetails = res._Data;
     // this.manageserversrangedetails = res._Data.TableRange;

    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
    })
  }

 
  cancel() {
    this.router.navigateByUrl('/defaultSettings');
  }

//saving updated data
  saveclose() {
    // removing extra parameters for saving
    

  }
 
}
