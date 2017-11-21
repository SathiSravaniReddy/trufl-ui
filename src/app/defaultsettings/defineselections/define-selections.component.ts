import { Component } from '@angular/core';
import { DefineSelectionService } from '../defineselections/define-selections.service'; 
import { LoginService } from '../../shared/login.service';

import { Router } from '@angular/router';
@Component({
    selector: 'defineSelections',
    templateUrl: './define-selections.component.html',
    styleUrls: ['./define-selections.component.css'],
})
export class DefineSelectionsComponent {

    private defineselectionsdetails;
    private definesectionstablerange;
    private selectionsname;
    private restarauntid;
    private result = [];
    private arr = [];
    private seatsinfo;
    public isShow: boolean = false;
    private currentsectionStartNumber;
    private currentsectionsEndNumber;
    private resultseatnumbers;
    private currentRowInfo;
    private savedList: any = [];
    private seatnumbers;
    private finalRes = [];
    private flag;
    private message;
    private defineselectionsdetailsCopy;
    private savedseatedinfo;
    private globalCount = 0;
    private listOfRanges = [];
    private checked;
    private activestatus;
    private floornumber;
    private clockinoutinfo;
    constructor(private _defineservice: DefineSelectionService, private router: Router, private _loginservice: LoginService) {
        this.restarauntid = _loginservice.getRestaurantId();


    }

    ngOnInit() {
        this.getDefineSelections(this.restarauntid);


    }

