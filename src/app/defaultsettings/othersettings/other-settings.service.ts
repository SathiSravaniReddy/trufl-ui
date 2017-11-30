import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { constant } from '../../shared/appsettings';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class OtherSettingsService {
    private results: any;
    private diningexperience;
    private defaultgettableprice;

    constructor(private http: Http) {
    }
    public setDiningExperience(value) {

        this.diningexperience = value;
        localStorage.setItem('diningexperience', value);
    }
    public getDiningExperience() {
        this.diningexperience = localStorage.getItem('diningexperience');
        return this.diningexperience;
    }
    public setDefaultgetaTableprice(value) {
        this.defaultgettableprice = value;
        localStorage.setItem('defaultgettableprice', value);
    }
    public getDefaultgetaTableprice() {
        this.defaultgettableprice = localStorage.getItem('defaultgettableprice');
        console.log(this.defaultgettableprice, "this.defaultgettableprice");
        return this.defaultgettableprice;
    }



    getOtherSettingsDetails(restarauntid) {

        return this.http.get(constant.truflAPI + constant.truflBase + 'Admin/GetRestaurantSettings/' + restarauntid).map(
            (res) => res.json()).catch(this.handleError);

    }
    postOtherSettingsDetails(othersettingsinfo: any) {
        console.log(othersettingsinfo,"other settings info from service");
        return this.http.post(constant.truflAPI + constant.truflBase +'Admin/SaveRestaurantSettings',othersettingsinfo).map(
            (res) => res.json()
        ).catch(this.handleError);
    }
  public handleError(error: any) {
    return Observable.throw(error.status);
  }

}
