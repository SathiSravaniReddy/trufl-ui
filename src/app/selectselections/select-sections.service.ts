import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { constant } from '../shared/appsettings';
import {Observable} from "rxjs";
@Injectable()
export class SelectService {
  //  public RestaurentId: any;
    constructor(private http: Http) {
    }
    getDetails(restID:any) {
      //  this.RestaurentId = 1;
        return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/GetRestaurantOpenSections/' + restID).map(
            (res) => res.json()
        ).catch(this.handleError)
    }




    updateselection(selectiondetails: any) {
        return this.http.post(constant.truflAPI + constant.truflBase+'WaitListUser/UpdateRestaurantActiveSections',selectiondetails).map(
            (res) => res.json()
        ).catch(this.handleError)

    }
  public handleError(error: any) {
    return Observable.throw(error.status);
  }
   }
