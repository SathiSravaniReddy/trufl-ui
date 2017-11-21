import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { constant } from "../shared/appsettings";

@Injectable()
export class startService {
    constructor(private http: Http) {
    }

    SaveRestaurantOpenTime(RestaurantID: any, Time: any) {
        return this.http.post(constant.truflAPI + constant.truflBase + '/WaitListUser/SaveRestaurantOpenTime?RestaurantID=' + RestaurantID + '&Time='+Time ,'').map(
            (res) => res.json()
        )
    }

    GetRestaurantOpenTime(RestaurantID: any) {
        return this.http.get(constant.truflAPI + constant.truflBase + '/WaitListUser/GetRestaurantWaitTimeOpenSectionStaff/' + RestaurantID +'').map(
            (res) => res.json()
        )
    }
}