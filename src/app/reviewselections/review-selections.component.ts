import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ReviewSelectionsService } from './review-selections.service';

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
    public RestaurantOpenSectionStaff: any;
    public restID = localStorage.getItem('restaurantid');
    private result=[];
    private globalCount = 0;
    private listOfRanges = [];
    constructor(private router: Router, private reviewservice: ReviewSelectionsService) {

    }

    ngOnInit() {

        this.getReviewSelections(this.restID);
    }

    public getReviewSelections(restId:any) {
        this.imageIteration = 'data:image/JPEG;base64,'
        this.reviewservice.getreviewdetails(restId).subscribe((res: any) => {
            this.review_records = res._Data;
            console.log(this.review_records);
            this.RestaurantOpenSections = res._Data.RestaurantOpenSection;
            this.RestaurantWaitListOpen = res._Data.RestaurantWaitListOpen;
            this.RestaurantOpenSectionStaff = res._Data.RestaurantOpenSectionStaff;
            console.log(this.RestaurantOpenSectionStaff, " this.RestaurantOpenSectionStaff");
            console.log(this.RestaurantOpenSections, " this.RestaurantOpenSections");

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
        })
        console.log("this", this.result)
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
        this.router.navigateByUrl('/waitlist');
    }
    public back() {
        this.router.navigateByUrl('/selectStaff');
    }
}
