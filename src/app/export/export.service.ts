import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { constant } from '../shared/appsettings';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";

@Injectable()

export class ExportService {
  private rowdata: any = {};
  private premiumdata: any = {};
  private LoggedInUser: any;

  constructor(private http: Http) {
    this.LoggedInUser = localStorage.getItem('LoggedInUser');
  }

  //Service for Users List display
  public getDailyReport(ReportType, openDate, SessionID) {

    return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/GetDailyReport/' + ReportType + '/' + openDate + '/' + SessionID)
      .map(res => res.json() || {})
      .catch(this.handleError);
  }

  
 

 




  


  //Handling errors
  public handleError(error: any) {
    return Observable.throw(error.status);
  }


  //service for premium users
  postPremiumUserdetails(TruflUserID: any, RestaurantID: any, BillAmount: any, RewardType: any) {
    this.premiumdata.TruflUserID = TruflUserID;
    this.premiumdata.RestaurantID = RestaurantID;
    this.premiumdata.BillAmount = BillAmount;
    this.premiumdata.RewardType = RewardType;

    return this.http.post(constant.truflAPI + constant.truflBase + 'WaitListUser/SaveRestaurantRewards', this.premiumdata).map(
      (res) => res.json()
    )
  }
  getservers(restID: any) {
    return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/GetServerwiseSnapshot/' + restID).map(
      (res) => res.json()
    ).catch(this.handleError);
  }

}

