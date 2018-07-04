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
    public Daily_Transaction: any;
    public Daily_Transaction_Value: any;
    public Trufl_Transaction: any;
    public Trufl_Transaction_Value: any; 
   
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
        this.Daily_Transaction = record_info.Daily_Transaction != undefined ? record_info.Daily_Transaction:''
        this.Daily_Transaction_Value = record_info.Daily_Transaction_Value != undefined ? "$" + record_info.Daily_Transaction_Value : ''
        this.Trufl_Transaction = record_info.Trufl_Transaction != undefined ? record_info.Trufl_Transaction : ''
        this.Trufl_Transaction_Value = record_info.Trufl_Transaction_Value != undefined ? "$" + record_info.Trufl_Transaction_Value : ''
          
       
    } 

    cancel() {        
        this.router.navigate(['waitlist']);
    }
}
