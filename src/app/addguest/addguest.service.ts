import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { SharedService } from '../shared/Shared.Service';
import { constant } from '../shared/appsettings';
import { Observable } from "rxjs";

@Injectable()
export class GuestService {
    public restID: any;
    public QuotedTime: any;
    public partysize: any;
    constructor(private http: Http, private sharedService: SharedService) {

    }


    addGuestDetails(guestInfo: any) {

        return this.http.post(constant.truflAPI + constant.truflBase + 'Hostess/SaveRestaurantGuest', guestInfo).map(
            (res) => res.json()
        ).catch(this.handleError);
    }

    emailverify() {
        return this.http.get(constant.truflAPI + constant.truflBase + 'Hostess/GetVerifyEmailID').map(
            (res) => res.json()
        ).catch(this.handleError);
    }

    //Handling errors
    public handleError(error: any) {
        return Observable.throw(error.status);
    }
}
