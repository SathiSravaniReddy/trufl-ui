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
       // var year = today.getFullYear();
        //this.yearname = year.toString().substring(2);
        this.day=today.getDate();
        console.log(this.day);
    }   

    ngOnInit() {
        this.getuserprofile()
      
    }
    public getuserprofile() {
        this.userProfileService.getUserProfile(this.restID).subscribe((res) => {                
            this.total_info = res._Data.MyProfileDetails;
            console.log(this.total_info);
        })
    }
    showtransaction(record_info: any) {
        console.log(record_info);
        if (record_info.column1 == undefined || record_info.column1 == null) {
            this.column_first = '';
           
          
        }
        if (record_info.column2 == undefined || record_info.column2 ==null) {
            this.column_second = '';
            this.column_second = record_info.column2;
            

        }
        if (record_info.column3 == undefined || record_info.column3 ==null) {
            this.column_third = '';
            this.column_third = record_info.column3;
           
        }
        if (record_info.column4 == undefined || record_info.column4 == null) {
            this.column_fourth=''
            this.column_fourth = record_info.column4;           
            
        }
       
    }
 

    cancel() {        
        this.router.navigate(['waitlist']);
    }
}
