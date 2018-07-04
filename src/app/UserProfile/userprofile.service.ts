import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { constant } from '../shared/appsettings';
import { Observable } from "rxjs";

@Injectable()
export class UserProfileService {      

    constructor(private http: Http) {
    }
    getUserProfile(restID: any) {      
        return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/GetMyProfile/' + restID).map(
            (res) => res.json()
        ).catch(this.handleError)
    }

    //Handling errors
    public handleError(error: any) {
        return Observable.throw(error.status)
    }
}



 
