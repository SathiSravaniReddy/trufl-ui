import {Component, OnInit, ViewContainerRef, ViewChild, ElementRef} from '@angular/core';
import { Router } from "@angular/router";
import { ToastOptions } from 'ng2-toastr';
import { manageService } from './manage.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { LoginService } from '../shared/login.service';
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
  public openDate = localStorage.getItem('OpenDate');
  constructor(private router: Router, private _manageService: manageService, private _toastr: ToastsManager, vRef: ViewContainerRef,private loginservice:LoginService) {
      this._toastr.setRootViewContainerRef(vRef);

    }

    ngOnInit() {
    }

  /* Service call to set the selected start service time. */
  @ViewChild('pdfContent') pdfContent: ElementRef; 
  closeService() {
    this._manageService.closeService(this.restID, this.openDate).subscribe(res => {
      this.statusmessage = res._StatusMessage;
      this.errorcode = res._ErrorCode;
      if (this.errorcode === 0) {
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
        this._toastr.error(this.statusmessage);
      }
    }, (err) => { if (err === 0) { this._toastr.error('network error') } })
    if (this.errorcode === 0) {
      let WinPrint = window.open('', '_blank', 'left=0,top=0,width=800,height=400,toolbar=0,scrollbars=0,status=0');
      WinPrint.document.write('<html><head><title></title>');
      WinPrint.document.write('<link rel="stylesheet" href="assets/css/print.css" media="print" type="text/css"/>');
      WinPrint.document.write('</head><body> <h2 style="text-transform:uppercase;text-align:center;display:block;width:100%;margin:0 0 20px 0;">Receipt</h2>');
      //var arr = [
      //  {
      //    key: "TRUFL STATUS",
      //    value: item.TruflMemberName
      //  },
      //  {
      //    key: "RESTAURANT NAME",
      //    value: this.restaurantName
      //  },
      //  {
      //    key: "GUEST NAME",
      //    value: item.UserName
      //  },
      //  {
      //    key: "PARTY SIZE",
      //    value: item.PartySize
      //  },
      //  { key: "WAIT QUOTED", value: item.Quoted },
      //  { key: "TIME QUOTED", value: item.TimeWaited },
      //  { key: "TRUFL OFFER /RESERVATION", value: item.OfferAmount },
      //  { key: "THIS VISIT", value: item.ThisVisit },
      //  { key: "RELATIONSHIP", value: item.Relationship },
      //  { key: "SEATING AND PREFERENCES", value: item.SeatingPreferences },
      //  { key: "FOOD AND DRINK PREFERENCES", value: item.FoodAndDrinkPreferences }
      //];

      //WinPrint.document.write('<table style="margin-left: -0%;"  width="100%">');
      //let selected = this;
      //arr.forEach((item) => {
      //  if (item.key == "undefined" || item.key == "null") {
      //    item.key = '';
      //  }
      //  if (item.value == undefined || item.value == null) {
      //    item.value = '';
      //  }
      //  WinPrint.document.write('<tr><th align="left" style="font-size: 14px;font-weight:400;width:140px;">' + item.key + '</th><td  align="left" style="font-size: 14px;font-weight:400;width:140px;">' + item.value + '</td></tr>');
      //})

      //WinPrint.document.write('</table>');
      WinPrint.document.write('</body>');
      setTimeout(function () {
        WinPrint.focus();
        WinPrint.print();
        WinPrint.close();
      }, 1000);
    }
  }
   
}
