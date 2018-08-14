import { Injectable } from "@angular/core";
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { constant } from "../shared/appsettings";
import {Observable} from "rxjs";

@Injectable()
export class manageService {
    constructor(private http: Http) {
    }

  closeService(RestaurantID: any, openDate: any) {
    return this.http.post(constant.truflAPI + constant.truflBase + 'WaitListUser/CloseService/' + RestaurantID + '/' + openDate, '').map(
            (res) => res.json()
        ).catch(this.handleError);
    }

    GetRestaurantOpenTime(RestaurantID: any) {
        return this.http.get(constant.truflAPI + constant.truflBase + '/WaitListUser/GetRestaurantWaitTimeOpenSectionStaff/' + RestaurantID +'').map(
            (res) => res.json()
        ).catch(this.handleError);
    }
  public handleError(error: any) {
    return Observable.throw(error.status);
  }

}
