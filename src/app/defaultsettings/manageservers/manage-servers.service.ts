﻿import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { constant } from '../../shared/appsettings';
import 'rxjs/add/operator/map';


@Injectable()
export class ManageServersService {
    private results: any;
    constructor(private http: Http) {
    }

    getManageServersDetails(restarauntid) {

        return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/GetRestaurantStaffTables/' + restarauntid ).map(
        
            (res) => res.json())
    }

    postManageserverDetails(seatedinfo: any) {
        console.log(seatedinfo, "stahh;laksjl;od;o");

        return this.http.post(constant.truflAPI + constant.truflBase + 'WaitListUser/SaveManageServer', seatedinfo).map(
            (res) => res.json()
        )
    }
    postManageserverModalDetails(restarauntid:any,currentuserid:any,newuserid: any) {
       
        console.log(restarauntid, currentuserid, newuserid, "sdftgterdterterter from service");
        return this.http.post(constant.truflAPI + constant.truflBase + 'WaitListUser/UpdateServerClockOut/' + restarauntid + '/' + currentuserid + '/' + newuserid,'').map(
            (res) => res.json()
        )
    }
}
