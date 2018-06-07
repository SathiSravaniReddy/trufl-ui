
import { Component, ViewChild, ElementRef, AfterViewInit, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ThemeSettingService } from './themesetting.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'themeSettings',
  templateUrl: './themesetting.component.html',
  styleUrls: ['./themeSettings.component.css'],
})
export class ThemeSettingsComponent implements OnInit{
  public restID = localStorage.getItem('restaurantid');
  public themeName:any;
  constructor(private router: Router, @Inject(DOCUMENT) document, private themesettingservice: ThemeSettingService, private _toastr: ToastsManager) {
   
  }
  ngOnInit() {

  }
  changeTheme(data) {
    document.getElementById('myId').className = data;
    var obj = {
      "RestaurantID": this.restID ,
      "Theme": data
    }
    this.themesettingservice.saveThemeSettings(obj).subscribe(res => {
      console.log(res);
    }, (err) => {
      if (err === 0) {
        this._toastr.error('an error occured')
      }
    });
  }

}
