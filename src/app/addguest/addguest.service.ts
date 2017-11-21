import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { SharedService } from '../shared/Shared.Service';
import { constant } from '../shared/appsettings';

@Injectable()
export class GuestService {
    public restID: any;
    public QuotedTime: any;
    public partysize: any;
    constructor(private http: Http, private sharedService: SharedService) {

    }


    addGuestDetails(guestInfo: any, number: any) {
        console.log(number);
        console.log(guestInfo);      

        if (number == 1) {          
            
            return this.http.post(constant.truflAPI + constant.truflBase + 'Hostess/SaveRestaurantGuest', guestInfo).map(
                (res) => res.json()
            )
        }
        else {
            console.log("coming2");
            return this.http.post('', guestInfo).map(
                (res) => res.json()
            )
        }

    }

    getguestsdetails() {
        return this.http.get('assets/Guest.json').map(
            (res) => res.json()
        )

    }

    

}