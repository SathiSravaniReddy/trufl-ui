/**
 * Created by Sravani on 12/8/2017.
 */
import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { constant } from '../shared/appsettings';

import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()

export class resetStartService {
  private rowdata: any = {}
  constructor(private http: Http) {

  }

  getresetstartservice(restarauntid) {

      return this.http.post(constant.truflAPI + constant.truflBase + 'WaitListUser/ResetRestaurantOpenDate/' + restarauntid,'').map(
      (res) => res.json()).catch(this.handleError);

  }

//Handling errors
  public handleError(error: any) {
    return Observable.throw(error.status);
  }

}

