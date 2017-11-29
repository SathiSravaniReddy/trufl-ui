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


    addGuestDetails(guestInfo: any) {     
                  
        return this.http.post(constant.truflAPI + constant.truflBase + 'Hostess/SaveRestaurantGuest', guestInfo).map(
                (res) => res.json()
            )
        }       
    

}
