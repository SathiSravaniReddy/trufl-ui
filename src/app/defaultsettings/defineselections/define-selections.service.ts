
import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { constant } from '../../shared/appsettings';
import 'rxjs/add/operator/map';

@Injectable()
export class DefineSelectionService {
    private results: any;
    constructor(private http: Http) {
    }
    //get define selections details
    getDefineSelectionDetails(restarauntid) {

        return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/GetRestaurantSectionTables/' + restarauntid).map(
        (res) => res.json())

    }
    //post define selctions details
    postDefineSelectionDetails(seatsinfo) {
        console.log(seatsinfo, "seatsinfo from service");
        return this.http.post(constant.truflAPI + constant.truflBase + 'WaitListUser/SaveDefineSections/', seatsinfo).map(

            (res) => res.json()
        )
    }
      //post clock in clock off details

    postClockInClockOutDetails(restarauntid,floornumber,activestatus) {
        console.log(restarauntid, floornumber, activestatus, "clock from service");

        return this.http.post(constant.truflAPI + constant.truflBase + 'WaitListUser/UpdateRestaurantSectionOpenClose/' + restarauntid + '/' + floornumber + '/' + activestatus,'').map(

            (res) => res.json()
        )
    }
}
