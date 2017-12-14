import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { constant } from '../shared/appsettings';
import {Observable} from "rxjs";

@Injectable()
export class StaffService {
    public RestaurentId:any
    constructor(private http: Http) {

    }
    getStaffDetails(restaurantid) {

        return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/GetRestaurantSelectStaff/' + restaurantid).map(
            (res) => res.json()
        ).catch(this.handleError)
    }

    postStaffDetails(staff_info:any) {
        return this.http.post(constant.truflAPI + constant.truflBase + 'WaitListUser/SaveManageServer', staff_info).map(
            (res) => res.json()
        ).catch(this.handleError)
    }
    assignServercolor(colorCodes, RestaurantID) {
        return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/AssignColorsToServer/' + colorCodes + '/' + RestaurantID).map(
            (res) => res.json()
        ).catch(this.handleError)
    }
  public handleError(error: any) {
    return Observable.throw(error.status);
  }
}
