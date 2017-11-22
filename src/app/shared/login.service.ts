﻿import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { constant } from '../shared/appsettings';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { User } from '../Login/user';

@Injectable()
export class LoginService {
    private results: any;
    private userType;
    private settingStatus;
    private logindetails;
    private truflid: any;
    private restaurantid: any;
    private restaurantName;
    private user: {};
    private userName;
    private errormessage;
    constructor(private http: Http) {
    }
    public setUserType(value) {
        this.userType = value;
        localStorage.setItem('userType',value );
    }

    public getUserType() {
        this.userType = localStorage.getItem('userType');
        return this.userType;
    }

    public setTrufluserID(value) {
        this.truflid = value;
        localStorage.setItem('truflid', value);
    }
    public getTrufluserID() {
        this.truflid = localStorage.getItem('truflid');
        return this.truflid;
}
    public setRestaurantId(value) {
        this.restaurantid = value;
        localStorage.setItem('restaurantid', value);
    }
    public getRestaurantId() {
        this.restaurantid = localStorage.getItem('restaurantid');
        return this.restaurantid;
    }
    public setRestaurantName(value) {
        this.restaurantName = value;
        localStorage.setItem('restaurantName', value);
    }
    public getRestaurantName() {
        this.restaurantName = localStorage.getItem('restaurantName');
        return this.restaurantName;
    }
    public setUser(user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(user));
    }
    public getUser() {
        this.user = JSON.parse(localStorage.getItem('user'));
        return this.user;
    }
    public setUserName(value) {
        this.userName = value;
        localStorage.setItem('userName', value);
    }
    public getUserName() {
        this.userName = localStorage.getItem('userName');
        return this.userName;
    }
    public setErrorMessage(value) {
        this.errormessage = value;
        localStorage.setItem('erroeMessage', value);
    }
    public getErrorMessage() {
        this.errormessage = localStorage.getItem('erroeMessage');
        console.log(this.errormessage, "this.errormessage from service");
        return this.userName;
    }
    //To get User Details
    getLoginDetails(userstype: any,restaurantid) {
        return this.http.get(constant.truflAPI + constant.truflBase +  'GetUserTypes/' + userstype + '/' + restaurantid).map(
            (res:Response) => res.json());

    }

    //To get Login Member Type
    loginAuthentication(user: any) {
        this.setUser(user);
        return this.http.post(constant.truflAPI + constant.truflBase + 'LoginAuthentication',user).map(
            (res: Response) => res.json());

    }

    //To get an email when click on forgot password
    forgotpassword(email: any) {

        return this.http.get(constant.truflAPI + constant.truflBase + 'ForgetPassword?LoginEmail=' + email).map(
            (res: Response) => res.json());

    }

    //To reset password
    resetPassword(reset: any) {
        delete reset.confirmPassword;
        return this.http.post(constant.truflAPI + constant.truflBase + 'RestPassword', reset).map(
            (res: Response) => res.json());

    }

    //To register new user
    create(user: any) {
        return this.http.post(constant.truflAPI + constant.truflBase + 'SignUp' , user).map(
            (res: Response) => res.json());

    }
  /* verifylogin service */


  VerifyLogin(restaurantid) {

    //this.restaurantid = localStorage.getItem('restaurantid');
    return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/GetRestaurantOpenDate/' +restaurantid).map(
      (res) => res.json()
    )

  }




  /* verifylogin service  end*/

    //To logout
    logout() {
        localStorage.clear();

    }

    public handleError(error: any) {
           console.error('handleError', error);
           let response = {
                status: error.status,
                message: error.statusText
           };
           try {
                response.message = error.json()._statusMessage;
           } catch (e) {
                    console.log('could not parse body', e);
           }
       return Observable.throw(response);
     }


}
