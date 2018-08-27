import {Component, OnInit, ViewContainerRef, ViewChild, ElementRef} from '@angular/core';
import { Router } from "@angular/router";
import { ToastOptions } from 'ng2-toastr';
import { manageService } from './manage.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { LoginService } from '../shared/login.service';
import { DatePipe } from '@angular/common';
import * as jsPDF from 'jspdf'
@Component({
  selector: 'manage',
    templateUrl: './manage.component.html',
  providers: [ToastsManager, ToastOptions]

})
export class ManageComponent implements OnInit {
  private restID = localStorage.getItem('restaurantid');
  private errorcode: any;
  private statusmessage: any;
  public data: any = {};
  public details: any;
  public userName: any;
  public openDate = localStorage.getItem('OpenDate');
  public SessionID = localStorage.getItem('SessionID');
  public detailOpendate: any;
  public allowPrint: boolean = true;
  constructor(private loginService: LoginService, private router: Router, private _manageService: manageService, private _toastr: ToastsManager, vRef: ViewContainerRef,private loginservice:LoginService) {
      this._toastr.setRootViewContainerRef(vRef);
    this.userName = this.loginService.getUserName();
    }

    ngOnInit() {
    }

  /* Service call to set the selected start service time. */
  @ViewChild('pdfContent') pdfContent: ElementRef; 
  closeService() {
    var resturantObject = {}
    this._manageService.closeService(this.restID, this.openDate,this.SessionID).subscribe(res => {
      this.statusmessage = res._StatusMessage;
      this.errorcode = res._ErrorCode;
      
      if (this.errorcode === 0) {
        var datePipe = new DatePipe("en-US");
        this.detailOpendate = datePipe.transform(res._Data['RestaurantTimings'][0].OpenDate, 'dd/MM/yyyy');
        res._Data['Restaurant_Transaction'][0].ManagerName = this.userName;
        res._Data['Restaurant_Transaction'][0].Date = this.detailOpendate + "(" + res._Data['RestaurantTimings'][0].OpenTime + '-' + res._Data['RestaurantTimings'][0].CloseTime+')';
        this.details = res._Data
        this.allowPrint = false;
     
        this._toastr.success("All services are closed");

        //let doc = new jsPDF()
        //let specialElementHandlers = {
        //  '#editor': function (element, renderer) {
        //    return true;
        //  }
        //};
        //let content = this.pdfContent.nativeElement;
        //doc.fromHTML(content.innerHTML, 15, 15, {
        //  'width': 190,
        //  'elementHandlers': specialElementHandlers
        //})

        //doc.save('closeService.pdf');
       
       // this.router.navigateByUrl('/waitlist');
      }
      else if (this.errorcode === 1) {
        this.allowPrint = true;
        this._toastr.error(this.statusmessage);
      }
    }, (err) => {
      if (err === 0) {
        this.allowPrint = true;this._toastr.error('network error')
      }
    })
   
  }
  print() {
    if (this.errorcode === 0) {
      var WinPrint = window.open('', '_blank', 'left=0,top=0,width=800,height=400,toolbar=0,scrollbars=0,status=0');
      WinPrint.document.write('<html><head><title></title><style>*{font-family:arial, sans-serif;}td,th{text-transform:uppercase;color:#000;}</style>');
      WinPrint.document.write('<link rel="stylesheet" href="assets/css/print.css" media="print" type="text/css"/>');
      WinPrint.document.write('</head><body> ');
      
      for (let i = 0; i < this.details['Restaurant_Transaction'].length; i++) {
        
        WinPrint.document.write('<h2 style="text-transform:uppercase;text-align:center;display:block;width:100%;margin:0 0 20px 0;">' + this.details['Restaurant_Transaction'][i].ManagerName + '</h2>')
        WinPrint.document.write('<h5 style="text-transform:uppercase;text-align:left;display:block;width:100%;margin:0 0px 0 10px;"> Date:' + this.details['Restaurant_Transaction'][i].Date + '</h5>')



        WinPrint.document.write('<table style="margin-left: -0%;"  width="100%">');
        // let selected = this;
        //WinPrint.document.write('<tr><th align="left" style="font-size: 14px;font-weight:400;width:140px;">Date:</th><td  align="left" style="font-size: 14px;font-weight:500;width:140px;">' + this.details['Restaurant_Transaction'][i].Date + '</td></tr>');
        WinPrint.document.write('<tr><th align="left" style="font-size:11px !important;width:140px;">Total # of tables:</th><td  align="left" style="font-size:11px !important;font-weight:500;width:140px;">' + this.details['Restaurant_Transaction'][i].TotalTables + '</td></tr>');
        WinPrint.document.write('<tr><th align="left" style="font-size:11px !important;width:140px;">Total # of guests:</th><td  align="left" style="font-size:11px !important;font-weight:500;width:140px;">' + this.details['Restaurant_Transaction'][i].Total_Guests + '</td></tr>');
        WinPrint.document.write('<tr><th align="left" style="font-size:11px !important;width:140px;">Total # of Trufl transactions:</th><td  align="left" style="font-size:11px !important;font-weight:500;width:140px;">' + this.details['Restaurant_Transaction'][i].Trufl_Transactions + '</td></tr>');
        WinPrint.document.write('<tr><th align="left" style="font-size:11px !important;width:140px;">Total $ value of Trufl transactions:</th><td  align="left" style="font-size:11px !important;font-weight:500;width:140px;">' + this.details['Restaurant_Transaction'][i].Total_TruflAmount + '</td></tr>');


        WinPrint.document.write('</table>');        
      }
      WinPrint.document.write('<div style="border-bottom:1px solid #000;height:5px;overflow:hidden;display:block;clear:both;margin-bottom:30px;">' + '</div>');
      
      for (let i = 0; i < this.details['Server_Transaction'].length; i++) {
        WinPrint.document.write('<h2 style="text-transform:uppercase;text-align:center;display:block;width:100%;margin:0 0 20px 0;">' + this.details['Server_Transaction'][i].ServerName + '</h2>')



        WinPrint.document.write('<table style="margin-left: -0%;"  width="100%">');
        // let selected = this;
        WinPrint.document.write('<tr><th align="left" style="font-size:11px !important;width:140px;">Total # of tables:</th><td  align="left" style="font-size:11px !important;font-weight:500;width:140px;">' + this.details['Server_Transaction'][i].Server_TotalTables + '</td></tr>');
        WinPrint.document.write('<tr><th align="left" style="font-size:11px !important;width:140px;">Total # of guests:</th><td  align="left" style="font-size:11px !important;font-weight:500;width:140px;">' + this.details['Server_Transaction'][i].Server_Total_Guests + '</td></tr>');
        WinPrint.document.write('<tr><th align="left" style="font-size:11px !important;width:140px;">Total # of Trufl transactions:</th><td  align="left" style="font-size:11px !important;font-weight:500;width:140px;">' + this.details['Server_Transaction'][i].Server_Trufl_Trans + '</td></tr>');
        WinPrint.document.write('<tr><th align="left" style="font-size:11px !important;width:140px;">Total $ value of Trufl transactions:</th><td  align="left" style="font-size:11px !important;font-weight:500;width:140px;">' + this.details['Server_Transaction'][i].Server_Trufl_Amount + '</td></tr>');
        WinPrint.document.write('<tr><th align="left" style="font-size:11px !important;width:140px;">Avg time to turn a table:</th><td  align="left" style="font-size:11px !important;font-weight:500;width:140px;">' + this.details['Server_Transaction'][i].Avg_TableTime + '</td></tr>');
        WinPrint.document.write('</table>');
      }
      
      WinPrint.document.write('<div style="border-bottom:1px solid #000;height:5px;overflow:hidden;display:block;clear:both;margin-bottom:30px;">' + '</div>');
      for (let i = 0; i < this.details['Hostess_Transaction'].length; i++) {
        WinPrint.document.write('<h2 style="text-transform:uppercase;text-align:center;display:block;width:100%;margin:0 0 20px 0;">' + this.details['Hostess_Transaction'][i].AdminName + '</h2>')



        WinPrint.document.write('<table style="margin-left: -0%;"  width="100%">');
        // let selected = this;
        WinPrint.document.write('<tr><th align="left" style="font-size:11px !important;width:140px;">Total # of Trufl transactions:</th><td  align="left" style="font-size:11px !important;font-weight:500;width:140px;">' + this.details['Hostess_Transaction'][i].Host_TruflTransactions + '</td></tr>');
        WinPrint.document.write('<tr><th align="left" style="font-size:11px !important;width:140px;">Total $ value of Trufl transactions:</th><td  align="left" style="font-size:11px !important;font-weight:500;width:140px;">' + this.details['Hostess_Transaction'][i].Host_TruflAmount + '</td></tr>');


        WinPrint.document.write('</table>');
      }
      WinPrint.document.write('<div style="border-bottom:1px solid #000;height:5px;overflow:hidden;display:block;clear:both;margin-bottom:30px;">' + '</div>');
      WinPrint.document.write('</body>');
      setTimeout(function () {
        WinPrint.focus();
        WinPrint.print();
        WinPrint.close();
      }, 1000);
    }
  }
  exit() {
    if (this.allowPrint == false)
    { this.router.navigateByUrl('/login'); }
    else
    { this.router.navigateByUrl('/waitlist'); }
  }
}
