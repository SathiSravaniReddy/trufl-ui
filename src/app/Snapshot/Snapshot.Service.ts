import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { constant } from '../shared/appsettings';
import 'rxjs/add/operator/map';

@Injectable()
export class SnapshotService {
    private results: any;
    constructor(private http: Http) {
    }

    GetCapacitywise(RestaurantID) {
        return this.http.get(constant.truflAPI + constant.truflBase + '/WaitListUser/GetCapacitywiseSnapshot/' + RestaurantID + '').map(
            (res) => res.json()
        )
    }

    GetServerwiseSnap(RestaurantID) {
        return this.http.get(constant.truflAPI + constant.truflBase + '/WaitListUser/GetServerwiseSnapshot/' + RestaurantID + '').map(
            (res) => res.json()
        )
    }

    GetTablewiseSnap(RestaurantID) {
        return this.http.get(constant.truflAPI + constant.truflBase + '/WaitListUser/GetTablewiseSnapshot/' + RestaurantID + '').map(
            (res) => res.json()
        )
    }

    GetServerDetails(RestaurantID) {
        return this.http.get(constant.truflAPI + constant.truflBase + '/WaitListUser/GetRestaurantStaffTables/' + RestaurantID + '').map(
            (res) => res.json()
        )
    }

    switchServer(serverID, RestaurantID, TblNo) {
        debugger;
        return this.http.post(constant.truflAPI + constant.truflBase + 'WaitListUser/UpdateSwitchServer/' + RestaurantID + '/' + TblNo + '/' + serverID, {}).map(
            (res) => res.json()
       )
    }
    dropCheck(Dropcheck, RestaurantID, TblNo) {
        return this.http.post(constant.truflAPI + constant.truflBase + 'WaitListUser/UpdateSnapshotTableEmptyAndCheck/' + RestaurantID + '/' + TblNo + '/' + Dropcheck, {}).map(
            (res) => res.json()
        )
    }

    emptyTable(EmptyTbl, RestaurantID, TblNo) {
        return this.http.post(constant.truflAPI + constant.truflBase + 'WaitListUser/UpdateSnapshotTableEmptyAndCheck/' + RestaurantID + '/' + TblNo + '/' + EmptyTbl, {}).map(
            (res) => res.json()
        )
    }
}