import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { constant } from '../shared/appsettings';
import 'rxjs/add/operator/map';

@Injectable()
export class SeatedService {
    private results: any;
    public seatedInfo: any;
    public data: any;
    public seatsdetails: any;
    public updatedbookingstatus: any;
    constructor(private http: Http) {
    }
    //get seated details
    getSeatedDetails(restarauntid) {
        return this.http.get(constant.truflAPI + constant.truflBase + 'Hostess/' + 'GetSeatedUsersList/' + restarauntid).map(
            (res) => res.json())

    }



    //empty table post service

        postUpdateEmptyBookingStatus(bookingid: any) {

            return this.http.post(constant.truflAPI + constant.truflBase + 'Hostess/' + 'UpdateEmptyBookingStatus/' + bookingid, '').map(
                (res) => res.json()
            )

    }

   //updating extra times using low and jump count

        postUpdateExtraTime(bookingid: any, addtime: any) {
            console.log("postUpdateExtraTime", bookingid + addtime);

            return this.http.post(constant.truflAPI + constant.truflBase + 'Hostess/' + 'UpdateExtraTime/' + bookingid +'/'+ addtime, '').map(
                (res) => res.json()
            )
        }
    //updating checkreceived

        postUpdateCheckReceived(bookingid: any) {
            console.log("postUpdateCheckReceived", bookingid);
            return this.http.post(constant.truflAPI + constant.truflBase + 'Hostess/' + 'UpdateCheckReceived/' + bookingid, '').map(
                (res) => res.json()
            )
        }

}
