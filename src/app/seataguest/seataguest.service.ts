import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { SharedService } from '../shared/Shared.Service';
import { constant } from '../shared/appsettings';
import {Observable} from "rxjs";

@Injectable()
export class SeataguestService {
   // public RestaurantID = 1;
    constructor(private http: Http, private sharedService: SharedService) {

    }
    getseateddetails(restID: any) {
        return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/GetSeatAGuest/' + restID).map(
            (res) => res.json()
        ).catch(this.handleError);
    }
    getimages() {
        return this.http.get('assets/images.json').map(
            (res) => res.json()
        )
    }
    getservers(restID: any) {
       return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/GetServerwiseSnapshot/' + restID ).map(
            (res) => res.json()
        ).catch(this.handleError);
    }
    getwaitlist(restID: any) {
        return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/GetWaitListUsers/' + restID).map(
           (res) => res.json()
        ).catch(this.handleError);

    }

    newguestconfirmation(newguestdetails: any) {
        return this.http.post(constant.truflAPI + constant.truflBase + 'Hostess/SaveRestaurantGuestImmediately', newguestdetails).map(
            (res) => res.json()
        ).catch(this.handleError);
    }

    editguestconfirmation(editguestdetails: any) {
        return this.http.post(constant.truflAPI + constant.truflBase + 'Hostess/UpdateRestaurantGuestImmediately', editguestdetails).map(
            (res) => res.json()
        ).catch(this.handleError);
    }

    UpdateWaitListNotify(BookingID: any, TableNumbers: any) {
        return this.http.post(constant.truflAPI + constant.truflBase + 'WaitListUser/UpdateWaitListSeated/' + BookingID + '/' + TableNumbers, {}).map(
            (res) => res.json()
        ).catch(this.handleError);
    }

    UpdateWaitListAccept(BookingID: any, TableNumbers: any) {
        return this.http.post(constant.truflAPI + constant.truflBase + 'WaitListUser/UpdateWaitListSeated/' + BookingID + '/' + TableNumbers, {}).map(
            (res) => res.json()
        ).catch(this.handleError);
    }


  // common service for empty response

  emptyResponse(RestaurantID){
    return this.http.get(constant.truflAPI + constant.truflBase + '/WaitListUser/GetVerifySnapShot/' + RestaurantID + '').map(
      (res) => res.json()
    )

  }

  //Handling errors
  public handleError(error: any) {
    return Observable.throw(error.status);
  }

}
