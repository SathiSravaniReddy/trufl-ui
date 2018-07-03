import { Component} from '@angular/core';
import { ExportService } from './export.service';
import { ToastOptions } from 'ng2-toastr';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { LoginService } from '../shared/login.service';
import { Router } from "@angular/router";
import { SharedService } from '../shared/Shared.Service';
import { StaffService } from '../selectstaff/select-staff.service';
import { OtherSettingsService } from '../defaultsettings/othersettings/other-settings.service';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css'],
  providers: [ToastsManager, ToastOptions]
})
export class ExportComponent {
  public userType: any;
  public dailyReport: any;
  public detailReport: any;
  public reportType: string = "Trufl";
  constructor(private loginService: LoginService, private exportService: ExportService, private _toastr: ToastsManager, private router: Router) {
    this.userType = this.loginService.getUserType();
    this.exportService.getDailyReport(this.reportType).subscribe((res: any) => {
      this.dailyReport = res._Data;
      this.detailReport = this.dailyReport.DetailReport;
    }, (err) => {
      if (err === 0) {
        this._toastr.error('network error')
      }
    });
  
  }

  download() {
    var keys = Object.keys(this.detailReport[0]);
  
        var options = {
          fieldSeparator: ',',
          quoteStrings: '"',
          decimalseparator: '.',
          title: 'Detail Report',
          showLabels: true,
          showTitle: true,
          headers: keys
        };
    new Angular2Csv(this.detailReport, "Detail Report",options);
  }
}
