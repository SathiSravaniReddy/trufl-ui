import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { constant } from '../shared/appsettings';

import 'rxjs/add/operator/map';

@Injectable()

export class HostessService {
    private rowdata:any={}
    constructor(private http: Http) {

    }

    //Service for Users List display
    public getTruflUserList(restarauntid) {

        return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/GetWaitListUsers/' + restarauntid)
            .map(res => res.json() || {})
            .catch(this.handleError);
    }
    //services for side nav bio data
    public getBioInformation(restaurantId, truflUid, usertype) {
        return this.http.get(constant.truflAPI + constant.truflBase + 'Hostess/GetRestaurantUserDetails/' + restaurantId + '/' + truflUid + '/' + usertype)
            .map(res => res.json() || {})
            .catch(this.handleError);
    }
    //service for empty table
    postUpdateEmptyBookingStatus(bookingid: any) {

        return this.http.post(constant.truflAPI + constant.truflBase + 'WaitListUser/' + 'UpdateEmptyBookingStatus/' + bookingid, '').map(
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
        )
    }


    
    







    //Handling errors
    private handleError(error: any) {
        return 'Error';
    }

}

