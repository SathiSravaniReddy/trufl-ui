import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ReviewSelectionsService } from './review-selections.service';
import {StaffService} from '../selectstaff/select-staff.service';
@Component({
    selector: 'reviewSelections',
    templateUrl: './review-selections.component.html',
    styleUrls: ['./review-selections.component.css'],

})
export class ReviewSelectionsComponent implements OnInit {
    public review_records: any;
    public RestaurantOpenSections: any;
    public imageIteration: any;
    public RestaurantWaitListOpen: any;
    public OpenTimeLoader: boolean = false;
    public RestaurantOpenSectionStaff: any;
    public restID = localStorage.getItem('restaurantid');
    private result=[];
    private globalCount = 0;
    private listOfRanges = [];
  public style = {};
  public restIDs: any;
    constructor(private router: Router, private reviewservice: ReviewSelectionsService,private selectstaff:StaffService) {

    }

    ngOnInit() {

        this.getReviewSelections(this.restID);
      this.dummy();
    }

    public getReviewSelections(restId: any) {
        this.OpenTimeLoader = true;
        this.imageIteration = 'data:image/JPEG;base64,'
        this.reviewservice.getreviewdetails(restId).subscribe((res: any) => {
            this.review_records = res._Data;
            console.log(this.review_records);
            this.RestaurantOpenSections = res._Data.RestaurantOpenSection;
            this.RestaurantWaitListOpen = res._Data.RestaurantWaitListOpen;
            this.RestaurantOpenSectionStaff = res._Data.RestaurantOpenSectionStaff;
            let that = this;

            if (this.RestaurantOpenSectionStaff) {
                //adding seatnumbers functionality
                this.RestaurantOpenSectionStaff.map(function (obj) {
                    if (that.result.length) {
                        var index = that.result.findIndex(function (_obj) {
                            return obj.TruflUserID === _obj.TruflUserID;
                        });

                        if (index !== -1) {
                            that.result[index].seatNumbers.push({
                                name: 'name',
                                type: 'text',
                                labelName1: 'Section Start Number',
                                labelName2: 'Section End Number',
                                StartTableNumber: obj.StartTableNumber,
                                EndTableNumber: obj.EndTableNumber
                            });
                        } else {
                            that.result.push(that.getSeatedInfoObj(obj));
                        }

                    } else {
                        that.result.push(that.getSeatedInfoObj(obj));
                    }
                })
            }
            this.OpenTimeLoader = false;
        })
     }
    getSeatedInfoObj(obj) {
        obj.seatNumbers = [];
        obj.seatNumbers.push({
            name: 'name',
            type: 'text',
            labelName1: 'Section Start Number',
            labelName2: 'Section End Number',
            StartTableNumber: obj.StartTableNumber,
            EndTableNumber: obj.EndTableNumber
        });
        return obj;
    }
    public next() {

        this.reviewservice.UpdateRestaurentOpenDate(this.restID).subscribe((res: any) => {
            console.log(res);

        })
        this.router.navigateByUrl('/waitlist');
    }
    public back() {
        this.router.navigateByUrl('/selectStaff');
    }
  public dummy() {
    var colorsList = '477B6C,8D6C8D,51919A,9A8A4A,9A7047,48588E,919A62';
    this.selectstaff.assignServercolor(colorsList, this.restID).subscribe((res: any) => {

      console.log(res,"res");
      debugger;
      for (let i = 0; i < res._Data.length; i++) {
        this.style[res._Data[i].UserID] = {
          "background-color": res._Data[i].backgroundcolor,
          "border": res._Data[i].border,
          "border-radius": res._Data[i].borderradius
        }
      }

      console.log(this.style);
      localStorage.setItem("stylesList", JSON.stringify(this.style));
    });
  }
}
