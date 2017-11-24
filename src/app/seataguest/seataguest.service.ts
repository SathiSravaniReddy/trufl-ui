import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { SharedService } from '../shared/Shared.Service';
import { constant } from '../shared/appsettings';

@Injectable()
export class SeataguestService {
   // public RestaurantID = 1;
    constructor(private http: Http, private sharedService: SharedService) {

    }  
    getseateddetails(restID: any) {
        return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/GetSeatAGuest/' + restID).map(
            (res) => res.json()
        )
    }
    getimages() {
        return this.http.get('assets/images.json').map(
            (res) => res.json()
        )
    }
    getservers(restID: any) {
       return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/GetServerwiseSnapshot/' + restID ).map(
            (res) => res.json()
        )
    }
    getwaitlist(restID: any) {
        return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/GetWaitListUsers/' + restID).map(
           (res) => res.json()
        )

    }

    newguestconfirmation(newguestdetails: any) {
        return this.http.post(constant.truflAPI + constant.truflBase + 'Hostess/SaveRestaurantGuestImmediately', newguestdetails).map(
            (res) => res.json()
        )
    }

    editguestconfirmation(editguestdetails: any) {
        return this.http.post(constant.truflAPI + constant.truflBase + 'Hostess/UpdateRestaurantGuestImmediately', editguestdetails).map(
            (res) => res.json()
        )
    }

    UpdateWaitListNotify(BookingID: any, TableNumbers: any) {
        return this.http.post(constant.truflAPI + constant.truflBase + 'WaitListUser/UpdateWaitListAccept/' + BookingID + '/' + TableNumbers, {}).map(
            (res) => res.json()
        )
    }

    UpdateWaitListAccept(BookingID: any, TableNumbers: any) {
        return this.http.post(constant.truflAPI + constant.truflBase + 'WaitListUser/UpdateWaitListAccept/' + BookingID + '/' + TableNumbers, {}).map(
            (res) => res.json()
        )
    }
}