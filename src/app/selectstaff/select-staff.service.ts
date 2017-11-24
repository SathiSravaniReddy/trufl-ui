import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { constant } from '../shared/appsettings';

@Injectable()
export class StaffService {
    public RestaurentId:any
    constructor(private http: Http) {

    }
    getStaffDetails(restaurantid) {

        return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/GetRestaurantSelectStaff/' + restaurantid).map(
            (res) => res.json()
        )
    }

    postStaffDetails(staff_info:any) {
        console.log(staff_info,"stahh;laksjl;od;o");

        return this.http.post(constant.truflAPI + constant.truflBase + 'WaitListUser/SaveManageServer', staff_info).map(
            (res) => res.json()
        )
    }
    assignServercolor(colorCodes, RestaurantID) {
        return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/AssignColorsToServer/' + colorCodes + '/' + RestaurantID).map(
            (res) => res.json()
        )
    }
}
