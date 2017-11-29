import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { startService } from "./start-service.service";

@Component({
    selector: 'startService',
    templateUrl: './start-service.component.html',

})
export class StartServiceComponent implements OnInit {
    private time:any;
    private restID = localStorage.getItem('restaurantid');
    public startserviceLoader: boolean = false;
    constructor(private router: Router, private _startService: startService) {
        
    }
    ngOnInit() {
        this.startserviceLoader = true;
            this._startService.GetRestaurantOpenTime(this.restID).subscribe(res => {
            let resTime = res._Data.RestaurantWaitListOpen[0].OpenTime;
            let val = resTime.split(':');
            let val2 = val[1];
            let minutes = val2.slice(0, 2);
            if (val2.indexOf("A") >= 0) {
                if (val[0] == '0') {
                    let valtemp = '00';
                    this.time = (valtemp) + ':' + minutes;
                }
                else {
                    this.time = (val[0]) + ':' + minutes;
                }
            }
            else {
                if (+val[0] == 12) {
                    this.time = (val[0]) + ':' + minutes;
                }
                else {
                    this.time = (+val[0] + 12) + ':' + minutes;
                }
            }
            this.startserviceLoader = false;
        })
    }
    public next() {
        this.router.navigateByUrl('/selectselections');
        let val = this.time.split(':');
        if (+val[0] <12) {
            this.time = val[0] + ':' + val[1] + 'AM';
        }
        else if (+val[0] == 12) {
            this.time = val[0] + ':' + val[1] + 'PM';
        }
        else {
            this.time = (+val[0] - 12) + ':' + val[1] + 'PM';
        }
       this._startService.SaveRestaurantOpenTime(this.restID, this.time).subscribe(res => {

       })
    }
}
