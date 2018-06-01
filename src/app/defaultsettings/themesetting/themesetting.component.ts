
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'themeSettings',
  templateUrl: './themesetting.component.html',

})
export class ThemeSettingsComponent {
 
  constructor(private router: Router, @Inject(DOCUMENT) document) {
   
  }
 
  theme(data) {
    document.getElementById('myId').className = data;      
  }

}
