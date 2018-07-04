import { Component, ViewContainerRef } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from '../shared/login.service';
import { UserProfileService } from './userprofile.service';

@Component({
    selector: 'userProfile',
    templateUrl: './userprofile.component.html',
    styleUrls: ['./userprofile.style.css']
    
})
export class UserProfileComponent {
    public userName: any;
    public dayName: any;
    public monthname: any;
    public day: any;
    public restID = localStorage.getItem('restaurantid');
    public total_info: any;
    public column_first: any;
    public column_second: any;
    public column_third: any;
    public column_fourth: any; 
   
    constructor(private router: Router, private loginService: LoginService, private userProfileService: UserProfileService) {
        this.userName = this.loginService.getUserName();
        var today = new Date();
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December" ]
        this.dayName = days[today.getDay()];
        this.monthname = months[today.getMonth()];      
        this.day=today.getDate();      
    }   

    ngOnInit() {
        this.getuserprofile()
      
    }
    public getuserprofile() {
        this.userProfileService.getUserProfile(this.restID).subscribe((res) => {                
            this.total_info = res._Data.MyProfileDetails;          
        })
    }
    showtransaction(record_info: any) {      
        this.column_first = record_info.Column1 != undefined ? record_info.Column1:''
        this.column_second = record_info.Column2 != undefined ? "$" + record_info.Column2 : ''
        this.column_third= record_info.Column3 != undefined ? record_info.Column3 : ''
        this.column_fourth = record_info.Column4 != undefined ? "$" + record_info.Column4 : ''
          
       
    } 

    cancel() {        
        this.router.navigate(['waitlist']);
    }
}
