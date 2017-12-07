
import { Component, OnInit} from '@angular/core';
import { LoginService } from '../login.service';
import { Router, RouterLinkActive  } from '@angular/router';

@Component({
    selector: 'shared-header',
    templateUrl: './header.Component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    private userType;
    public userName;
    private profileVisible: boolean = false;
    private showHeadings = true;
    public isSettings = false;
    private showDashboard = true;
    private employeeVisible: boolean = false;
    public loadHeaders = {};
    public headers = [];
    public isOpen: boolean = false;
    public isLiactive: boolean = true;
    public isLiSignOut: boolean = false;
    public restaurantName = localStorage.getItem("restaurantName");
    public isRestorantName: boolean = false;

    constructor(private loginService: LoginService, private router: Router) {
        this.userType = this.loginService.getUserType();
        this.userName = this.loginService.getUserName();

        if (this.restaurantName == '' || this.restaurantName == 'null')
        {
            this.isRestorantName = false;
        }
        else {
            this.isRestorantName = true;
        }

        //Keep these load headers in a service-----
        this.loadHeaders = {
            "RA": [

                {
                    "name": "WAITLIST",
                    "active": true,
                    "route": '/waitlist'
                },
                {
                    "name": "SEATED",
                    "active": false,
                    "route": '/seated'
                },
                {

                    "name": "SNAPSHOT",
                    "active": false,
                    "route": '/snapshot'
                },
                {

                    "name": "SETTINGS",
                    "active": false,
                    "route": '/defaultSettings'
                }
            ],
            "TA": [
                {
                    "name": "Dashboard",
                    "active": true,
                    "route": '/dashboard'
                },
                {
                    "name": "Restaurant",
                    "active": false,
                    "route": '/restaurant'
                },
                {
                    "name": "Settings",
                    "active": true,
                    "route": '/settings'
                }
            ]
        };

        this.headers = this.loadHeaders[this.userType];
        if ((router.url === '/waitlist') || (router.url === '/seated') || (router.url === '/snapshot') || (router.url === '/defaultSettings')) {
            this.headers.map(function (obj, index) {
                if ([0, 1, 2, 3].indexOf(index) >= 0) {
                    obj.isShow = true;
                } else {
                    obj.isShow = false;
                }
            });
        }
    }

    switchUser() {
        this.isLiSignOut = false;
        this.isLiactive = true;
        localStorage.setItem('isDashboard', 'false');
            this.router.navigateByUrl('/login');
    }

    signOut() {
        this.isLiSignOut = true;
        this.isLiactive = false;
           this.router.navigateByUrl('/login')
    }
}
