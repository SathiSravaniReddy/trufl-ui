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

  constructor(private loginService: LoginService, private router: Router) {
    this.userType = this.loginService.getUserType();
  }

  download() {
  //  this.userService.getAll()
   //   .subscribe(data => {
        //API data
    //    this.allItems = data.result.users;
        var dummyData = [
        {
        first_name: "Saurabh",
        last_name: "Sharma",
        id: 147
        },
        {
        first_name: "Gaurav",
        last_name: "Sharma",
        id: 9
        }];
        

        var options = {
          fieldSeparator: ',',
          quoteStrings: '"',
          decimalseparator: '.',
          showLabels: true,
          showTitle: true,
          headers: ['First Name', 'Last Name', 'ID']
        };
       // new Angular2Csv(this.allItems, 'My Report', options);
        new Angular2Csv(dummyData, 'My Report',options);
      //});
  }
}
