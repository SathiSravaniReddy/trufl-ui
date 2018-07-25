import {Injectable} from "@angular/core";
import {Http} from '@angular/http';
import {constant} from '../../shared/appsettings';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";


@Injectable()
export class ManageServersService {
  public RestaurentId: any

  constructor(private http: Http) {

  }


  //service for getting all the alavilabel servers
  GetStaffAssignTables(restaurantid) {
    return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/GetStaffAssignTables/' + restaurantid).map(
      (res) => res.json()
    ).catch(this.handleError)
  }

  //service for posting the selected servers
  SaveTableAssignedToStaff(table_info: any) {
    return this.http.post(constant.truflAPI + constant.truflBase + 'WaitListUser/SaveTableAssignedToStaff', table_info).map(
      (res) => res.json()
    ).catch(this.handleError)
  }


  //service for getting all the alavilabel servers
  getStaffDetails(restaurantid) {

    return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/GetRestaurantSelectStaff/' + restaurantid).map(
      (res) => res.json()
    ).catch(this.handleError)
  }

  //service for posting the selected servers
  postStaffDetails(staff_info: any) {
    return this.http.post(constant.truflAPI + constant.truflBase + 'WaitListUser/SaveManageServer', staff_info).map(
      (res) => res.json()
    ).catch(this.handleError)
  }

  //assigning color randomly for alloated sercers
  assignServercolor(colorCodes, RestaurantID) {
    return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/AssignColorsToServer/' + colorCodes + '/' + RestaurantID).map(
      (res) => res.json()
    ).catch(this.handleError)
  }

  SaveSelectedStaff(RestaurantID, TruflUserID) {
    return this.http.post(constant.truflAPI + constant.truflBase + '/WaitListUser/SaveSelectStaff/' + RestaurantID + '/' + TruflUserID + '', RestaurantID, TruflUserID).map(
      (res) => res.json()
    ).catch(this.handleError);
  }
  /* verifylogin service */


  VerifyLogin(restaurantid) {
    return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/GetRestaurantOpenDate/' + restaurantid).map(
      (res) => res.json()
    ).catch(this.handleError);

  }
  getManageServersDetails(restarauntid) {

    return this.http.get(constant.truflAPI + constant.truflBase + 'WaitListUser/GetRestaurantStaffTables/' + restarauntid).map(
      (res) => res.json()).catch(this.handleError);
  }

  //service for posting the updated data
  postManageserverDetails(seatedinfo: any) {
    return this.http.post(constant.truflAPI + constant.truflBase + 'WaitListUser/SaveManageServer', seatedinfo).map(
      (res) => res.json()
    ).catch(this.handleError);
  }

  //service for posting the modal pop up data
  postManageserverModalDetails(restarauntid: any, currentuserid: any, newuserid: any) {
    return this.http.post(constant.truflAPI + constant.truflBase + 'WaitListUser/UpdateServerClockOut/' + restarauntid + '/' + currentuserid + '/' + newuserid, '').map(
      (res) => res.json()
    ).catch(this.handleError);
  }

  /* verifylogin service  end*/

  //errror handling
  public handleError(error: any) {
    return Observable.throw(error.status);
  }
}
