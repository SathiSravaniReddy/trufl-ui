import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { constant } from '../shared/appsettings';
import {Observable} from "rxjs";

@Injectable()
export class ReviewSelectionsService {
    public RestaurantID: any;

    constructor(private http: Http) {

    }
    getreviewdetails(restId:any) {
       // this.RestaurantID = 1;
        console.log(restId);
        return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/GetRestaurantWaitTimeOpenSectionStaff/' + restId).map(
            (res) => res.json()
        ).catch(this.handleError)
    }
    UpdateRestaurentOpenDate(restId: any) {
        // this.RestaurantID = 1;
        console.log(restId);
        return this.http.post(constant.truflAPI + constant.truflBase + 'WaitListUser/UpdateRestaurantOpenDate/' + restId, {}).map(
            (res) => res.json()
        ).catch(this.handleError)
    }

  public handleError(error: any) {
    return Observable.throw(error.status);
  }

}
