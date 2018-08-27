import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { constant } from '../shared/appsettings';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";

@Injectable()
export class SeatedService {
  public data: any;
  private premiumdata: any = {};
  private isEdit: any;

  constructor(private http: Http) {
  }

  //getters and setters
  public setEnableEditinfo(value) {
    this.isEdit = value;
    localStorage.setItem('isEdit', value);
  }

  public getEnableEditinfo() {
    this.isEdit = localStorage.getItem('isEdit');
    return this.isEdit;
  }

  //get seated details
  getSeatedDetails(restarauntid, openDate, SessionID) {
    return this.http.get(constant.truflAPI + constant.truflBase + 'Hostess/' + 'GetSeatedUsersList/' + restarauntid + '/' + openDate + '/' + SessionID).map(
      (res) => res.json()).catch(this.handleError);

  }
  /*added code*/
  GetServerDetails(RestaurantID) {
    return this.http.get(constant.truflAPI + constant.truflBase + '/WaitListUser/GetRestaurantStaffTables/' + RestaurantID + '').map(
      (res) => res.json()).catch(this.handleError);
  }

  switchServer(serverID, BookingID) {
    return this.http.post(constant.truflAPI + constant.truflBase + 'WaitListUser/UpdateSeatedSwitchServer/' + BookingID + '/' + serverID, {}).map(
      (res) => res.json()
    ).catch(this.handleError);
  }

  /*added code end*/
  //empty table post service

  postUpdateEmptyBookingStatus(bookingid: any) {
      var bookingId = bookingid.toString(); 
      return this.http.post(constant.truflAPI + constant.truflBase + 'Hostess/' + 'UpdateEmptyBookingStatus/' + bookingId, '').map(
      (res) => res.json()
    ).catch(this.handleError);

  }

  //updating extra times using low and jump count

  postUpdateExtraTime(bookingid: any, addtime: any) {


    return this.http.post(constant.truflAPI + constant.truflBase + 'Hostess/' + 'UpdateExtraTime/' + bookingid + '/' + addtime, '').map(
      (res) => res.json()
    ).catch(this.handleError);
  }

  //updating checkreceived

  postUpdateCheckReceived(bookingid: any) {
      var bookingId = bookingid.toString();   
    return this.http.post(constant.truflAPI + constant.truflBase + 'Hostess/' + 'UpdateCheckReceived/' + bookingid, '').map(
      (res) => res.json()
    ).catch(this.handleError);
  }

  //service for premium users
  postPremiumUserdetails(TruflUserID: any, RestaurantID: any, BillAmount: any, RewardType: any) {
    this.premiumdata.TruflUserID = TruflUserID;
    this.premiumdata.RestaurantID = RestaurantID;
    this.premiumdata.BillAmount = +BillAmount;
    this.premiumdata.RewardType = RewardType;

    return this.http.post(constant.truflAPI + constant.truflBase + 'WaitListUser/SaveRestaurantRewards', this.premiumdata).map(
      (res) => res.json()
    )
  }

  //Handling errors
  public handleError(error: any) {
    return Observable.throw(error.status);
  }
}
