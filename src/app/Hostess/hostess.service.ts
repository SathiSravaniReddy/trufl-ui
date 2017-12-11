import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {constant} from '../shared/appsettings';

import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()

export class HostessService {
  private rowdata: any = {}

  constructor(private http: Http) {

  }

  //Service for Users List display
  public getTruflUserList(restarauntid) {

    return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/GetWaitListUsers/' + restarauntid)
      .map(res => res.json() || {})
      .catch(this.handleError);
  }

  //services for side nav bio data
  /* public getBioInformation(restaurantId, truflUid, usertype) {
   return this.http.get(constant.truflAPI + constant.truflBase + 'Hostess/GetRestaurantUserDetails/' + restaurantId + '/' + truflUid + '/' + usertype)
   .map(res => res.json() || {})
   .catch(this.handleError);
   }*/
  //service for empty table
  postUpdateEmptyBookingStatus(bookingid: any) {

    return this.http.post(constant.truflAPI + constant.truflBase + 'Hostess/' + 'UpdateEmptyBookingStatus/' + bookingid, '').map(
      (res) => res.json()
    )
  }

  //getters and setters
  public setRowData(data) {

    this.rowdata = data;
    console.log(this.rowdata, " this.rowdata");
    localStorage.setItem('acceptoffer rowdata', JSON.stringify(data));
  }

  public  getRowData() {

    this.rowdata = localStorage.getItem('acceptoffer rowdata');
    console.log(this.rowdata, "this.rowdata");
    return this.rowdata;
  }

  //service for trungetseated
  public getTrungetseated(restarauntid) {

    return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/GetRestaurantGetSeatedNow/' + restarauntid)
      .map(res => res.json() || {})
      .catch(this.handleError);
  }


  public sendmessage(TruflUserID: any) {

    return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/SendPushNotification/' + TruflUserID).map(
      (res) => res.json()
    ) .catch(this.handleError);
  }


//changeaccepticontotable

  public changeicon(restarauntid: any, BookingID: any) {

    return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/UpdateWaitListAccept/' + restarauntid + "/" + BookingID).map(
      (res) => res.json()
    ).catch(this.handleError);

  }


  public changeiconpush(restarauntid: any, BookingID: any) {
    return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/UpdateWaitListNotify/' + restarauntid + "/" + BookingID).map(
      (res) => res.json()
    ).catch(this.handleError);

  }


  //Handling errors
  public handleError(error: any) {
    return Observable.throw(error.status);
  }
}