    getDefineSelections(restarauntid) {
        var that = this;
      
        this._defineservice.getDefineSelectionDetails(restarauntid).subscribe((res: any) => {
            this.defineselectionsdetails = res._Data.DefineSection;
            this.definesectionstablerange = res._Data.TableRange;
            console.log(this.defineselectionsdetails, " this.defineselectionsdetails");
            if (this.defineselectionsdetails) {
                //adding seatnumbers functionality
                this.defineselectionsdetails.map(function (obj) {
                    if (that.result.length) {
                        var index = that.result.findIndex(function (_obj) {
                            return obj.FloorNumber === _obj.FloorNumber;
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
            
           
            this.result.map(function (obj) {
                obj.sectionsCount = obj.seatNumbers.length;
                obj.seatNumbers.map(function (seatObj) {
                    that.globalCount++;
                    seatObj['range_' + that.globalCount] = seatObj.StartTableNumber + '-' + seatObj.EndTableNumber;
                    seatObj.FloorNumber = obj.FloorNumber;
                    seatObj.RestaurantID = obj.RestaurantID;
                    that.listOfRanges.push({
                        ['range_' + that.globalCount]: seatObj['range_' + that.globalCount]
                    });

                    if (seatObj.StartTableNumber !== '' && seatObj.EndTableNumber !== '') {
                        that.savedList.push(seatObj);
                       
                    }
                });
                
            });
            console.log(that.result, "that.result");

        })
     
     
    }
    cancel() {
        this.router.navigateByUrl('/defaultSettings');
    }
    CheckRange(findRangeArr) {
        
        let rangeFunc = (start, end) => Array.from({ length: (end - start) + 1 }, (v, k) => k + start);

        let rangeArray = findRangeArr.map(function (range) {
            let value = range[Object.keys(range)[0]];
            return rangeFunc(+value.split('-')[0], +value.split('-')[1]);
        });
        console.log(rangeArray, "rangeArray");

        return rangeArray;
    }
    saveclose() {
        
       
        // removing extra parameters for saving
        this.savedList.map(function (obj) {
            delete obj.labelName1;
            delete obj.labelName2;
            delete obj.name;
            delete obj.type;
            Object.keys(obj).filter(function (str) {
                if (str.includes('range')) {
                    delete obj[str];
                }

            })
        });

        console.log(this.savedList);
        
            this.postsavedlist();
            //if (!this.flag) {
            //    this.postsavedlist();
            //}
        
        //this.getDefineSelections(this.restarauntid);
        
    }

    postsavedlist() {
        console.log(this.savedList, "this.savedListo[iop[op[op[o=");
        this._defineservice.postDefineSelectionDetails(this.savedList).subscribe((res: any) => {
            this.savedseatedinfo = res._Data;
            console.log(this.savedseatedinfo, "this.savedseatedinfodfsdfd");
            this.router.navigateByUrl('/defaultSettings');
        })
    }

    showProfile(profile, seatArr, index) {
        var _that = this;

        this.floornumber = profile.FloorNumber;
        this.currentRowInfo = profile;
        this.arr = seatArr;
        this.currentRowInfo.arr = this.arr;
        this.isShow = true;
        console.log(this.arr, " this.arr");
    }
    updateServerStatus(value, index) {
      
        this.defineselectionsdetails.IsActive = value;
        if (value == false) {
            this.activestatus = this.defineselectionsdetails.ActiveInd = 0;
        }
        else {
            this.activestatus = this.defineselectionsdetails.ActiveInd = 1;
        }
      
        this._defineservice.postClockInClockOutDetails(this.restarauntid, this.floornumber,this.activestatus).subscribe((res: any) => {
            this.clockinoutinfo = res._Data;
            console.log(this.clockinoutinfo, "this.savedseatedinfodfsdfd");
        })
        console.log(value, "valuek[olikopk");

    }


    closeProile() {

        this.isShow = false;

    }


    addMore() {
        console.log(this.currentRowInfo);
        
        this.globalCount++;
        this.arr.push({
            name: 'name',
            type: 'text',
            StartTableNumber: '',
            EndTableNumber: '',
            labelName1: 'Section Start Number',
            labelName2: 'Section End Number',
            ['range_' + this.globalCount]: ''
        })
        let obj = {
            RestaurantID: this.currentRowInfo.RestaurantID,
            FloorNumber: this.currentRowInfo.FloorNumber,
            StartTableNumber: this.arr[this.arr.length - 1].StartTableNumber,
            EndTableNumber: this.arr[this.arr.length - 1].EndTableNumber
        };
        console.log(this.savedList);

        this.listOfRanges.push({
            ['range_' + this.globalCount]: ''
        });
        
        console.log(this.arr, " this.arr");

        

    }

    checkIsObjExists(arr, obj) {
        return arr.findIndex(function (_obj) {
            return ((_obj.FloorNumber === obj.FloorNumber) && (_obj.StartTableNumber === obj.StartTableNumber) && (_obj.EndTableNumber === obj.EndTableNumber))
        });
    }

    checkInListOfRanges(key) {
        return this.listOfRanges.findIndex(function (range, index) {
            return Object.keys(range)[0] == key;
        });
        
    }

    updateStartEndLogic(value, index, isStartOrEnd) {
        let arrayrange;
        let obj = this.currentRowInfo.arr[index];
        if (obj.StartTableNumber == '' && obj.EndTableNumber == '') {
            
            this.currentRowInfo.IsActive = false;
            this.arr.splice(index, 1);
            if (this.arr != null && this.arr.length != 0) {
               
                this.currentRowInfo.IsActive = true;
            }
        }
        obj.FloorNumber = this.currentRowInfo.FloorNumber;
        obj.RestaurantID = this.currentRowInfo.RestaurantID;
        let tempArr = Object.keys(obj).filter(function (str) {
            if (str.includes('range')) {
                return str;
            }
        });
        if (tempArr.length) {
            let findedValueIndex = this.checkInListOfRanges(tempArr[0]);
            if (findedValueIndex !== -1) {
                let keyValue = this.listOfRanges[findedValueIndex][tempArr[0]];
                if (keyValue == '') {
                    this.listOfRanges[findedValueIndex] = {
                        [tempArr[0]]: isStartOrEnd ? (value + '-') : ('-' + value)
                    }
                } else {
                    if (keyValue.split('-').length === 2) {
                        this.listOfRanges[findedValueIndex] = {
                            [tempArr[0]]: isStartOrEnd ? (value + '-' + keyValue.split('-')[1]) : (keyValue.split('-')[0] + '-' + value)
                        }
                    }
                }

            }
        }
        if (this.checkIsObjExists(this.savedList, obj) === -1) {
            this.savedList.push(obj);

        }

        // finding range 
        let findRangeArr = this.listOfRanges.filter(function (range) {
            return Object.keys(range)[0] !== tempArr[0];
        });
        arrayrange = this.CheckRange(findRangeArr);
        console.log(arrayrange, "arrayrangehuoyioupupu");
        let that = this;

        this.flag = false;


        arrayrange.map(function (rangeArr) {
            if (obj.StartTableNumber !== '' || obj.EndTableNumber !== '') {
                if (+(obj.StartTableNumber) !== 0 && rangeArr.indexOf(+(obj.StartTableNumber)) !== -1 && that.savedList.length > 1) {
                    that.flag = true;
                    that.message = "Table already allocated";
                } else if (+(obj.EndTableNumber) !== 0 && rangeArr.indexOf(+(obj.EndTableNumber)) !== -1 && that.savedList.length > 1) {
                    that.flag = true;
                    that.message = "Table already allocated";
                } else if (+(obj.StartTableNumber) !== 0 && +(obj.EndTableNumber) !== 0 && (+obj.StartTableNumber >= +obj.EndTableNumber)) {
                    that.flag = true;
                    that.message = "StartTableNumber is Greaterthan EndTableNumber";
                }
                else if ((+(obj.StartTableNumber) < +(that.definesectionstablerange[0].FirstTableNumber)) || (+(obj.EndTableNumber) > +(that.definesectionstablerange[0].LastTableNumber))) {
                    that.flag = true;
                    that.message = "Exceeded TableRange";
                }
            }

        });
    }

    updateStartTableNumber(value, index) {
        this.updateStartEndLogic(value, index, true);
    }

    updateEndTableNumber(value, index) {
        this.updateStartEndLogic(value, index, false);
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

}


