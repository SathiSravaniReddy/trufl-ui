﻿import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import { constant } from '../shared/appsettings';

@Injectable()
export class EditGuestService {
    constructor(private http: Http) {

    }


    editGuestDetails(guestInfo: any, number: any) {

        console.log(guestInfo);
        if (number == 1) {

            console.log("coming1");
            return this.http.post(constant.truflAPI + constant.truflBase +'Hostess/UpdateRestaurantGuest', guestInfo).map(
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


    public geteditguestdetails(restaurentid: any, userid: any, usertype: any) {
        return this.http.get(constant.truflAPI + constant.truflBase +'Hostess/GetRestaurantGuest/' + restaurentid + '/' + userid + '/' + usertype).map(
            (res) => res.json()
        )
    }




}