webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/EditGuest/editguest.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <form novalidate #form=\"ngForm\" (ngSubmit)=\"form.valid && onSubmit(form.value,form)\">\r\n        <div class=\"col-md-12 customheader\">\r\n\r\n            <div class=\"customheaderleft\">\r\n                <h2>Edit Guest Bio</h2>\r\n            </div>\r\n\r\n            <div class=\"customheaderright\">\r\n                <button type=\"submit\" (click)=\"get(1)\" class=\"secondary-btn\">\r\n                    Save and Close\r\n                </button>\r\n                <button type=\"submit\" (click)=\"get(2)\" class=\"primary-btn\">\r\n                    Save and Seat Guest\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n        <div class=\"col-md-12 newguestmain\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"input input--haruki\">\r\n                    <input class=\"input__field input__field--haruki\" type=\"text\" id=\"input-1\" name=\"UserName\" [(ngModel)]=\"data.UserName\" #guest=\"ngModel\" [ngClass]=\"guest.invalid && (guest.dirty || guest.touched || guest.submitted)?'highlight':'previous'\" required>\r\n                    <label class=\"input__label input__label--haruki\" for=\"input-1\">\r\n                        <span class=\"input__label-content input__label-content--haruki error-input\">Guest Name *</span>\r\n                    </label>\r\n                    <label *ngIf=\"guest.invalid && (guest.dirty || guest.touched || form.submitted)\" [ngStyle]=\"{'color': 'red'}\">\r\n                        <label *ngIf=\"guest.errors.required \">\r\n                            name is required.\r\n                        </label>\r\n                    </label>\r\n                    <span style=\"float:right;\" *ngIf=\"guest.invalid && (guest.dirty || guest.touched || form.submitted)\">\r\n                        <img src=\"../../../../wwwroot/images/error.jpg\" />\r\n                    </span>\r\n                </div>\r\n                <div class=\"input input--haruki\">\r\n                    <input class=\"input__field input__field--haruki\" type=\"text\" id=\"input-1\" name=\"Email\" (input)=\"change($event)\" [(ngModel)]=\"data.Email\" #email=\"ngModel\" pattern=\"[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}\" [ngClass]=\"email.invalid && (email.dirty || email.touched || email.submitted) ? 'highlight': 'previous'\" required>\r\n                    <label class=\"input__label input__label--haruki\" for=\"input-1\">\r\n                        <span class=\"input__label-content input__label-content--haruki error-input\">Email Address *</span>\r\n                    </label>\r\n                    <label *ngIf=\"email.invalid && (email.dirty || email.touched || form.submitted)\" [ngStyle]=\"{'color': 'red'}\">\r\n                        <label *ngIf=\"email.errors.required \">\r\n                            email is required.\r\n                        </label>\r\n                        <label *ngIf=\"email.errors.pattern\">\r\n                            please enter avalid email address <i class=\"material-icons\"></i>\r\n                        </label>\r\n                    </label>\r\n                    <span style=\"float:right;\" *ngIf=\"email.invalid && (email.dirty || email.touched || form.submitted)\">\r\n                        <img src=\"../../../../wwwroot/images/error.jpg\" />\r\n                    </span>\r\n                </div>\r\n\r\n                <span *ngIf=\"show_message\" [ngStyle]=\"{'color': 'red'}\">{{error_message}}</span>\r\n\r\n                <div class=\"input input--haruki\">\r\n                    <input class=\"input__field input__field--haruki\" type=\"text\" id=\"input-1\" name=\"PhoneNumber\" [(ngModel)]=\"data.PhoneNumber\" #mobile=\"ngModel\" [ngClass]=\"mobile.invalid && (mobile.dirty || mobile.touched || mobile.submitted) ? 'highlight': 'previous'\" required>\r\n                    <label class=\"input__label input__label--haruki\" for=\"input-1\">\r\n                        <span class=\"input__label-content input__label-content--haruki error-input\">Mobile Number *</span>\r\n                    </label>\r\n\r\n                    <label *ngIf=\"mobile.invalid &&(mobile.dirty || mobile.touched || form.submitted)\" [ngStyle]=\"{'color': 'red'}\">\r\n                        <label *ngIf=\"mobile.errors.required\">\r\n                            mobile number is required.\r\n                        </label>\r\n                    </label>\r\n                    <span style=\"float:right;\" *ngIf=\"mobile.invalid &&(mobile.dirty || mobile.touched || form.submitted)\">\r\n                        <img src=\"../../../../wwwroot/images/error.jpg\" />\r\n                    </span>\r\n                </div>\r\n\r\n                <div class=\"input input--haruki\">\r\n                    <input class=\"input__field input__field--haruki\" type=\"text\" id=\"input-1\" name=\"Relationship\" [(ngModel)]=\"data.Relationship\" [ngClass]=\"'previous'\">\r\n                    <label class=\"input__label input__label--haruki\" for=\"input-1\">\r\n                        <span class=\"input__label-content input__label-content--haruki\">Relatonship</span>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"input input--haruki\">\r\n                    <input class=\"input__field input__field--haruki\" type=\"text\" id=\"input-1\" name=\"ThisVisit\" [(ngModel)]=\"data.ThisVisit\" [ngClass]=\"'previous'\">\r\n                    <label class=\"input__label input__label--haruki\" for=\"input-1\">\r\n                        <span class=\"input__label-content input__label-content--haruki\">This Visit</span>\r\n                    </label>\r\n                </div>\r\n                <div class=\"input input--haruki\">\r\n                    <input class=\"input__field input__field--haruki\" type=\"text\" id=\"input-1\" name=\"FoodAndDrinkPreferences\" [(ngModel)]=\"data.FoodAndDrinkPreferences\" [ngClass]=\"'previous'\">\r\n                    <label class=\"input__label input__label--haruki\" for=\"input-1\">\r\n                        <span class=\"input__label-content input__label-content--haruki\">Food & Drink Preferences</span>\r\n                    </label>\r\n                </div>\r\n                <div class=\"input input--haruki\">\r\n                    <input class=\"input__field input__field--haruki\" type=\"text\" id=\"input-1\" name=\"SeatingPreferences\" [(ngModel)]=\"data.SeatingPreferences\" [ngClass]=\"'previous'\">\r\n                    <label class=\"input__label input__label--haruki\" for=\"input-1\">\r\n                        <span class=\"input__label-content input__label-content--haruki\">Seating Preferences</span>\r\n                    </label>\r\n                </div>\r\n\r\n                <div class=\"input input--haruki\">\r\n                    <input class=\"input__field input__field--haruki\" type=\"text\" id=\"input-1\" name=\"Description\" [(ngModel)]=\"data.Description\" [ngClass]=\"'previous'\">\r\n                    <label class=\"input__label input__label--haruki\" for=\"input-1\">\r\n                        <span class=\"input__label-content input__label-content--haruki\">Notes</span>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-12 bottombuttons\">\r\n            <i aria-hidden=\"true\" id=\"close\" (click)=\"EditCancel()\" class=\"bladeIcon icon-close closeIconStyle\"><span>Cancel</span></i>\r\n        </div>\r\n\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/EditGuest/editguest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditGuestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_Shared_Service__ = __webpack_require__("../../../../../src/app/shared/Shared.Service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editguest_service__ = __webpack_require__("../../../../../src/app/EditGuest/editguest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditGuestComponent = (function () {
    function EditGuestComponent(sharedService, editGuestService, router) {
        this.sharedService = sharedService;
        this.editGuestService = editGuestService;
        this.router = router;
        this.data = {};
        this.show_message = false;
    }
    EditGuestComponent.prototype.ngOnInit = function () {
        this.editguestdetails = localStorage.getItem('editguestDetails');
        this.editguest_details = JSON.parse(this.editguestdetails);
        if (this.editguest_details) {
            this.data = this.editguest_details;
        }
        if (this.data) {
            this.PartySize = this.data.PartySize;
            this.restaurent_Id = this.data.RestaurantID;
            this.booking_id = this.data.BookingID;
            this.trufl_id = this.data.TruflUserID;
        }
        this.sharedService.uniqueid = "editguest";
        localStorage.setItem('acceptoffer rowdata', JSON.stringify(this.data));
        if (this.sharedService.email_error) {
            this.error_message = this.sharedService.email_error;
            this.show_message = true;
        }
    };
    EditGuestComponent.prototype.onSubmit = function (guestdetails, form) {
        var _this = this;
        localStorage.setItem('editguestDetails', JSON.stringify(guestdetails));
        var obj = {
            "RestaurantID": this.restaurent_Id,
            "TruflUserID": this.trufl_id,
            "FullName": guestdetails['UserName'],
            "Email": guestdetails['Email'],
            "ContactNumber": guestdetails['PhoneNumber'],
            "Relationship": guestdetails['Relationship'],
            "ThisVisit": guestdetails['ThisVisit'],
            "FoodAndDrink": guestdetails['FoodAndDrinkPreferences'],
            "SeatingPreferences": guestdetails['SeatingPreferences'],
            "Description": guestdetails['Description'],
            "BookingID": this.booking_id,
            "TableNumbers": ''
        };
        console.log(obj);
        if (this.number == 1) {
            this.editGuestService.editGuestDetails(obj, this.number).subscribe(function (res) {
                console.log(res);
                if (res._ErrorCode == '50000') {
                    //  this.router.navigate(['editguest']);
                    _this.show_message = true;
                    _this.error_message = "Email Id Already Exists";
                    //  this.data.PartySize = this.PartySize;
                    _this.edit_guest = localStorage.getItem('editguestDetails');
                    _this.data = JSON.parse(_this.edit_guest);
                    console.log(_this.data);
                    localStorage.setItem('acceptoffer rowdata', JSON.stringify(_this.data));
                }
                else {
                    _this.sharedService.email_error = '';
                    _this.router.navigate(['waitlist']);
                }
            });
        }
        else if (this.number == 2) {
            this.sharedService.uniqueid = "edit_guest";
            this.edit_guest = localStorage.getItem('editguestDetails');
            // this.data = this.sharedService.editguestDetails;
            this.data = JSON.parse(this.edit_guest);
            this.data.PartySize = this.PartySize;
            this.data.TruflUserID = this.trufl_id;
            this.data.BookingID = this.booking_id;
            this.data.RestaurantID = this.restaurent_Id;
            localStorage.setItem('acceptoffer rowdata', JSON.stringify(this.data));
            this.router.navigate(['seataGuest']);
        }
        form.resetForm();
    };
    EditGuestComponent.prototype.get = function (number) {
        this.number = number;
        console.log(this.number, "this is NO");
    };
    EditGuestComponent.prototype.EditCancel = function () {
        this.router.navigate(['waitlist']);
    };
    EditGuestComponent.prototype.change = function (data) {
        this.show_message = false;
    };
    return EditGuestComponent;
}());
EditGuestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app_edit',
        template: __webpack_require__("../../../../../src/app/EditGuest/editguest.component.html"),
        styles: [__webpack_require__("../../../../../src/app/EditGuest/editguest.style.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_Shared_Service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_Shared_Service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__editguest_service__["a" /* EditGuestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__editguest_service__["a" /* EditGuestService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], EditGuestComponent);

var _a, _b, _c;
//# sourceMappingURL=editguest.component.js.map

/***/ }),

/***/ "../../../../../src/app/EditGuest/editguest.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditGuestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_appsettings__ = __webpack_require__("../../../../../src/app/shared/appsettings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditGuestService = (function () {
    function EditGuestService(http) {
        this.http = http;
    }
    EditGuestService.prototype.editGuestDetails = function (guestInfo, number) {
        console.log(guestInfo);
        if (number == 1) {
            console.log("coming1");
            return this.http.post(__WEBPACK_IMPORTED_MODULE_3__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_3__shared_appsettings__["a" /* constant */].truflBase + 'Hostess/UpdateRestaurantGuest', guestInfo).map(function (res) { return res.json(); });
        }
        else {
            console.log("coming2");
            return this.http.post('', guestInfo).map(function (res) { return res.json(); });
        }
    };
    EditGuestService.prototype.geteditguestdetails = function (restaurentid, userid, usertype) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_3__shared_appsettings__["a" /* constant */].truflBase + 'Hostess/GetRestaurantGuest/' + restaurentid + '/' + userid + '/' + usertype).map(function (res) { return res.json(); });
    };
    return EditGuestService;
}());
EditGuestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], EditGuestService);

var _a;
//# sourceMappingURL=editguest.service.js.map

/***/ }),

/***/ "../../../../../src/app/EditGuest/editguest.style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.highlight {\r\n    border-bottom: 1px solid red !important;\r\n}\r\n\r\n.previous {\r\n    border-bottom: 1px solid #6a7989;\r\n}\r\n\r\n.input__label--haruki::after {\r\n    background: none !important;\r\n}\r\n\r\n/*.customheaderright a {\r\n    width: 43%;\r\n}*/\r\n/*.customheaderright {\r\n   padding: 3% 0 0 11%;\r\n}*/\r\n/*.secondary-btn, primary-btn {\r\n    width: 42%;\r\n}*/\r\n.bottombuttons {\r\n    background: #1f2024;\r\n    padding-top: 25px;\r\n    padding-bottom: 25px;\r\n    position: fixed;\r\n    bottom: 0px;\r\n    right: 4em;\r\n}\r\n.closeIconStyle span {\r\n    font-family: AvenirNextCondensed;\r\n    font-size:22px;\r\n    color:#f7f7f7;\r\n    text-transform:uppercase;\r\n    margin-left:0.4em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Hostess/hostess.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\r\n * animate.css -http://daneden.me/animate\r\n * Version - 3.5.1\r\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\r\n *\r\n * Copyright (c) 2016 Daniel Eden\r\n */\r\n\r\n.animated {\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n}\r\n.snapmain table tr td img {\r\n    opacity: unset!important;\r\n}\r\n\r\n\r\n@-webkit-keyframes fadeInRight {\r\n    from {\r\n        opacity: 0;\r\n        -webkit-transform: translate3d(100%, 0, 0);\r\n        transform: translate3d(100%, 0, 0);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: none;\r\n        transform: none;\r\n    }\r\n}\r\n\r\n@keyframes fadeInRight {\r\n    from {\r\n        opacity: 0;\r\n        -webkit-transform: translate3d(100%, 0, 0);\r\n        transform: translate3d(100%, 0, 0);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: none;\r\n        transform: none;\r\n    }\r\n}\r\n\r\n.fadeInRight {\r\n    -webkit-animation-name: fadeInRight;\r\n    animation-name: fadeInRight;\r\n}\r\n\r\n@-webkit-keyframes fadeInRightBig {\r\n    from {\r\n        opacity: 0;\r\n        -webkit-transform: translate3d(2000px, 0, 0);\r\n        transform: translate3d(2000px, 0, 0);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: none;\r\n        transform: none;\r\n    }\r\n}\r\n\r\n@keyframes fadeInRightBig {\r\n    from {\r\n        opacity: 0;\r\n        -webkit-transform: translate3d(2000px, 0, 0);\r\n        transform: translate3d(2000px, 0, 0);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: none;\r\n        transform: none;\r\n    }\r\n}\r\n\r\n.fadeInRightBig {\r\n    -webkit-animation-name: fadeInRightBig;\r\n    animation-name: fadeInRightBig;\r\n}\r\n\r\n#profileSection {\r\n    height: 100vh;\r\n    background: #394165;\r\n    position: fixed;\r\n    right: 0px;\r\n    top: 83px;\r\n    overflow-y: auto;\r\n    width: 300px;\r\n    z-index: 9999;\r\n}\r\n\r\n#close {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.slideform label {\r\n    float: left;\r\n    width: 100%;\r\n    margin: 0 0 5px 0;\r\n    color: #fff;\r\n}\r\n\r\n.slideform input[type=text] {\r\n    float: left !important;\r\n    width: 100% !important;\r\n    padding: 5px !important;\r\n    height: 30px !important;\r\n    background: #4f5879 !important;\r\n    color: #fff !important;\r\n    border: #4f5879 solid 1px !important;\r\n}\r\n/* White Stripped Image Div*/\r\n.ImgBorder {\r\n    border-right: 2px solid #40486B;\r\n    padding: 6px 15px;\r\n}\r\n.divImgbanner {\r\n    background-color: #4f5879;\r\n    margin-left: -30px;\r\n    width: 117%;\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n}\r\n.divImgbanner button{\r\n    background-color: transparent;\r\n    outline: none;\r\n    border: none;\r\n}\r\n.divImgbanner span:hover{\r\n    cursor:pointer;\r\n}\r\n.pStyles {\r\n    text-align: center;\r\n    font-size: small;\r\n    margin: 0px;\r\n    color:rgba(255, 255, 254, 0.74);\r\n}\r\n.pUsernm {\r\n    text-align: center;\r\n    margin: 0px;\r\n    font-family: AvenirNextCondensed;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n    color: #ffffff;\r\n}\r\n.slideForm{\r\n    font-weight: bold;\r\n    margin: 0px;\r\n}\r\n.pBioName {\r\n    margin: 0px;\r\n    font-family: AvenirNext;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    margin-top: 1.1em;\r\n}\r\n.pbioDesc {\r\n    margin: 0px;\r\n    color: #DEDEDE;\r\n    font-size: 13px;\r\n    font-family: Avenir Next;\r\n}\r\n.positionRelt {\r\n    position: relative;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Hostess/hostess.component.html":
/***/ (function(module, exports) {

module.exports = "<shared-header></shared-header>\r\n\r\n<div class=\"col-md-12 col-sm-12 snapmain positionRelt\">\r\n\r\n    <table class=\"table table-responsive\" id=\"WaitlistTbl\">\r\n        <thead>\r\n            <tr  id=\"printrowheader\">\r\n                <th class=\"alignCenter\" id=\"one\">\r\n                    TRUFL<br />\r\n                    STATUS\r\n                </th>\r\n                <th class=\"alignCenter\" id=\"two\" >{{restaurantName}}</th>\r\n                <th id=\"three\">Guset<br /> name</th>\r\n                <th class=\"alignCenter\"id=\"four\" >party<br /> size</th>\r\n                <th class=\"alignCenter\"  id=\"five\">wait<br /> quoted</th>\r\n                <th class=\"alignCenter\"  id=\"six\">time<br /> waited</th>\r\n                <th class=\"alignCenter\" id=\"seven\">trufl offer/<br /> reservation</th>\r\n                <th class=\"alignCenter\" id=\"eight\">accept<br /> offer</th>\r\n                <th class=\"alignCenter\" id=\"nine\">notify</th>\r\n                <th class=\"alignCenter\" id=\"ten\">print</th>\r\n                <th class=\"alignCenter\"  id=\"eleven\">remove</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let item of truflUserList; let i=index;\"  id=\"printrow_{{i}}\" (click)=\"watlistUserDetails(item,i)\" [class.tablerowselect]=\"i == selectedRow\" >\r\n                <td class=\"alignCenter\"> <img alt=\"\" class=\"imgwidth48\" src=\"../../../../wwwroot/images/tick.png\" /> </td>\r\n                <td class=\"alignCenter\"> <img alt=\"\" class=\"imgwidth48\" src=\"../../../../wwwroot/images/tick1.png\" /> </td>\r\n                <td class=\"fontsize18\">{{item.UserName}}</td>\r\n                <td class=\"nOFontStyle alignCenter\">{{item.PartySize}}</td>\r\n                <td class=\"nOFontStyle alignCenter\">{{item.Quoted}}</td>\r\n                <td class=\"nOFontStyle alignCenter\">{{item.totalremainingtime}}</td>\r\n                <td class=\"nOFontStyle alignCenter\"><span *ngIf=\"item.BookingStatus===2 && item.OfferAmount>0\">$</span>{{item.OfferAmount}}</td>\r\n                <td class=\"alignCenter\"> <a (click)=\"acceptoffer(item)\" *ngIf=\"item.BookingStatus===2 && item.OfferAmount>0\"><img alt=\"\" src=\"../../../../wwwroot/images/DollerSmall.png\" /></a> </td>\r\n                <td class=\"alignCenter\"> <a (click)=\"notify(item)\" *ngIf=\"item.PhoneNumber!=null\"><img alt=\"\" class=\"imgWidth25\" src=\"../../../../wwwroot/images/BellSmall.png\" /> </a></td>\r\n                <td class=\"alignCenter\"><a href=\"javascript:void(0)\"(click)=\"printrow(i)\"><img alt=\"\" src=\"../../../../wwwroot/images/Printersmall.png\" /></a> </td>\r\n                <td class=\"alignCenter\"><a (click)=\"Remove(item.BookingID); $event.stopPropagation();\"><img alt=\"\" src=\"../../../../wwwroot/images/removeSmall.png\" /> </a></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n\r\n    <div>\r\n        <a  ><img (click)=\"navigateToaddGuest()\" class=\"addImg\" src=\"../../../../wwwroot/images/bigadd.png\" /></a>\r\n    </div>\r\n</div>\r\n<turnOngetseated></turnOngetseated>\r\n\r\n<!--User Profile  Right Side-->\r\n<div class=\"col-md-2 animated fadeInRight\" id=\"profileSection\" *ngIf=\"showProfile\">\r\n    <i aria-hidden=\"true\"id=\"close\" (click)=\"closeProile()\" class=\"bladeIcon icon-close closeIconStyle\"></i>\r\n    <div class=\"slidetopHostess col-md-12\">\r\n           <img alt=\"\" src=\"data:image/JPEG;base64,{{pic}}\" />\r\n    </div>\r\n    <div class=\"col-md-12 mrgBottom10\">\r\n        <p class=\"pUsernm\"><label >{{username}}</label></p>\r\n        <p class=\"pStyles\"></p>\r\n        <p class=\"pStyles\"></p>\r\n</div>\r\n    <div class=\"col-md-12 clearfix divImgbanner\">\r\n        <span class=\"ImgBorder\"><button (click)=\"acceptoffersidenav(data)\" [disabled]=\"data.BookingStatus===7\" ><img src=\"../../../../wwwroot/images/DollerSmall.png\" /></button></span>\r\n        <span class=\"ImgBorder\"><a (click)=\"tablessidenav(data)\"><img  src=\"../../../../wwwroot/images/seatSmall.png\" /></a></span>\r\n        <span class=\"ImgBorder\"><a (click)=\"Remove(bookingid); $event.stopPropagation();\"><img src=\"../../../../wwwroot/images/removeSmall.png\" /></a></span>\r\n        <span class=\"ImgBorder\"><a (click)=\"editguest()\"><img src=\"../../../../wwwroot/images/editSmall.png\" /></a></span>\r\n        <span class=\"ImgBorder\"><a (click)=\"printrow()\"><img src=\"../../../../wwwroot/images/Printersmall.png\" /></a></span>\r\n   </div>\r\n    \r\n    <div class=\"col-md-12\" *ngFor=\"let item of bioData\">\r\n        <div class=\"slideform\">\r\n            <p class=\"pBioName\">This Visit</p>\r\n            <p class=\"pbioDesc\">{{item.ThisVisit}}</p>\r\n\r\n            <p class=\"pBioName\">Relationship</p>\r\n            <p class=\"pbioDesc\">{{item.Relationship}}</p>\r\n\r\n            <p class=\"pBioName\">Seating Preferences</p>\r\n            <p class=\"pbioDesc\">{{item.SeatingPreferences}}</p>\r\n\r\n            <p class=\"pBioName\">Food & Drink Preferences</p>\r\n            <p class=\"pbioDesc\">{{item.FoodAndDrinkPreferences}}</p>\r\n        </div>\r\n     </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/Hostess/hostess.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hostess_service__ = __webpack_require__("../../../../../src/app/Hostess/hostess.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_login_service__ = __webpack_require__("../../../../../src/app/shared/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_Shared_Service__ = __webpack_require__("../../../../../src/app/shared/Shared.Service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HostessComponent = (function () {
    function HostessComponent(hostessService, loginService, _toastr, vRef, router, sharedService) {
        this.hostessService = hostessService;
        this.loginService = loginService;
        this._toastr = _toastr;
        this.router = router;
        this.sharedService = sharedService;
        this.showProfile = false;
        this.profileData = [];
        this.tablesSelected = [];
        this.bioData = [];
        this.rowdata = {};
        this._toastr.setRootViewContainerRef(vRef);
        this.restaurantName = this.loginService.getRestaurantName();
        this.restarauntid = this.loginService.getRestaurantId();
        this.getWaitListData(this.restarauntid);
    }
    HostessComponent.prototype.getWaitListData = function (restarauntid) {
        var _this = this;
        //Displaying trufl user's list
        this.hostessService.getTruflUserList(restarauntid).subscribe(function (res) {
            _this.truflUserList = res._Data;
            _this.truflUserList.OfferAmount = (+_this.truflUserList.OfferAmount);
            console.log(_this.truflUserList, "this.truflUserList");
            _this.truflUserList.map(function (user) {
                var currentDate = new Date();
                var currenthours = currentDate.getHours();
                var currentminutes = currentDate.getMinutes();
                var currenttime = (currenthours * 60) + currentminutes;
                if (user.WaitListTime != null) {
                    var waitedtime = new Date(user.WaitListTime);
                    var hours = waitedtime.getHours();
                    var minutes = waitedtime.getMinutes();
                    var remainingwaitedtime = (hours * 60) + (minutes);
                    var totalremainingtime = currenttime - remainingwaitedtime;
                    user.totalremainingtime = totalremainingtime;
                }
            });
        });
    };
    //Functinality for trufl user's list
    HostessComponent.prototype.watlistUserDetails = function (data, index) {
        this.data = data;
        this.bookingid = data.BookingID;
        //this.sharedService.editguestDetails = data;
        //console.log(this.sharedService.editguestDetails);
        localStorage.setItem('editguestDetails', JSON.stringify(data));
        this.selectedRow = index;
        this.showProfile = true;
        var _that = this;
        this.currentSelectedUser = data.Email;
        this.RestaurantId = data.RestaurantID;
        this.username = data.UserName;
        this.pic = data.pic;
        this.profileData = data;
        this.usertype = data.TruflMemberType;
        this.truflid = data.TruflUserID;
        this.restaurantid = data.RestaurantID;
        this.usertype = data.TruflMemberType;
        this.getBioinformation(this.restaurantid, this.truflid, this.usertype);
    };
    HostessComponent.prototype.getBioinformation = function (resid, trufid, usertype) {
        var _this = this;
        this.hostessService.getBioInformation(resid, trufid, usertype).subscribe(function (res) {
            _this.bioinfo = res._Data;
            _this.bioData = _this.bioinfo.BioData;
        });
    };
    //print functionality
    HostessComponent.prototype.Remove = function (bookingid) {
        this.showProfile = false;
        this.hostessService.postUpdateEmptyBookingStatus(bookingid).subscribe(function (res) {
        });
        this.getWaitListData(this.restarauntid);
    };
    HostessComponent.prototype.printrow = function (index) {
        if (index === undefined) {
            index = this.selectedRow;
        }
        var prtContent = document.getElementById('printrow_' + index);
        var prtheader = document.getElementById('printrowheader');
        if (prtContent) {
            var WinPrint = window.open('', '_blank', 'left=0,top=0,width=800,height=400,toolbar=0,scrollbars=0,status=0');
            WinPrint.document.write('<html><head><title></title>');
            WinPrint.document.write('<link rel="stylesheet" href="http://localhost:63200/css/print.css" media="print" type="text/css"/>');
            WinPrint.document.write('</head><body><table><tr><th>');
            WinPrint.document.write(prtheader.innerHTML);
            WinPrint.document.write('</th></tr><tr><td>');
            WinPrint.document.write(prtContent.innerHTML);
            WinPrint.document.write('</td></tr></table></body></html>');
            setTimeout(function () {
                WinPrint.focus();
                WinPrint.print();
                WinPrint.close();
            });
        }
    };
    //Functionality for closing side nav
    HostessComponent.prototype.closeProile = function () {
        this.showProfile = false;
    };
    //accept offer
    HostessComponent.prototype.acceptoffer = function (data) {
        console.log(data, "data");
        this.sharedService.uniqueid = "accept_offer";
        this.sharedService.useraccept = data;
        this.hostessService.setRowData(data);
        this.router.navigateByUrl('/seataGuest');
    };
    //acceptoffer sidenav
    HostessComponent.prototype.acceptoffersidenav = function (data) {
        console.log(data, "data in sidenav accept");
        this.sharedService.uniqueid = "accept_offersidenav";
        this.sharedService.useraccept = data;
        this.hostessService.setRowData(data);
        this.router.navigateByUrl('/seataGuest');
    };
    //tables sidenav
    HostessComponent.prototype.tablessidenav = function (data) {
        console.log(data, "data in sidenav tables");
        this.sharedService.uniqueid = "tables_sidenav";
        this.sharedService.useraccept = data;
        this.hostessService.setRowData(data);
        this.router.navigateByUrl('/seataGuest');
    };
    //notify
    HostessComponent.prototype.notify = function (data) {
        this.hostessService.sendmessage(data.TruflUserID).subscribe(function (res) {
            console.log(res._Data);
        });
        console.log(data, "data");
        this.sharedService.uniqueid = "notify";
        this.sharedService.useraccept = data;
        this.hostessService.setRowData(data);
        this.router.navigateByUrl('/seataGuest');
    };
    //routing
    HostessComponent.prototype.waitlistPage = function () {
        this.router.navigateByUrl('/waitlist');
    };
    HostessComponent.prototype.seatedPage = function () {
        this.router.navigateByUrl('/seated');
    };
    HostessComponent.prototype.snapshotPage = function () {
        this.router.navigateByUrl('/snapshot');
    };
    HostessComponent.prototype.settingsPage = function () {
        this.router.navigateByUrl('/defaultSettings');
    };
    HostessComponent.prototype.Addguest = function () {
        this.router.navigateByUrl('/addGuest');
    };
    HostessComponent.prototype.editguest = function () {
        this.router.navigateByUrl('/editguest');
    };
    HostessComponent.prototype.navigateToaddGuest = function () {
        this.router.navigateByUrl('/addGuest');
    };
    return HostessComponent;
}());
HostessComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'hostess',
        template: __webpack_require__("../../../../../src/app/Hostess/hostess.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Hostess/hostess.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__["ToastOptions"]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__hostess_service__["a" /* HostessService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__hostess_service__["a" /* HostessService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_Shared_Service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_Shared_Service__["a" /* SharedService */]) === "function" && _f || Object])
], HostessComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=hostess.component.js.map

/***/ }),

/***/ "../../../../../src/app/Hostess/hostess.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostessService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__ = __webpack_require__("../../../../../src/app/shared/appsettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HostessService = (function () {
    function HostessService(http) {
        this.http = http;
        this.rowdata = {};
    }
    //Service for Users List display
    HostessService.prototype.getTruflUserList = function (restarauntid) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + 'WaitListUser/GetWaitListUsers/' + restarauntid)
            .map(function (res) { return res.json() || {}; })
            .catch(this.handleError);
    };
    //services for side nav bio data
    HostessService.prototype.getBioInformation = function (restaurantId, truflUid, usertype) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + 'Hostess/GetRestaurantUserDetails/' + restaurantId + '/' + truflUid + '/' + usertype)
            .map(function (res) { return res.json() || {}; })
            .catch(this.handleError);
    };
    //service for empty table
    HostessService.prototype.postUpdateEmptyBookingStatus = function (bookingid) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + 'WaitListUser/' + 'UpdateEmptyBookingStatus/' + bookingid, '').map(function (res) { return res.json(); });
    };
    //getters and setters
    HostessService.prototype.setRowData = function (data) {
        this.rowdata = data;
        console.log(this.rowdata, " this.rowdata");
        localStorage.setItem('acceptoffer rowdata', JSON.stringify(data));
    };
    HostessService.prototype.getRowData = function () {
        this.rowdata = localStorage.getItem('acceptoffer rowdata');
        console.log(this.rowdata, "this.rowdata");
        return this.rowdata;
    };
    //service for trungetseated
    HostessService.prototype.getTrungetseated = function (restarauntid) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + 'WaitListUser/GetRestaurantGetSeatedNow/' + restarauntid)
            .map(function (res) { return res.json() || {}; })
            .catch(this.handleError);
    };
    HostessService.prototype.sendmessage = function (TruflUserID) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + 'WaitListUser/SendPushNotification/' + TruflUserID).map(function (res) { return res.json(); });
    };
    //Handling errors
    HostessService.prototype.handleError = function (error) {
        return 'Error';
    };
    return HostessService;
}());
HostessService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], HostessService);

var _a;
//# sourceMappingURL=hostess.service.js.map

/***/ }),

/***/ "../../../../../src/app/Pipes/SnapshotPipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SPlitStringPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SPlitStringPipe = (function () {
    function SPlitStringPipe() {
    }
    SPlitStringPipe.prototype.transform = function (value) {
        var array;
        array = value.split(' ');
        return array[0];
    };
    return SPlitStringPipe;
}());
SPlitStringPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'splitString'
    })
], SPlitStringPipe);

//# sourceMappingURL=SnapshotPipe.js.map

/***/ }),

/***/ "../../../../../src/app/Reservation/reservation.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div>\r\n\r\n    <form novalidate #form=\"ngForm\" (ngSubmit)=\"form.valid && onSubmit(form.value,form)\">\r\n\r\n        <div class=\"customheader\">\r\n\r\n            <div class=\"customheaderleft\">\r\n                <h2>Add A Reservation</h2>\r\n            </div>\r\n            <div class=\"customheaderright\" style=\"padding-top:3%;\">\r\n\r\n                <button type=\"submit\" class=\"primary-btn\" style=\"float: right;margin-right: 9%;\">\r\n                    Save Reservation\r\n                </button>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-12\" style=\"margin-top: 5%;\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"col-md-8 col-md-offset-3\">\r\n\r\n                    <p class=\"fontStyling\">{{selectdate|date:'EEEE'|uppercase}},{{selectdate|date:'MMMM'|uppercase}}{{selectdate|date:'d'}}</p>\r\n                    <br />\r\n\r\n                    <div class=\"date-select\" role=\"application\">\r\n                        <div class=\"popup-menu tn-date-selector-popup tn-date-selector-menu\" id=\"tn_calendar\" *ngIf=\"isActive\">\r\n                            <div class=\"menu\" tn-off-click=\"onOffClick_event();\">\r\n                                <div class=\"tn-date-selector\">\r\n                                    <div class=\"tn-datepicker-title\"></div>\r\n                                    <div class=\"tn-datepicker-calender\">\r\n                                        <div class=\"tn-datepicker-nav\">\r\n                                            <button type=\"button\" class=\"tn-datepicker-nav-button bladeIcon icon-chevron-left\" (click)=\"prev()\"\r\n                                                    name=\"previous\" id=\"prev\"></button>\r\n                                            <span class=\"month-label\">{{month.format(\"MMMM YYYY\")}}</span>\r\n                                            <button type=\"button\" class=\"tn-datepicker-nav-button bladeIcon icon-chevron-right\"\r\n                                                    (click)=\"next()\" name=\"next\" id=\"nxt\"></button>\r\n                                        </div>\r\n                                        <div class=\"tn-datepicker-row\">\r\n                                            <span class=\"tn-datepicker-col text-center\"\r\n                                                  *ngFor=\"let dayLabel of daysInWeek\">\r\n                                                <span class=\"tn-datepicker-day-label\" title=\"{{dayLabel.title}}\">{{dayLabel.day}}</span>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div class=\"tn-datepicker-row\" *ngFor=\"let week of weeks\">\r\n                                            <span class=\"tn-datepicker-col\" *ngFor=\"let day of week.days\">\r\n                                                <div tabindex=\"-1\" class=\"tn-datepicker-day\" (click)=\"onDayClick(day);\" name=\"selected\" [ngClass]=\"getDayCls(day,datesOfInterest)\">\r\n                                                    <button type=\"button\" [ngClass]=\"{'my-class':Year_Change <currentYear || (Month_Change<currentMonth && Year_Change <=currentYear ) || (day.number<currentDay && Year_Change==currentYear && Month_Change==currentMonth)}\" [disabled]=\"Year_Change <currentYear || (Month_Change<currentMonth && Year_Change <=currentYear ) || (day.number<currentDay && Year_Change==currentYear && Month_Change==currentMonth)\">{{day.number}}</button>\r\n                                                </div>\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--calendar code end-->\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"col-md-10 col-md-offset-0\">\r\n                    <span class=\"servicetime\" style=\"background:none;border:none;\">\r\n                        <input type=\"time\" name=\"time\" [(ngModel)]=\"data.time\" #time=\"ngModel\" required>\r\n                    </span>\r\n\r\n                    <label *ngIf=\"time.invalid && (time.dirty || time.touched || form.submitted)\" [ngStyle]=\"{'color': 'red'}\">\r\n                        <label *ngIf=\"time.errors.required \">\r\n                            Please select time.\r\n                        </label>\r\n                    </label>\r\n                </div>\r\n                <div class=\"clearfix\"></div>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<div class=\"col-md-12 bottombuttons\">\r\n    <i aria-hidden=\"true\" id=\"close\" (click)=\"cancel()\" class=\"bladeIcon icon-close cancelIconStyle\"><span>Cancel</span></i>\r\n</div>\r\n\r\n\r\n<script src=\"~/js/classie.js\"></script>\r\n\r\n<script>\r\n    (function () {\r\n\r\n        if (!String.prototype.trim) {\r\n            (function () {\r\n\r\n                var rtrim = /^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g;\r\n                String.prototype.trim = function () {\r\n                    return this.replace(rtrim, '');\r\n                };\r\n            })();\r\n        }\r\n\r\n        [].slice.call(document.querySelectorAll('input.input__field')).forEach(function (inputEl) {\r\n\r\n            if (inputEl.value.trim() !== '') {\r\n                classie.add(inputEl.parentNode, 'input--filled');\r\n            }\r\n\r\n\r\n            inputEl.addEventListener('focus', onInputFocus);\r\n            inputEl.addEventListener('blur', onInputBlur);\r\n        });\r\n\r\n        function onInputFocus(ev) {\r\n            classie.add(ev.target.parentNode, 'input--filled');\r\n        }\r\n\r\n        function onInputBlur(ev) {\r\n            if (ev.target.value.trim() === '') {\r\n                classie.remove(ev.target.parentNode, 'input--filled');\r\n            }\r\n        }\r\n    })();\r\n\r\n\r\n\r\n</script>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/Reservation/reservation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reservation_service__ = __webpack_require__("../../../../../src/app/Reservation/reservation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_Shared_Service__ = __webpack_require__("../../../../../src/app/shared/Shared.Service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*import { DatepickerModule } from 'ng2-bootstrap';*/

var ReservationComponent = (function () {
    function ReservationComponent(reservationService, router, sharedService) {
        this.reservationService = reservationService;
        this.router = router;
        this.sharedService = sharedService;
        this.selectdate = new Date();
        this.datevalue = {};
        this.data = {};
        this.restID = localStorage.getItem('restaurantid');
        //calendar
        this.index = 0;
        this.isDateRequired = false;
        this.inputDate = null;
        this.month = null;
        this.calFocus = null;
        this.isActive = null;
        this.isRequired = null;
        this.errorMessage = null;
        this.datesOfInterest = [];
        this.footerData = [];
        this.date = __WEBPACK_IMPORTED_MODULE_4_moment__().format('MM/DD/YYYY');
        this.show_message = false;
        this.daysInWeek = [
            {
                day: "S",
                title: "Sunday"
            },
            {
                day: "M",
                title: "Monday"
            },
            {
                day: "T",
                title: "Tuesday"
            },
            {
                day: "W",
                title: "Wednesday"
            },
            {
                day: "T",
                title: "Thursday"
            },
            {
                day: "F",
                title: "Friday"
            },
            {
                day: "S",
                title: "Saturday"
            }
        ];
        this.getDayCls = function (day) {
            return day.isCurrentMonth ? (day.isToday ? 'is-today' : (__WEBPACK_IMPORTED_MODULE_4_moment__(day.date._d).format('L') === this.date ? 'is-selected-date' : 'is-in-month')) : 'is-not-in-month';
        };
        this.clicked = function () {
            this.isActive = false;
        };
    }
    ReservationComponent.prototype._removeTime = function (date) {
        return date.hour(0).minute(0).second(0).millisecond(0);
    };
    ReservationComponent.prototype._buildWeek = function (ctrl, date, month) {
        var today = new Date();
        var days = [];
        for (var i = 0; i < 7; i++) {
            days.push({
                name: date.format('dd').substring(0, 1),
                number: date.date(),
                isCurrentMonth: date.month() === month.month(),
                isToday: date.isSame(today, 'day'),
                date: date
            });
            date = date.clone();
            date.add(1, 'd');
        }
        return days;
    };
    ReservationComponent.prototype._buildMonth = function (ctrl, start, month) {
        var done = false;
        var date = start.clone();
        var monthIndex = date.month();
        var count = 0;
        ctrl.weeks = [];
        while (!done) {
            ctrl.weeks.push({ days: this._buildWeek(ctrl, date.clone(), month) });
            date.add(1, 'w');
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }
    };
    ReservationComponent.prototype.next = function () {
        this.datesOfInterest = [];
        this.footerData = [];
        var next = this.month.clone();
        this._removeTime(next.month(next.month() + 1).date(1));
        next.day(0);
        this.month.month(this.month.month() + 1);
        /*date format changing*/
        console.log(this.month._d);
        this.Month_Change = this.month._d.getMonth() + 1;
        this.Year_Change = this.month._d.getFullYear();
        console.log(this.Month_Change);
        console.log(this.Year_Change);
        /* date format changing end*/
        this._buildMonth(this, next, this.month);
    };
    ;
    ReservationComponent.prototype.prev = function () {
        this.datesOfInterest = [];
        this.footerData = [];
        var prev = this.month.clone();
        this._removeTime(prev.month(prev.month() - 1).date(1));
        prev.day(0);
        this.month.month(this.month.month() - 1);
        this._buildMonth(this, prev, this.month);
        /*date format changing*/
        this.Month_Change = this.month._d.getMonth() + 1;
        this.Year_Change = this.month._d.getFullYear();
        console.log(this.Month_Change);
        console.log(this.Year_Change);
        /*date format changing end*/
    };
    ;
    ReservationComponent.prototype.onOffClick_event = function () {
        this.isActive = this.isActive ? this.calFocus ? true : false : false;
        if (!this.isActive) {
            if (this.errorMessage) {
                //ctrl.$onInit();
                //this.date = moment(moment(), "MM/DD/YYYY").format('MM/DD/YYYY');
                //this.onUpdate({data: ctrl.date});
            }
            this.errorMessage = false;
        }
    };
    ;
    ReservationComponent.prototype.showCurrentDate = function (day) {
        this.date = __WEBPACK_IMPORTED_MODULE_4_moment__(day, "MM/DD/YYYY").format('MM/DD/YYYY');
        this.inputDate = __WEBPACK_IMPORTED_MODULE_4_moment__(this.date, "MM/DD/YYYY");
        this.month = this._removeTime(this.inputDate || __WEBPACK_IMPORTED_MODULE_4_moment__());
        // Create calendar for current month
        var start = this.month.clone();
        start.date(1);
        this._removeTime(start.day(0));
        this._buildMonth(this, start, this.month);
    };
    ;
    /*goToNextMonth(e) {
      var startDate = moment([this.month.year(), this.month.month()]);
      var endDate = moment(startDate).endOf('month');
      if (e.which === 9) {
        if (endDate.date() === +e.currentTarget.innerText) {
          angular.element('button#prev').focus();
        }
      } else if (e.keyCode === 16) {
        var arr = angular.element('div.tn-datepicker-row').find('div.tn-datepicker-day');
        arr.filter(function (ele, index) {
          if (angular.element(arr[ele]).find('span')[0].innerHTML == (endDate.date())) {
            angular.element(angular.element(arr[ele - 1]).find('button')).focus();
            return;
          }
        });
      }
    };*/
    ReservationComponent.prototype.onDayClick = function (day) {
        this.errorMessage = false;
        this.isActive = true;
        this.date = __WEBPACK_IMPORTED_MODULE_4_moment__(day.date, "MM/DD/YYYY").format('MM/DD/YYYY');
        var date = this.date;
        var datearray = date.split("/");
        console.log(date);
        console.log(datearray);
        this.changeformat = [datearray[2], datearray[0], datearray[1]].join("-");
        console.log(this.changeformat);
        this.selectdate = new Date(this.date);
    };
    ;
    // calendar end
    ReservationComponent.prototype.ngOnInit = function () {
        this.inputDate = __WEBPACK_IMPORTED_MODULE_4_moment__(__WEBPACK_IMPORTED_MODULE_4_moment__(), "MM/DD/YYYY");
        this.month = this._removeTime(this.inputDate || __WEBPACK_IMPORTED_MODULE_4_moment__());
        this.calFocus = false;
        this.isActive = true;
        // Create calendar for current month
        var start = this.month.clone();
        start.date(1);
        this._removeTime(start.day(0));
        this._buildMonth(this, start, this.month);
        if (this.isRequired) {
            this.isDateRequired = this.isRequired;
        }
        var today = new Date();
        this.currentDay = today.getDate();
        console.log(this.currentDay);
        this.currentMonth = today.getMonth() + 1;
        this.currentYear = today.getFullYear();
        this.Month_Change = today.getMonth() + 1;
        this.Year_Change = today.getFullYear();
    };
    //changedate($event, selecteddate: any) {
    //    this.selectdate = new Date();
    //    var date = new Date(this.selectdate);
    //    console.log((date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getFullYear());
    //    this.changeformat = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    //    console.log(this.changeformat);
    //}
    //changetime($event, time: any) {
    //    console.log(time);
    //}
    ReservationComponent.prototype.onSubmit = function (reservationdetails, form) {
        var _this = this;
        console.log(reservationdetails);
        if (this.changeformat == null) {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();
            this.changeformat = yyyy + '-' + mm + '-' + dd;
            console.log(this.changeformat);
        }
        var datetime = this.changeformat + 'T' + reservationdetails.time;
        console.log(datetime);
        this.guestdetails = this.sharedService.addreservation;
        console.log(this.guestdetails);
        if (this.restID) {
            this.restID = JSON.parse(this.restID);
        }
        if (this.guestdetails.PartySize) {
            this.partysize = JSON.parse(this.guestdetails['PartySize']);
            console.log(this.partysize);
        }
        if (this.guestdetails.waitquoted) {
            this.quotedtime = JSON.parse(this.guestdetails['waitquoted']);
        }
        var obj = {
            "RestaurantID": this.restID,
            "FullName": this.guestdetails['UserName'],
            "Email": this.guestdetails['email'],
            "ContactNumber": this.guestdetails['mobile'],
            "UserType": 'TU',
            "PartySize": this.partysize,
            "QuotedTime": this.quotedtime,
            "Relationship": this.guestdetails['relationship'],
            "ThisVisit": this.guestdetails['visit'],
            "FoodAndDrink": this.guestdetails['food'],
            "SeatingPreferences": this.guestdetails['seating'],
            "Description": this.guestdetails['notes'],
            "WaitListTime": datetime,
            "BookingStatus": 7,
            "TableNumbers": ''
        };
        console.log(obj);
        console.log("coming");
        this.reservationService.sendreservationdetails(obj).subscribe(function (res) {
            if (res._ErrorCode == '50000') {
                //  this.router.navigate(['editguest']);
                _this.show_message = true;
                _this.sharedService.email_error = "Email Id Already Exists";
                _this.error_message = "Email Id Already Exists";
                // this.data = guestdetails;
                _this.router.navigate(['addGuest']);
            }
            else {
                _this.sharedService.email_error = '';
                _this.router.navigate(['waitlist']);
            }
        });
        //  this.router.navigate(['waitlist']);
    };
    ReservationComponent.prototype.cancel = function () {
        //  this.sharedService.addreservation;
        this.sharedService.email_error = '';
        this.router.navigate(['addGuest']);
    };
    return ReservationComponent;
}());
ReservationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'reservation',
        template: __webpack_require__("../../../../../src/app/Reservation/reservation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Reservation/reservation.style.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__reservation_service__["a" /* ReservationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__reservation_service__["a" /* ReservationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_Shared_Service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_Shared_Service__["a" /* SharedService */]) === "function" && _c || Object])
], ReservationComponent);

var _a, _b, _c;
//# sourceMappingURL=reservation.component.js.map

/***/ }),

/***/ "../../../../../src/app/Reservation/reservation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_appsettings__ = __webpack_require__("../../../../../src/app/shared/appsettings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReservationService = (function () {
    function ReservationService(http) {
        this.http = http;
    }
    ReservationService.prototype.sendreservationdetails = function (obj) {
        console.log(obj);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_3__shared_appsettings__["a" /* constant */].truflBase + 'Hostess/SaveRestaurantGuest', obj).map(function (res) { return res.json(); });
    };
    return ReservationService;
}());
ReservationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ReservationService);

var _a;
//# sourceMappingURL=reservation.service.js.map

/***/ }),

/***/ "../../../../../src/app/Reservation/reservation.style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/*calender styles*/\r\nbody {\r\n    padding-top: 90px;\r\n}\r\n\r\n.panel-login {\r\n    border-color: #ccc;\r\n    box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);\r\n}\r\n\r\n    .panel-login > .panel-heading {\r\n        color: #00415d;\r\n        background-color: #fff;\r\n        border-color: #fff;\r\n        text-align: center;\r\n    }\r\n\r\n        .panel-login > .panel-heading a {\r\n            text-decoration: none;\r\n            color: #666;\r\n            font-weight: bold;\r\n            font-size: 15px;\r\n            transition: all 0.1s linear;\r\n        }\r\n\r\n            .panel-login > .panel-heading a.active {\r\n                color: #029f5b;\r\n                font-size: 18px;\r\n            }\r\n\r\n        .panel-login > .panel-heading hr {\r\n            margin-top: 10px;\r\n            margin-bottom: 0px;\r\n            clear: both;\r\n            border: 0;\r\n            height: 1px;\r\n            background-image: -o-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));\r\n        }\r\n\r\n    .panel-login input[type=\"text\"], .panel-login input[type=\"email\"], .panel-login input[type=\"password\"] {\r\n        height: 45px;\r\n        border: 1px solid #ddd;\r\n        font-size: 16px;\r\n        transition: all 0.1s linear;\r\n    }\r\n\r\n    .panel-login input:hover,\r\n    .panel-login input:focus {\r\n        outline: none;\r\n        box-shadow: none;\r\n        border-color: #ccc;\r\n    }\r\n\r\n.btn-login {\r\n    background-color: #59B2E0;\r\n    outline: none;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    height: auto;\r\n    font-weight: normal;\r\n    padding: 14px 0;\r\n    text-transform: uppercase;\r\n    border-color: #59B2E6;\r\n}\r\n\r\n    .btn-login:hover,\r\n    .btn-login:focus {\r\n        color: #fff;\r\n        background-color: #53A3CD;\r\n        border-color: #53A3CD;\r\n    }\r\n\r\n.forgot-password {\r\n    text-decoration: underline;\r\n    color: #888;\r\n}\r\n\r\n    .forgot-password:hover,\r\n    .forgot-password:focus {\r\n        text-decoration: underline;\r\n        color: #666;\r\n    }\r\n\r\n.btn-register {\r\n    background-color: #1CB94E;\r\n    outline: none;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    height: auto;\r\n    font-weight: normal;\r\n    padding: 14px 0;\r\n    text-transform: uppercase;\r\n    border-color: #1CB94A;\r\n}\r\n\r\n    .btn-register:hover,\r\n    .btn-register:focus {\r\n        color: #fff;\r\n        background-color: #1CA347;\r\n        border-color: #1CA347;\r\n    }\r\n\r\n.popup-menu {\r\n    position: absolute;\r\n    top: 48px;\r\n    right: -32px;\r\n    z-index: 1000;\r\n}\r\n\r\ntn-date-selector {\r\n    height: 3vh;\r\n}\r\n\r\n.menu {\r\n    position: relative;\r\n    border-radius: 4px;\r\n    margin: 22px;\r\n    padding: 10px;\r\n    width: 224px;\r\n    font-size: 14px;\r\n    text-align: left;\r\n    background-color: black;\r\n    filter: drop-shadow(0 9px 34px rgba(55,57,62,.38));\r\n    -webkit-filter: drop-shadow(0 9px 34px rgba(55,57,62,.38));\r\n}\r\n\r\n.date-select {\r\n    position: relative;\r\n    max-width: 150px;\r\n}\r\n\r\n    .date-select select {\r\n        width: 150px;\r\n    }\r\n\r\n    .date-select input {\r\n        color: #242936;\r\n        border-color: #b3bdc7;\r\n    }\r\n\r\n    .date-select.is-disabled {\r\n        color: #ddd;\r\n    }\r\n\r\n.tn-datepicker-nav-button:focus {\r\n    outline: 1px solid #2d6997;\r\n}\r\n\r\n.tn-date-selector-popup {\r\n    position: relative;\r\n    top: -20px;\r\n    right: 0px;\r\n    left: -20px;\r\n    z-index: 10000;\r\n}\r\n\r\n.tn-date-selector-menu {\r\n    height: 325px;\r\n    width: 325px;\r\n}\r\n\r\n    .tn-date-selector-menu .caret {\r\n        top: -8px;\r\n        left: 26px;\r\n    }\r\n\r\n    .tn-date-selector-menu .tn-date-selector .tn-datepicker-calender {\r\n        width: 100%;\r\n    }\r\n\r\n    .tn-date-selector-menu .error-message {\r\n        height: 0;\r\n        color: red;\r\n        text-align: center;\r\n        margin: 0;\r\n    }\r\n\r\n    .tn-date-selector-menu .menu {\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n\r\n.tn-datepicker-day.is-not-in-month {\r\n    visibility: hidden;\r\n}\r\n\r\n.tn-date-selector-calendar-icon {\r\n    position: absolute;\r\n    top: 4px;\r\n    right: 5px;\r\n    color: black;\r\n    cursor: pointer;\r\n    z-index: 2;\r\n}\r\n\r\n.is-in-month, .month-label {\r\n    color: #ffffff;\r\n}\r\n\r\n.is-today {\r\n    border-radius: 50%;\r\n    background-color: #c19c59;\r\n    color: #ffffff;\r\n}\r\n\r\n.is-selected-date {\r\n    color: #ffffff;\r\n    border-radius: 50%;\r\n    border: 1px solid #c19c59;\r\n}\r\n\r\n.date-input {\r\n    border: 1px solid;\r\n    border-radius: 4px;\r\n    background: transparent;\r\n    z-index: 4;\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n\r\n    .date-input .input-box {\r\n        border: none;\r\n        border-radius: 0;\r\n        background: transparent;\r\n    }\r\n\r\n.tn-datepicker-day button {\r\n    background: transparent;\r\n    border: 0;\r\n    border-radius: 100%;\r\n    width: 100%;\r\n    outline: none;\r\n    /*color:#ffffff;*/\r\n}\r\nfontStyling \r\n{\r\n    font-family:'Aniner Next';\r\n    font-size:22px;\r\n}\r\n.tn-datepicker {\r\n    height: auto;\r\n}\r\n\r\n.tn-datepicker-row {\r\n    display: -webkit-box;\r\n    display: -moz-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding: 2px;\r\n    width: 100%;\r\n}\r\n\r\n.tn-datepicker-col {\r\n    -webkit-box-flex: 1;\r\n    -moz-flex: 1;\r\n    -ms-flex: 1;\r\n    flex: 1;\r\n    display: block;\r\n    padding: 2px;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n.tn-datepicker-title {\r\n    margin-bottom: 20px;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    text-align: center;\r\n}\r\n\r\n.tn-datepicker-month-label {\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    width: 150px;\r\n}\r\n\r\n.tn-datepicker-nav {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    width: 100%;\r\n    padding: 0 15px;\r\n    margin-bottom: 5px;\r\n    font-weight: 600;\r\n    font-size: 20px;\r\n}\r\n\r\n.tn-datepicker-nav-button {\r\n    border-radius: 50%;\r\n    border:none;\r\n    width: 30px;\r\n    height: 30px;\r\n    background-color: transparent;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n}\r\n\r\n.tn-datepicker-day-label {\r\n    color: #ffffff;\r\n    text-align: center;\r\n}\r\n\r\n.tn-datepicker-day {\r\n    text-align: center;\r\n    height: 30px;\r\n    width: 30px;\r\n    line-height: 30px;\r\n    margin-left: 5px;\r\n}\r\n\r\n    .tn-datepicker-day.is-not-in-month {\r\n        color: #A9B2C1;\r\n    }\r\n\r\n    .tn-datepicker-day.is-overlapping-date {\r\n        border-radius: 50%;\r\n        background-color: #65BDEF;\r\n        color: white;\r\n        background-image: linear-gradient(90deg, #1178BA 50%, transparent 50%);\r\n    }\r\n\r\n.tn-datepicker-footer {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding-top: 10px;\r\n}\r\n\r\n    .tn-datepicker-footer span.pay-end-date-payroll-due-date-no-benefit-deductions {\r\n        position: relative;\r\n    }\r\n\r\n    .tn-datepicker-footer span:first-child {\r\n        height: 30px;\r\n        width: 30px;\r\n        margin-right: 10px;\r\n    }\r\n\r\n    .tn-datepicker-footer span:last-child {\r\n        width: calc(100% - 30px);\r\n    }\r\n\r\n\r\n/*.disable-span {\r\n    color: #E6E6E6;\r\n    cursor: not-allowed;\r\n}*/\r\n.my-class{\r\n    color:#dedede;\r\n}\r\n.cancelIconStyle span {\r\n    font-family: AvenirNextCondensed;\r\n    font-size: 22px;\r\n    color: #f7f7f7;\r\n    text-transform: uppercase;\r\n    margin-left: 0.4em;\r\n}\r\n\r\n.cancelIconStyle {\r\n    font-size: 10px;\r\n    color: #969BAE;\r\n    float: right;\r\n    font-weight: bold;\r\n    margin-right: 4.5em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Snapshot/Snapshot.Service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnapshotService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__ = __webpack_require__("../../../../../src/app/shared/appsettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SnapshotService = (function () {
    function SnapshotService(http) {
        this.http = http;
    }
    SnapshotService.prototype.GetCapacitywise = function (RestaurantID) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + '/WaitListUser/GetCapacitywiseSnapshot/' + RestaurantID + '').map(function (res) { return res.json(); });
    };
    SnapshotService.prototype.GetServerwiseSnap = function (RestaurantID) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + '/WaitListUser/GetServerwiseSnapshot/' + RestaurantID + '').map(function (res) { return res.json(); });
    };
    SnapshotService.prototype.GetTablewiseSnap = function (RestaurantID) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + '/WaitListUser/GetTablewiseSnapshot/' + RestaurantID + '').map(function (res) { return res.json(); });
    };
    SnapshotService.prototype.GetServerDetails = function (RestaurantID) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + '/WaitListUser/GetRestaurantStaffTables/' + RestaurantID + '').map(function (res) { return res.json(); });
    };
    SnapshotService.prototype.switchServer = function (serverID, RestaurantID, TblNo) {
        debugger;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + 'WaitListUser/UpdateSwitchServer/' + RestaurantID + '/' + TblNo + '/' + serverID, {}).map(function (res) { return res.json(); });
    };
    SnapshotService.prototype.dropCheck = function (Dropcheck, RestaurantID, TblNo) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + 'WaitListUser/UpdateSnapshotTableEmptyAndCheck/' + RestaurantID + '/' + TblNo + '/' + Dropcheck, {}).map(function (res) { return res.json(); });
    };
    SnapshotService.prototype.emptyTable = function (EmptyTbl, RestaurantID, TblNo) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + 'WaitListUser/UpdateSnapshotTableEmptyAndCheck/' + RestaurantID + '/' + TblNo + '/' + EmptyTbl, {}).map(function (res) { return res.json(); });
    };
    return SnapshotService;
}());
SnapshotService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], SnapshotService);

var _a;
//# sourceMappingURL=Snapshot.Service.js.map

/***/ }),

/***/ "../../../../../src/app/Snapshot/snapshot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".thWidth15{\r\n    width:15%;\r\n}\r\n.thWidth20 {\r\n    width: 20%;\r\n}\r\n#snapshotHeader ul li {\r\n    display: inline;\r\n    cursor: pointer;\r\n    padding-left: 20px;\r\n}\r\n#snapshotHeader ul {\r\n    float: right;\r\n    margin-right: 30px;\r\n}\r\n\r\n#snapshotHeader ul li a {\r\n    color: #CBCBD1;\r\n    padding-bottom: 3.3px;\r\n    font-size: 22px;\r\n    font-family: Avenir Next;\r\n}\r\n\r\n.h4Style {\r\n    display: inline-block;\r\n    position: absolute;\r\n    width: 13%;\r\n    color: white;\r\n    height: auto;\r\n    margin-left: 9px;\r\n    font-weight: bold;\r\n    margin-top: 1%;\r\n}\r\n\r\n.opacityUnset {\r\n    opacity: unset !important;\r\n}\r\n\r\n/*TABLE Snap CSS*/\r\n\r\n.paddingLftBtm {\r\n    padding-right: 12px;\r\n    padding-left: 12px;\r\n    padding-top: 24px;\r\n    /*padding-bottom: 12px;*/\r\n}\r\n.padLeft7 {\r\n    padding-left: 7px;\r\n}\r\n\r\n.divCol2Style {\r\n    width: 98%;\r\n    height: 176px;\r\n    border: rgba(140, 140, 144, 0.7) solid 2px;\r\n}\r\n\r\n.divCol2StyleDrop {\r\n    height: 176px !important;\r\n    border: white solid 5px;\r\n} \r\n.Hostess1 {\r\n    background-color: #477B6C;\r\n}\r\n.Hostess2{\r\n    background-color: #8D6C8D;\r\n}\r\n.Hostess3{\r\n    background-color: #51919A;\r\n}\r\n.Hostess4 {\r\n    background-color: #9A8A4A;\r\n}\r\n.Hostess5 {\r\n    background-color: #9A7047;\r\n}\r\n.Hostess6 {\r\n    background-color: #48588E;\r\n}\r\n.Hostess7 {\r\n    background-color: #919A62;\r\n}\r\n\r\n.mrg0 {\r\n    margin: 0px !important;\r\n}\r\n.padtop28 {\r\n    padding-top: 28px !important;\r\n}\r\n\r\n.imgDivHeight {\r\n    height: 75px;\r\n    position: relative;\r\n    padding-left: 15%;\r\n    padding-top: 10%;\r\n    padding-bottom: 4%;\r\n    padding-right: 26px;\r\n}\r\n.imgDivLeft8Top2 {\r\n    left: 8px;\r\n}\r\n.imgDivLeft10Top6 {\r\n    left: 10px;\r\n}\r\n\r\n.imgDivLeft21Top8 {\r\n    left: 21px;\r\n}\r\n.mrgTop4 {\r\n    margin-top: 4%;\r\n    margin-bottom:3%;\r\n}\r\n.pEllipsis {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    padding-left: 15%\r\n}\r\n.padLeft15 {\r\n    padding-left: 15%\r\n}\r\n.tblNoSpan {\r\n    position: absolute;\r\n    left: 74px;\r\n    top: 21px;\r\n    font-size: xx-large;\r\n    font-weight: bold;\r\n}\r\n.tblNoSpanTblNo10 {\r\n    position: absolute;\r\n    left: 65px;\r\n    top: 21px;\r\n    font-size: xx-large;\r\n    font-weight: bold;\r\n}\r\n.top6SpanTblNo0To9 {\r\n    position: absolute;\r\n    left: 73px;\r\n    top: 26px;\r\n    font-size: xx-large;\r\n    font-weight: bold;\r\n}\r\n.top6SpanTblNo10 {\r\n    position: absolute;\r\n    left: 65px;\r\n    top: 30px;\r\n    font-size: xx-large;\r\n    font-weight: bold;\r\n}\r\n.top8SpanTblNo0To9 {\r\n    position: absolute;\r\n    left: 61px;\r\n    top: 34px;\r\n    font-size: xx-large;\r\n    font-weight: bold;\r\n}\r\n.top8SpanTblNo10 {\r\n    position: absolute;\r\n    left: 53px;\r\n    top: 33px;\r\n    font-size: xx-large;\r\n    font-weight: bold;\r\n}\r\n.imgPosition {\r\n    position: absolute;\r\n}\r\n.divBlur {\r\n    -webkit-filter: blur(1px);\r\n            filter: blur(1px);\r\n}\r\n@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {\r\n    div .paddingLftBtm {\r\n        width: 191px;\r\n    }\r\n    .paddingLftBtm {\r\n       padding-top: 24px;\r\n    }\r\n    .imgDivLeft8Top2 {\r\n        left: 0px;\r\n    }\r\n\r\n    .imgDivLeft10Top6 {\r\n        left: 0px;\r\n    }\r\n\r\n    .imgDivLeft21Top8 {\r\n        left: 13px;\r\n    }\r\n    .tblNoSpan {\r\n        position: absolute;\r\n        left: 71px;\r\n        top: 18px;\r\n        font-size: xx-large;\r\n        font-weight: bold;\r\n    }\r\n    .tblNoSpanTblNo10 {\r\n        position: absolute;\r\n        left: 62px;\r\n        top: 18px;\r\n        font-size: xx-large;\r\n        font-weight: bold;\r\n    }\r\n    .top8SpanTblNo10 {\r\n        position: absolute;\r\n        left: 51px;\r\n        top: 32px;\r\n        font-size: xx-large;\r\n        font-weight: bold;\r\n    }\r\n}\r\n\r\n/* Server Select Dropdown*/\r\n.padTobBtm {\r\n    padding: 2px 0px;\r\n}\r\n.padTobBtm:hover {\r\n    background-color: rgba(236, 244, 245, 0.3);\r\n}\r\n.mrgTop8 {\r\n    margin-top: 8%;\r\n}\r\n.mrgTop8 li:hover{\r\n    cursor:pointer;\r\n} \r\n.mrgTop8 li a {\r\n    color: white;\r\n    padding-left: 15%;\r\n}\r\n.activeLi{\r\n    background-color: rgba(236, 244, 245, 0.3);\r\n}\r\n\r\n/*Modal popup*/\r\n.serverLi {\r\n    width: 117px;\r\n    float: left;\r\n    height: 160px;\r\n}\r\n.switchUserDiv {\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.switchUserDiv div h3 {\r\n    color:white;\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 103px;\r\n    margin-top: 10px;\r\n}\r\n\r\n#switchServerModal div .modal-header{\r\n    padding:0px!important;\r\n    border-bottom:none!important;\r\n}\r\n.padBottom20{\r\n    padding-bottom:20px;\r\n}\r\n.modalwidth {\r\n    width: 778px;\r\n}\r\n.modalBody {\r\n    height: 500px;\r\n    overflow-y: auto;\r\n\r\n}\r\n.modal-dialog {\r\n    width: 760px!important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Snapshot/snapshot.component.html":
/***/ (function(module, exports) {

module.exports = "<shared-header></shared-header>\r\n<div class=\"col-md-12 mrgTop2\" id=\"snapshotHeader\">\r\n    <ul>\r\n        <li>\r\n            <a (click)=\"isCapacitydiv=true;isServerdiv=false;isTablediv=false\" [ngClass]=\"{'active':isCapacitydiv}\">BY CAPACITY</a>\r\n        </li>\r\n        <li>\r\n            <a (click)=\"isServerdiv=true;isCapacitydiv=false;isTablediv=false\" [ngClass]=\"{'active':isServerdiv}\">BY SERVER</a>\r\n        </li>\r\n        <li>\r\n            <a (click)=\"isTablediv=true;isServerdiv=false;isCapacitydiv=false\" [ngClass]=\"{'active':isTablediv}\">BY TABLE</a>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div>\r\n    <div class=\"col-md-12 col-sm-12 snapmain\" *ngIf=\"isCapacitydiv\" id=\"ByCapacitydiv\">\r\n        <table class=\"table table-responsive\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"thWidth15\">CAPACITY</th>\r\n                    <th class=\"alignCenter thWidth15\">TOTAL AVAILABLE</th>\r\n                    <th class=\"alignCenter thWidth15\">TOTAL SEATED</th>\r\n                    <th class=\"alignCenter thWidth15\">CHECKS DROPPED</th>\r\n                    <th></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let list of CapacityLiast\">\r\n                    <td class=\"capacitysnaptd\">{{list.TableName}}</td>\r\n                    <td class=\"alignCenter nOFontStyle\">{{list.TotalAvailable}}</td>\r\n                    <td class=\"alignCenter nOFontStyle\">{{list.TotalSeated}}</td>\r\n                    <td class=\"alignCenter nOFontStyle\">{{list.ChecksDropped}}</td>\r\n                    <td></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n    <div class=\"col-md-12 col-sm-12 snapmain\" *ngIf=\"isServerdiv\" id=\"Byserverdiv\">\r\n        <table class=\"table table-responsive\">\r\n            <thead>\r\n                <tr>\r\n                    <th class=\"thWidth20\">SERVER</th>\r\n                    <th class=\"alignCenter thWidth15\">TOTAL AVAILBLE</th>\r\n                    <th class=\"alignCenter thWidth15\">TOTAL SEATED</th>\r\n                    <th class=\"alignCenter thWidth15\">CHECKS DROPPED</th>\r\n                    <th></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let list of ServerWiseList\">\r\n                    <td>\r\n                        <a>\r\n                            <img class=\"opacityUnset\" src=\"data:image/JPEG;base64,{{list.pic}}\" alt=\"\" />\r\n                            <h4 class=\"h4Style\">\r\n                                {{list.HostessName}}\r\n                            </h4>\r\n                        </a>\r\n                    </td>\r\n                    <td class=\"alignCenter nOFontStyle\">{{list.TotalAvailable}}</td>\r\n                    <td class=\"alignCenter nOFontStyle\">{{list.TotalSeated}}</td>\r\n                    <td class=\"alignCenter nOFontStyle\">{{list.ChecksDropped}}</td>\r\n                    <td></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n    <div class=\"col-md-12\" *ngIf=\"isTablediv\" id=\"ByTablediv\">\r\n        <div class=\"col-md-12 padLeft7\">\r\n            <div class=\"col-sm-2 paddingLftBtm\" *ngFor=\"let tblList of TableWiseList let i=index\">\r\n                <div [attr.class]=\"className[i]\" [ngClass]=\"{'divCol2StyleDrop':isDrop[i]}\">\r\n                    <div class=\"imgDivHeight imgDivLeft8Top2\" *ngIf=\"tblList.TableType ==2\">\r\n                        <img src=\"../../../../wwwroot/images/Group 794.png\" />\r\n                        <span [ngClass]=\"{'tblNoSpan':tblList.TableNumber<10,'tblNoSpanTblNo10':tblList.TableNumber > 9}\">{{tblList.TableNumber}}</span>\r\n                    </div>\r\n                    <div class=\"imgDivHeight imgDivLeft10Top6\" *ngIf=\"tblList.TableType==4\">\r\n                        <img src=\"../../../../wwwroot/images/Group 804.png\" />\r\n                        <span [ngClass]=\"{'tblNoSpan':tblList.TableNumber <10,'tblNoSpanTblNo10':tblList.TableNumber > 9}\">{{tblList.TableNumber}}</span>\r\n                    </div>\r\n                    <div class=\"imgDivHeight imgDivLeft10Top6\" *ngIf=\"tblList.TableType==6\">\r\n                        <img src=\"../../../../wwwroot/images/Group 806.png\" />\r\n                        <span [ngClass]=\"{'top6SpanTblNo0To9':tblList.TableNumber < 10, 'top6SpanTblNo10':tblList.TableNumber > 9}\">{{tblList.TableNumber}}</span>\r\n                    </div>\r\n                    <div class=\"imgDivHeight imgDivLeft21Top8\" *ngIf=\"tblList.TableType==8\">\r\n                        <img src=\"../../../../wwwroot/images/Group 817.png\" />\r\n                        <span [ngClass]=\"{'top8SpanTblNo0To9':tblList.TableNumber <10, 'top8SpanTblNo10':tblList.TableNumber > 9}\">{{tblList.TableNumber}}</span>\r\n                    </div>\r\n                    <div class=\"imgDivHeight imgDivLeft21Top8\" *ngIf=\"tblList.TableType==10\">\r\n                        <img src=\"../../../../wwwroot/images/Group 810.png\" />\r\n                        <span [ngClass]=\"{'tblNoSpan':tblList.TableNumber<10,'tblNoSpanTblNo10':tblList.TableNumber > 9}\">{{tblList.TableNumber}}</span>\r\n                    </div>\r\n                    <div class=\"padtop28\">\r\n                        <p class=\"mrg0 pEllipsis\" >{{tblList.FloorName}}</p>\r\n                        <p class=\"padLeft15 cursorPointer\" (click)=\"arrFalse(i)\">{{tblList.HostessName}}</p>\r\n                    </div>\r\n                </div>\r\n                <div [attr.class]=\"className[i]|splitString\" *ngIf=\"isDrop[i]\" style=\"position: absolute;z-index: 1;width: 87.3%;top: 93%;right: 7.2%;\">\r\n                    <ul  class=\"mrgTop8\">\r\n                        <li class=\"padTobBtm padLeft15\" [ngClass]=\"{'activeLi': switchUser}\" (click)=\"switchtblModal(tblList.TableNumber,i)\" data-toggle=\"modal\" data-target=\"#switchServerModal\">\r\n                            <a>\r\n                                Switch Server\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"padTobBtm padLeft15\"  *ngIf=\"tblList.TableStatus\" [ngClass]=\"{'activeLi': checkDrop}\" (click)=\"checkDroped(tblList.TableNumber,i)\">\r\n                            <a>\r\n                                Check Dropped\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"padTobBtm padLeft15\" *ngIf=\"tblList.TableStatus\"  [ngClass]=\"{'activeLi': emptyTbl}\" (click)=\"emptyTable(tblList.TableNumber,i)\">\r\n                            <a>\r\n                                Empty Table\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n    </div>\r\n</div>\r\n<turnOngetseated></turnOngetseated>\r\n<!--Switch server Modal-->\r\n\r\n<div id=\"switchServerModal\" class=\"modal fade\" role=\"dialog\" [hidden]=\"ModalpopupShow\">\r\n    <div class=\"modal-dialog\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content modalBgColoor fontColor modalwidth\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n            </div>\r\n            <div class=\"modal-body modalBody\">\r\n                <div class=\"switchUserDiv col-md-12\">\r\n                    <div class=\"col-md-4 padBottom20\" *ngFor=\"let item of ServerDetailsList\">\r\n                        <a (click)=\"switchServer(item.TruflUserID)\" data-dismiss=\"modal\">\r\n                            <img src=\"data:image/JPEG;base64,{{item.pic}}\" alt=\"\"/>\r\n                            <h3>\r\n                                {{item.FullName}}\r\n                            </h3>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n     </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Snapshot/snapshot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnapShotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Snapshot_Service__ = __webpack_require__("../../../../../src/app/Snapshot/Snapshot.Service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SnapShotComponent = (function () {
    function SnapShotComponent(router, _SnapshotService) {
        var _this = this;
        this.router = router;
        this._SnapshotService = _SnapshotService;
        this.isCapacitydiv = true;
        this.isServerdiv = false;
        this.isTablediv = false;
        this.CapacityLiast = [];
        this.ServerWiseList = [];
        this.TableWiseList = [];
        this.TblLoader = false;
        this.ServerDetailsList = [];
        this.isDrop = [];
        this.className = [];
        this.switchUser = true;
        this.checkDrop = false;
        this.emptyTbl = false;
        this.restID = localStorage.getItem('restaurantid');
        this.isCapacitydiv = true;
        this.isServerdiv = false;
        this.isTablediv = false;
        this.loadCapacityTable();
        this.loadServerViseTable();
        this.loadServerTable();
        this._SnapshotService.GetServerDetails(this.restID).subscribe(function (res) {
            _this.ServerDetailsList = res._Data.ManageServer;
            console.log(_this.ServerDetailsList, "SErverlist");
        });
    }
    SnapShotComponent.prototype.ngOnInit = function () {
    };
    SnapShotComponent.prototype.loadServerTable = function () {
        var _this = this;
        this._SnapshotService.GetTablewiseSnap(this.restID).subscribe(function (res) {
            _this.TableWiseList = res._Data;
            _this.tblResLength = res._Data.length;
            for (var i = 0; i < res._Data.length; i++) {
                if (res._Data[i].HostessID == 0 || res._Data[i].HostessID == 1027 || res._Data[i].HostessID == 1028) {
                    if (res._Data[i].TableStatus == true) {
                        _this.className[i] = 'Hostess1 divBlur divCol2Style';
                    }
                    else {
                        _this.className[i] = 'Hostess1 divCol2Style';
                    }
                }
                else if (res._Data[i].HostessID == 1033 || res._Data[i].HostessID == 1040) {
                    if (res._Data[i].TableStatus == true) {
                        _this.className[i] = 'Hostess2 divBlur divCol2Style';
                    }
                    else {
                        _this.className[i] = 'Hostess2 divCol2Style';
                    }
                }
                else if (res._Data[i].HostessID == 1029 || res._Data[i].HostessID == 1034 || res._Data[i].HostessID == 1035 || res._Data[i].HostessID == 1037) {
                    if (res._Data[i].TableStatus == true) {
                        _this.className[i] = 'Hostess3 divBlur divCol2Style';
                    }
                    else {
                        _this.className[i] = 'Hostess3 divCol2Style';
                    }
                }
                else if (res._Data[i].HostessID == 12 || res._Data[i].HostessID == 1038 || res._Data[i].HostessID == 1036) {
                    if (res._Data[i].TableStatus == true) {
                        _this.className[i] = 'Hostess4 divBlur divCol2Style';
                    }
                    else {
                        _this.className[i] = 'Hostess4 divCol2Style';
                    }
                }
                else if (res._Data[i].HostessID == 1023 || res._Data[i].HostessID == 1024 || res._Data[i].HostessID == 1039) {
                    if (res._Data[i].TableStatus == true) {
                        _this.className[i] = 'Hostess5 divBlur divCol2Style';
                    }
                    else {
                        _this.className[i] = 'Hostess5 divCol2Style';
                    }
                }
                else if (res._Data[i].HostessID == 1030 || res._Data[i].HostessID == 1031) {
                    if (res._Data[i].TableStatus == true) {
                        _this.className[i] = 'Hostess6 divBlur divCol2Style';
                    }
                    else {
                        _this.className[i] = 'Hostess6 divCol2Style';
                    }
                }
                else if (res._Data[i].HostessID == 1032 || res._Data[i].HostessID == 1024) {
                    if (res._Data[i].TableStatus == true) {
                        _this.className[i] = 'Hostess7 divBlur divCol2Style';
                    }
                    else {
                        _this.className[i] = 'Hostess7 divCol2Style';
                    }
                }
            }
        });
    };
    SnapShotComponent.prototype.loadCapacityTable = function () {
        var _this = this;
        this._SnapshotService.GetCapacitywise(this.restID).subscribe(function (res) {
            _this.CapacityLiast = res._Data;
        });
    };
    SnapShotComponent.prototype.loadServerViseTable = function () {
        var _this = this;
        this._SnapshotService.GetServerwiseSnap(this.restID).subscribe(function (res) {
            _this.ServerWiseList = res._Data;
        });
    };
    SnapShotComponent.prototype.arrFalse = function (i) {
        for (var j = 0; j < this.tblResLength; j++) {
            if (i == j) {
                this.isDrop[j] = !this.isDrop[j];
            }
            else {
                this.isDrop[j] = false;
            }
        }
    };
    SnapShotComponent.prototype.switchtblModal = function (tblno, index) {
        this.switchUser = true;
        this.checkDrop = false;
        this.emptyTbl = false;
        this.serverTblNO = tblno;
        this.isDrop[index] = false;
    };
    SnapShotComponent.prototype.switchServer = function (serverID) {
        var _this = this;
        this._SnapshotService.switchServer(serverID, this.restID, this.serverTblNO).subscribe(function (res) {
            if (res._StatusMessage == 'Success') {
                _this.loadServerTable();
                _this.loadCapacityTable();
                _this.loadServerViseTable();
            }
        });
    };
    SnapShotComponent.prototype.checkDroped = function (tblno, index) {
        var _this = this;
        this.isDrop[index] = false;
        this.checkDrop = true;
        this.switchUser = false;
        this.emptyTbl = false;
        this._SnapshotService.dropCheck("CHECK", this.restID, tblno).subscribe(function (res) {
            if (res._StatusMessage == 'Success') {
                alert("Ckeck dropped successfuly.");
                _this.loadCapacityTable();
                _this.loadServerViseTable();
            }
        });
    };
    SnapShotComponent.prototype.emptyTable = function (tblno, index) {
        var _this = this;
        this.isDrop[index] = false;
        this.emptyTbl = true;
        this.switchUser = false;
        this.checkDrop = false;
        this._SnapshotService.emptyTable("EMPTY", this.restID, tblno).subscribe(function (res) {
            console.log(res._StatusMessage);
            if (res._StatusMessage == 'Success') {
                _this.loadServerTable();
                _this.loadCapacityTable();
                _this.loadServerViseTable();
            }
        });
    };
    return SnapShotComponent;
}());
SnapShotComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'snapshot',
        template: __webpack_require__("../../../../../src/app/Snapshot/snapshot.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Snapshot/snapshot.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__Snapshot_Service__["a" /* SnapshotService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Snapshot_Service__["a" /* SnapshotService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Snapshot_Service__["a" /* SnapshotService */]) === "function" && _b || Object])
], SnapShotComponent);

var _a, _b;
//# sourceMappingURL=snapshot.component.js.map

/***/ }),

/***/ "../../../../../src/app/addguest/addguest.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div>\r\n    <form novalidate #form=\"ngForm\" (ngSubmit)=\"form.valid && onSubmit(form.value,form)\">\r\n        <div class=\"customheader\">\r\n\r\n            <div class=\"customheaderleft\">\r\n                <h2>Add A New Guest</h2>\r\n            </div>\r\n            <div class=\"customheaderright\">\r\n                <button type=\"submit\" (click)=\"get(1)\" class=\"secondary-btn\">\r\n                    Add to Waitlist\r\n                </button>\r\n                <button type=\"submit\" (click)=\"get(2)\" class=\"primary-btn\">\r\n                    Seat Immediately\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-12 newguestmain\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"input input--haruki\">\r\n                    <input class=\"input__field input__field--haruki error-input\" type=\"text\" id=\"input-1\" name=\"UserName\" [(ngModel)]=\"data.UserName\" #UserName=\"ngModel\" [ngClass]=\"UserName.invalid && (UserName.dirty || UserName.touched || UserName.submitted) ? 'highlight': 'previous'\" required>\r\n                    <label class=\"input__label input__label--haruki\" for=\"input-1\">\r\n                        <span class=\"input__label-content input__label-content--haruki\">Guest Name *</span>\r\n                    </label>\r\n                    <label *ngIf=\"UserName.invalid && (UserName.dirty || UserName.touched || form.submitted)\" [ngStyle]=\"{'color': 'red'}\">\r\n                        <label *ngIf=\"UserName.errors.required \">\r\n                            name is required.\r\n                        </label>\r\n                    </label>\r\n                    <span style=\"float:right;\" *ngIf=\"UserName.invalid && (UserName.dirty || UserName.touched || form.submitted)\">\r\n                        <img src=\"../../../../wwwroot/images/error.jpg\" />\r\n                    </span>\r\n                </div>\r\n                <div class=\"input input--haruki\">\r\n                    <input class=\"input__field input__field--haruki\" type=\"text\" id=\"input-1\" name=\"email\" [(ngModel)]=\"data.email\" (input)=\"change($event)\" #email=\"ngModel\" pattern=\"[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}\" [ngClass]=\"email.invalid && (email.dirty || email.touched || email.submitted) ? 'highlight': 'previous'\" required>\r\n                    <label class=\"input__label input__label--haruki\" for=\"input-1\">\r\n                        <span class=\"input__label-content input__label-content--haruki error-input\">Email Address *</span>\r\n                    </label>\r\n\r\n                    <label *ngIf=\"email.invalid && (email.dirty || email.touched || form.submitted)\" [ngStyle]=\"{'color': 'red'}\">\r\n                        <label *ngIf=\"email.errors.required \">\r\n                            email is required.\r\n                        </label>\r\n                        <label *ngIf=\"email.errors.pattern\">\r\n                            please enter avalid email address\r\n                        </label>\r\n                    </label>\r\n                    <span style=\"float:right;\" *ngIf=\"email.invalid && (email.dirty || email.touched || form.submitted)\">\r\n                        <img src=\"../../../../wwwroot/images/error.jpg\" />\r\n                    </span>\r\n                </div>\r\n                <span *ngIf=\"show_message\" [ngStyle]=\"{'color': 'red'}\">{{error_message}}</span>\r\n                <div class=\"input input--haruki\">\r\n                    <input class=\"input__field input__field--haruki\" type=\"text\" id=\"input-1\" name=\"mobile\" [(ngModel)]=\"data.mobile\" #mobile=\"ngModel\" [ngClass]=\"mobile.invalid && (mobile.dirty || mobile.touched || mobile.submitted) ? 'highlight': 'previous'\" required>\r\n                    <label class=\"input__label input__label--haruki\" for=\"input-1\">\r\n                        <span class=\"input__label-content input__label-content--haruki error-input\">Mobile Number *</span>\r\n                    </label>\r\n                    <label *ngIf=\"mobile.invalid &&(mobile.dirty || mobile.touched || form.submitted)\" [ngStyle]=\"{'color': 'red'}\">\r\n                        <label *ngIf=\"mobile.errors.required\">\r\n                            mobile number is required.\r\n                        </label>\r\n                    </label>\r\n                    <span style=\"float:right;\" *ngIf=\"mobile.invalid &&(mobile.dirty || mobile.touched || form.submitted)\">\r\n                        <img src=\"../../../../wwwroot/images/error.jpg\" />\r\n                    </span>\r\n                </div>\r\n                <div class=\"input input--haruki\">\r\n                    <input class=\"input__field input__field--haruki\" type=\"text\" id=\"input-1\" name=\"PartySize\" [(ngModel)]=\"data.PartySize\" #PartySize=\"ngModel\" pattern=\"[0-9]+\"\r\n                           [ngClass]=\"PartySize.invalid && (PartySize.dirty || PartySize.touched || PartySize.submitted) ? 'highlight': 'previous'\" required>\r\n                    <label class=\"input__label input__label--haruki\" for=\"input-1\">\r\n                        <span class=\"input__label-content input__label-content--haruki\">Party size</span>\r\n                    </label>\r\n                    <label *ngIf=\"PartySize.invalid && (PartySize.dirty || PartySize.touched || PartySize.submitted)\" [ngStyle]=\"{'color': 'red'}\">\r\n                        <label *ngIf=\"PartySize.errors.pattern\">\r\n                            Please enter numbers only\r\n                        </label>\r\n                    </label>\r\n                    <label *ngIf=\"PartySize.invalid &&(PartySize.dirty || PartySize.touched || form.submitted)\" [ngStyle]=\"{'color': 'red'}\">\r\n                        <label *ngIf=\"PartySize.errors.required\">\r\n                            Party Size is required.\r\n                        </label>\r\n                    </label>\r\n                    <span style=\"float:right;\" *ngIf=\"PartySize.invalid &&(PartySize.dirty || PartySize.touched || form.submitted)\">\r\n                        <img src=\"../../../../wwwroot/images/error.jpg\" />\r\n                    </span>\r\n                </div>\r\n                <div class=\"input input--haruki\">\r\n                    <input class=\"input__field input__field--haruki\" type=\"text\" id=\"input-1\" name=\"waitquoted\" [(ngModel)]=\"data.waitquoted\" #waitquoted=\"ngModel\" pattern=\"[0-9]+\" [ngClass]=\"waitquoted.invalid && (waitquoted.dirty || waitquoted.touched || waitquoted.submitted) ? 'highlight': 'previous'\">\r\n                    <label class=\"input__label input__label--haruki\" for=\"input-1\">\r\n                        <span class=\"input__label-content input__label-content--haruki\">Wait Quoted</span>\r\n                    </label>\r\n                    <label *ngIf=\"waitquoted.invalid && (waitquoted.dirty || waitquoted.touched || waitquoted.submitted)\" [ngStyle]=\"{'color': 'red'}\">\r\n                        <label *ngIf=\"waitquoted.errors.pattern\">\r\n                            Please enter numbers only\r\n                        </label>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"input input--haruki\">\r\n                    <input class=\"input__field input__field--haruki\" type=\"text\" id=\"input-1\" name=\"relationship\" [(ngModel)]=\"data.relationship\" [ngClass]=\"'previous'\">\r\n                    <label class=\"input__label input__label--haruki\" for=\"input-1\">\r\n                        <span class=\"input__label-content input__label-content--haruki\">Relatonship</span>\r\n                    </label>\r\n                </div>\r\n                <div class=\"input input--haruki\">\r\n                    <input class=\"input__field input__field--haruki\" type=\"text\" id=\"input-1\" name=\"visit\" [(ngModel)]=\"data.visit\" [ngClass]=\"'previous'\">\r\n                    <label class=\"input__label input__label--haruki\" for=\"input-1\">\r\n                        <span class=\"input__label-content input__label-content--haruki\">This Visit</span>\r\n                    </label>\r\n                </div>\r\n                <div class=\"input input--haruki\">\r\n                    <input class=\"input__field input__field--haruki\" type=\"text\" id=\"input-1\" name=\"food\" [(ngModel)]=\"data.food\" [ngClass]=\"'previous'\">\r\n                    <label class=\"input__label input__label--haruki\" for=\"input-1\">\r\n                        <span class=\"input__label-content input__label-content--haruki\">Food & Drink Preferences</span>\r\n                    </label>\r\n                </div>\r\n                <div class=\"input input--haruki\">\r\n                    <input class=\"input__field input__field--haruki\" type=\"text\" id=\"input-1\" name=\"seating\" [(ngModel)]=\"data.seating\" [ngClass]=\"'previous'\">\r\n                    <label class=\"input__label input__label--haruki\" for=\"input-1\">\r\n                        <span class=\"input__label-content input__label-content--haruki\">Seating Preferences</span>\r\n                    </label>\r\n                </div>\r\n                <div class=\"input input--haruki\">\r\n                    <input class=\"input__field input__field--haruki\" type=\"text\" id=\"input-1\" name=\"notes\" [(ngModel)]=\"data.notes\" [ngClass]=\"'previous'\">\r\n                    <label class=\"input__label input__label--haruki\" for=\"input-1\">\r\n                        <span class=\"input__label-content input__label-content--haruki\">Notes</span>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-12 bottombuttons\">\r\n            <button type=\"submit\" class=\"secondary-btn\" (click)=\"get(3)\">Make A Reservation</button>\r\n            <i aria-hidden=\"true\" id=\"close\" (click)=\"cancel()\" class=\"bladeIcon icon-close cancelIconStyle\"><span>Cancel</span></i>\r\n        </div>\r\n\r\n    </form>\r\n</div>\r\n\r\n<script src=\"~/js/classie.js\"></script>\r\n<script>\r\n    (function () {\r\n        if (!String.prototype.trim) {\r\n            (function () {\r\n                var rtrim = /^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g;\r\n                String.prototype.trim = function () {\r\n                    return this.replace(rtrim, '');\r\n                };\r\n            })();\r\n        }\r\n        [].slice.call(document.querySelectorAll('input.input__field')).forEach(function (inputEl) {\r\n            if (inputEl.value.trim() !== '') {\r\n                classie.add(inputEl.parentNode, 'input--filled');\r\n            }\r\n            inputEl.addEventListener('focus', onInputFocus);\r\n            inputEl.addEventListener('blur', onInputBlur);\r\n        });\r\n        function onInputFocus(ev) {\r\n            classie.add(ev.target.parentNode, 'input--filled');\r\n        }\r\n\r\n        function onInputBlur(ev) {\r\n            if (ev.target.value.trim() === '') {\r\n                classie.remove(ev.target.parentNode, 'input--filled');\r\n            }\r\n        }\r\n    })();\r\n</script>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/addguest/addguest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGuestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addguest_service__ = __webpack_require__("../../../../../src/app/addguest/addguest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_Shared_Service__ = __webpack_require__("../../../../../src/app/shared/Shared.Service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddGuestComponent = (function () {
    function AddGuestComponent(guestservice, router, sharedService) {
        this.guestservice = guestservice;
        this.router = router;
        this.sharedService = sharedService;
        this.data = {};
        this.saveguestdetails = {};
        this.restID = localStorage.getItem('restaurantid');
        this.show_message = false;
    }
    AddGuestComponent.prototype.ngOnInit = function () {
        this.getguestsdetails();
        // this.saveguestdetails = this.sharedService.addreservation;
        if (this.sharedService.addreservation) {
            this.data = this.sharedService.addreservation;
        }
        /* console.log(this.saveguestdetails);
         if (this.saveguestdetails) {
             this.data = this.saveguestdetails;
         }*/
        if (this.sharedService.email_error) {
            this.error_message = this.sharedService.email_error;
            this.show_message = true;
        }
    };
    AddGuestComponent.prototype.getguestsdetails = function () {
        var _this = this;
        this.guestservice.getguestsdetails().subscribe(function (res) {
            _this.guest_info = res.data;
        });
    };
    AddGuestComponent.prototype.addtowaitlist = function (guestdetails) {
        console.log(guestdetails);
    };
    AddGuestComponent.prototype.onSubmit = function (guestdetails, form) {
        var _this = this;
        console.log(this.number);
        console.log(guestdetails);
        if (this.restID) {
            this.restID = JSON.parse(this.restID);
        }
        if (guestdetails.PartySize) {
            this.partysize = JSON.parse(guestdetails['PartySize']);
            console.log(this.partysize);
        }
        if (guestdetails.waitquoted) {
            this.QuotedTime = JSON.parse(guestdetails['waitquoted']);
        }
        if (guestdetails.waitquoted === null || guestdetails.waitquoted === undefined) {
            this.QuotedTime = '';
        }
        if (guestdetails.relationship === null || guestdetails.relationship === undefined) {
            guestdetails.relationship = '';
        }
        if (guestdetails.visit === null || guestdetails.visit === undefined) {
            guestdetails.visit = '';
        }
        if (guestdetails.food === null || guestdetails.food === undefined) {
            guestdetails.food = '';
        }
        if (guestdetails.seating === null || guestdetails.seating === undefined) {
            guestdetails.seating = '';
        }
        if (guestdetails.notes === null || guestdetails.notes == undefined) {
            guestdetails.notes = '';
        }
        var obj = {
            "RestaurantID": this.restID,
            "FullName": guestdetails.UserName,
            "Email": guestdetails.email,
            "ContactNumber": guestdetails.mobile,
            "UserType": 'TU',
            "PartySize": this.partysize,
            "QuotedTime": this.QuotedTime,
            "Relationship": guestdetails.relationship,
            "ThisVisit": guestdetails.visit,
            "FoodAndDrink": guestdetails.food,
            "SeatingPreferences": guestdetails.seating,
            "Description": guestdetails.notes,
            "WaitListTime": null,
            "BookingStatus": 2,
            "TableNumbers": ''
        };
        console.log(obj);
        if (this.number == 1) {
            this.guestservice.addGuestDetails(obj, this.number).subscribe(function (res) {
                console.log(res);
                if (res._ErrorCode == '50000') {
                    //  this.router.navigate(['editguest']);
                    _this.data = obj;
                    _this.show_message = true;
                    _this.error_message = "Email Id Already Exists";
                    _this.data = guestdetails;
                }
                else {
                    _this.sharedService.email_error = '';
                    _this.router.navigate(['waitlist']);
                }
            });
        }
        else if (this.number == 2) {
            this.sharedService.uniqueid = "addguest";
            // this.sharedService.useraccept = guestdetails;
            // console.log(this.sharedService.addSeataguest);
            this.sharedService.addreservation = guestdetails;
            localStorage.setItem('acceptoffer rowdata', JSON.stringify(guestdetails));
            this.router.navigate(['seataGuest']);
        }
        else if (this.number == 3) {
            console.log("coming");
            this.router.navigate(['reservation']);
            this.sharedService.addreservation = guestdetails;
        }
        form.resetForm();
    };
    AddGuestComponent.prototype.get = function (number) {
        this.number = number;
        console.log(this.number);
    };
    AddGuestComponent.prototype.editguest = function (guestrecord) {
        this.sharedService.guestDetails = guestrecord;
        this.router.navigate(['editguest']);
    };
    AddGuestComponent.prototype.cancel = function () {
        this.sharedService.email_error = '';
        this.router.navigate(['waitlist']);
    };
    AddGuestComponent.prototype.change = function (data) {
        this.show_message = false;
    };
    return AddGuestComponent;
}());
AddGuestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'addGuest',
        template: __webpack_require__("../../../../../src/app/addguest/addguest.component.html"),
        styles: [__webpack_require__("../../../../../src/app/addguest/addguest.style.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__addguest_service__["a" /* GuestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__addguest_service__["a" /* GuestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_Shared_Service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_Shared_Service__["a" /* SharedService */]) === "function" && _c || Object])
], AddGuestComponent);

var _a, _b, _c;
//# sourceMappingURL=addguest.component.js.map

/***/ }),

/***/ "../../../../../src/app/addguest/addguest.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_Shared_Service__ = __webpack_require__("../../../../../src/app/shared/Shared.Service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_appsettings__ = __webpack_require__("../../../../../src/app/shared/appsettings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GuestService = (function () {
    function GuestService(http, sharedService) {
        this.http = http;
        this.sharedService = sharedService;
    }
    GuestService.prototype.addGuestDetails = function (guestInfo, number) {
        console.log(number);
        console.log(guestInfo);
        if (number == 1) {
            return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_4__shared_appsettings__["a" /* constant */].truflBase + 'Hostess/SaveRestaurantGuest', guestInfo).map(function (res) { return res.json(); });
        }
        else {
            console.log("coming2");
            return this.http.post('', guestInfo).map(function (res) { return res.json(); });
        }
    };
    GuestService.prototype.getguestsdetails = function () {
        return this.http.get('assets/Guest.json').map(function (res) { return res.json(); });
    };
    return GuestService;
}());
GuestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_Shared_Service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_Shared_Service__["a" /* SharedService */]) === "function" && _b || Object])
], GuestService);

var _a, _b;
//# sourceMappingURL=addguest.service.js.map

/***/ }),

/***/ "../../../../../src/app/addguest/addguest.style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.highlight {\r\n    border-bottom: 1px solid red !important;\r\n}\r\n\r\n.previous {\r\n    border-bottom: 1px solid #6a7989;\r\n}\r\n\r\n.input__label--haruki::after {\r\n    background: none !important;\r\n}\r\n.cancelIconStyle span {\r\n    font-family: AvenirNextCondensed;\r\n    font-size: 22px;\r\n    color: #f7f7f7;\r\n    text-transform: uppercase;\r\n    margin-left: 0.4em;\r\n}\r\n.cancelIconStyle {\r\n    font-size: 10px;\r\n    color: #969BAE;\r\n    float: right;\r\n    font-weight: bold;\r\n    margin-right: 4.5em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_login_service__ = __webpack_require__("../../../../../src/app/shared/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_authgaurd_service__ = __webpack_require__("../../../../../src/app/shared/authgaurd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__seated_seated_component__ = __webpack_require__("../../../../../src/app/seated/seated.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__defaultsettings_othersettings_other_settings_component__ = __webpack_require__("../../../../../src/app/defaultsettings/othersettings/other-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__defaultsettings_default_settings_component__ = __webpack_require__("../../../../../src/app/defaultsettings/default-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__defaultsettings_manageservers_manage_servers_component__ = __webpack_require__("../../../../../src/app/defaultsettings/manageservers/manage-servers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__defaultsettings_othersettings_other_settings_service__ = __webpack_require__("../../../../../src/app/defaultsettings/othersettings/other-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__defaultsettings_manageservers_manage_servers_service__ = __webpack_require__("../../../../../src/app/defaultsettings/manageservers/manage-servers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_Header_header_Component__ = __webpack_require__("../../../../../src/app/shared/Header/header.Component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__turnOnGetSeatedNow_trunOngetseated_component_Service__ = __webpack_require__("../../../../../src/app/turnOnGetSeatedNow/trunOngetseated.component.Service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__turnOnGetSeatedNow_turnOngetseated_component__ = __webpack_require__("../../../../../src/app/turnOnGetSeatedNow/turnOngetseated.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__seated_seated_service__ = __webpack_require__("../../../../../src/app/seated/seated.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__startservice_start_service_service__ = __webpack_require__("../../../../../src/app/startservice/start-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__startservice_start_service_component__ = __webpack_require__("../../../../../src/app/startservice/start-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Hostess_hostess_service__ = __webpack_require__("../../../../../src/app/Hostess/hostess.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Hostess_hostess_component__ = __webpack_require__("../../../../../src/app/Hostess/hostess.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_Shared_Service__ = __webpack_require__("../../../../../src/app/shared/Shared.Service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__selectselections_select_sections_service__ = __webpack_require__("../../../../../src/app/selectselections/select-sections.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__selectselections_select_selections_component__ = __webpack_require__("../../../../../src/app/selectselections/select-selections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__selectstaff_select_staff_service__ = __webpack_require__("../../../../../src/app/selectstaff/select-staff.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__selectstaff_select_staff_component__ = __webpack_require__("../../../../../src/app/selectstaff/select-staff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__reviewselections_review_selections_service__ = __webpack_require__("../../../../../src/app/reviewselections/review-selections.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__reviewselections_review_selections_component__ = __webpack_require__("../../../../../src/app/reviewselections/review-selections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__seataguest_seataguest_service__ = __webpack_require__("../../../../../src/app/seataguest/seataguest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__seataguest_seataguest_component__ = __webpack_require__("../../../../../src/app/seataguest/seataguest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__addguest_addguest_service__ = __webpack_require__("../../../../../src/app/addguest/addguest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__addguest_addguest_component__ = __webpack_require__("../../../../../src/app/addguest/addguest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__EditGuest_editguest_service__ = __webpack_require__("../../../../../src/app/EditGuest/editguest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__EditGuest_editguest_component__ = __webpack_require__("../../../../../src/app/EditGuest/editguest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__Snapshot_Snapshot_Service__ = __webpack_require__("../../../../../src/app/Snapshot/Snapshot.Service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__Snapshot_snapshot_component__ = __webpack_require__("../../../../../src/app/Snapshot/snapshot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__Reservation_reservation_service__ = __webpack_require__("../../../../../src/app/Reservation/reservation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__Reservation_reservation_component__ = __webpack_require__("../../../../../src/app/Reservation/reservation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__defaultsettings_defineselections_define_selections_service__ = __webpack_require__("../../../../../src/app/defaultsettings/defineselections/define-selections.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__defaultsettings_defineselections_define_selections_component__ = __webpack_require__("../../../../../src/app/defaultsettings/defineselections/define-selections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__Pipes_SnapshotPipe__ = __webpack_require__("../../../../../src/app/Pipes/SnapshotPipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__seated_seated_component__["a" /* SeatedComponent */],
            __WEBPACK_IMPORTED_MODULE_11__defaultsettings_othersettings_other_settings_component__["a" /* OtherSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__defaultsettings_default_settings_component__["a" /* DefaultSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__defaultsettings_manageservers_manage_servers_component__["a" /* ManageServersComponent */],
            __WEBPACK_IMPORTED_MODULE_16__shared_Header_header_Component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_18__turnOnGetSeatedNow_turnOngetseated_component__["a" /* turnOngetseated */],
            __WEBPACK_IMPORTED_MODULE_21__startservice_start_service_component__["a" /* StartServiceComponent */],
            __WEBPACK_IMPORTED_MODULE_24__Hostess_hostess_component__["a" /* HostessComponent */],
            __WEBPACK_IMPORTED_MODULE_26__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_28__selectselections_select_selections_component__["a" /* SelectSelectionsComponent */],
            __WEBPACK_IMPORTED_MODULE_30__selectstaff_select_staff_component__["a" /* SelectStaffComponent */],
            __WEBPACK_IMPORTED_MODULE_32__reviewselections_review_selections_component__["a" /* ReviewSelectionsComponent */],
            __WEBPACK_IMPORTED_MODULE_34__seataguest_seataguest_component__["a" /* SeataGuestComponent */],
            __WEBPACK_IMPORTED_MODULE_36__addguest_addguest_component__["a" /* AddGuestComponent */],
            __WEBPACK_IMPORTED_MODULE_38__EditGuest_editguest_component__["a" /* EditGuestComponent */],
            __WEBPACK_IMPORTED_MODULE_40__Snapshot_snapshot_component__["a" /* SnapShotComponent */],
            __WEBPACK_IMPORTED_MODULE_42__Reservation_reservation_component__["a" /* ReservationComponent */],
            __WEBPACK_IMPORTED_MODULE_44__defaultsettings_defineselections_define_selections_component__["a" /* DefineSelectionsComponent */],
            __WEBPACK_IMPORTED_MODULE_45__Pipes_SnapshotPipe__["a" /* SPlitStringPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_22_ng2_toastr__["ToastModule"],
            __WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* AppRouting */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__shared_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_9__shared_authgaurd_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_14__defaultsettings_othersettings_other_settings_service__["a" /* OtherSettingsService */],
            __WEBPACK_IMPORTED_MODULE_15__defaultsettings_manageservers_manage_servers_service__["a" /* ManageServersService */],
            __WEBPACK_IMPORTED_MODULE_17__turnOnGetSeatedNow_trunOngetseated_component_Service__["a" /* TrunongetseatedService */],
            __WEBPACK_IMPORTED_MODULE_19__seated_seated_service__["a" /* SeatedService */],
            __WEBPACK_IMPORTED_MODULE_20__startservice_start_service_service__["a" /* startService */],
            __WEBPACK_IMPORTED_MODULE_23__Hostess_hostess_service__["a" /* HostessService */],
            __WEBPACK_IMPORTED_MODULE_25__shared_Shared_Service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_27__selectselections_select_sections_service__["a" /* SelectService */],
            __WEBPACK_IMPORTED_MODULE_29__selectstaff_select_staff_service__["a" /* StaffService */],
            __WEBPACK_IMPORTED_MODULE_31__reviewselections_review_selections_service__["a" /* ReviewSelectionsService */],
            __WEBPACK_IMPORTED_MODULE_33__seataguest_seataguest_service__["a" /* SeataguestService */],
            __WEBPACK_IMPORTED_MODULE_35__addguest_addguest_service__["a" /* GuestService */],
            __WEBPACK_IMPORTED_MODULE_37__EditGuest_editguest_service__["a" /* EditGuestService */],
            __WEBPACK_IMPORTED_MODULE_39__Snapshot_Snapshot_Service__["a" /* SnapshotService */],
            __WEBPACK_IMPORTED_MODULE_41__Reservation_reservation_service__["a" /* ReservationService */],
            __WEBPACK_IMPORTED_MODULE_43__defaultsettings_defineselections_define_selections_service__["a" /* DefineSelectionService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seated_seated_component__ = __webpack_require__("../../../../../src/app/seated/seated.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_authgaurd_service__ = __webpack_require__("../../../../../src/app/shared/authgaurd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Hostess_hostess_component__ = __webpack_require__("../../../../../src/app/Hostess/hostess.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__startservice_start_service_component__ = __webpack_require__("../../../../../src/app/startservice/start-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selectselections_select_selections_component__ = __webpack_require__("../../../../../src/app/selectselections/select-selections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__selectstaff_select_staff_component__ = __webpack_require__("../../../../../src/app/selectstaff/select-staff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reviewselections_review_selections_component__ = __webpack_require__("../../../../../src/app/reviewselections/review-selections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__defaultsettings_defineselections_define_selections_component__ = __webpack_require__("../../../../../src/app/defaultsettings/defineselections/define-selections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__defaultsettings_manageservers_manage_servers_component__ = __webpack_require__("../../../../../src/app/defaultsettings/manageservers/manage-servers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__defaultsettings_othersettings_other_settings_component__ = __webpack_require__("../../../../../src/app/defaultsettings/othersettings/other-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__defaultsettings_default_settings_component__ = __webpack_require__("../../../../../src/app/defaultsettings/default-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__seataguest_seataguest_component__ = __webpack_require__("../../../../../src/app/seataguest/seataguest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__addguest_addguest_component__ = __webpack_require__("../../../../../src/app/addguest/addguest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__EditGuest_editguest_component__ = __webpack_require__("../../../../../src/app/EditGuest/editguest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Snapshot_snapshot_component__ = __webpack_require__("../../../../../src/app/Snapshot/snapshot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Reservation_reservation_component__ = __webpack_require__("../../../../../src/app/Reservation/reservation.component.ts");



















var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'seated', component: __WEBPACK_IMPORTED_MODULE_2__seated_seated_component__["a" /* SeatedComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_authgaurd_service__["a" /* AuthGuard */]] },
    { path: 'waitlist', component: __WEBPACK_IMPORTED_MODULE_4__Hostess_hostess_component__["a" /* HostessComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_authgaurd_service__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_authgaurd_service__["a" /* AuthGuard */]] },
    { path: 'startservice', component: __WEBPACK_IMPORTED_MODULE_6__startservice_start_service_component__["a" /* StartServiceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_authgaurd_service__["a" /* AuthGuard */]] },
    { path: 'selectselections', component: __WEBPACK_IMPORTED_MODULE_7__selectselections_select_selections_component__["a" /* SelectSelectionsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_authgaurd_service__["a" /* AuthGuard */]] },
    { path: 'selectStaff', component: __WEBPACK_IMPORTED_MODULE_8__selectstaff_select_staff_component__["a" /* SelectStaffComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_authgaurd_service__["a" /* AuthGuard */]] },
    { path: 'reviewSelections', component: __WEBPACK_IMPORTED_MODULE_9__reviewselections_review_selections_component__["a" /* ReviewSelectionsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_authgaurd_service__["a" /* AuthGuard */]] },
    { path: 'defineSelections', component: __WEBPACK_IMPORTED_MODULE_10__defaultsettings_defineselections_define_selections_component__["a" /* DefineSelectionsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_authgaurd_service__["a" /* AuthGuard */]] },
    { path: 'manageServers', component: __WEBPACK_IMPORTED_MODULE_11__defaultsettings_manageservers_manage_servers_component__["a" /* ManageServersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_authgaurd_service__["a" /* AuthGuard */]] },
    { path: 'otherSettings', component: __WEBPACK_IMPORTED_MODULE_12__defaultsettings_othersettings_other_settings_component__["a" /* OtherSettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_authgaurd_service__["a" /* AuthGuard */]] },
    { path: 'defaultSettings', component: __WEBPACK_IMPORTED_MODULE_13__defaultsettings_default_settings_component__["a" /* DefaultSettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_authgaurd_service__["a" /* AuthGuard */]] },
    { path: 'seataGuest', component: __WEBPACK_IMPORTED_MODULE_14__seataguest_seataguest_component__["a" /* SeataGuestComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_authgaurd_service__["a" /* AuthGuard */]] },
    { path: 'addGuest', component: __WEBPACK_IMPORTED_MODULE_15__addguest_addguest_component__["a" /* AddGuestComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_authgaurd_service__["a" /* AuthGuard */]] },
    { path: 'editguest', component: __WEBPACK_IMPORTED_MODULE_16__EditGuest_editguest_component__["a" /* EditGuestComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_authgaurd_service__["a" /* AuthGuard */]] },
    { path: 'snapshot', component: __WEBPACK_IMPORTED_MODULE_17__Snapshot_snapshot_component__["a" /* SnapShotComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_authgaurd_service__["a" /* AuthGuard */]] },
    { path: 'reservation', component: __WEBPACK_IMPORTED_MODULE_18__Reservation_reservation_component__["a" /* ReservationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_authgaurd_service__["a" /* AuthGuard */]] },
    { path: '**', redirectTo: 'login' },
];
var AppRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true });
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/defaultsettings/default-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<shared-header></shared-header>\r\n<div class=\"col-md-12 settingsmain\">\r\n\r\n    <ul id=\"settingOptions\">\r\n        <li>\r\n            <a (click)=\"defineSection()\">Define Sections</a>\r\n        </li>\r\n        <li>\r\n            <a (click)=\"manageServers()\">Manage Servers</a>\r\n        </li>\r\n        <li>\r\n            <a (click)=\"otherSettings()\">Other Settings</a>\r\n        </li>\r\n    </ul>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/defaultsettings/default-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DefaultSettingsComponent = (function () {
    function DefaultSettingsComponent(router) {
        this.router = router;
    }
    DefaultSettingsComponent.prototype.defineSection = function () {
        this.router.navigateByUrl('/defineSelections');
    };
    DefaultSettingsComponent.prototype.manageServers = function () {
        this.router.navigateByUrl('/manageServers');
    };
    DefaultSettingsComponent.prototype.otherSettings = function () {
        this.router.navigateByUrl('/otherSettings');
    };
    DefaultSettingsComponent.prototype.waitlistPage = function () {
        this.router.navigateByUrl('/waitlist');
    };
    DefaultSettingsComponent.prototype.seatedPage = function () {
        this.router.navigateByUrl('/seated');
    };
    DefaultSettingsComponent.prototype.snapshotPage = function () {
        this.router.navigateByUrl('/snapshot');
    };
    DefaultSettingsComponent.prototype.settingsPage = function () {
        this.router.navigateByUrl('/defaultSettings');
    };
    return DefaultSettingsComponent;
}());
DefaultSettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'defaultSettings',
        template: __webpack_require__("../../../../../src/app/defaultsettings/default-settings.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], DefaultSettingsComponent);

var _a;
//# sourceMappingURL=default-settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/defaultsettings/defineselections/define-selections.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\r\n * animate.css -http://daneden.me/animate\r\n * Version - 3.5.1\r\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\r\n *\r\n * Copyright (c) 2016 Daniel Eden\r\n */\r\n\r\n.animated {\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n\r\n@-webkit-keyframes fadeInRight {\r\n    from {\r\n        opacity: 0;\r\n        -webkit-transform: translate3d(100%, 0, 0);\r\n        transform: translate3d(100%, 0, 0);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: none;\r\n        transform: none;\r\n    }\r\n}\r\n\r\n@keyframes fadeInRight {\r\n    from {\r\n        opacity: 0;\r\n        -webkit-transform: translate3d(100%, 0, 0);\r\n        transform: translate3d(100%, 0, 0);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: none;\r\n        transform: none;\r\n    }\r\n}\r\n\r\n.fadeInRight {\r\n    -webkit-animation-name: fadeInRight;\r\n    animation-name: fadeInRight;\r\n}\r\n\r\n@-webkit-keyframes fadeInRightBig {\r\n    from {\r\n        opacity: 0;\r\n        -webkit-transform: translate3d(2000px, 0, 0);\r\n        transform: translate3d(2000px, 0, 0);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: none;\r\n        transform: none;\r\n    }\r\n}\r\n\r\n@keyframes fadeInRightBig {\r\n    from {\r\n        opacity: 0;\r\n        -webkit-transform: translate3d(2000px, 0, 0);\r\n        transform: translate3d(2000px, 0, 0);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: none;\r\n        transform: none;\r\n    }\r\n}\r\n\r\n.fadeInRightBig {\r\n    -webkit-animation-name: fadeInRightBig;\r\n    animation-name: fadeInRightBig;\r\n}\r\n\r\n#profileSection {\r\n    height: 100vh;\r\n    background: #394165;\r\n    position: fixed;\r\n    right: 0px;\r\n    top: 100px;\r\n    overflow-y: auto;\r\n    width: 300px;\r\n    z-index: 9999;\r\n}\r\n\r\n#close {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.slideform label {\r\n    float: left;\r\n    width: 100%;\r\n    margin: 0 0 5px 0;\r\n    color: #fff;\r\n}\r\n\r\n.slideform input[type=text] {\r\n    float: left !important;\r\n    width: 100% !important;\r\n    padding: 5px !important;\r\n    height: 30px !important;\r\n    background: #4f5879 !important;\r\n    color: #fff !important;\r\n    border: #4f5879 solid 1px !important;\r\n}\r\n\r\n.color{\r\n    color:red;\r\n}\r\n\r\n.name {\r\n    font-family: AvenirNextCondensed;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n    color: #ffffff;\r\n    padding-top: 6%;\r\n}\r\n.lblstyle {\r\n    float: left;\r\n    width: 100%;\r\n    margin: 0 0 5px 0;\r\n    color: #fff;\r\n    font-family: AvenirNext;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n}\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    left: 9.7em!important;\r\n    top: 0.5em;\r\n    width: 36px;\r\n    height: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/defaultsettings/defineselections/define-selections.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"customheader\">\r\n    <div class=\"customheaderleft\">\r\n        <h2>Define Sections</h2>\r\n    </div>\r\n    <div class=\"customheaderright\">\r\n        <a class=\"secondary-btn\" (click)=\"cancel()\">\r\n            Cancel\r\n        </a>\r\n        <a class=\"primary-btn\" (click)=\"saveclose()\">\r\n            Save and next\r\n        </a>\r\n    </div>\r\n</div>\r\n<div class=\"col-md-12 sectionsmain\">\r\n    <ul>\r\n        <li class=\"hover\" *ngFor=\"let _defineserverdeatils of result;let i=index;\">\r\n            <a (click)=\"showProfile(_defineserverdeatils, _defineserverdeatils.seatNumbers, i)\">\r\n                <h3>{{_defineserverdeatils.FloorName}}</h3>\r\n                <p *ngFor=\"let obj of _defineserverdeatils.seatNumbers;let i=index;\">{{obj.StartTableNumber}}-{{obj.EndTableNumber}}</p>\r\n               \r\n            </a>\r\n        </li>\r\n    </ul>\r\n    <div class=\"col-md-2 animated fadeInRight\" id=\"profileSection\" *ngIf=\"isShow\">\r\n        <i aria-hidden=\"true\" id=\"close\" (click)=\"closeProile()\" class=\"bladeIcon icon-close closeIconStyle\"></i>\r\n       <div class=\"slidetop\">\r\n            <img alt=\"\" src=\"data:image/JPEG;base64,{{currentRowInfo.FloorImage}}\" />\r\n            <h5 class=\"name\">{{currentRowInfo.FloorName}}</h5>\r\n       </div>\r\n        <div class=\"slideformmain\">\r\n            <div class=\"slidetoggle lblstyle\">\r\n                <label >Open / Close</label>\r\n                <label class=\"switch\">\r\n                    <input type=\"checkbox\" [(ngModel)]=\"currentRowInfo.IsActive\" (ngModelChange)=\"updateServerStatus(currentRowInfo.IsActive, index)\">\r\n                    <span class=\"slider round\"></span>\r\n                </label>\r\n            </div>\r\n            <div *ngFor=\"let item of arr; let index = index\">\r\n                <div class=\"slideform\"><label class=\"lblstyle\">{{item.labelName1}} </label> <input name=\"item.name\" type=\"text\" [(ngModel)]=\"item.StartTableNumber\" (ngModelChange)=\"updateStartTableNumber(item.StartTableNumber, index)\" id=\"starttabnum\" #starttabnum=\"ngModel\" pattern=\"^[0-9]{1,}$\" required minlength=\"1\" />\r\n                    <label *ngIf=\"starttabnum.invalid && (starttabnum.dirty || starttabnum.touched)\" >\r\n                        <label *ngIf=\"starttabnum.errors.required\" class=\"color\">\r\n                            start tablenumber is required.\r\n                        </label>\r\n                        <label *ngIf=\"starttabnum.errors.pattern\" class=\"color\">\r\n                            start tablenumber should be number only\r\n                        </label>\r\n                    </label>\r\n                </div>\r\n                <div class=\"slideform\"><label class=\"lblstyle\">{{item.labelName2}} </label> <input name=\"item.name\" type=\"text\" [(ngModel)]=\"item.EndTableNumber\"  (ngModelChange)=\"updateEndTableNumber(item.EndTableNumber, index)\" id=\"endtabnum\" #endtabnum=\"ngModel\" pattern=\"^[0-9]{1,}$\" required minlength=\"1\" /> \r\n                    <label *ngIf=\"endtabnum.invalid && (endtabnum.dirty || endtabnum.touched)\" [ngStyle]=\"{'color': 'red'}\">\r\n                        <label *ngIf=\"endtabnum.errors.required\" class=\"color\">\r\n                            end tablenumber is required.\r\n                        </label>\r\n                        <label *ngIf=\"endtabnum.errors.pattern\" class=\"color\">\r\n                            end tablenumber should be number only\r\n                        </label>\r\n                    </label>\r\n                </div>\r\n             </div>\r\n             <label *ngIf=\"flag\" [ngStyle]=\"{'color': 'red'}\">\r\n                {{message}}\r\n             </label>\r\n            <div class=\"slideform\"><a class=\"lblstyle\" (click)=\"addMore()\">+ Add More </a>  </div>\r\n        </div>\r\n        <div class=\"slidetoggle lblstyle\"><label>Make Changes Permanent?</label> <input type=\"checkbox\" />  </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/defaultsettings/defineselections/define-selections.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefineSelectionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defineselections_define_selections_service__ = __webpack_require__("../../../../../src/app/defaultsettings/defineselections/define-selections.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_login_service__ = __webpack_require__("../../../../../src/app/shared/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DefineSelectionsComponent = (function () {
    function DefineSelectionsComponent(_defineservice, router, _loginservice) {
        this._defineservice = _defineservice;
        this.router = router;
        this._loginservice = _loginservice;
        this.result = [];
        this.arr = [];
        this.isShow = false;
        this.savedList = [];
        this.finalRes = [];
        this.globalCount = 0;
        this.listOfRanges = [];
        this.restarauntid = _loginservice.getRestaurantId();
    }
    DefineSelectionsComponent.prototype.ngOnInit = function () {
        this.getDefineSelections(this.restarauntid);
    };
    DefineSelectionsComponent.prototype.getDefineSelections = function (restarauntid) {
        var _this = this;
        var that = this;
        this._defineservice.getDefineSelectionDetails(restarauntid).subscribe(function (res) {
            _this.defineselectionsdetails = res._Data.DefineSection;
            _this.definesectionstablerange = res._Data.TableRange;
            console.log(_this.defineselectionsdetails, " this.defineselectionsdetails");
            if (_this.defineselectionsdetails) {
                //adding seatnumbers functionality
                _this.defineselectionsdetails.map(function (obj) {
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
                        }
                        else {
                            that.result.push(that.getSeatedInfoObj(obj));
                        }
                    }
                    else {
                        that.result.push(that.getSeatedInfoObj(obj));
                    }
                });
            }
            _this.result.map(function (obj) {
                obj.sectionsCount = obj.seatNumbers.length;
                obj.seatNumbers.map(function (seatObj) {
                    that.globalCount++;
                    seatObj['range_' + that.globalCount] = seatObj.StartTableNumber + '-' + seatObj.EndTableNumber;
                    seatObj.FloorNumber = obj.FloorNumber;
                    seatObj.RestaurantID = obj.RestaurantID;
                    that.listOfRanges.push((_a = {},
                        _a['range_' + that.globalCount] = seatObj['range_' + that.globalCount],
                        _a));
                    if (seatObj.StartTableNumber !== '' && seatObj.EndTableNumber !== '') {
                        that.savedList.push(seatObj);
                    }
                    var _a;
                });
            });
            console.log(that.result, "that.result");
        });
    };
    DefineSelectionsComponent.prototype.cancel = function () {
        this.router.navigateByUrl('/defaultSettings');
    };
    DefineSelectionsComponent.prototype.CheckRange = function (findRangeArr) {
        var rangeFunc = function (start, end) { return Array.from({ length: (end - start) + 1 }, function (v, k) { return k + start; }); };
        var rangeArray = findRangeArr.map(function (range) {
            var value = range[Object.keys(range)[0]];
            return rangeFunc(+value.split('-')[0], +value.split('-')[1]);
        });
        console.log(rangeArray, "rangeArray");
        return rangeArray;
    };
    DefineSelectionsComponent.prototype.saveclose = function () {
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
            });
        });
        console.log(this.savedList);
        this.postsavedlist();
        //if (!this.flag) {
        //    this.postsavedlist();
        //}
        //this.getDefineSelections(this.restarauntid);
    };
    DefineSelectionsComponent.prototype.postsavedlist = function () {
        var _this = this;
        console.log(this.savedList, "this.savedListo[iop[op[op[o=");
        this._defineservice.postDefineSelectionDetails(this.savedList).subscribe(function (res) {
            _this.savedseatedinfo = res._Data;
            console.log(_this.savedseatedinfo, "this.savedseatedinfodfsdfd");
            _this.router.navigateByUrl('/defaultSettings');
        });
    };
    DefineSelectionsComponent.prototype.showProfile = function (profile, seatArr, index) {
        var _that = this;
        this.floornumber = profile.FloorNumber;
        this.currentRowInfo = profile;
        this.arr = seatArr;
        this.currentRowInfo.arr = this.arr;
        this.isShow = true;
        console.log(this.arr, " this.arr");
    };
    DefineSelectionsComponent.prototype.updateServerStatus = function (value, index) {
        var _this = this;
        this.defineselectionsdetails.IsActive = value;
        if (value == false) {
            this.activestatus = this.defineselectionsdetails.ActiveInd = 0;
        }
        else {
            this.activestatus = this.defineselectionsdetails.ActiveInd = 1;
        }
        this._defineservice.postClockInClockOutDetails(this.restarauntid, this.floornumber, this.activestatus).subscribe(function (res) {
            _this.clockinoutinfo = res._Data;
            console.log(_this.clockinoutinfo, "this.savedseatedinfodfsdfd");
        });
        console.log(value, "valuek[olikopk");
    };
    DefineSelectionsComponent.prototype.closeProile = function () {
        this.isShow = false;
    };
    DefineSelectionsComponent.prototype.addMore = function () {
        console.log(this.currentRowInfo);
        this.globalCount++;
        this.arr.push((_a = {
                name: 'name',
                type: 'text',
                StartTableNumber: '',
                EndTableNumber: '',
                labelName1: 'Section Start Number',
                labelName2: 'Section End Number'
            },
            _a['range_' + this.globalCount] = '',
            _a));
        var obj = {
            RestaurantID: this.currentRowInfo.RestaurantID,
            FloorNumber: this.currentRowInfo.FloorNumber,
            StartTableNumber: this.arr[this.arr.length - 1].StartTableNumber,
            EndTableNumber: this.arr[this.arr.length - 1].EndTableNumber
        };
        console.log(this.savedList);
        this.listOfRanges.push((_b = {},
            _b['range_' + this.globalCount] = '',
            _b));
        console.log(this.arr, " this.arr");
        var _a, _b;
    };
    DefineSelectionsComponent.prototype.checkIsObjExists = function (arr, obj) {
        return arr.findIndex(function (_obj) {
            return ((_obj.FloorNumber === obj.FloorNumber) && (_obj.StartTableNumber === obj.StartTableNumber) && (_obj.EndTableNumber === obj.EndTableNumber));
        });
    };
    DefineSelectionsComponent.prototype.checkInListOfRanges = function (key) {
        return this.listOfRanges.findIndex(function (range, index) {
            return Object.keys(range)[0] == key;
        });
    };
    DefineSelectionsComponent.prototype.updateStartEndLogic = function (value, index, isStartOrEnd) {
        var arrayrange;
        var obj = this.currentRowInfo.arr[index];
        if (obj.StartTableNumber == '' && obj.EndTableNumber == '') {
            this.currentRowInfo.IsActive = false;
            this.arr.splice(index, 1);
            if (this.arr != null && this.arr.length != 0) {
                this.currentRowInfo.IsActive = true;
            }
        }
        obj.FloorNumber = this.currentRowInfo.FloorNumber;
        obj.RestaurantID = this.currentRowInfo.RestaurantID;
        var tempArr = Object.keys(obj).filter(function (str) {
            if (str.includes('range')) {
                return str;
            }
        });
        if (tempArr.length) {
            var findedValueIndex = this.checkInListOfRanges(tempArr[0]);
            if (findedValueIndex !== -1) {
                var keyValue = this.listOfRanges[findedValueIndex][tempArr[0]];
                if (keyValue == '') {
                    this.listOfRanges[findedValueIndex] = (_a = {},
                        _a[tempArr[0]] = isStartOrEnd ? (value + '-') : ('-' + value),
                        _a);
                }
                else {
                    if (keyValue.split('-').length === 2) {
                        this.listOfRanges[findedValueIndex] = (_b = {},
                            _b[tempArr[0]] = isStartOrEnd ? (value + '-' + keyValue.split('-')[1]) : (keyValue.split('-')[0] + '-' + value),
                            _b);
                    }
                }
            }
        }
        if (this.checkIsObjExists(this.savedList, obj) === -1) {
            this.savedList.push(obj);
        }
        // finding range 
        var findRangeArr = this.listOfRanges.filter(function (range) {
            return Object.keys(range)[0] !== tempArr[0];
        });
        arrayrange = this.CheckRange(findRangeArr);
        console.log(arrayrange, "arrayrangehuoyioupupu");
        var that = this;
        this.flag = false;
        arrayrange.map(function (rangeArr) {
            if (obj.StartTableNumber !== '' || obj.EndTableNumber !== '') {
                if (+(obj.StartTableNumber) !== 0 && rangeArr.indexOf(+(obj.StartTableNumber)) !== -1 && that.savedList.length > 1) {
                    that.flag = true;
                    that.message = "Table already allocated";
                }
                else if (+(obj.EndTableNumber) !== 0 && rangeArr.indexOf(+(obj.EndTableNumber)) !== -1 && that.savedList.length > 1) {
                    that.flag = true;
                    that.message = "Table already allocated";
                }
                else if (+(obj.StartTableNumber) !== 0 && +(obj.EndTableNumber) !== 0 && (+obj.StartTableNumber >= +obj.EndTableNumber)) {
                    that.flag = true;
                    that.message = "StartTableNumber is Greaterthan EndTableNumber";
                }
                else if ((+(obj.StartTableNumber) < +(that.definesectionstablerange[0].FirstTableNumber)) || (+(obj.EndTableNumber) > +(that.definesectionstablerange[0].LastTableNumber))) {
                    that.flag = true;
                    that.message = "Exceeded TableRange";
                }
            }
        });
        var _a, _b;
    };
    DefineSelectionsComponent.prototype.updateStartTableNumber = function (value, index) {
        this.updateStartEndLogic(value, index, true);
    };
    DefineSelectionsComponent.prototype.updateEndTableNumber = function (value, index) {
        this.updateStartEndLogic(value, index, false);
    };
    DefineSelectionsComponent.prototype.getSeatedInfoObj = function (obj) {
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
    };
    return DefineSelectionsComponent;
}());
DefineSelectionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'defineSelections',
        template: __webpack_require__("../../../../../src/app/defaultsettings/defineselections/define-selections.component.html"),
        styles: [__webpack_require__("../../../../../src/app/defaultsettings/defineselections/define-selections.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__defineselections_define_selections_service__["a" /* DefineSelectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__defineselections_define_selections_service__["a" /* DefineSelectionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_login_service__["a" /* LoginService */]) === "function" && _c || Object])
], DefineSelectionsComponent);

var _a, _b, _c;
//# sourceMappingURL=define-selections.component.js.map

/***/ }),

/***/ "../../../../../src/app/defaultsettings/defineselections/define-selections.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefineSelectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__ = __webpack_require__("../../../../../src/app/shared/appsettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DefineSelectionService = (function () {
    function DefineSelectionService(http) {
        this.http = http;
    }
    //get define selections details
    DefineSelectionService.prototype.getDefineSelectionDetails = function (restarauntid) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + 'WaitListUser/GetRestaurantSectionTables/' + restarauntid).map(function (res) { return res.json(); });
    };
    //post define selctions details
    DefineSelectionService.prototype.postDefineSelectionDetails = function (seatsinfo) {
        console.log(seatsinfo, "seatsinfo from service");
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + 'WaitListUser/SaveDefineSections/', seatsinfo).map(function (res) { return res.json(); });
    };
    //post clock in clock off details
    DefineSelectionService.prototype.postClockInClockOutDetails = function (restarauntid, floornumber, activestatus) {
        console.log(restarauntid, floornumber, activestatus, "clock from service");
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + 'WaitListUser/UpdateRestaurantSectionOpenClose/' + restarauntid + '/' + floornumber + '/' + activestatus, '').map(function (res) { return res.json(); });
    };
    return DefineSelectionService;
}());
DefineSelectionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DefineSelectionService);

var _a;
//# sourceMappingURL=define-selections.service.js.map

/***/ }),

/***/ "../../../../../src/app/defaultsettings/manageservers/manage-servers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\r\n * animate.css -http://daneden.me/animate\r\n * Version - 3.5.1\r\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\r\n *\r\n * Copyright (c) 2016 Daniel Eden\r\n */\r\n\r\n.animated {\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n.padlft{\r\n    padding-left:8%;\r\n}\r\n.blur {\r\n    opacity: 0.4;\r\n}\r\n@-webkit-keyframes fadeInRight {\r\n    from {\r\n        opacity: 0;\r\n        -webkit-transform: translate3d(100%, 0, 0);\r\n        transform: translate3d(100%, 0, 0);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: none;\r\n        transform: none;\r\n    }\r\n}\r\n\r\n@keyframes fadeInRight {\r\n    from {\r\n        opacity: 0;\r\n        -webkit-transform: translate3d(100%, 0, 0);\r\n        transform: translate3d(100%, 0, 0);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: none;\r\n        transform: none;\r\n    }\r\n}\r\n\r\n.fadeInRight {\r\n    -webkit-animation-name: fadeInRight;\r\n    animation-name: fadeInRight;\r\n}\r\n\r\n@-webkit-keyframes fadeInRightBig {\r\n    from {\r\n        opacity: 0;\r\n        -webkit-transform: translate3d(2000px, 0, 0);\r\n        transform: translate3d(2000px, 0, 0);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: none;\r\n        transform: none;\r\n    }\r\n}\r\n\r\n@keyframes fadeInRightBig {\r\n    from {\r\n        opacity: 0;\r\n        -webkit-transform: translate3d(2000px, 0, 0);\r\n        transform: translate3d(2000px, 0, 0);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: none;\r\n        transform: none;\r\n    }\r\n}\r\n\r\n.fadeInRightBig {\r\n    -webkit-animation-name: fadeInRightBig;\r\n    animation-name: fadeInRightBig;\r\n}\r\n.name {\r\n    font-family: AvenirNextCondensed;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n    color: #ffffff;\r\n    padding-top: 3%;\r\n}\r\n    #profileSection {\r\n    height: 100vh;\r\n    background: #394165;\r\n    position: fixed;\r\n    right: 0px;\r\n    top: 100px;\r\n    overflow-y: auto;\r\n    width: 300px;\r\n    /*z-index: 9999;*/\r\n}\r\n\r\n#close {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.slideform label {\r\n    float: left;\r\n    width: 100%;\r\n    margin: 0 0 5px 0;\r\n    color: #fff;\r\n    font-family: AvenirNext;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n}\r\n\r\n.slideform select{\r\n    float: left;\r\n    width: 100%;\r\n    padding: 5px;\r\n    height: 34px;\r\n    background: #4f5879;\r\n    color: #fff;\r\n    border: #4f5879 solid 1px;\r\n}\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    left: 8.4em;\r\n    top: 0.5em;\r\n    width: 36px;\r\n    height: 15px;\r\n}\r\n#serverCheckInOutModal select {\r\n    background-color: #1f2025;\r\n    width:100%;\r\n}\r\n#serverCheckInOutModal .modal-header, #serverCheckInOutModal .modal-footer {\r\n    border: none !important;\r\n}\r\n#serverCheckInOutModal .modal-header {\r\n    padding-bottom: 0px;\r\n}\r\n\r\n#serverCheckInOutModal .modal {\r\n    top: 25%;\r\n    left: 17%\r\n}\r\n\r\n.primary-btn:hover{\r\n    cursor:pointer;\r\n}\r\n.lblColor {\r\n    color: #ececec;\r\n}\r\n\r\n#staffInfiLi a:hover {\r\n    cursor:pointer;\r\n}\r\n.h4{\r\n    color:white;\r\n}\r\n.switch {\r\n    position: relative !important;\r\n    display: inline-block !important;\r\n    left: 5.4em !important;\r\n    top: 0.5em !important;\r\n    width: 36px !important;\r\n    height: 15px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/defaultsettings/manageservers/manage-servers.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"customheader\">\r\n    <div class=\"customheaderleft\">\r\n        <h2>Manage Servers</h2>\r\n    </div>\r\n    <div class=\"customheaderright\">\r\n        <a class=\"secondary-btn\" (click)=\"cancel()\">\r\n            cancel\r\n        </a>\r\n        <a class=\"primary-btn\" (click)=\"saveclose()\">\r\n            Save and Close\r\n        </a>\r\n    </div>\r\n</div>\r\n<div class=\"col-md-12 servicesmain msgap\">\r\n    <div class=\"col-md-12 selectstaff\">\r\n        <ul class=\"padlft\">\r\n            <li *ngFor=\"let _manageserver of result\">\r\n                <a class=\"selected\"  (click)=\"showProfile(_manageserver, _manageserver.seatNumbers, i)\" >\r\n                    <img  src=\"data:image/JPEG;base64,{{_manageserver.pic}}\" alt=\"\" [ngClass]=\"_manageserver.ActiveInd == '0' ? 'blur' : ''\" />\r\n                    <span class=\"imm fontStyle\" [ngClass]=\"_manageserver.ActiveInd == '0' ? 'blur' : ''\">\r\n                        {{_manageserver.FullName}}\r\n                    </span>\r\n                    <div *ngFor=\"let obj of _manageserver.seatNumbers;let i=index;\" ><h4 *ngIf=\"_manageserver.ActiveInd == 1\" class=\"h4\">{{obj.StartTableNumber}}-{{obj.EndTableNumber}}</h4></div>\r\n                </a>\r\n            </li>\r\n        </ul> \r\n    </div>\r\n    <div class=\"col-md-2 animated fadeInRight\" id=\"profileSection\" *ngIf=\"isShow\">\r\n        <i aria-hidden=\"true\" id=\"close\" (click)=\"closeProfile()\" class=\"bladeIcon icon-close closeIconStyle\"></i>\r\n        <div class=\"slidetop\">\r\n            <img alt=\"\" src=\"data:image/JPEG;base64,{{currentRowInfo.pic}}\" />\r\n            <h5 class=\"name\">{{currentRowInfo.FullName}}</h5>\r\n        </div>\r\n\r\n        <div class=\"slideformmain\">\r\n            <div class=\"slidetoggle\">\r\n                <label>ClockIn / ClockOff</label>\r\n                <label class=\"switch\">\r\n                    <input type=\"checkbox\" [(ngModel)]=\"currentRowInfo.checked\" data-toggle=\"modal\" data-target=\"#serverCheckInOutModal\" (ngModelChange)=\"updateServerStatus(currentRowInfo.checked, index)\">\r\n                    <span class=\"slider round\"></span>\r\n                </label>\r\n            </div>\r\n            <div *ngFor=\"let item of arr; let index = index\">\r\n                <div class=\"slideform\">\r\n                    <label>{{item.labelName1}} </label> <input name=\"item.name\" type=\"text\" [(ngModel)]=\"item.StartTableNumber\" (ngModelChange)=\"updateStartTableNumber(item.StartTableNumber, index)\" id=\"starttabnum\" #starttabnum=\"ngModel\" pattern=\"^[0-9]{1,}$\" required minlength=\"1\" />\r\n                    <label *ngIf=\"starttabnum.invalid && (starttabnum.dirty || starttabnum.touched)\" [ngStyle]=\"{'color': 'red'}\">\r\n                        <label *ngIf=\"starttabnum.errors.required\">\r\n                            starttablenumber is required.\r\n                        </label>\r\n                        <label *ngIf=\"starttabnum.errors.pattern\">\r\n                            starttablenumber should be number only\r\n                        </label>\r\n                    </label>\r\n                </div>\r\n                <div class=\"slideform\">\r\n                    <label>{{item.labelName2}} </label> <input name=\"item.name\" type=\"text\" [(ngModel)]=\"item.EndTableNumber\" (ngModelChange)=\"updateEndTableNumber(item.EndTableNumber, index)\" id=\"endtabnum\" #endtabnum=\"ngModel\" pattern=\"^[0-9]{1,}$\" required minlength=\"1\" />\r\n                    <label *ngIf=\"endtabnum.invalid && (endtabnum.dirty || endtabnum.touched)\" [ngStyle]=\"{'color': 'red'}\">\r\n                        <label *ngIf=\"endtabnum.errors.required\">\r\n                            endtablenumber is required.\r\n                        </label>\r\n                        <label *ngIf=\"endtabnum.errors.pattern\">\r\n                            endtablenumber should be number only\r\n                        </label>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <label *ngIf=\"flag\" [ngStyle]=\"{'color': 'red'}\">\r\n                {{message}}\r\n            </label>\r\n            <div class=\"slideform\"><a (click)=\"addMore()\">+ Add More </a>  </div>\r\n        </div>\r\n        <div class=\"slidetoggle\"><label>Make Changes Permanent?</label> <input type=\"checkbox\" />  </div>\r\n    </div>\r\n</div>\r\n\r\n<!--Server Check In/Out Modal-->\r\n<div id=\"serverCheckInOutModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content modalBgColoor fontColor\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" (click)=\"dismiss()\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">Clock <span></span> Out?</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Would you like to assign this section to another server?</p>\r\n                <div>\r\n                    <label style=\"color:#ececec\">Main Dining </label><br />\r\n                    <select  [(ngModel)]=\"trufluid\" (ngModelChange)=\"toNumber()\">\r\n                        <option *ngFor=\"let _manageserver of manageserverdetails\" [ngValue]=\"_manageserver.TruflUserID\">{{_manageserver.FullName}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"primary-btn pull-right\" (click)=\"modalSubmit()\" data-dismiss=\"modal\">SUBMIT</button>\r\n                <button type=\"button\" class=\"secondary-btn pull-right\" (click)=\"modalClose()\" data-dismiss=\"modal\">CLOSE</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/defaultsettings/manageservers/manage-servers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageServersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manageservers_manage_servers_service__ = __webpack_require__("../../../../../src/app/defaultsettings/manageservers/manage-servers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_login_service__ = __webpack_require__("../../../../../src/app/shared/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageServersComponent = (function () {
    function ManageServersComponent(router, _managerservice, _loginservice) {
        this.router = router;
        this._managerservice = _managerservice;
        this._loginservice = _loginservice;
        this.isShow = false;
        this.visible = false;
        this.isChecked = false;
        this.result = [];
        this.arr = [];
        this.globalCount = 0;
        this.listOfRanges = [];
        this.savedList = [];
        this.restarauntid = _loginservice.getRestaurantId();
        this.getmanagerServer(this.restarauntid);
    }
    ManageServersComponent.prototype.getmanagerServer = function (restarauntid) {
        var _this = this;
        var that = this;
        this._managerservice.getManageServersDetails(restarauntid).subscribe(function (res) {
            _this.manageserverdetails = res._Data.ManageServer;
            _this.manageserversrangedetails = res._Data.TableRange;
            console.log(_this.manageserverdetails, "this.manageserverdetails");
            _this.result = [];
            _this.savedList = [];
            if (_this.manageserverdetails) {
                //adding seatnumbers functionality
                _this.manageserverdetails.map(function (obj) {
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
                        }
                        else {
                            that.result.push(that.getSeatedInfoObj(obj));
                        }
                    }
                    else {
                        that.result.push(that.getSeatedInfoObj(obj));
                    }
                });
            }
            _this.result.map(function (obj) {
                obj.sectionsCount = obj.seatNumbers.length;
                obj.seatNumbers.map(function (seatObj) {
                    that.globalCount++;
                    seatObj['range_' + that.globalCount] = seatObj.StartTableNumber + '-' + seatObj.EndTableNumber;
                    seatObj.HostessID = obj.TruflUserID;
                    seatObj.RestaurantID = obj.RestaurantID;
                    that.listOfRanges.push((_a = {},
                        _a['range_' + that.globalCount] = seatObj['range_' + that.globalCount],
                        _a));
                    if (seatObj.StartTableNumber !== '' && seatObj.EndTableNumber !== '') {
                        that.savedList.push(seatObj);
                    }
                    var _a;
                });
            });
            console.log(_this.result, "this.resultin mangeservres");
        });
    };
    ManageServersComponent.prototype.getSeatedInfoObj = function (obj) {
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
    };
    ManageServersComponent.prototype.showProfile = function (profile, seatArr, index) {
        var _that = this;
        this.currentRowInfo = profile;
        this.trufluid = this.currentRowInfo.TruflUserID;
        console.log(this.currentRowInfo.TruflUserID, "this.currentRowInfo.TruflUserID");
        this.currentRowInfo.checked = false;
        if (this.currentRowInfo.ActiveInd == 1) {
            this.currentRowInfo.checked = true;
        }
        this.arr = seatArr;
        this.currentRowInfo.arr = this.arr;
        this.isShow = true;
        this.isChecked = false;
        console.log(this.arr, " this.arr");
    };
    ManageServersComponent.prototype.addMore = function () {
        console.log(this.currentRowInfo);
        this.globalCount++;
        this.arr.push((_a = {
                name: 'name',
                type: 'text',
                StartTableNumber: '',
                EndTableNumber: '',
                labelName1: 'Section Start Number',
                labelName2: 'Section End Number'
            },
            _a['range_' + this.globalCount] = '',
            _a));
        var obj = {
            RestaurantID: this.currentRowInfo.RestaurantID,
            HostessID: this.currentRowInfo.TruflUserID,
            StartTableNumber: this.arr[this.arr.length - 1].StartTableNumber,
            EndTableNumber: this.arr[this.arr.length - 1].EndTableNumber
        };
        console.log(this.savedList);
        this.listOfRanges.push((_b = {},
            _b['range_' + this.globalCount] = '',
            _b));
        console.log(this.arr, " this.arr");
        var _a, _b;
    };
    ManageServersComponent.prototype.checkIsObjExists = function (arr, obj) {
        return arr.findIndex(function (_obj) {
            return ((_obj.HostessID === obj.HostessID) && (_obj.StartTableNumber === obj.StartTableNumber) && (_obj.EndTableNumber === obj.EndTableNumber));
        });
    };
    ManageServersComponent.prototype.checkInListOfRanges = function (key) {
        return this.listOfRanges.findIndex(function (range, index) {
            return Object.keys(range)[0] == key;
        });
    };
    ManageServersComponent.prototype.CheckRange = function (findRangeArr) {
        var rangeFunc = function (start, end) { return Array.from({ length: (end - start) + 1 }, function (v, k) { return k + start; }); };
        var rangeArray = findRangeArr.map(function (range) {
            var value = range[Object.keys(range)[0]];
            return rangeFunc(+value.split('-')[0], +value.split('-')[1]);
        });
        console.log(rangeArray, "rangeArray");
        return rangeArray;
    };
    ManageServersComponent.prototype.toNumber = function () {
        this.trufluid = +this.trufluid;
        this.newuserId = this.trufluid;
    };
    ManageServersComponent.prototype.updateStartEndLogic = function (values, index, isStartOrEnd) {
        var arrayrange;
        var _that = this;
        this.currentRowInfo.ActiveInd = 0;
        this.currentRowInfo.checked = false;
        this.result.map(function (value) {
            value.seatNumbers.map(function (seatnumbers) {
                if (seatnumbers.StartTableNumber !== '' && seatnumbers.EndTableNumber !== '' && values !== "") {
                    value.ActiveInd = 1;
                    _that.currentRowInfo.ActiveInd = 1;
                    _that.currentRowInfo.checked = true;
                }
            });
        });
        var obj = this.currentRowInfo.arr[index];
        if (obj.StartTableNumber == '' && obj.EndTableNumber == '') {
            this.currentRowInfo.ActiveInd = 0;
            this.currentRowInfo.checked = false;
            this.arr.splice(index, 1);
            if (this.arr != null && this.arr.length != 0) {
                this.currentRowInfo.ActiveInd = 1;
                this.currentRowInfo.checked = true;
            }
        }
        obj.HostessID = this.currentRowInfo.TruflUserID;
        obj.RestaurantID = this.currentRowInfo.RestaurantID;
        var tempArr = Object.keys(obj).filter(function (str) {
            if (str.includes('range')) {
                return str;
            }
        });
        if (tempArr.length) {
            var findedValueIndex = this.checkInListOfRanges(tempArr[0]);
            if (findedValueIndex !== -1) {
                var keyValue = this.listOfRanges[findedValueIndex][tempArr[0]];
                if (keyValue == '') {
                    this.listOfRanges[findedValueIndex] = (_a = {},
                        _a[tempArr[0]] = isStartOrEnd ? (values + '-') : ('-' + values),
                        _a);
                }
                else {
                    if (keyValue.split('-').length === 2) {
                        this.listOfRanges[findedValueIndex] = (_b = {},
                            _b[tempArr[0]] = isStartOrEnd ? (values + '-' + keyValue.split('-')[1]) : (keyValue.split('-')[0] + '-' + values),
                            _b);
                    }
                }
            }
        }
        if (this.checkIsObjExists(this.savedList, obj) === -1) {
            this.savedList.push(obj);
        }
        // finding range 
        var findRangeArr = this.listOfRanges.filter(function (range) {
            return Object.keys(range)[0] !== tempArr[0];
        });
        arrayrange = this.CheckRange(findRangeArr);
        console.log(arrayrange, "arrayrangehuoyioupupu");
        var that = this;
        this.flag = false;
        arrayrange.map(function (rangeArr) {
            if (obj.StartTableNumber !== '' || obj.EndTableNumber !== '') {
                if (+(obj.StartTableNumber) !== 0 && rangeArr.indexOf(+(obj.StartTableNumber)) !== -1 && that.savedList.length > 1) {
                    that.flag = true;
                    that.message = "Table already allocated";
                }
                else if (+(obj.EndTableNumber) !== 0 && rangeArr.indexOf(+(obj.EndTableNumber)) !== -1 && that.savedList.length > 1) {
                    that.flag = true;
                    that.message = "Table already allocated";
                }
                else if (+(obj.StartTableNumber) !== 0 && +(obj.EndTableNumber) !== 0 && (+obj.StartTableNumber >= +obj.EndTableNumber)) {
                    that.flag = true;
                    that.message = "StartTableNumber is Greaterthan EndTableNumber";
                }
                else if ((+(obj.StartTableNumber) < +(that.manageserversrangedetails[0].FirstTableNumber)) || (+(obj.EndTableNumber) > +(that.manageserversrangedetails[0].LastTableNumber))) {
                    that.flag = true;
                    that.message = "Exceeded TableRange";
                }
            }
        });
        var _a, _b;
    };
    ManageServersComponent.prototype.updateServerStatus = function (value, index) {
        console.log(value, "valuelkl;k;");
        if (value == false) {
            this.manageserverdetails.ActiveInd = 0;
        }
    };
    ManageServersComponent.prototype.updateStartTableNumber = function (value, index) {
        console.log(value, "valuejkljkljlj");
        this.updateStartEndLogic(value, index, true);
    };
    ManageServersComponent.prototype.updateEndTableNumber = function (value, index) {
        this.updateStartEndLogic(value, index, false);
    };
    ManageServersComponent.prototype.closeProfile = function () {
        this.isShow = false;
    };
    ManageServersComponent.prototype.cancel = function () {
        this.router.navigateByUrl('/defaultSettings');
    };
    ManageServersComponent.prototype.saveclose = function () {
        var _this = this;
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
            });
        });
        console.log(this.savedList);
        this._managerservice.postManageserverDetails(this.savedList).subscribe(function (res) {
            _this.router.navigateByUrl('/defaultSettings');
        });
    };
    ManageServersComponent.prototype.modalSubmit = function (value) {
        var _this = this;
        var that = this;
        this._managerservice.postManageserverModalDetails(this.restarauntid, this.currentRowInfo.TruflUserID, this.newuserId).subscribe(function (res) {
            console.log(_this.restarauntid, _this.currentRowInfo.TruflUserID, _this.newuserId, "this.restarauntid, this.currentRowInfo.TruflUserID, this.newuserId");
            _this.currentRowInfo.checked = true;
            _this.isShow = false;
            _this.getmanagerServer(_this.restarauntid);
        });
    };
    ManageServersComponent.prototype.modalClose = function () {
        this.trufluid = this.currentRowInfo.TruflUserID;
        this.currentRowInfo.checked = true;
    };
    ManageServersComponent.prototype.dismiss = function () {
        this.trufluid = this.currentRowInfo.TruflUserID;
        this.currentRowInfo.checked = true;
    };
    ManageServersComponent.prototype.selectserver = function (value, index) {
        this.newuserId = value;
    };
    return ManageServersComponent;
}());
ManageServersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'manageServers',
        template: __webpack_require__("../../../../../src/app/defaultsettings/manageservers/manage-servers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/defaultsettings/manageservers/manage-servers.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__manageservers_manage_servers_service__["a" /* ManageServersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__manageservers_manage_servers_service__["a" /* ManageServersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_login_service__["a" /* LoginService */]) === "function" && _c || Object])
], ManageServersComponent);

var _a, _b, _c;
//# sourceMappingURL=manage-servers.component.js.map

/***/ }),

/***/ "../../../../../src/app/defaultsettings/manageservers/manage-servers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageServersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__ = __webpack_require__("../../../../../src/app/shared/appsettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageServersService = (function () {
    function ManageServersService(http) {
        this.http = http;
    }
    ManageServersService.prototype.getManageServersDetails = function (restarauntid) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + 'WaitListUser/GetRestaurantStaffTables/' + restarauntid).map(function (res) { return res.json(); });
    };
    ManageServersService.prototype.postManageserverDetails = function (seatedinfo) {
        console.log(seatedinfo, "stahh;laksjl;od;o");
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + 'WaitListUser/SaveManageServer', seatedinfo).map(function (res) { return res.json(); });
    };
    ManageServersService.prototype.postManageserverModalDetails = function (restarauntid, currentuserid, newuserid) {
        console.log(restarauntid, currentuserid, newuserid, "sdftgterdterterter from service");
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + 'WaitListUser/UpdateServerClockOut/' + restarauntid + '/' + currentuserid + '/' + newuserid, '').map(function (res) { return res.json(); });
    };
    return ManageServersService;
}());
ManageServersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ManageServersService);

var _a;
//# sourceMappingURL=manage-servers.service.js.map

/***/ }),

/***/ "../../../../../src/app/defaultsettings/othersettings/other-settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/defaultsettings/othersettings/other-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"customheader\">\r\n\r\n    <div class=\"customheaderleft\">\r\n        <h2>Other Settings</h2>\r\n    </div>\r\n    <div class=\"customheaderright\">\r\n        <a class=\"secondary-btn\" (click)=\"cancel()\">\r\n            Cancel\r\n        </a>\r\n        <a class=\"primary-btn\" (click)=\"savenext()\">\r\n            Save And next\r\n        </a>\r\n    </div>\r\n\r\n</div>\r\n<div class=\"col-md-12 newguestmain\" *ngFor=\"let _othersettingsdetails of  getothersettingsinfo;\">\r\n    <h3> Dining Experience</h3>\r\n\r\n    <div class=\"col-md-6\">\r\n\r\n        <div class=\"input input--haruki\">\r\n            <input class=\"input__field input__field--haruki\" type=\"text\" name=\"dining\"  id=\"input-1\" [(ngModel)]=\"_othersettingsdetails.DiningTime\"  #dining=\"ngModel\" pattern=\"[0-9]{2,}\" required minlength=\"2\">\r\n            <label class=\"input__label input__label--haruki\" for=\"input-1\">\r\n                <span class=\"input__label-content input__label-content--haruki error-input\">Length of average Dinner Service(in minutes)</span>\r\n            </label>\r\n            <label *ngIf=\"dining.invalid && (dining.dirty || dining.touched)\" [ngStyle]=\"{'color': 'red'}\" >\r\n\r\n                <label *ngIf=\"dining.errors.required\">\r\n                    dining time is required.\r\n                </label>\r\n                <label *ngIf=\"dining.errors.minlength\">\r\n                    dining time must be at least 2 characters long.{{dining.errors.minlength}}\r\n                </label>\r\n                <label *ngIf=\"dining.errors.pattern\">\r\n                    dining experience in minutes only\r\n                </label>\r\n\r\n            </label>\r\n            <span style=\"float:right;\" *ngIf=\"dining.invalid &&(dining.dirty || dining.touched)\">\r\n                <img src=\"../../../../../wwwroot/images/error.jpg\">\r\n            </span>\r\n        </div>\r\n\r\n\r\n    </div>\r\n \r\n    <br style=\"clear:both;\" />\r\n    <h3>Waitlist & Get Seated Now</h3>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"input input--haruki\">\r\n            <input class=\"input__field input__field--haruki\" type=\"text\" name=\"waitlist\" [(ngModel)]=\"_othersettingsdetails.Geofence\" id=\"waitlist\" #waitlist=\"ngModel\" pattern=\"^[0-9]{1,}$\" required minlength=\"1\">\r\n            <label class=\"input__label input__label--haruki\" for=\"input-1\">\r\n                <span class=\"input__label-content input__label-content--haruki error-input\">Geofence(in miles)</span>\r\n            </label>\r\n            <label *ngIf=\"waitlist.invalid && (waitlist.dirty || waitlist.touched)\" [ngStyle]=\"{'color': 'red'}\">\r\n\r\n                <label *ngIf=\"waitlist.errors.required\">\r\n                    Geofence is required.\r\n                </label>\r\n\r\n                <label *ngIf=\"waitlist.errors.pattern\">\r\n                    Geofence should be number only\r\n                </label>\r\n\r\n              \r\n            </label>\r\n\r\n            <span style=\"float:right;\" *ngIf=\"waitlist.invalid &&(waitlist.dirty || waitlist.touched)\">\r\n                <img src=\"../../../../../wwwroot/images/error.jpg\">\r\n            </span>\r\n        </div>\r\n       \r\n        <div class=\"input input--haruki\">\r\n            <input class=\"input__field input__field--haruki\" type=\"text\" name=\"capacity\" [(ngModel)]=\"_othersettingsdetails.TableNowCapacity\" id=\"capacity\" #capacity=\"ngModel\" pattern=\"^[0-9]{1,}$\" required minlength=\"1\">\r\n\r\n            <label class=\"input__label input__label--haruki\" for=\"input-1\">\r\n                <span class=\"input__label-content input__label-content--haruki error-input\">Default Get A Table Now Capacity[2,4,5,6,8,or10]</span>\r\n            </label>\r\n\r\n            <label *ngIf=\"capacity.invalid && (capacity.dirty || capacity.touched)\" [ngStyle]=\"{'color': 'red'}\">\r\n\r\n                <label *ngIf=\"capacity.errors.required\">\r\n                    capacity is required.\r\n                </label>\r\n\r\n                <label *ngIf=\"capacity.errors.pattern\">\r\n                    capacity should be number only\r\n                </label>\r\n\r\n             \r\n            </label>\r\n            <span style=\"float:right;\" *ngIf=\"capacity.invalid &&(capacity.dirty || capacity.touched)\">\r\n                <img src=\"../../../../../wwwroot/images/error.jpg\">\r\n            </span>\r\n           \r\n        </div>\r\n        <div class=\"input input--haruki\">\r\n            <input class=\"input__field input__field--haruki\" type=\"text\" name=\"price\" [(ngModel)]=\"_othersettingsdetails.DefaultTableNowPrice\" id=\"price\" #price=\"ngModel\" pattern=\"^[0-9]{2,}$\" required minlength=\"2\">\r\n\r\n            <label class=\"input__label input__label--haruki\" for=\"input-1\">\r\n                <span class=\"input__label-content input__label-content--haruki error-input\">Default(suggested) Get A Table Now Price per Guest(in USD)</span>\r\n            </label>\r\n            <label *ngIf=\"price.invalid && (price.dirty || price.touched)\" [ngStyle]=\"{'color': 'red'}\">\r\n\r\n                <label *ngIf=\"price.errors.required\">\r\n                    price is required.\r\n                </label>\r\n\r\n                <label *ngIf=\"price.errors.pattern\">\r\n                    price should be number only\r\n                </label>\r\n\r\n               \r\n            </label>\r\n\r\n            <span style=\"float:right;\" *ngIf=\"price.invalid &&(price.dirty || price.touched)\">\r\n                <img src=\"../../../../../wwwroot/images/error.jpg\">\r\n            </span>\r\n           \r\n        </div>\r\n        <div class=\"input input--haruki\">\r\n            <input class=\"input__field input__field--haruki\" type=\"text\" name=\"minimumtime\" [(ngModel)]=\"_othersettingsdetails.MinimumTableNowPrice\" id=\"minimumtime\" #minimumtime=\"ngModel\" pattern=\"^[0-9]{1,}$\" required minlength=\"1\">\r\n            <label class=\"input__label input__label--haruki\" for=\"input-1\">\r\n                <span class=\"input__label-content input__label-content--haruki error-input\">Minimum Get A Table Now Price per Guest(in USD)</span>\r\n            </label>\r\n\r\n            <label *ngIf=\"minimumtime.invalid && (minimumtime.dirty || minimumtime.touched)\" [ngStyle]=\"{'color': 'red'}\">\r\n\r\n                <label *ngIf=\"minimumtime.errors.required\">\r\n                    minimum price is required.\r\n                </label>\r\n\r\n                <label *ngIf=\"minimumtime.errors.pattern\">\r\n                    minimum price should be number only\r\n                </label>\r\n\r\n            </label>\r\n\r\n            <span style=\"float:right;\" *ngIf=\"minimumtime.invalid &&(minimumtime.dirty || minimumtime.touched)\">\r\n                <img src=\"../../../../../wwwroot/images/error.jpg\">\r\n            </span>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/defaultsettings/othersettings/other-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__othersettings_other_settings_service__ = __webpack_require__("../../../../../src/app/defaultsettings/othersettings/other-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_login_service__ = __webpack_require__("../../../../../src/app/shared/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OtherSettingsComponent = (function () {
    function OtherSettingsComponent(_otherservice, router, _loginservice) {
        this._otherservice = _otherservice;
        this.router = router;
        this._loginservice = _loginservice;
        this.classie = null;
        this.othersettinginfo = {};
        this.restarauntid = _loginservice.getRestaurantId();
        this.getOtherSelectionsDetails(this.restarauntid);
    }
    OtherSettingsComponent.prototype.ngOnInit = function () {
    };
    OtherSettingsComponent.prototype.getOtherSelections = function () {
        var _this = this;
        this.getothersettingsinfo[0].RestaurantID = +(this.restarauntid);
        console.log(this.getothersettingsinfo[0], "this.getothersettingsinfo[0]");
        var tempObj = {
            RestaurantID: +(this.getothersettingsinfo[0].RestaurantID),
            DiningTime: +(this.getothersettingsinfo[0].DiningTime),
            Geofence: +(this.getothersettingsinfo[0].Geofence),
            TableNowCapacity: +(this.getothersettingsinfo[0].TableNowCapacity),
            DefaultTableNowPrice: +(this.getothersettingsinfo[0].DefaultTableNowPrice),
            MinimumTableNowPrice: +(this.getothersettingsinfo[0].MinimumTableNowPrice),
        };
        this._otherservice.postOtherSettingsDetails(tempObj).subscribe(function (res) {
            _this.othersettingsdetails = res._Data;
            console.log(_this.othersettingsdetails, "this.othersettingsdetailspostdetails");
        });
    };
    OtherSettingsComponent.prototype.getOtherSelectionsDetails = function (restarauntid) {
        var _this = this;
        var that = this;
        this._otherservice.getOtherSettingsDetails(restarauntid).subscribe(function (res) {
            _this.getothersettingsinfo = res._Data;
            console.log(_this.getothersettingsinfo, "this.getothersettingsinfo");
            _this.getothersettingsinfo.map(function (item) {
                var otherinfo = item;
                that._otherservice.setDiningExperience(otherinfo.DiningTime);
                that._otherservice.setDefaultgetaTableprice(otherinfo.DefaultTableNowPrice);
            });
        });
        this.othersettingsdefauktprice = this._otherservice.getDefaultgetaTableprice();
        console.log(this.othersettingsdefauktprice, "this.othersettingsdefauktprice");
    };
    OtherSettingsComponent.prototype.cancel = function () {
        this.router.navigateByUrl('/defaultSettings');
    };
    OtherSettingsComponent.prototype.savenext = function () {
        this.getOtherSelections();
        this.router.navigateByUrl('/defaultSettings');
    };
    return OtherSettingsComponent;
}());
OtherSettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'otherSettings',
        template: __webpack_require__("../../../../../src/app/defaultsettings/othersettings/other-settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/defaultsettings/othersettings/other-settings.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__othersettings_other_settings_service__["a" /* OtherSettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__othersettings_other_settings_service__["a" /* OtherSettingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_login_service__["a" /* LoginService */]) === "function" && _c || Object])
], OtherSettingsComponent);

var _a, _b, _c;
//# sourceMappingURL=other-settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/defaultsettings/othersettings/other-settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherSettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__ = __webpack_require__("../../../../../src/app/shared/appsettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OtherSettingsService = (function () {
    function OtherSettingsService(http) {
        this.http = http;
    }
    OtherSettingsService.prototype.setDiningExperience = function (value) {
        this.diningexperience = value;
        localStorage.setItem('diningexperience', value);
    };
    OtherSettingsService.prototype.getDiningExperience = function () {
        this.diningexperience = localStorage.getItem('diningexperience');
        return this.diningexperience;
    };
    OtherSettingsService.prototype.setDefaultgetaTableprice = function (value) {
        this.defaultgettableprice = value;
        localStorage.setItem('defaultgettableprice', value);
    };
    OtherSettingsService.prototype.getDefaultgetaTableprice = function () {
        this.defaultgettableprice = localStorage.getItem('defaultgettableprice');
        console.log(this.defaultgettableprice, "this.defaultgettableprice");
        return this.defaultgettableprice;
    };
    OtherSettingsService.prototype.getOtherSettingsDetails = function (restarauntid) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + 'Admin/GetRestaurantSettings/' + restarauntid).map(function (res) { return res.json(); });
    };
    OtherSettingsService.prototype.postOtherSettingsDetails = function (othersettingsinfo) {
        console.log(othersettingsinfo, "other settings info from service");
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + 'Admin/SaveRestaurantSettings', othersettingsinfo).map(function (res) { return res.json(); });
    };
    return OtherSettingsService;
}());
OtherSettingsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], OtherSettingsService);

var _a;
//# sourceMappingURL=other-settings.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.loginbg {\r\n    background: url(" + __webpack_require__("../../../../../src/assets/images/loginbg.jpg") + ") no-repeat center center;\r\n    background-size: cover;\r\n    display: table;\r\n    width: 100%;\r\n    min-height: 100%;\r\n}\r\n.errormsg {\r\n    color: red;\r\n}\r\na {\r\n    cursor: pointer;\r\n    color: #337ab7;\r\n    text-decoration: none;\r\n}\r\nbutton{\r\n    cursor:pointer;\r\n}\r\n.form-group input[type=\"text\"] {\r\n    width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loginbg\">\r\n    <div class=\"col-md-3 logincontiner\">\r\n        <div class=\"loginmain\">\r\n            <div class=\"login-top\">\r\n                <img alt=\"\" src=\"assets/images/logo.png\" />\r\n\r\n                <h1 class=\"text-center\">Resturant App </h1>\r\n            </div>\r\n            <!-- Login Form-->\r\n           <form class=\"logininner\" #loginForm=\"ngForm\" (ngSubmit)=\"loginForm.form.valid && signIn()\" *ngIf=\"showlogin\">\r\n                <div id=\"login\">\r\n                    <div class=\"logcheck\">\r\n                        <span class=\"pull-left\">\r\n                            <input type=\"radio\" checked name=\"userType\" value=\"RA\" [(ngModel)]=\"user.usertype\"> <label> Restaurant Admin</label>\r\n                        </span> <span class=\"pull-right\">\r\n                            <input type=\"radio\" name=\"userType\" value=\"TA\" [(ngModel)]=\"user.usertype\"> <label>Trufl Admin</label>\r\n                        </span>\r\n\r\n                    </div>\r\n                    <div class=\"form-group ffw\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"userName\" name=\"userName\" [(ngModel)]=\"user.emailid\" required placeholder=\"Enter your username or email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" #username=\"ngModel\" />\r\n                        <div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"alert alert-danger\">\r\n                            <div *ngIf=\"username.errors.required\">UserName is required.  </div>\r\n                            <div *ngIf=\"username.errors.pattern\">EmailId format should be <small><b>joe@abc.com</b></small></div>\r\n                        </div>\r\n                        <span class=\"help-block\"></span>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\" required placeholder=\"Enter password\" #password=\"ngModel\" />\r\n                        <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\r\n                            <div *ngIf=\"password.errors.required\">Password is required.  </div>\r\n                        </div>\r\n                        <span class=\"help-block\"></span>\r\n                    </div>\r\n\r\n                    <div class=\"errormsg\" *ngIf=\"!loginForm.form.valid\">\r\n\r\n                        <span class=\"help-block\"></span>\r\n                    </div>\r\n\r\n                    <div class=\"fp text-right\">\r\n                        <a (click)=\"forgotPasswordShow()\">\r\n                            forgot password ?\r\n                        </a>\r\n\r\n\r\n                    </div>\r\n                    <div class=\"login-btn\">\r\n                        <button type=\"reset\" class=\"secondary-btn lgbtn\">Clear</button>\r\n                        <button type=\"submit\" class=\"primary-btn lgbtn pull-right\" >Sign In</button>\r\n                    </div>\r\n\r\n                    <!--<div class=\"createaccount\">\r\n                        <h2>\r\n                            No account ?\r\n                            <a  href=\"javascript:void(0)\" (click)=\"register()\">Create One </a>\r\n                        </h2>\r\n                    </div>-->\r\n\r\n                </div>\r\n               </form>\r\n\r\n            <!-- ForgotPassword Form-->\r\n            <form class=\"logininner\" *ngIf=\"showForgotPassword\" #forgotForm=\"ngForm\">\r\n\r\n                <div id=\"ForgotPassword\">\r\n\r\n                    <h3>Forgot Password </h3>\r\n\r\n                    <div class=\"form-group ffw\">\r\n\r\n                        <input type=\"text\" class=\"form-control\" id=\"userName\" name=\"userName\" [(ngModel)]=\"email\" required placeholder=\"Enter your username or email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" #userName=\"ngModel\" />\r\n                        <div [hidden]=\"userName.valid || userName.pristine\" class=\"alert alert-danger\">\r\n                            <div [hidden]=\"!userName.hasError('required')\">Email is required</div>\r\n                            <div [hidden]=\"!userName.hasError('pattern')\">Email format should be <small><b>joe@abc.com</b></small></div>\r\n                        </div>\r\n                        <span class=\"help-block\"></span>\r\n                    </div>\r\n\r\n                    <div class=\"login-btn\">\r\n                        <button type=\"reset\" class=\"secondary-btn lgbtn\">Clear</button>\r\n                        <button type=\"submit\" (click)=\"forgotPasswordImpl()\" [disabled]=\"!forgotForm.form.valid\" class=\"primary-btn pull-right lgbtn\">submit</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n            <form class=\"logininner\" *ngIf=\"showResetPassword\">\r\n                <div id=\"ResetPassword\">\r\n\r\n                    <h3 style=\"color:black\"> Check your email</h3>  <p style=\"color:black\">\r\n                        You will receive an email containing instructions on how to create a new password.\r\n                    </p>\r\n                    <div class=\"fp text-right\">\r\n                        <a (click)=\" showOnlyLogin()\">\r\n                            login?\r\n                        </a>\r\n                        <a (click) =\" showLogin()\">\r\n                            ResetPassword?\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n            <!-- ResetPassword Form-->\r\n            <form class=\"logininner\" #resetForm=\"ngForm\" *ngIf=\"showReset\" (ngSubmit)=\"resetPasswordImpl()\">\r\n\r\n                <div id=\"ResetPassword\">\r\n\r\n                    <h3 style=\"color:black\">Reset Password </h3>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"mail\" name=\"usermail\" [(ngModel)]=\"reset.UserEmail\" required placeholder=\"Enter mail \" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" #usermail=\"ngModel\" />\r\n                        <div *ngIf=\"usermail.invalid && (usermail.dirty || usermail.touched)\" class=\"alert alert-danger\">\r\n                            <div *ngIf=\"usermail.errors.required\">Mail is required.  </div>\r\n                            <div *ngIf=\"usermail.errors.pattern\">usermail format should be <small><b>joe@abc.com</b></small></div>\r\n                        </div>\r\n                        <span class=\"help-block\"></span>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"password\" class=\"form-control\" id=\"mailPassword\" name=\"mailPassword\" [(ngModel)]=\"reset.LoginPassword\" required placeholder=\"Enter current password \" #mailPassword=\"ngModel\" />\r\n                        <div *ngIf=\"mailPassword.invalid && (mailPassword.dirty || mailPassword.touched)\" class=\"alert alert-danger\">\r\n                            <div *ngIf=\"mailPassword.errors.required\">Password is required.  </div>\r\n                        </div>\r\n                        <span class=\"help-block\"></span>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input type=\"password\" class=\"form-control\" id=\"newPassword\" name=\"newPassword\" [(ngModel)]=\"reset.NewLoginPassword\" required placeholder=\"Enter new password\" #newPassword=\"ngModel\" />\r\n\r\n                        <div *ngIf=\"newPassword.invalid && (newPassword.dirty || newPassword.touched)\" class=\"alert alert-danger\">\r\n                            <div *ngIf=\"newPassword.errors.required\">Password is required.  </div>\r\n                        </div>\r\n                        <span class=\"help-block\"></span>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"form-group\">\r\n                        <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" validateEqual=\"newPassword\" name=\"confirmPassword\"  [(ngModel)]=\"reset.confirmPassword\" required placeholder=\"Re-enter password\" #confirmPassword=\"ngModel\"/>\r\n\r\n                        <div *ngIf=\"confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched) \" class=\"alert alert-danger\">\r\n                            Passwords did not match\r\n                        </div>\r\n                        <span class=\"help-block\"></span>\r\n                    </div>\r\n\r\n                    <div class=\"login-btn\">\r\n                        <button type=\"reset\" class=\"secondary-btn lgbtn\">Clear</button>\r\n                        <button type=\"submit\"  class=\"primary-btn pull-right lgbtn\" (click)=\"resetPasswordImpl()\">Reset</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n        </div>\r\n\r\n        <div class=\"terms\" *ngIf=\"showlogin\">\r\n            By logging in, you agree to Trufl's Terms of Service, Cookie Policy, Privacy Policy and Content Policies\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_login_service__ = __webpack_require__("../../../../../src/app/shared/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("../../../../../src/app/login/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Reset } from './reset';


var LoginComponent = (function () {
    function LoginComponent(loginService, router, _toastr, vRef, route) {
        this.loginService = loginService;
        this.router = router;
        this._toastr = _toastr;
        this.route = route;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */]();
        this.showForgotPassword = false;
        this.showResetPassword = false;
        this.showlogin = true;
        this.reset = {};
        this.showReset = false;
        this._toastr.setRootViewContainerRef(vRef);
        //called first time before the ngOnInit()
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.register = function () {
        this.router.navigateByUrl('/register');
    };
    //login
    LoginComponent.prototype.signIn = function () {
        var _this = this;
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.loginService.setUserType(this.user.usertype);
        if (this.user.usertype == null) {
            window.setTimeout(function () {
                _this._toastr.error("Please Select UserType");
            }, 500);
        }
        this.loginService.setUserType(this.user.usertype);
        this.loginService.loginAuthentication(this.user).subscribe(function (res) {
            _this.errorcode = res._ErrorCode;
            _this.statusmessage = res._StatusMessage;
            _this.errormessage = "an error occured";
            _this.loginService.setErrorMessage(_this.errormessage);
            console.log(_this.errorcode, _this.statusmessage, "this.errorcode, this.statusmessage, ");
            if (_this.errorcode === "0") {
                res._Data.map(function (item) {
                    _this.loginDetails = item;
                    _this.loginService.setTrufluserID(_this.loginDetails.TruflUSERID);
                    _this.loginService.setRestaurantId(_this.loginDetails.RestaurantID);
                    _this.loginService.setRestaurantName(_this.loginDetails.RestaurantName);
                    _this.loginService.setUserName(_this.loginDetails.FullName);
                    console.log(_this.loginDetails, "this.loginDetails");
                });
            }
            if (_this.loginDetails) {
                if (_this.loginDetails.TruflMemberType === "RA ") {
                    if (_this.loginDetails.ForgetPasswordStatus) {
                        _this.ResetPasswordShow();
                    }
                    else if (!_this.loginDetails.ForgetPasswordStatus && localStorage.getItem('isDashboard') === 'false') {
                        _this.router.navigateByUrl('/waitlist');
                        localStorage.removeItem('isDashboard');
                    }
                    else if (!_this.loginDetails.ForgetPasswordStatus) {
                        _this.router.navigateByUrl('/startservice');
                    }
                }
                else if (_this.loginDetails.TruflMemberType === "TA ") {
                    if (_this.loginDetails.ForgetPasswordStatus) {
                        _this.ResetPasswordShow();
                    }
                    else if (!_this.loginDetails.ForgetPasswordStatus) {
                        _this.router.navigateByUrl('/dashboard');
                    }
                }
            }
            else if (_this.errorcode === "50000") {
                window.setTimeout(function () {
                    _this._toastr.error(_this.statusmessage);
                }, 500);
            }
            else {
                window.setTimeout(function () {
                    _this._toastr.error(_this.errormessage);
                }, 500);
            }
        });
        //   this.loginService.getLoginDetails(this.loginDetails.TruflMemberType,this.loginDetails.RestaurantID).subscribe((data: any) => {
        //       data._Data.map((item: any) => {
        //          this.logininfo = item;
        //        });
        //       console.log(this.logininfo);
        //    }
        //    );
    };
    LoginComponent.prototype.showOnlyLogin = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */]();
        this.showResetPassword = false;
        this.showForgotPassword = false;
        this.showlogin = true;
        this.showReset = false;
    };
    LoginComponent.prototype.showLogin = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */]();
        this.showResetPassword = false;
        this.showForgotPassword = false;
        this.showlogin = false;
        this.showReset = true;
    };
    //Forgot Password
    LoginComponent.prototype.forgotPasswordShow = function () {
        this.showlogin = false;
        this.showResetPassword = false;
        this.showForgotPassword = true;
        this.showReset = false;
    };
    LoginComponent.prototype.forgotPasswordImpl = function () {
        var _this = this;
        this.showlogin = false;
        this.showForgotPassword = false;
        this.showResetPassword = true;
        this.loginService.forgotpassword(this.email).subscribe(function (res) {
            res._Data.map(function (item) {
                _this.emailDetails = item;
            });
        });
    };
    //Reset Password
    LoginComponent.prototype.ResetPasswordShow = function () {
        this.showlogin = false;
        this.showResetPassword = false;
        this.showForgotPassword = false;
        this.showReset = true;
    };
    LoginComponent.prototype.resetPasswordImpl = function () {
        var _this = this;
        this.reset.UserEmail = this.reset.UserEmail;
        this.reset.UserName = '';
        this.reset.UserID = '';
        this.reset.LoginPassword = this.reset.LoginPassword;
        this.reset.NewLoginPassword = this.reset.NewLoginPassword;
        console.log(this.reset, "reset password details");
        this.loginService.resetPassword(this.reset).subscribe(function (res) {
            window.setTimeout(function () {
                _this._toastr.success("Password changed successfully");
            }, 500);
            window.setTimeout(function () {
                _this.showlogin = true;
                _this.showReset = false;
                _this.user.emailid = '';
                _this.user.password = '';
                _this.user.usertype = '';
            }, 1000);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__["ToastOptions"]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/register/newUser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUser; });
var NewUser = (function () {
    function NewUser() {
    }
    return NewUser;
}());

//TruflUserID: number;
//RestaurantID: number;
//FullName: string;
//Email: string;
//pic: string;
//PhoneNumber: string;
//password: string;
//Salt: string;
//DOB: string;
//ActiveInd: string;
//RestaurantEmpInd: string;
//TruflMemberType: string;
//TruflRelationship: string;
//TruflshareCode: string;
//ReferTruflUserID: string;
//ModifiedDate: string;
//ModifiedBy: string;
//Waited: string;
//LoggedInUserType: string;
//confirmPassword ?: string; 
//# sourceMappingURL=newUser.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.loginbg {\r\n    background: url(" + __webpack_require__("../../../../../src/assets/images/loginbg.jpg") + ") no-repeat center center;\r\n    background-size:cover;\r\n    display: table;\r\n    width: 100%;\r\n    min-height: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loginbg\">\r\n    <div class=\"col-md-3 logincontiner\">\r\n        <div class=\"loginmain\">\r\n            <div class=\"login-top\">\r\n                <img alt=\"\" src=\"assets/images/logo.png\" />\r\n\r\n                <h1 class=\"text-center\">Resturant App </h1>\r\n            </div>\r\n            <form class=\"logininner\" (ngSubmit)=\"signUp()\" #registerForm=\"ngForm\">\r\n                <div class=\"logcheck\">\r\n                    <span class=\"pull-left\">\r\n                        <input type=\"radio\" checked name=\"userType\" value=\"RA\" [(ngModel)]=\"user.LoggedInUserType\"> <label> Resturant Admin</label>\r\n                    </span> <span class=\"pull-right\">\r\n                        <input type=\"radio\" name=\"userType\" value=\"TA\" [(ngModel)]=\"user.LoggedInUserType\"> <label>Trufl Admin</label>\r\n                    </span>\r\n                </div>\r\n                <div class=\"form-group ffw\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"fullName\"  required pattern=\"[a-zA-Z][a-zA-Z ]+\" name=\"fullName\" [(ngModel)]=\"user.FullName\"  placeholder=\"Enter your full name\" #name=\"ngModel\"/>\r\n                    <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"name.errors.required\">Name is required. </div>\r\n                        <div *ngIf=\"name.errors.pattern\">Only alphabets allowed</div>\r\n                    </div>\r\n                    <span class=\"help-block\"></span>\r\n                </div>\r\n                <div class=\"form-group ffw\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"userName\" name=\"userName\" [(ngModel)]=\"user.Email\" required placeholder=\"Enter your email address\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"  #username=\"ngModel\"/>\r\n                    <div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"username.errors.required\">UserName is required.  </div>\r\n                        <div *ngIf=\"username.errors.pattern\">UserName format should be <small><b>joe@abc.com</b></small></div>\r\n                    </div>\r\n                    <span class=\"help-block\"></span>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\" required placeholder=\"Enter password\" #password=\"ngModel\"/>\r\n                    <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\r\n                        <div *ngIf=\"password.errors.required\">Password is required.  </div>\r\n                    </div>\r\n                    <span class=\"help-block\"></span>\r\n               </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" validateEqual=\"password\" name=\"confirmPassword\" [(ngModel)]=\"user.confirmPassword\" required placeholder=\"Re-enter password\" #confirmPassword=\"ngModel\" />\r\n\r\n                   <div *ngIf=\"confirmPassword.invalid && (confirmPassword.dirty || confirmPassword.touched)\" class=\"alert alert-danger\">\r\n                            Passwords did not match\r\n                    </div>\r\n                    <span class=\"help-block\"></span>\r\n                </div>\r\n                <div class=\"logcheck no-mar\">\r\n                    <span class=\"pull-left fw\">\r\n                        <input type=\"checkbox\" checked> <label> By Checking in, you agree to Trufl's Terms of Service, Cookie Policy, Privacy Policy and Content Policies</label>\r\n                    </span>\r\n                </div>\r\n                <div class=\"login-btn\">\r\n                    <button type=\"reset\" class=\"secondary-btn lgbtn\">Clear</button>\r\n                    <button type=\"submit\" class=\"primary-btn pull-right lgbtn\" [disabled]=\"!registerForm.form.valid\">Register</button>\r\n                </div>\r\n\r\n                <div class=\"createaccount\">\r\n                    <h2>\r\n                        Already have a account ?\r\n                        <a [routerLink]=\"['/login']\">Login</a>\r\n                    </h2>\r\n                </div>\r\n\r\n            </form>\r\n        </div>\r\n\r\n        <div class=\"terms\">\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_login_service__ = __webpack_require__("../../../../../src/app/shared/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newUser__ = __webpack_require__("../../../../../src/app/register/newUser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(router, loginService, _toastr, vRef) {
        this.router = router;
        this.loginService = loginService;
        this._toastr = _toastr;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__newUser__["a" /* NewUser */]();
        this.load = false;
        this._toastr.setRootViewContainerRef(vRef);
        //called first time before the ngOnInit()
    }
    //SignUp method
    RegisterComponent.prototype.signUp = function () {
        var _this = this;
        console.log(this.user);
        this.loginService.create(this.user).subscribe(function (res) {
            window.setTimeout(function () {
                _this._toastr.success("Register Successfull");
            }, 500);
            window.setTimeout(function () {
                _this.router.navigateByUrl("/login");
            }, 2000);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__["ToastOptions"]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/reviewselections/review-selections.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".h4{\r\n    color:white;\r\n}\r\n.opacity05 {\r\n    opacity: 0.5;\r\n}\r\n\r\n.mrgTop3em {\r\n    margin-top: 2em;\r\n}\r\n\r\n@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {\r\n    .mrgTop3em {\r\n        margin-top: 3em;\r\n    }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reviewselections/review-selections.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"customheader\">\r\n\r\n    <div class=\"customheaderleft\">\r\n        <h2>Review Selections</h2>\r\n    </div>\r\n    <div class=\"customheaderright\">\r\n        <a (click)=\"back()\" class=\"secondary-btn\">\r\n            Back\r\n        </a>\r\n        <a (click)=\"next()\" class=\"primary-btn\">\r\n            Next\r\n        </a>\r\n    </div>\r\n\r\n</div>\r\n<div class=\"col-md-12 reviewmain\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <span class=\"fontStyle\"> Guests can join the waitlist at:</span>\r\n\r\n            <span *ngFor=\"let restaurantwaitlistopen of RestaurantWaitListOpen\" class=\"reviewtime\">{{restaurantwaitlistopen.OpenTime}}</span>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <span class=\"fontStyle\">These servers are on the floor. </span>\r\n            <div class=\"selectstaff fw nomar\">\r\n                <ul>\r\n                    <li class=\"fw nomar revmar\" *ngFor=\"let restaurantopensectionstaff of result;let i=index\">\r\n                        <a class=\"selected\">\r\n                            <img src=\"data:image/JPEG;base64,{{restaurantopensectionstaff.pic}}\" alt=\"\" />\r\n                            <span class=\"fontStyle\">\r\n                                {{restaurantopensectionstaff.FullName}}\r\n                            </span>\r\n                            <div *ngFor=\"let obj of restaurantopensectionstaff.seatNumbers;let i=index;\"><h4 *ngIf=\"restaurantopensectionstaff.ActiveInd == 1\" class=\"h4\">{{obj.StartTableNumber}}-{{obj.EndTableNumber}}</h4></div>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n            <span class=\"fontStyle\"> These sections are closed.</span>\r\n\r\n            <div class=\"selectfloorReview fw nomar\">\r\n                <ul class=\"mrgTop3em\">\r\n                    <li *ngFor=\"let closesections of RestaurantOpenSections; let i=index\" class=\"fw  nomar revmar\">\r\n                        <a class=\"opacity05\" [ngStyle]=\"{'background-image':'url('+imageIteration+closesections.FloorImage+')'}\">\r\n                            <h3>{{closesections.FloorName}}</h3>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/reviewselections/review-selections.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewSelectionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__review_selections_service__ = __webpack_require__("../../../../../src/app/reviewselections/review-selections.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewSelectionsComponent = (function () {
    function ReviewSelectionsComponent(router, reviewservice) {
        this.router = router;
        this.reviewservice = reviewservice;
        this.restID = localStorage.getItem('restaurantid');
        this.result = [];
        this.globalCount = 0;
        this.listOfRanges = [];
    }
    ReviewSelectionsComponent.prototype.ngOnInit = function () {
        this.getReviewSelections(this.restID);
    };
    ReviewSelectionsComponent.prototype.getReviewSelections = function (restId) {
        var _this = this;
        this.imageIteration = 'data:image/JPEG;base64,';
        this.reviewservice.getreviewdetails(restId).subscribe(function (res) {
            _this.review_records = res._Data;
            console.log(_this.review_records);
            _this.RestaurantOpenSections = res._Data.RestaurantOpenSection;
            _this.RestaurantWaitListOpen = res._Data.RestaurantWaitListOpen;
            _this.RestaurantOpenSectionStaff = res._Data.RestaurantOpenSectionStaff;
            console.log(_this.RestaurantOpenSectionStaff, " this.RestaurantOpenSectionStaff");
            console.log(_this.RestaurantOpenSections, " this.RestaurantOpenSections");
            var that = _this;
            if (_this.RestaurantOpenSectionStaff) {
                //adding seatnumbers functionality
                _this.RestaurantOpenSectionStaff.map(function (obj) {
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
                        }
                        else {
                            that.result.push(that.getSeatedInfoObj(obj));
                        }
                    }
                    else {
                        that.result.push(that.getSeatedInfoObj(obj));
                    }
                });
            }
        });
        console.log("this", this.result);
    };
    ReviewSelectionsComponent.prototype.getSeatedInfoObj = function (obj) {
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
    };
    ReviewSelectionsComponent.prototype.next = function () {
        this.router.navigateByUrl('/waitlist');
    };
    ReviewSelectionsComponent.prototype.back = function () {
        this.router.navigateByUrl('/selectStaff');
    };
    return ReviewSelectionsComponent;
}());
ReviewSelectionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'reviewSelections',
        template: __webpack_require__("../../../../../src/app/reviewselections/review-selections.component.html"),
        styles: [__webpack_require__("../../../../../src/app/reviewselections/review-selections.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__review_selections_service__["a" /* ReviewSelectionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__review_selections_service__["a" /* ReviewSelectionsService */]) === "function" && _b || Object])
], ReviewSelectionsComponent);

var _a, _b;
//# sourceMappingURL=review-selections.component.js.map

/***/ }),

/***/ "../../../../../src/app/reviewselections/review-selections.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewSelectionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_appsettings__ = __webpack_require__("../../../../../src/app/shared/appsettings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewSelectionsService = (function () {
    function ReviewSelectionsService(http) {
        this.http = http;
    }
    ReviewSelectionsService.prototype.getreviewdetails = function (restId) {
        // this.RestaurantID = 1;
        console.log(restId);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_3__shared_appsettings__["a" /* constant */].truflBase + 'WaitListUser/GetRestaurantWaitTimeOpenSectionStaff/' + restId).map(function (res) { return res.json(); });
    };
    return ReviewSelectionsService;
}());
ReviewSelectionsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ReviewSelectionsService);

var _a;
//# sourceMappingURL=review-selections.service.js.map

/***/ }),

/***/ "../../../../../src/app/seataguest/seataguest.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"customheader\">\r\n    <div class=\"customheaderleft\">\r\n        <h2>Seat A Guest</h2>\r\n    </div>\r\n    <div class=\"customheaderright\">\r\n        <button type=\"submit\" (click)=\"confirm()\"  [disabled]=\"toogleBool\" [ngClass]=\"active==true?'changcolor' : 'default'\" class=\"primary-btn confBtn\">\r\n            Confirm\r\n        </button>\r\n        <span *ngIf=\"showmessage\" class=\"errorMsgStyle\"><img src=\"../../../../wwwroot/images/error.jpg\" />{{error_message}}</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"col-md-12 PadZero\">\r\n    <div class=\"col-md-1 guestmaindata\" *ngIf=\"!issideOpen\">\r\n        <img (click)=\"issideOpen=true\" class=\"collapsImgClose\" src=\"../../../../wwwroot/images/seataguestSlideimage.png\" />\r\n    </div>\r\n\r\n    <div class=\"col-md-6 animated fadeInLeft\" id=\"profileSection\" *ngIf=\"issideOpen\">\r\n        <div class=\"col-md-11 sideNav\">\r\n            <div class=\"col-sm-12 mrgTop1em\">\r\n                <div class=\"col-sm-12\">\r\n                    <ul class=\"list-inline\">\r\n                        <li><a (click)=\"getwaitlist()\" class=\"fontSizeLarger\" [ngClass]=\"{'activelist': select_tab =='waitlist'}\">WAITLIST</a></li>\r\n                        <li><a (click)=\"getservers()\" class=\"fontSizeLarger\" [ngClass]=\"{'activelist': select_tab =='servers'}\">SERVERS</a></li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-sm-12\"  id=\"TblDiv\">\r\n                    <div class=\"mrgTop2em col-sm-12\" *ngIf=\"isserversOpen\">\r\n                        <table class=\"table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class=\"thWidth40\">SERVER</th>\r\n                                    <th class=\"alignCenter thWidth19\">TOTAL AVAILBLE</th>\r\n                                    <th class=\"alignCenter thWidth19\">TOTAL SEATED</th>\r\n                                    <th class=\"alignCenter thWidth19\">CHECKS DROPPED</th>\r\n                                    <th></th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let server_data of servers\">\r\n                                    <td class=\"sidenavTable\">\r\n                                        <a>\r\n                                            <img class=\"serverimage\" src=\"data:image/JPEG;base64,{{server_data.pic}}\" alt=\"\" />\r\n                                            <h4 class=\"h4Style\">\r\n                                                {{server_data.HostessName}}\r\n                                            </h4>\r\n                                        </a>\r\n                                    </td>\r\n                                    <td class=\"fontSize30 alignCenter\">{{server_data.TotalAvailable}}</td>\r\n                                    <td class=\"fontSize30 alignCenter\">{{server_data.TotalSeated}}</td>\r\n                                    <td class=\"fontSize30 alignCenter\">{{server_data.ChecksDropped}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <div class=\"col-sm-12\" id=\"TblDiv1\"  *ngIf=\"iswaitlistOpen\">\r\n                        <table class=\"table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class=\"width34\">GUEST<br />NAME</th>\r\n                                    <th class=\"alignCenter\">PARTY<br />SIZE</th>\r\n                                    <th class=\"alignCenter\">TIME <br />WAITE</th>\r\n                                    <th class=\"alignCenter\">TRUFL OFFER/<br />RESERVATION</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let user_list of waitlist\">\r\n                                    <td class=\"sidenavTable\">{{user_list.UserName}}</td>\r\n                                    <td class=\"fontSize30 alignCenter\">{{user_list.PartySize}}</td>\r\n                                    <td class=\"fontSize30 alignCenter\">{{user_list.totalremainingtime}}</td>\r\n                                    <td class=\"fontSize30 alignCenter\">{{user_list.OfferAmount}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-1\">\r\n            <i aria-hidden=\"true\" id=\"close\" (click)=\"issideOpen=false\" class=\"bladeIcon icon-close closeIconStyle Top1em\"></i>\r\n            <img (click)=\"issideOpen=false\" class=\"collapsImg\" src=\"../../../../wwwroot/images/seataguestSlideimage.png\" />\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-11 guestmain mrgLeft1em col11Width\" *ngIf=\"!issideOpen\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5 guesttitle\">\r\n                <h3 class=\"fontweightBold\">{{user_accept.UserName}}, Party of {{user_accept.PartySize}} </h3>\r\n                <p>Seating Preferences: {{user_accept.SeatingPreferences}}</p>\r\n            </div>\r\n\r\n            <div class=\"col-md-7 guesttabs\" *ngIf=\"show\">\r\n                <ul>\r\n                    <li *ngFor=\"let seatedimagesdata of filterHostids\">\r\n                        <button class=\"HostNmBtn\" [ngStyle]=\"styleFn(seatedimagesdata.HostessID)\" (click)=\"gethostess(seatedimagesdata.HostessID)\">{{seatedimagesdata.HostessName}}</button>\r\n                    </li>\r\n                </ul>\r\n                <div class=\"clearfix\"></div>\r\n            </div>\r\n\r\n            <div class=\"col-md-7 guesttabs\" *ngIf=\"!show\">\r\n                <ul>\r\n                    <li *ngFor=\"let seatedimagesdata of filteredhostessArray\">\r\n                        <button class=\"HostNmBtn\" [ngStyle]=\"styleFn(seatedimagesdata.HostessID)\" (click)=\"gethostess(seatedimagesdata.HostessID)\"><span><i _ngcontent-3965-5=\"\" aria-hidden=\"true\" class=\"bladeIcon icon-close hostessBtnClose\" id=\"close\"></i></span>{{seatedimagesdata.HostessName}}</button>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"selectguestDiv col-md-12\" *ngIf=\"show\">\r\n            <div class=\"col-md-12 padLeft7 mrgbottom4em\">\r\n                <div class=\"col-sm-2 paddingLftBtm\" *ngFor=\"let tblList of seatguestdetails let i=index\">\r\n                    <div [attr.class]=\"className[i]\" (click)=\"selectseats(tblList)\" [ngClass]=\"{'divCol2StyleDrop':isDrop[i]}\" [ngStyle]=\"{'border':tblList.TableStatus === true?'3px solid white':''}\">\r\n                        <div class=\"imgDivHeight imgDivLeft8Top2\" *ngIf=\"tblList.TableType ==2\">\r\n                            <img src=\"../../../../wwwroot/images/Group 794.png\" />\r\n                            <span [ngClass]=\"{'tblNoSpan':tblList.TableNumber<10,'tblNoSpanTblNo10':tblList.TableNumber > 9}\">{{tblList.TableNumber}}</span>\r\n                        </div>\r\n                        <div class=\"imgDivHeight imgDivLeft10Top6\" *ngIf=\"tblList.TableType==4\">\r\n                            <img src=\"../../../../wwwroot/images/Group 804.png\" />\r\n                            <span [ngClass]=\"{'tblNoSpan':tblList.TableNumber <10,'tblNoSpanTblNo10':tblList.TableNumber > 9}\">{{tblList.TableNumber}}</span>\r\n                        </div>\r\n                        <div class=\"imgDivHeight imgDivLeft10Top6\" *ngIf=\"tblList.TableType==6\">\r\n                            <img src=\"../../../../wwwroot/images/Group 806.png\" />\r\n                            <span [ngClass]=\"{'top6SpanTblNo0To9':tblList.TableNumber < 10, 'top6SpanTblNo10':tblList.TableNumber > 9}\">{{tblList.TableNumber}}</span>\r\n                        </div>\r\n                        <div class=\"imgDivHeight imgDivLeft21Top8\" *ngIf=\"tblList.TableType==8\">\r\n                            <img src=\"../../../../wwwroot/images/Group 817.png\" />\r\n                            <span [ngClass]=\"{'top8SpanTblNo0To9':tblList.TableNumber <10, 'top8SpanTblNo10':tblList.TableNumber > 9}\">{{tblList.TableNumber}}</span>\r\n                        </div>\r\n                        <div class=\"imgDivHeight imgDivLeft21Top8\" *ngIf=\"tblList.TableType==10\">\r\n                            <img src=\"../../../../wwwroot/images/Group 810.png\" />\r\n                            <span [ngClass]=\"{'tblNoSpan':tblList.TableNumber<10,'tblNoSpanTblNo10':tblList.TableNumber > 9}\">{{tblList.TableNumber}}</span>\r\n                        </div>\r\n                        <div class=\"padtop28\">\r\n                            <p class=\"mrg0 pEllipsis\">{{tblList.FloorName}}</p>\r\n                            <p class=\"padLeft15\">{{tblList.HostessName}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n\r\n        <div class=\"selectguestDiv col-md-12\" *ngIf=\"!show\">\r\n            <div class=\"col-md-12 padLeft7 mrgbottom4em\">\r\n                <div class=\"col-sm-2 paddingLftBtm\" *ngFor=\"let tblList of filteredarray let i=index\">\r\n                    <div [attr.class]=\"classNameHiostId[i]\" (click)=\"selectseats(tblList)\" [ngStyle]=\"{'border':tblList.TableStatus === true?'3px solid white':''}\">\r\n                        <div class=\"imgDivHeight imgDivLeft8Top2\" *ngIf=\"tblList.TableType ==2\">\r\n                            <img src=\"../../../../wwwroot/images/Group 794.png\" />\r\n                            <span [ngClass]=\"{'tblNoSpan':tblList.TableNumber<10,'tblNoSpanTblNo10':tblList.TableNumber > 9}\">{{tblList.TableNumber}}</span>\r\n                        </div>\r\n                        <div class=\"imgDivHeight imgDivLeft10Top6\" *ngIf=\"tblList.TableType==4\">\r\n                            <img src=\"../../../../wwwroot/images/Group 804.png\" />\r\n                            <span [ngClass]=\"{'tblNoSpan':tblList.TableNumber <10,'tblNoSpanTblNo10':tblList.TableNumber > 9}\">{{tblList.TableNumber}}</span>\r\n                        </div>\r\n                        <div class=\"imgDivHeight imgDivLeft10Top6\" *ngIf=\"tblList.TableType==6\">\r\n                            <img src=\"../../../../wwwroot/images/Group 806.png\" />\r\n                            <span [ngClass]=\"{'top6SpanTblNo0To9':tblList.TableNumber < 10, 'top6SpanTblNo10':tblList.TableNumber > 9}\">{{tblList.TableNumber}}</span>\r\n                        </div>\r\n                        <div class=\"imgDivHeight imgDivLeft21Top8\" *ngIf=\"tblList.TableType==8\">\r\n                            <img src=\"../../../../wwwroot/images/Group 817.png\" />\r\n                            <span [ngClass]=\"{'top8SpanTblNo0To9':tblList.TableNumber <10, 'top8SpanTblNo10':tblList.TableNumber > 9}\">{{tblList.TableNumber}}</span>\r\n                        </div>\r\n                        <div class=\"imgDivHeight imgDivLeft21Top8\" *ngIf=\"tblList.TableType==10\">\r\n                            <img src=\"../../../../wwwroot/images/Group 810.png\" />\r\n                            <span [ngClass]=\"{'tblNoSpan':tblList.TableNumber<10,'tblNoSpanTblNo10':tblList.TableNumber > 9}\">{{tblList.TableNumber}}</span>\r\n                        </div>\r\n                        <div class=\"padtop28\">\r\n                            <p class=\"mrg0 pEllipsis\">{{tblList.FloorName}}</p>\r\n                            <p class=\"padLeft15\">{{tblList.HostessName}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n                <div class=\"clearfix\"></div>\r\n            </div>\r\n        <div class=\"col-md-12 cancleBtnDivBig\">\r\n            <div class=\"col-md-2 col-md-offset-10\">\r\n                <span class=\"cancleStyle mrgLeft28\"><i aria-hidden=\"true\" class=\"bladeIcon icon-close closeIconSpn\" (click)=\"PreviousPage()\"></i> Cancel</span>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-6 guestmain heightCal\" *ngIf=\"issideOpen\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 guesttitlecol6\">\r\n                <h3 class=\"guestinfo\">{{user_accept.UserName}}, Party of {{user_accept.PartySize}} </h3>\r\n                <p>Seating Preferences: {{user_accept.SeatingPreferences}}</p>\r\n            </div>\r\n            <div class=\"col-md-12 guesttabs6Col\" *ngIf=\"show\">\r\n                <ul>\r\n                    <li *ngFor=\"let seatedimagesdata of filterHostids\">\r\n                        <button class=\"HostNmBtn\" [ngStyle]=\"styleFn(seatedimagesdata.HostessID)\" (click)=\"gethostess(seatedimagesdata.HostessID)\">{{seatedimagesdata.HostessName}}</button>\r\n                    </li>\r\n                </ul>\r\n                <div class=\"clearfix\"></div>\r\n            </div>\r\n            <div class=\"col-md-12 guesttabs padRight\" *ngIf=\"!show\">\r\n                <ul>\r\n                    <li *ngFor=\"let seatedimagesdata of filteredhostessArray\">\r\n                        <button class=\"HostNmBtn\" [ngStyle]=\"styleFn(seatedimagesdata.HostessID)\" (click)=\"gethostess(seatedimagesdata.HostessID)\"><span><i _ngcontent-3965-5=\"\" aria-hidden=\"true\" class=\"bladeIcon icon-close hostessBtnClose\" id=\"close\"></i></span>{{seatedimagesdata.HostessName}}</button>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-12 selectguest\" *ngIf=\"show\">\r\n            <!--<div class=\"col-md-12 padLeft7\">-->\r\n                <div class=\"col-sm-4 paddingLftBtm\" *ngFor=\"let tblList of seatguestdetails let i=index\">\r\n                    <div [attr.class]=\"className[i]\" (click)=\"selectseats(tblList)\" [ngStyle]=\"{'border':tblList.TableStatus === true?'3px solid white':''}\">\r\n                        <div class=\"imgDivHeight imgDivLeft8Top2\" *ngIf=\"tblList.TableType ==2\">\r\n                            <img src=\"../../../../wwwroot/images/Group 794.png\" />\r\n                            <span [ngClass]=\"{'tblNoSpan':tblList.TableNumber<10,'tblNoSpanTblNo10':tblList.TableNumber > 9}\">{{tblList.TableNumber}}</span>\r\n                        </div>\r\n                        <div class=\"imgDivHeight imgDivLeft10Top6\" *ngIf=\"tblList.TableType==4\">\r\n                            <img src=\"../../../../wwwroot/images/Group 804.png\" />\r\n                            <span [ngClass]=\"{'tblNoSpan':tblList.TableNumber <10,'tblNoSpanTblNo10':tblList.TableNumber > 9}\">{{tblList.TableNumber}}</span>\r\n                        </div>\r\n                        <div class=\"imgDivHeight imgDivLeft10Top6\" *ngIf=\"tblList.TableType==6\">\r\n                            <img src=\"../../../../wwwroot/images/Group 806.png\" />\r\n                            <span [ngClass]=\"{'top6SpanTblNo0To9':tblList.TableNumber < 10, 'top6SpanTblNo10':tblList.TableNumber > 9}\">{{tblList.TableNumber}}</span>\r\n                        </div>\r\n                        <div class=\"imgDivHeight imgDivLeft21Top8\" *ngIf=\"tblList.TableType==8\">\r\n                            <img src=\"../../../../wwwroot/images/Group 817.png\" />\r\n                            <span [ngClass]=\"{'top8SpanTblNo0To9':tblList.TableNumber <10, 'top8SpanTblNo10':tblList.TableNumber > 9}\">{{tblList.TableNumber}}</span>\r\n                        </div>\r\n                        <div class=\"imgDivHeight imgDivLeft21Top8\" *ngIf=\"tblList.TableType==10\">\r\n                            <img src=\"../../../../wwwroot/images/Group 810.png\" />\r\n                            <span [ngClass]=\"{'tblNoSpan':tblList.TableNumber<10,'tblNoSpanTblNo10':tblList.TableNumber > 9}\">{{tblList.TableNumber}}</span>\r\n                        </div>\r\n                        <div class=\"padtop28\">\r\n                            <p class=\"mrg0 pEllipsis\">{{tblList.FloorName}}</p>\r\n                            <p class=\"padLeft15\">{{tblList.HostessName}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            <!--</div>-->\r\n        </div>\r\n        \r\n        <div class=\"col-md-12 selectguest\" *ngIf=\"!show\" id=\"HostWiseTblDiv\">\r\n            <!--<div class=\"col-md-12 padLeft7\">-->\r\n                <div class=\"col-sm-4 paddingLftBtm\" *ngFor=\"let tblList of filteredarray let i=index\">\r\n                    <div [attr.class]=\"classNameHiostId[i]\" (click)=\"selectseats(tblList)\" [ngStyle]=\"{'border':tblList.TableStatus === true?'3px solid white':''}\">\r\n                        <div class=\"imgDivHeight imgDivLeft8Top2\" *ngIf=\"tblList.TableType ==2\">\r\n                            <img src=\"../../../../wwwroot/images/Group 794.png\" />\r\n                            <span [ngClass]=\"{'tblNoSpan':tblList.TableNumber<10,'tblNoSpanTblNo10':tblList.TableNumber > 9}\">{{tblList.TableNumber}}</span>\r\n                        </div>\r\n                        <div class=\"imgDivHeight imgDivLeft10Top6\" *ngIf=\"tblList.TableType==4\">\r\n                            <img src=\"../../../../wwwroot/images/Group 804.png\" />\r\n                            <span [ngClass]=\"{'tblNoSpan':tblList.TableNumber <10,'tblNoSpanTblNo10':tblList.TableNumber > 9}\">{{tblList.TableNumber}}</span>\r\n                        </div>\r\n                        <div class=\"imgDivHeight imgDivLeft10Top6\" *ngIf=\"tblList.TableType==6\">\r\n                            <img src=\"../../../../wwwroot/images/Group 806.png\" />\r\n                            <span [ngClass]=\"{'top6SpanTblNo0To9':tblList.TableNumber < 10, 'top6SpanTblNo10':tblList.TableNumber > 9}\">{{tblList.TableNumber}}</span>\r\n                        </div>\r\n                        <div class=\"imgDivHeight imgDivLeft21Top8\" *ngIf=\"tblList.TableType==8\">\r\n                            <img src=\"../../../../wwwroot/images/Group 817.png\" />\r\n                            <span [ngClass]=\"{'top8SpanTblNo0To9':tblList.TableNumber <10, 'top8SpanTblNo10':tblList.TableNumber > 9}\">{{tblList.TableNumber}}</span>\r\n                        </div>\r\n                        <div class=\"imgDivHeight imgDivLeft21Top8\" *ngIf=\"tblList.TableType==10\">\r\n                            <img src=\"../../../../wwwroot/images/Group 810.png\" />\r\n                            <span [ngClass]=\"{'tblNoSpan':tblList.TableNumber<10,'tblNoSpanTblNo10':tblList.TableNumber > 9}\">{{tblList.TableNumber}}</span>\r\n                        </div>\r\n                        <div class=\"padtop28\">\r\n                            <p class=\"mrg0 pEllipsis\">{{tblList.FloorName}}</p>\r\n                            <p class=\"padLeft15\">{{tblList.HostessName}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            <!--</div>-->\r\n        </div>\r\n        <div class=\"col-md-12 CancBtnDiv\">\r\n            <div class=\"col-sm-2 col-md-offset-4 no-pad\">\r\n                <span class=\"cancleStyle mrgLeft3em\"><i aria-hidden=\"true\" class=\"bladeIcon icon-close closeIconSpn\" (click)=\"PreviousPage()\"></i> Cancel</span>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/seataguest/seataguest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeataGuestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__seataguest_service__ = __webpack_require__("../../../../../src/app/seataguest/seataguest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_Shared_Service__ = __webpack_require__("../../../../../src/app/shared/Shared.Service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SeataGuestComponent = (function () {
    function SeataGuestComponent(seataguestService, sharedService, router) {
        this.seataguestService = seataguestService;
        this.sharedService = sharedService;
        this.router = router;
        this.seatguestdetails = [];
        this.seatedimages = [];
        this.imagesarray = [];
        this.final_array = [];
        this.filterHostrecords = [];
        this.trimmedArray = [];
        this.filteredhostessArray = [];
        this.count = 0;
        this.selected_objects = [];
        this.showmessage = false;
        this.active = false;
        this.issideOpen = false;
        this.iswaitlistOpen = true;
        this.isserversOpen = false;
        this.restID = localStorage.getItem('restaurantid');
        this.isDrop = [];
        this.className = [];
        this.classNameHiostId = [];
        this.toogleBool = true;
    }
    ;
    SeataGuestComponent.prototype.ngOnInit = function () {
        this.imagepath = 'data:image/JPEG;base64,';
        this.getseated(this.restID);
        this.getimages();
        this.getwaitlist();
        this.show = true;
        // this.user_accept=this.sharedService.useraccept;
        // console.log(this.user_accept); 
        this.getrowData = localStorage.getItem('acceptoffer rowdata');
        this.user_accept = JSON.parse(this.getrowData);
        console.log(this.user_accept);
        /* related to save and edit guest*/
        this.unique_id = this.sharedService.uniqueid;
        console.log(this.unique_id);
        /*   this.guest_details = this.sharedService.addSeataguest;
           console.log(this.guest_details);*/
    };
    SeataGuestComponent.prototype.removeDuplicates = function (originalArray, objKey) {
        var values = [];
        var value;
        for (var i = 0; i < originalArray.length; i++) {
            value = originalArray[i][objKey];
            if (values.indexOf(value) === -1) {
                this.trimmedArray.push(originalArray[i]);
                values.push(value);
            }
        }
        return this.trimmedArray;
    };
    SeataGuestComponent.prototype.getseated = function (restID) {
        var _this = this;
        this.seataguestService.getseateddetails(restID).subscribe(function (res) {
            console.log(res._Data);
            //this.seatguestdetails = res._Data;
            _this.before_sort = res._Data;
            _this.seatguestdetails = _this.before_sort.sort(function (a, b) {
                return a.TableNumber - b.TableNumber;
            });
            _this.tblResLength = res._Data.length;
            for (var i = 0; i < res._Data.length; i++) {
                if (res._Data[i].HostessID == 12 || res._Data[i].HostessID == 1023 || res._Data[i].HostessID == 1024 || res._Data[i].HostessID == 1028) {
                    _this.className[i] = 'Hostess1 divCol2Style';
                }
                else if (res._Data[i].HostessID == 1029 || res._Data[i].HostessID == 1030 || res._Data[i].HostessID == 1031) {
                    _this.className[i] = 'Hostess2 divCol2Style';
                }
                else if (res._Data[i].HostessID == 1032 || res._Data[i].HostessID == 1033 || res._Data[i].HostessID == 1034) {
                    _this.className[i] = 'Hostess3 divCol2Style';
                }
                else if (res._Data[i].HostessID == 1035 || res._Data[i].HostessID == 1036 || res._Data[i].HostessID == 1037) {
                    _this.className[i] = 'Hostess4 divCol2Style';
                }
                else if (res._Data[i].HostessID == 1038 || res._Data[i].HostessID == 1039 || res._Data[i].HostessID == 1040) {
                    _this.className[i] = 'Hostess5 divCol2Style';
                }
                else if (res._Data[i].HostessID == 1043 || res._Data[i].HostessID == 1044 || res._Data[i].HostessID == 1045 || res._Data[i].HostessID == 2021) {
                    _this.className[i] = 'Hostess6 divCol2Style';
                }
                else if (res._Data[i].HostessID == 0) {
                    _this.className[i] = 'Hostess7 divCol2Style';
                }
            }
            _this.filterHostids = _this.removeDuplicates(_this.seatguestdetails, 'HostessID');
            console.log(_this.filterHostids, 'filterid');
        });
    };
    SeataGuestComponent.prototype.getimages = function () {
        var _this = this;
        this.seataguestService.getimages().subscribe(function (res) {
            _this.seatedimages = res._Data;
        });
    };
    SeataGuestComponent.prototype.selectseats = function (selectseats) {
        var _this = this;
        this.seatguestdetails.forEach(function (itemdata, index) {
            if (itemdata.TableNumber == selectseats.TableNumber && itemdata.TableStatus == false) {
                _this.seatguestdetails[index].TableStatus = !_this.seatguestdetails[index].TableStatus;
                _this.imageborder = true;
                return;
            }
            else {
                if (itemdata.TableNumber == selectseats.TableNumber && itemdata.TableStatus == true) {
                    _this.seatguestdetails[index].TableStatus = !_this.seatguestdetails[index].TableStatus;
                    return;
                }
            }
            console.log(_this.seatguestdetails, 'Tabl Status');
        });
        if (this.selected_objects.length) {
            var index = this.selected_objects.findIndex(function (selectedobject) {
                return selectedobject.TableNumber === selectseats.TableNumber;
            });
            if (index >= 0) {
                this.selected_objects[index] = selectseats;
                if (selectseats.TableStatus == true) {
                    this.count = this.count + selectseats.TableType;
                }
                else {
                    this.count = this.count - selectseats.TableType;
                }
            }
            else {
                this.selected_objects.push(selectseats);
                this.count = this.count + selectseats.TableType;
            }
        }
        else {
            this.selected_objects.push(selectseats);
            this.count = this.count + selectseats.TableType;
        }
        if (this.count > 0 && this.count < this.user_accept.PartySize) {
            this.showmessage = true;
            this.active = false;
            this.toogleBool = true;
            this.error_message = "please select another table to accommodate this large party";
        }
        else if (this.count == 0) {
            this.showmessage = false;
            this.active = false;
            this.toogleBool = true;
        }
        else {
            this.active = true;
            this.showmessage = false;
            this.toogleBool = false;
        }
    };
    SeataGuestComponent.prototype.styleFn = function (status, attr) {
        var style = {
            '12': { 'background-color': '#477B6C', 'border': ' 1px solid #477B6C', 'border-radius': '20px' },
            '1023': { 'background-color': '#477B6C', 'border': ' 1px solid #477B6C', 'border-radius': '20px' },
            '1024': { 'background-color': '#477B6C', 'border': ' 1px solid #477B6C', 'border-radius': '20px' },
            '1027': { 'background-color': '#477B6C', 'border': ' 1px solid #477B6C', 'border-radius': '20px' },
            '1028': { 'background-color': '#477B6C', 'border': ' 1px solid #477B6C', 'border-radius': '20px' },
            '1029': { 'background-color': '#8D6C8D', 'border': ' 1px solid #8D6C8D', 'border-radius': '20px' },
            '1030': { 'background-color': '#8D6C8D', 'border': ' 1px solid #8D6C8D', 'border-radius': '20px' },
            '1031': { 'background-color': '#8D6C8D', 'border': ' 1px solid #8D6C8D', 'border-radius': '20px' },
            '1032': { 'background-color': '#51919A', 'border': ' 1px solid #51919A', 'border-radius': '20px' },
            '1033': { 'background-color': '#51919A', 'border': ' 1px solid #51919A', 'border-radius': '20px' },
            '1034': { 'background-color': '#51919A', 'border': ' 1px solid #51919A', 'border-radius': '20px' },
            '1035': { 'background-color': '#9A8A4A', 'border': ' 1px solid #9A8A4A', 'border-radius': '20px' },
            '1036': { 'background-color': '#9A8A4A', 'border': ' 1px solid #9A8A4A', 'border-radius': '20px' },
            '1037': { 'background-color': '#9A8A4A', 'border': ' 1px solid #9A8A4A', 'border-radius': '20px' },
            '1038': { 'background-color': '#9A7047', 'border': ' 1px solid #9A7047', 'border-radius': '20px' },
            '1039': { 'background-color': '#9A7047', 'border': ' 1px solid #9A7047', 'border-radius': '20px' },
            '1040': { 'background-color': '#9A7047', 'border': ' 1px solid #9A7047', 'border-radius': '20px' },
            '1041': { 'background-color': '#48588E', 'border': ' 1px solid #48588E', 'border-radius': '20px' },
            '1042': { 'background-color': '#48588E', 'border': ' 1px solid #48588E', 'border-radius': '20px' },
            '1043': { 'background-color': '#919A62', 'border': ' 1px solid #919A62', 'border-radius': '20px' },
            '1044': { 'background-color': '#919A62', 'border': ' 1px solid #919A62', 'border-radius': '20px' },
            '1045': { 'background-color': '#919A62', 'border': ' 1px solid #919A62', 'border-radius': '20px' },
            '2021': { 'background-color': '#919A62', 'border': ' 1px solid #919A62', 'border-radius': '20px' },
            'true': { 'background-color': '#919A62', 'border': ' 1px solid #919A62', 'border-radius': '20px' }
        };
        if (status == 0) {
            status = true;
        }
        return status ? style[status] : style['default'];
    };
    SeataGuestComponent.prototype.gethostess = function (HostessID) {
        console.log(HostessID);
        this.show = !this.show;
        var copyoffinalarry = this.seatguestdetails;
        this.filteredarray = copyoffinalarry.filter(function (tag) {
            return tag.HostessID == HostessID;
        });
        this.filteredhostessArray = this.trimmedArray.filter(function (tag) {
            return tag.HostessID == HostessID;
        });
        for (var i = 0; i < this.filteredarray.length; i++) {
            if (this.filteredarray[i].HostessID == 12 || this.filteredarray[i].HostessID == 1023 || this.filteredarray[i].HostessID == 1024 || this.filteredarray[i].HostessID == 1027 || this.filteredarray[i].HostessID == 1028) {
                this.classNameHiostId[i] = 'Hostess1 divCol2Style';
            }
            else if (this.filteredarray[i].HostessID == 1029 || this.filteredarray[i].HostessID == 1030 || this.filteredarray[i].HostessID == 1031) {
                this.classNameHiostId[i] = 'Hostess2 divCol2Style';
            }
            else if (this.filteredarray[i].HostessID == 1032 || this.filteredarray[i].HostessID == 1033 || this.filteredarray[i].HostessID == 1034) {
                this.classNameHiostId[i] = 'Hostess3 divCol2Style';
            }
            else if (this.filteredarray[i].HostessID == 1035 || this.filteredarray[i].HostessID == 1036 || this.filteredarray[i].HostessID == 1037) {
                this.classNameHiostId[i] = 'Hostess4 divCol2Style';
            }
            else if (this.filteredarray[i].HostessID == 1038 || this.filteredarray[i].HostessID == 1039 || this.filteredarray[i].HostessID == 1040) {
                this.classNameHiostId[i] = 'Hostess5 divCol2Style';
            }
            else if (this.filteredarray[i].HostessID == 1043 || this.filteredarray[i].HostessID == 1044 || this.filteredarray[i].HostessID == 1045 || this.filteredarray[i].HostessID == 2021) {
                this.classNameHiostId[i] = 'Hostess6 divCol2Style';
            }
            else if (this.filteredarray[i].HostessID == 0) {
                this.classNameHiostId[i] = 'Hostess7 divCol2Style';
            }
        }
    };
    SeataGuestComponent.prototype.getservers = function () {
        var _this = this;
        this.select_tab = 'servers';
        this.iswaitlistOpen = false;
        this.isserversOpen = true;
        this.seataguestService.getservers(this.restID).subscribe(function (res) {
            _this.servers = res._Data;
            console.log(_this.servers);
        });
    };
    SeataGuestComponent.prototype.getwaitlist = function () {
        var _this = this;
        this.select_tab = 'waitlist';
        this.isserversOpen = false;
        this.iswaitlistOpen = true;
        this.seataguestService.getwaitlist(this.restID).subscribe(function (res) {
            _this.waitlist = res._Data;
            _this.waitlist.map(function (user) {
                var currentDate = new Date();
                var currenthours = currentDate.getHours();
                var currentminutes = currentDate.getMinutes();
                var currenttime = (currenthours * 60) + currentminutes;
                if (user.WaitListTime != null) {
                    var waitedtime = new Date(user.WaitListTime);
                    var hours = waitedtime.getHours();
                    var minutes = waitedtime.getMinutes();
                    var remainingwaitedtime = (hours * 60) + (minutes);
                    var totalremainingtime = currenttime - remainingwaitedtime;
                    user.totalremainingtime = totalremainingtime;
                }
            });
        });
    };
    SeataGuestComponent.prototype.PreviousPage = function () {
        console.log("coming");
        if (this.unique_id == "addguest") {
            this.router.navigate(['addGuest']);
        }
        else if (this.unique_id == "edit_guest") {
            this.sharedService.editguestDetails = this.user_accept;
            this.router.navigate(['editguest']);
        }
        else if (this.unique_id == "notify") {
            this.router.navigate(['waitlist']);
        }
        else if (this.unique_id == "accept_offer") {
            this.router.navigate(['waitlist']);
        }
        else if (this.unique_id == "accept_offersidenav") {
            this.router.navigate(['waitlist']);
        }
        else {
            this.router.navigate(['waitlist']);
        }
    };
    SeataGuestComponent.prototype.confirm = function () {
        var _this = this;
        // console.log("comingh");
        var table_array = [];
        this.selected_objects.forEach(function (table, index) {
            if (table.TableStatus == true) {
                table_array.push(table.TableNumber);
            }
        });
        var table_numbers = table_array.join();
        if (this.restID) {
            var restID = JSON.parse(this.restID);
        }
        if (this.user_accept.PartySize) {
            var partysize = JSON.parse(this.user_accept['PartySize']);
        }
        if (this.user_accept.waitquoted) {
            var QuotedTime = JSON.parse(this.user_accept['waitquoted']);
        }
        if (this.unique_id == "addguest") {
            console.log("coming into addguest");
            console.log(this.selected_objects);
            console.log(this.user_accept);
            var addobj = {
                "RestaurantID": restID,
                "FullName": this.user_accept.UserName,
                "Email": this.user_accept.email,
                "ContactNumber": this.user_accept.mobile,
                "UserType": 'TU',
                "PartySize": partysize,
                "QuotedTime": QuotedTime,
                "Relationship": this.user_accept.relationship,
                "ThisVisit": this.user_accept.visit,
                "FoodAndDrink": this.user_accept.food,
                "SeatingPreferences": this.user_accept.seating,
                "Description": this.user_accept.notes,
                "WaitListTime": null,
                "BookingStatus": 3,
                "TableNumbers": table_numbers,
            };
            this.seataguestService.newguestconfirmation(addobj).subscribe(function (res) {
                console.log(res);
                if (res._ErrorCode == '50000') {
                    console.log("coming inoto failure");
                    _this.sharedService.email_error = "Email Id Already Exists";
                    _this.router.navigate(['addGuest']);
                }
                else {
                    _this.sharedService.email_error = '';
                    _this.router.navigate(['seated']);
                }
            });
        }
        else if (this.unique_id == "edit_guest") {
            console.log("coming into editguest");
            //  var restaurentID = JSON.parse(this.user_accept.RestaurantID)
            var editobject = {
                "RestaurantID": this.user_accept.RestaurantID,
                "TruflUserID": this.user_accept.TruflUserID,
                "FullName": this.user_accept.UserName,
                "Email": this.user_accept.Email,
                "ContactNumber": this.user_accept.PhoneNumber,
                "Relationship": this.user_accept.Relationship,
                "ThisVisit": this.user_accept.ThisVisit,
                "FoodAndDrink": this.user_accept.FoodAndDrinkPreferences,
                "SeatingPreferences": this.user_accept.SeatingPreferences,
                "Description": this.user_accept.Description,
                "BookingID": this.user_accept.BookingID,
                "TableNumbers": table_numbers
            };
            console.log(editobject);
            this.seataguestService.editguestconfirmation(editobject).subscribe(function (res) {
                console.log(res);
                // this.sharedService._editguest_bio = editobject;
                if (res._ErrorCode == '50000') {
                    _this.sharedService.email_error = "Email Id Already Exists";
                    _this.router.navigate(['editguest']);
                    //  this.sharedService.editguestDetails = this.user_accept;
                    localStorage.setItem('editguestDetails', JSON.stringify(_this.user_accept));
                }
                else {
                    _this.sharedService.email_error = '';
                    // this.sharedService._editguest_bio = '';
                    _this.router.navigate(['seated']);
                }
            });
        }
        else if (this.unique_id == "notify") {
            this.seataguestService.UpdateWaitListNotify(this.user_accept.BookingID, table_numbers).subscribe(function (res) {
                _this.router.navigate(['seated']);
            });
        }
        else if (this.unique_id == "accept_offer") {
            this.seataguestService.UpdateWaitListAccept(this.user_accept.BookingID, table_numbers).subscribe(function (res) {
            });
            this.router.navigate(['seated']);
        }
        else if (this.unique_id == "accept_offersidenav") {
            console.log("coming into accept_offer sidenav");
            this.seataguestService.UpdateWaitListAccept(this.user_accept.BookingID, table_numbers).subscribe(function (res) {
            });
            this.router.navigate(['seated']);
        }
        else if (this.unique_id == "tables_sidenav") {
            console.log("coming into seated sidenav");
            this.seataguestService.UpdateWaitListAccept(this.user_accept.BookingID, table_numbers).subscribe(function (res) {
            });
            this.router.navigate(['seated']);
        }
    };
    return SeataGuestComponent;
}());
SeataGuestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'seataGuest',
        template: __webpack_require__("../../../../../src/app/seataguest/seataguest.component.html"),
        styles: [__webpack_require__("../../../../../src/app/seataguest/seataguest.style.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__seataguest_service__["a" /* SeataguestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__seataguest_service__["a" /* SeataguestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_Shared_Service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_Shared_Service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SeataGuestComponent);

var _a, _b, _c;
//# sourceMappingURL=seataguest.component.js.map

/***/ }),

/***/ "../../../../../src/app/seataguest/seataguest.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeataguestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_Shared_Service__ = __webpack_require__("../../../../../src/app/shared/Shared.Service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_appsettings__ = __webpack_require__("../../../../../src/app/shared/appsettings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SeataguestService = (function () {
    // public RestaurantID = 1;
    function SeataguestService(http, sharedService) {
        this.http = http;
        this.sharedService = sharedService;
    }
    SeataguestService.prototype.getseateddetails = function (restID) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_4__shared_appsettings__["a" /* constant */].truflBase + 'WaitListUser/GetSeatAGuest/' + restID).map(function (res) { return res.json(); });
    };
    SeataguestService.prototype.getimages = function () {
        return this.http.get('assets/images.json').map(function (res) { return res.json(); });
    };
    SeataguestService.prototype.getservers = function (restID) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_4__shared_appsettings__["a" /* constant */].truflBase + 'WaitListUser/GetServerwiseSnapshot/' + restID).map(function (res) { return res.json(); });
    };
    SeataguestService.prototype.getwaitlist = function (restID) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_4__shared_appsettings__["a" /* constant */].truflBase + 'WaitListUser/GetWaitListUsers/' + restID).map(function (res) { return res.json(); });
    };
    SeataguestService.prototype.newguestconfirmation = function (newguestdetails) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_4__shared_appsettings__["a" /* constant */].truflBase + 'Hostess/SaveRestaurantGuestImmediately', newguestdetails).map(function (res) { return res.json(); });
    };
    SeataguestService.prototype.editguestconfirmation = function (editguestdetails) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_4__shared_appsettings__["a" /* constant */].truflBase + 'Hostess/UpdateRestaurantGuestImmediately', editguestdetails).map(function (res) { return res.json(); });
    };
    SeataguestService.prototype.UpdateWaitListNotify = function (BookingID, TableNumbers) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_4__shared_appsettings__["a" /* constant */].truflBase + 'WaitListUser/UpdateWaitListAccept/' + BookingID + '/' + TableNumbers, {}).map(function (res) { return res.json(); });
    };
    SeataguestService.prototype.UpdateWaitListAccept = function (BookingID, TableNumbers) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_4__shared_appsettings__["a" /* constant */].truflBase + 'WaitListUser/UpdateWaitListAccept/' + BookingID + '/' + TableNumbers, {}).map(function (res) { return res.json(); });
    };
    return SeataguestService;
}());
SeataguestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_Shared_Service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_Shared_Service__["a" /* SharedService */]) === "function" && _b || Object])
], SeataguestService);

var _a, _b;
//# sourceMappingURL=seataguest.service.js.map

/***/ }),

/***/ "../../../../../src/app/seataguest/seataguest.style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\r\n    width: 134px;\r\n    border-radius: 40px;\r\n    text-align: center;\r\n}\r\n\r\n.highlight_border {\r\n    border: 3px solid white;\r\n}\r\n\r\n.default {\r\n    background: white;\r\n    color: gray;\r\n}\r\n\r\ntable th {\r\n    border-bottom: none\r\n}\r\n\r\n.h4Style {\r\n    display: inline-block;\r\n    /*position: absolute;*/\r\n    width: 13%;\r\n    /*height: auto;*/\r\n    margin-left: 9px;\r\n    margin-top: 2%;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n    font-family: 'Avenir Next condendsed';\r\n    color: #ffffff;\r\n }\r\n\r\n.fontSize30 {\r\n    font-family:'Roboto Slab';\r\n    font-size: 48px;\r\n    font-weight: bold;\r\n    color:#ffffff;\r\n}\r\n\r\n.confBtn {\r\n    float: right;\r\n    margin-right: 9%;\r\n    width: 35%;\r\n    \r\n}\r\n.confBtn:hover,.confBtn:focus{\r\n    cursor:default;\r\n}\r\n.changcolor:hover {\r\n    cursor:pointer!important;\r\n}\r\n\r\n.HostNmBtn {\r\n    border-radius: 20px;\r\n    width: auto;\r\n    padding: 5px 10px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n    text-align: center;\r\n    outline: none;\r\n}\r\n.nav-tabs {\r\n    border-bottom: none;\r\n}\r\n\r\n.activelist {\r\n    border-bottom: 1px solid white;\r\n    color: white !important;\r\n}\r\n\r\n.activeservers {\r\n    border-bottom: 1px solid white;\r\n    color: white !important;\r\n}\r\n\r\n.list-inline li a {\r\n    font-family: 'Avenir Next condendsed';\r\n    font-size: 22px;\r\n    color: #DEDEDE;\r\n}\r\n\r\n.list-inline li a:hover {\r\n    cursor: pointer;\r\n}\r\n/*!\r\n * animate.css -http://daneden.me/animate\r\n * Version - 3.5.1\r\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\r\n *\r\n * Copyright (c) 2016 Daniel Eden\r\n */\r\n/*\r\n.blur {\r\n    filter: blur(3px);\r\n} */\r\n.blur {\r\n    opacity: 0.2;\r\n}\r\n/*ul li a {\r\n    color: #dae1e6 !important;\r\n}*/\r\n.animated {\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n@-webkit-keyframes fadeInLeft {\r\n    0% {\r\n        opacity: 0;\r\n        -webkit-transform: translateX(-20px);\r\n    }\r\n\r\n    100% {\r\n        opacity: 1;\r\n        -webkit-transform: translateX(0);\r\n    }\r\n}\r\n\r\n@keyframes fadeInLeft {\r\n    0% {\r\n        opacity: 0;\r\n        -webkit-transform: translateX(-20px);\r\n                transform: translateX(-20px);\r\n    }\r\n\r\n    100% {\r\n        opacity: 1;\r\n        -webkit-transform: translateX(0);\r\n                transform: translateX(0);\r\n    }\r\n}\r\n\r\n.fadeInLeft {\r\n    -webkit-animation-name: fadeInLeft;\r\n    animation-name: fadeInLeft;\r\n}\r\n\r\n#close {\r\n    cursor: pointer;\r\n}\r\ntable tr {\r\n    border-bottom: 1px solid white\r\n}\r\n\r\n#profileSection {\r\n    background: #394165;\r\n    /*height: calc(100vh - 100px);*/\r\n    padding: 0;\r\n    border-right: rgba(140, 140, 144, 0.7) solid 1px;\r\n    /*overflow-y: auto;*/\r\n    z-index: 9999;\r\n}\r\n\r\n/*TABLE Snap CSS*/\r\n\r\n.paddingLftBtm {\r\n    padding-right: 12px;\r\n    padding-left: 12px;\r\n    padding-top: 24px;\r\n}\r\n\r\n.padLeft7 {\r\n    padding-left: 7px;\r\n}\r\n.Top1em {\r\n    top:1em;\r\n}\r\n.divCol2Style {\r\n    width: 98%;\r\n    height: 176px;\r\n    border: rgba(140, 140, 144, 0.7) solid 2px;\r\n}\r\n\r\n.divCol2StyleDrop {\r\n    height: 176px !important;\r\n    border: white solid 5px;\r\n}\r\n\r\n.Hostess1 {\r\n    background-color: #477B6C;\r\n}\r\n\r\n.Hostess2 {\r\n    background-color: #8D6C8D;\r\n}\r\n\r\n.Hostess3 {\r\n    background-color: #51919A;\r\n}\r\n\r\n.Hostess4 {\r\n    background-color: #9A8A4A;\r\n}\r\n\r\n.Hostess5 {\r\n    background-color: #9A7047;\r\n}\r\n\r\n.Hostess6 {\r\n    background-color: #48588E;\r\n}\r\n\r\n.Hostess7 {\r\n    background-color: #919A62;\r\n}\r\n\r\n.mrg0 {\r\n    margin: 0px !important;\r\n}\r\n\r\n.padtop28 {\r\n    padding-top: 28px !important;\r\n}\r\n\r\n.imgDivHeight {\r\n    height: 75px;\r\n    position: relative;\r\n    padding-left: 15%;\r\n    padding-top: 10%;\r\n    padding-bottom: 4%;\r\n    padding-right: 26px;\r\n}\r\n\r\n.imgDivLeft8Top2 {\r\n    left: 8px;\r\n}\r\n\r\n.imgDivLeft10Top6 {\r\n    left: 10px;\r\n}\r\n\r\n.imgDivLeft21Top8 {\r\n    left: 21px;\r\n}\r\n\r\n.mrgTop4 {\r\n    margin-top: 4%;\r\n    margin-bottom: 3%;\r\n}\r\n\r\n.pEllipsis {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    padding-left: 13%;\r\n    padding-right: 10%;\r\n}\r\n\r\n.padLeft15 {\r\n    padding-left: 15%\r\n}\r\n\r\n.tblNoSpan {\r\n    position: absolute;\r\n    left: 74px;\r\n    top: 21px;\r\n    font-size: xx-large;\r\n    font-weight: bold;\r\n}\r\n\r\n.tblNoSpanTblNo10 {\r\n    position: absolute;\r\n    left: 65px;\r\n    top: 21px;\r\n    font-size: xx-large;\r\n    font-weight: bold;\r\n}\r\n\r\n.top6SpanTblNo0To9 {\r\n    position: absolute;\r\n    left: 73px;\r\n    top: 26px;\r\n    font-size: xx-large;\r\n    font-weight: bold;\r\n}\r\n\r\n.top6SpanTblNo10 {\r\n    position: absolute;\r\n    left: 65px;\r\n    top: 30px;\r\n    font-size: xx-large;\r\n    font-weight: bold;\r\n}\r\n\r\n.top8SpanTblNo0To9 {\r\n    position: absolute;\r\n    left: 61px;\r\n    top: 34px;\r\n    font-size: xx-large;\r\n    font-weight: bold;\r\n}\r\n\r\n.top8SpanTblNo10 {\r\n    position: absolute;\r\n    left: 53px;\r\n    top: 33px;\r\n    font-size: xx-large;\r\n    font-weight: bold;\r\n}\r\n\r\n.imgPosition {\r\n    position: absolute;\r\n}\r\n\r\n.divBlur {\r\n    -webkit-filter: blur(1px);\r\n            filter: blur(1px);\r\n}\r\n\r\n.collapsImg {\r\n    position: fixed;\r\n    top: 50%;\r\n    right: 0.5%;\r\n}\r\n\r\n.collapsImgClose {\r\n    position: fixed;\r\n    top: 49%;\r\n    left: 9px;\r\n}\r\n\r\n.collapsImg, .collapsImgClose {\r\n    cursor: pointer;\r\n}\r\n\r\n.guestmaindata {\r\n    background: #394165;\r\n    min-height: calc(100vh - 100px);\r\n    height: 100%;\r\n    padding: 0px !important;\r\n    position: absolute;\r\n    Z-INDEX: 1;\r\n    width: 22px;\r\n    border-right: rgba(140, 140, 144, 0.7) solid 1px;\r\n}\r\n\r\n.heightCal {\r\n    overflow-y: auto;\r\n    height: calc(101vh - 150px);\r\n}\r\n\r\n.HostNmBtn span {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    margin-right: 1em;\r\n}\r\n\r\n.guestmain {\r\n    padding-top: 20px;\r\n}\r\n\r\n.guesttitle{\r\n    padding-left: 3em;\r\n}\r\n.guesttitlecol6 {\r\n    padding-left: 2em;\r\n}\r\n.guesttitle p,guesttitlecol6 p{\r\n    color: #fff;\r\n    font-size: 14px;\r\n}\r\n\r\n/*Bottom Cancle Button*/\r\n.CancBtnDiv {\r\n    background-color: black;\r\n    position: fixed;\r\n    bottom: 0px;\r\n    left: 42em;\r\n    padding-bottom: 0.5em;\r\n    padding-top: 0.5em;\r\n}\r\n\r\n.cancleBtnDivBig {\r\n    background-color: black;\r\n    position: fixed;\r\n    bottom: 0px;\r\n    left: 0em;\r\n    padding-bottom: 1em;\r\n    padding-top: 1em;\r\n}\r\n\r\n.padRight {\r\n    padding-right: 2.4em;\r\n}\r\n.selectguest {\r\n    float: left;\r\n    width: 100%;\r\n    margin: 10px 0;\r\n    padding-left: 0px;\r\n}\r\n.mrgbottom4em {\r\n    margin-bottom: 4.1em;\r\n}\r\n@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {\r\n    div .paddingLftBtm {\r\n        width: 191px;\r\n    }\r\n\r\n    #HostWiseTblDiv div.paddingLftBtm {\r\n        width: 197px;\r\n    }\r\n\r\n    .paddingLftBtm {\r\n        padding-top: 24px;\r\n    }\r\n\r\n    .imgDivLeft8Top2 {\r\n        left: 0px;\r\n    }\r\n\r\n    .imgDivLeft10Top6 {\r\n        left: 0px;\r\n    }\r\n\r\n    .imgDivLeft21Top8 {\r\n        left: 13px;\r\n    }\r\n\r\n    .tblNoSpan {\r\n        position: absolute;\r\n        left: 71px;\r\n        top: 18px;\r\n        font-size: xx-large;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .tblNoSpanTblNo10 {\r\n        position: absolute;\r\n        left: 62px;\r\n        top: 18px;\r\n        font-size: xx-large;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .top8SpanTblNo10 {\r\n        position: absolute;\r\n        left: 51px;\r\n        top: 32px;\r\n        font-size: xx-large;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .divCol2Style {\r\n        width: 100%;\r\n        height: 166px;\r\n        border: rgba(140, 140, 144, 0.7) solid 2px;\r\n    }\r\n\r\n    .col11Width {\r\n        width: 98.666667%;\r\n    }\r\n    /*Other contents MediaQuery */\r\n    .confBtn {\r\n        float: right;\r\n        margin-right: 15%;\r\n        width: 35%;\r\n    }\r\n\r\n    .mrgLeft28 {\r\n        margin-left: 0px;\r\n    }\r\n\r\n    \r\n\r\n    .guestmain {\r\n        padding-top: 20px;\r\n        padding-left: 2em;\r\n    }\r\n\r\n    .mrgLeft3em {\r\n        margin-left: 0em;\r\n    }\r\n\r\n    .CancBtnDiv {\r\n        background-color: black;\r\n        position: fixed;\r\n        bottom: 0px;\r\n        left: 32em;\r\n        padding-bottom: 0.5em;\r\n        padding-top: 0.5em;\r\n    }\r\n\r\n    .padRight {\r\n        padding-right: 4.4em;\r\n    }\r\n    /* Scroll */\r\n    #TblDiv {\r\n        height: calc(93.6vh - 107px);\r\n        overflow-y: auto;\r\n    }\r\n}\r\n\r\n.errorMsgStyle {\r\n    font-size: 12px;\r\n    font-family: 'Avenir Next';\r\n    font-weight: bold;\r\n    color: #FF6E6E;\r\n}\r\n\r\n\r\n/* Custom Scroll*/\r\n#TblDiv {\r\n    height: calc(92.5vh - 107px);\r\n    overflow-y: auto;\r\n}\r\n\r\n#TblDiv::-webkit-scrollbar-track {\r\n    border: 9px solid #394165;\r\n    background-color: #f5f5f5;\r\n    background-clip: content-box;\r\n}\r\n\r\n#TblDiv::-webkit-scrollbar {\r\n    width: 19px;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n#TblDiv::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    background-color: #4F5879;\r\n}\r\n\r\n/* SideNav*/\r\n.sideNav {\r\n    background: #394165;\r\n    padding-right: 0px;\r\n}\r\n.sidenavTable {\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n    font-family: 'Avenir Next condendsed';\r\n    color: #ffffff;\r\n    vertical-align: middle;\r\n}\r\n.thWidth15 {\r\n    width: 19%;\r\n}\r\n.thWidth40 {\r\n    width: 40%;\r\n}\r\n.guestinfo {\r\n    font-weight: bold;\r\n    font-size: 22px;\r\n    font-family: Avenir Next condendsed;\r\n    color: #CBCBD1;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/seated/seated.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sbtbtn {\r\n    margin: 0 0 10px 0;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.sbtbtn button {\r\n    background: #0078d7;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    padding: 0 15px;\r\n    float: left;\r\n    outline:none;\r\n}\r\n\r\n\r\n.loader {\r\n    border: 16px solid #f3f3f3; /* Light grey */\r\n    border-top: 16px solid #3498db; /* Blue */\r\n    border-radius: 50%;\r\n    width: 100px;\r\n    height: 100px;\r\n    -webkit-animation: spin 2s linear infinite;\r\n            animation: spin 2s linear infinite;\r\n    margin:0 auto;\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n   \r\n}\r\n\r\n@-webkit-keyframes spin {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes spin {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n}\r\n.highlight{\r\n    opacity:1.6 !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/seated/seated.component.html":
/***/ (function(module, exports) {

module.exports = "<shared-header></shared-header>\r\n    <div class=\"col-md-12\">\r\n        <div class=\"col-md-12 snapmain\">\r\n            <table class=\"table table-responsive\" id=\"GetSeatedTbl\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>GUEST<br />NAME</th>\r\n                        <th class=\"alignCenter\">TRUFL<br />PAYMENT</th>\r\n                        <th class=\"alignCenter\">PARTY<br />SIZE</th>\r\n                        <th class=\"alignCenter\">TABLE<br />NUMBER</th>\r\n                        <th class=\"alignCenter\">TIME<br />SEATED</th>\r\n                        <th class=\"alignCenter\">TIME<br />REMAINING</th>\r\n                        <th class=\"alignCenter\">SLOW <br />+5MIN</th>\r\n                        <th class=\"alignCenter\">JUMP<br />-5MIN</th>\r\n                        <th class=\"alignCenter\">CHECK<br />DROP</th>\r\n                        <th class=\"alignCenter\">EMPTY<br />TABLE</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr  *ngFor=\"let seatsinfo of seatedinfo; let i = index\">\r\n                        <td class=\"fontsize18\">{{seatsinfo.TUserName}}</td>\r\n                        <td class=\"nOFontStyle alignCenter\">{{seatsinfo.OfferAmount}}</td>\r\n                        <td class=\"nOFontStyle alignCenter\">{{seatsinfo.PartySize}}</td>\r\n                        <td class=\"nOFontStyle alignCenter\">{{seatsinfo.TableNumbers}}</td>\r\n                        <td class=\"nOFontStyle alignCenter\">{{seatsinfo.totalremainingseatedtime}}</td>\r\n                        <td class=\"nOFontStyle alignCenter\">{{seatsinfo.remainingtime}}</td>\r\n                        <td class=\"alignCenter\">\r\n                            <a (click)=\"slow(seatsinfo,seatsinfo.BookingID)\"><img class=\"selected imgWidth30\" alt=\"\" src=\"../../../../wwwroot/images/slow.png\" /> </a>\r\n                        </td>\r\n                        <td class=\"alignCenter\">\r\n                            <a (click)=\"jump(seatsinfo,seatsinfo.BookingID)\"><img alt=\"\" class=\"imgWidth30\" src=\"../../../../wwwroot/images/jump.png\" /> </a>\r\n                        </td>\r\n                        <td class=\"alignCenter\">\r\n                            <a (click)=\"checkDrop(seatsinfo,seatsinfo.BookingID)\"><img alt=\"\" class=\"imgWidth28\" src=\"../../../../wwwroot/images/check.png\"  [ngClass]=\"seatsinfo.CheckReceived == true ? 'highlight' : ''\"/> </a>\r\n                        </td>\r\n                        <td class=\"alignCenter\">\r\n                            <a (click)=\"emptyTable(seatsinfo.BookingID)\"><img alt=\"\" class=\"imgWidth25\" src=\"../../../../wwwroot/images/empty.png\" /> </a>\r\n                        </td>\r\n                    </tr>\r\n            </table>\r\n           <div *ngIf=\"!hasData()\">No Data Found</div> \r\n            <div>\r\n                <img class=\"addImg\" src=\"../../../../wwwroot/images/bigadd.png\" />\r\n            </div>\r\n      </div>\r\n        \r\n </div>\r\n<div class=\"loader\" *ngIf=\"load\"></div>\r\n<turnOngetseated></turnOngetseated>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/seated/seated.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeatedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__seated_service__ = __webpack_require__("../../../../../src/app/seated/seated.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_login_service__ = __webpack_require__("../../../../../src/app/shared/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__defaultsettings_othersettings_other_settings_service__ = __webpack_require__("../../../../../src/app/defaultsettings/othersettings/other-settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SeatedComponent = (function () {
    function SeatedComponent(seatedService, loginService, _othersettings, router, _toastr, vRef) {
        this.seatedService = seatedService;
        this.loginService = loginService;
        this._othersettings = _othersettings;
        this.router = router;
        this._toastr = _toastr;
        this.seatedinfo = [];
        this.isenabled = false;
        this.items = [];
        this.isactive = false;
        this.load = false;
        this.arr = ['Seated', 'AppServed', 'MenuServed', 'DesertServed', 'CheckReceived', 'Boozing', 'Empty'];
        this.toggles = [
            { value: 0 },
            { value: 1 }
        ];
        this._toastr.setRootViewContainerRef(vRef);
        this.restaurantName = this.loginService.getRestaurantName();
        this.restarauntid = this.loginService.getRestaurantId();
        //called first time before the ngOnInit()
    }
    SeatedComponent.prototype.ngOnInit = function () {
        this.getSeatedDetails(this.restarauntid);
    };
    SeatedComponent.prototype.getSeatedDetails = function (restarauntid) {
        var _this = this;
        var that = this;
        this._othersettings.getOtherSettingsDetails(restarauntid).subscribe(function (res) {
            _this.othersettingsdetails = res._Data;
            console.log(_this.othersettingsdetails[0].DiningTime, " this.othersettingdetailskhlh");
            _this.otherdiningtime = _this.othersettingsdetails[0].DiningTime;
            _this.seatedService.getSeatedDetails(restarauntid).subscribe(function (res) {
                _this.seatedinfo = res._Data;
                console.log(_this.seatedinfo, "this.seatedinfo");
                _this.seatedinfo.map(function (user) {
                    user.slowcount = 0;
                    user.jumpcount = 0;
                    user.diningtime = that.otherdiningtime;
                    console.log;
                    var currentDate = new Date();
                    var currenthours = currentDate.getHours();
                    var currentminutes = currentDate.getMinutes();
                    var totalcurrenttime = (currenthours * 60) + currentminutes;
                    if (user.SeatedTime != null) {
                        var seatedtime = new Date(user.SeatedTime);
                        var hours = seatedtime.getHours();
                        var minutes = seatedtime.getMinutes();
                        var totalseatedtime = (hours * 60) + (minutes);
                        var totalremainingtime = totalcurrenttime - totalseatedtime;
                        console.log(totalremainingtime, "totalremainingtime");
                        user.totalremainingtime = totalremainingtime;
                        user.totalremainingseatedtime = totalremainingtime;
                        user.remainingtime = (user.diningtime - totalremainingtime) + user.ExtraTime;
                    }
                });
            });
        });
    };
    SeatedComponent.prototype.get = function (data, type) {
        var details = {
            "RestaurantID": data['RestaurantID'],
            "TruflUserID": data['TruflUserID'],
            "AmenitiName": type,
            "AmenitiChecked": !data[type]
        };
        this.isenabled = true;
        if (this.items.length) {
            var index = this.items.findIndex(function (item) {
                return item.TruflUserID === data['TruflUserID'] && item.AmenitiName === type;
            });
            if (index >= 0) {
                this.items[index] = details;
            }
            else {
                this.items.push(details);
            }
        }
        else {
            this.items.push(details);
        }
    };
    SeatedComponent.prototype.emptyTable = function (bookingid) {
        this.seatedService.postUpdateEmptyBookingStatus(bookingid).subscribe(function (res) {
        });
        this.getSeatedDetails(this.restarauntid);
    };
    SeatedComponent.prototype.checkDrop = function (seatinfo, bookingid) {
        this.seatedService.postUpdateCheckReceived(bookingid).subscribe(function (res) {
        });
        if (seatinfo.BookingID == bookingid) {
            seatinfo.CheckReceived = true;
        }
    };
    SeatedComponent.prototype.slow = function (seatedinfo, bookingid) {
        var slowtime;
        if (seatedinfo.slowcount >= 1) {
            seatedinfo.slowcount = 0;
        }
        seatedinfo.slowcount++;
        seatedinfo.remainingtime += seatedinfo.slowcount * 5;
        slowtime = seatedinfo.slowcount * 5;
        console.log(slowtime, "slowtimejkllpjjop");
        seatedinfo.jumpcount = 0;
        this.seatedService.postUpdateExtraTime(bookingid, slowtime).subscribe(function (res) {
        });
        console.log(seatedinfo, "this.jumpcount");
    };
    SeatedComponent.prototype.jump = function (seatedinfo, bookingid) {
        var jumptime;
        if (seatedinfo.jumpcount >= 1) {
            seatedinfo.jumpcount = 0;
        }
        seatedinfo.jumpcount++;
        seatedinfo.remainingtime -= seatedinfo.jumpcount * 5;
        jumptime = "-" + seatedinfo.jumpcount * 5;
        console.log(jumptime, "jumptimefhdgg");
        seatedinfo.slowcount = 0;
        this.seatedService.postUpdateExtraTime(bookingid, jumptime).subscribe(function (res) {
        });
        console.log(seatedinfo, "this.jumpcount");
    };
    //routing
    SeatedComponent.prototype.waitlistPage = function () {
        this.router.navigateByUrl('/waitlist');
    };
    SeatedComponent.prototype.seatedPage = function () {
        this.router.navigateByUrl('/seated');
    };
    SeatedComponent.prototype.snapshotPage = function () {
        this.router.navigateByUrl('/snapshot');
    };
    SeatedComponent.prototype.settingsPage = function () {
        this.router.navigateByUrl('/defaultSettings');
    };
    SeatedComponent.prototype.hasData = function () {
        return (this.seatedinfo != null && this.seatedinfo.length > 0);
    };
    return SeatedComponent;
}());
SeatedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'seated',
        template: __webpack_require__("../../../../../src/app/seated/seated.component.html"),
        styles: [__webpack_require__("../../../../../src/app/seated/seated.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__["ToastOptions"]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__seated_service__["a" /* SeatedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__seated_service__["a" /* SeatedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__defaultsettings_othersettings_other_settings_service__["a" /* OtherSettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__defaultsettings_othersettings_other_settings_service__["a" /* OtherSettingsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _f || Object])
], SeatedComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=seated.component.js.map

/***/ }),

/***/ "../../../../../src/app/seated/seated.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeatedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__ = __webpack_require__("../../../../../src/app/shared/appsettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SeatedService = (function () {
    function SeatedService(http) {
        this.http = http;
    }
    //get seated details
    SeatedService.prototype.getSeatedDetails = function (restarauntid) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + 'Hostess/' + 'GetSeatedUsersList/' + restarauntid).map(function (res) { return res.json(); });
    };
    //empty table post service
    SeatedService.prototype.postUpdateEmptyBookingStatus = function (bookingid) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + 'WaitListUser/' + 'UpdateEmptyBookingStatus/' + bookingid, '').map(function (res) { return res.json(); });
    };
    //updating extra times using low and jump count
    SeatedService.prototype.postUpdateExtraTime = function (bookingid, addtime) {
        console.log("postUpdateExtraTime", bookingid + addtime);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + 'Hostess/' + 'UpdateExtraTime/' + bookingid + '/' + addtime, '').map(function (res) { return res.json(); });
    };
    //updating checkreceived
    SeatedService.prototype.postUpdateCheckReceived = function (bookingid) {
        console.log("postUpdateCheckReceived", bookingid);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + 'Hostess/' + 'UpdateCheckReceived/' + bookingid, '').map(function (res) { return res.json(); });
    };
    return SeatedService;
}());
SeatedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], SeatedService);

var _a;
//# sourceMappingURL=seated.service.js.map

/***/ }),

/***/ "../../../../../src/app/selectselections/select-sections.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_appsettings__ = __webpack_require__("../../../../../src/app/shared/appsettings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SelectService = (function () {
    //  public RestaurentId: any;
    function SelectService(http) {
        this.http = http;
    }
    SelectService.prototype.getDetails = function (restID) {
        //  this.RestaurentId = 1;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_3__shared_appsettings__["a" /* constant */].truflBase + 'WaitListUser/GetRestaurantOpenSections/' + restID).map(function (res) { return res.json(); });
    };
    SelectService.prototype.updateselection = function (selectiondetails) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_3__shared_appsettings__["a" /* constant */].truflBase + 'WaitListUser/UpdateRestaurantActiveSections', selectiondetails).map(function (res) { return res.json(); });
    };
    return SelectService;
}());
SelectService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], SelectService);

var _a;
//# sourceMappingURL=select-sections.service.js.map

/***/ }),

/***/ "../../../../../src/app/selectselections/select-selections.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"customheader\">\r\n    <div class=\"customheaderleft\">\r\n        <h2>Select Sections</h2>\r\n    </div>\r\n    <div class=\"customheaderright\">\r\n        <a (click)=\"back()\" class=\"secondary-btn\">\r\n            Back\r\n        </a>\r\n        <a (click)=\"next()\" class=\"primary-btn\">\r\n            Next\r\n        </a>\r\n    </div>\r\n</div>\r\n<div class=\"col-md-12 col-sm-12\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 col-sm-12 mrgTopBottom56\">\r\n            <span class=\"servicetext\">Tap to close or open sections for tonight's service. </span>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 col-sm-12 selectfloor\">\r\n            <div class=\"col-md-10\">\r\n                <ul class=\"mrgBottom0\">\r\n                    <li id=\"imm\" class=\"col-sm-3\" *ngFor=\"let section of image_changes;let i=index\" [ngStyle]=\"{ 'background-image': 'url('+imageIterate+section.image+')'}\" (click)=\"select(section,i)\">\r\n                        <a>\r\n                            <h3 *ngIf=\"section.IsActive==true\">{{section.FloorName}}</h3>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/selectselections/select-selections.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectSelectionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_Shared_Service__ = __webpack_require__("../../../../../src/app/shared/Shared.Service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_sections_service__ = __webpack_require__("../../../../../src/app/selectselections/select-sections.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SelectSelectionsComponent = (function () {
    function SelectSelectionsComponent(router, sharedService, selectService, _sanitizer) {
        this.router = router;
        this.sharedService = sharedService;
        this.selectService = selectService;
        this._sanitizer = _sanitizer;
        this.array = [];
        this.data = [];
        this.finalarray = [];
        this.image_changes = [];
        this.restID = localStorage.getItem('restaurantid');
    }
    SelectSelectionsComponent.prototype.ngOnInit = function () {
        this.getDetails(this.restID);
    };
    SelectSelectionsComponent.prototype.getDetails = function (restID) {
        var _this = this;
        this.selectService.getDetails(restID).subscribe(function (res) {
            _this.selectiondata = res._Data;
            _this.sharedService.arraydata.push(_this.selectiondata);
            _this.selectiondata.forEach(function (itemdata, index) {
                if (itemdata.IsActive == false) {
                    var obj = {
                        "RestaurantID": itemdata.RestaurantID,
                        "FloorNumber": itemdata.FloorNumber,
                        "FloorName": itemdata.FloorName,
                        "image": itemdata.ClosedImage,
                        "IsActive": itemdata.IsActive
                    };
                    _this.image_changes.push(obj);
                }
                else {
                    var obj = {
                        "RestaurantID": itemdata.RestaurantID,
                        "FloorNumber": itemdata.FloorNumber,
                        "FloorName": itemdata.FloorName,
                        "image": itemdata.FloorImage,
                        "IsActive": itemdata.IsActive
                    };
                    _this.image_changes.push(obj);
                }
            });
            _this.imageIterate = 'data:image/JPEG;base64,';
            _this.selections = Object.assign({}, _this.selectiondata);
        });
    };
    SelectSelectionsComponent.prototype.back = function () {
        this.router.navigateByUrl('/startservice');
    };
    SelectSelectionsComponent.prototype.next = function () {
        this.router.navigateByUrl('/selectStaff');
        this.selectService.updateselection(this.array).subscribe(function (res) {
        });
    };
    SelectSelectionsComponent.prototype.select = function (section, index) {
        var _this = this;
        this.selectiondata.forEach(function (item, index) {
            if (item.FloorNumber == section.FloorNumber && section.IsActive == false) {
                _this.image_changes[index].IsActive = !_this.image_changes[index].IsActive;
                _this.image_changes[index].image = _this.selectiondata[index].FloorImage;
                return;
            }
            else {
                if (item.FloorNumber == section.FloorNumber && section.IsActive == true) {
                    _this.image_changes[index].IsActive = !_this.image_changes[index].IsActive;
                    _this.image_changes[index].image = _this.selectiondata[index].ClosedImage;
                    return;
                }
            }
        });
        var details = {
            "RestaurantID": section['RestaurantID'],
            "FloorNumber": section['FloorNumber'],
            "IsActive": section['IsActive'],
            "IsDelete": true
        };
        if (this.array.length) {
            var index_1 = this.array.findIndex(function (item) {
                return item.FloorNumber === section.FloorNumber;
            });
            if (index_1 >= 0) {
                this.array[index_1] = details;
            }
            else {
                this.array.push(details);
            }
        }
        else {
            this.array.push(details);
        }
    };
    return SelectSelectionsComponent;
}());
SelectSelectionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'selectSelections',
        template: __webpack_require__("../../../../../src/app/selectselections/select-selections.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_Shared_Service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_Shared_Service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__select_sections_service__["a" /* SelectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__select_sections_service__["a" /* SelectService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"]) === "function" && _d || Object])
], SelectSelectionsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=select-selections.component.js.map

/***/ }),

/***/ "../../../../../src/app/selectstaff/select-staff.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"customheader\">\r\n    <div class=\"customheaderleft\">\r\n        <h2>Select Staff</h2>\r\n    </div>\r\n    <div class=\"customheaderright\">\r\n        <a (click)=\"back()\" class=\"secondary-btn\">\r\n            Back\r\n        </a>\r\n        <a (click)=\"next()\" class=\"primary-btn\">\r\n            Next\r\n        </a>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"col-md-12\">\r\n    <div class=\"col-md-12 mrgTopBottom56\">\r\n        <span class=\"servicetext\">Who's on the clock tonight?</span>\r\n    </div>\r\n    <div class=\"col-md-12 padLeft9em\">\r\n        <div class=\"selectstaff\">\r\n            <ul>\r\n                <li *ngFor=\"let staffimage of result\">\r\n                    <a class=\"selected\" (click)=\"showProfile(staffimage, staffimage.seatNumbers, i)\">\r\n\r\n                        <img alt=\"\" class=\"imm\" src=\"data:image/JPEG;base64,{{staffimage.pic}}\" [ngClass]=\"staffimage.ActiveInd == 0 ? 'blur' : ''\" />\r\n                        <span class=\"imm fontStyle\" [ngClass]=\"staffimage.ActiveInd == 0 ? 'blur' : ''\">\r\n                            {{staffimage.FullName}}\r\n                        </span>\r\n                        <div *ngFor=\"let obj of staffimage.seatNumbers;let i=index;\"><h4 *ngIf=\"staffimage.ActiveInd == 1\" class=\"h4\">{{obj.StartTableNumber}}-{{obj.EndTableNumber}}</h4></div>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-2 animated fadeInRight\" id=\"profileSection\" *ngIf=\"isShow\">\r\n        <i aria-hidden=\"true\" id=\"close\" (click)=\"closeProfile()\" class=\"bladeIcon icon-close closeIconStyle\"></i>\r\n        <div class=\"slidetop\">\r\n            <img alt=\"\" src=\"data:image/JPEG;base64,{{currentRowInfo.pic}}\" />\r\n            <span class=\"name\">{{currentRowInfo.FullName}}</span>\r\n        </div>\r\n        <div class=\"slideformmain\">\r\n            <div class=\"slidetoggle\">\r\n                <label class=\"fontFamily\">Open / Close</label>\r\n                <label class=\"switch\">\r\n                    <input type=\"checkbox\" [(ngModel)]=\"currentRowInfo.checked\" (ngModelChange)=\"updateServerStatus(currentRowInfo.checked, index)\">\r\n                    <span class=\"slider round\"></span>\r\n                </label>\r\n            </div>\r\n            <div *ngFor=\"let item of arr; let index = index\">\r\n                <div class=\"slideform\">\r\n                    <label>{{item.labelName1}} </label> <input name=\"item.name\" type=\"text\" [(ngModel)]=\"item.StartTableNumber\" (ngModelChange)=\"updateStartTableNumber(item.StartTableNumber, index)\" id=\"starttabnum\" #starttabnum=\"ngModel\" pattern=\"^[0-9]{1,}$\" required minlength=\"1\" />\r\n                    <label *ngIf=\"starttabnum.invalid && (starttabnum.dirty || starttabnum.touched)\" [ngStyle]=\"{'color': 'red'}\">\r\n                        <label *ngIf=\"starttabnum.errors.required\">\r\n                            starttablenumber is required.\r\n                        </label>\r\n                        <label *ngIf=\"starttabnum.errors.pattern\">\r\n                            starttablenumber should be number only\r\n                        </label>\r\n                    </label>\r\n                </div>\r\n                <div class=\"slideform\">\r\n                    <label>{{item.labelName2}} </label> <input name=\"item.name\" type=\"text\" [(ngModel)]=\"item.EndTableNumber\" (ngModelChange)=\"updateEndTableNumber(item.EndTableNumber, index)\" id=\"endtabnum\" #endtabnum=\"ngModel\" pattern=\"^[0-9]{1,}$\" required minlength=\"1\" />\r\n                    <label *ngIf=\"endtabnum.invalid && (endtabnum.dirty || endtabnum.touched)\" [ngStyle]=\"{'color': 'red'}\">\r\n                        <label *ngIf=\"endtabnum.errors.required\">\r\n                            endtablenumber is required.\r\n                        </label>\r\n                        <label *ngIf=\"endtabnum.errors.pattern\">\r\n                            endtablenumber should be number only\r\n                        </label>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <label *ngIf=\"flag\" [ngStyle]=\"{'color': 'red'}\">\r\n                {{message}}\r\n            </label>\r\n            <div class=\"slideform fontFamily\"><a (click)=\"addMore()\">+ Add More </a>  </div>\r\n        </div>\r\n        <div class=\"slidetoggle fontFamily\"><label>Make Changes Permanent?</label> <input type=\"checkbox\" />  </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/selectstaff/select-staff.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectStaffComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_staff_service__ = __webpack_require__("../../../../../src/app/selectstaff/select-staff.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_Shared_Service__ = __webpack_require__("../../../../../src/app/shared/Shared.Service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_login_service__ = __webpack_require__("../../../../../src/app/shared/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SelectStaffComponent = (function () {
    function SelectStaffComponent(router, staffService, sharedService, _loginservice) {
        this.router = router;
        this.staffService = staffService;
        this.sharedService = sharedService;
        this._loginservice = _loginservice;
        this.isShow = false;
        this.array = [];
        this.selectstaff = [];
        this.status = false;
        this.final_array = [];
        this.result = [];
        this.arr = [];
        this.globalCount = 0;
        this.listOfRanges = [];
        this.savedList = [];
        this.restarauntid = _loginservice.getRestaurantId();
        this.getStaffDetails(this.restarauntid);
    }
    SelectStaffComponent.prototype.ngOnInit = function () {
    };
    SelectStaffComponent.prototype.getStaffDetails = function (restarauntid) {
        var _this = this;
        var that = this;
        this.staffService.getStaffDetails(restarauntid).subscribe(function (res) {
            _this.staff_info = res._Data.SelectStaff;
            _this.staffinforange = res._Data.TableRange;
            if (_this.staff_info) {
                //adding seatnumbers functionality
                _this.staff_info.map(function (obj) {
                    if (that.result.length) {
                        var index = that.result.findIndex(function (_obj) {
                            return obj.TruflUserID === _obj.HostessID;
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
                        }
                        else {
                            that.result.push(that.getSeatedInfoObj(obj));
                        }
                    }
                    else {
                        that.result.push(that.getSeatedInfoObj(obj));
                    }
                });
            }
            _this.result.map(function (obj) {
                obj.sectionsCount = obj.seatNumbers.length;
                obj.seatNumbers.map(function (seatObj) {
                    that.globalCount++;
                    seatObj['range_' + that.globalCount] = seatObj.StartTableNumber + '-' + seatObj.EndTableNumber;
                    seatObj.HostessID = obj.HostessID;
                    seatObj.RestaurantID = obj.RestaurantID;
                    that.listOfRanges.push((_a = {},
                        _a['range_' + that.globalCount] = seatObj['range_' + that.globalCount],
                        _a));
                    var _a;
                });
            });
        });
    };
    SelectStaffComponent.prototype.getSeatedInfoObj = function (obj) {
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
    };
    SelectStaffComponent.prototype.back = function () {
        this.sharedService.arraydata = [];
        this.router.navigateByUrl('/selectselections');
    };
    SelectStaffComponent.prototype.next = function () {
        var _this = this;
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
            });
        });
        this.staffService.postStaffDetails(this.savedList).subscribe(function (res) {
            console.log(res, "resasdfsdfsd");
            _this.router.navigateByUrl('/reviewSelections');
        });
    };
    SelectStaffComponent.prototype.showProfile = function (profile, seatArr, index) {
        var _that = this;
        this.currentRowInfo = profile;
        this.currentRowInfo = profile;
        this.currentRowInfo.checked = false;
        if (this.currentRowInfo.ActiveInd == 1) {
            this.currentRowInfo.checked = true;
        }
        this.arr = seatArr;
        this.currentRowInfo.arr = this.arr;
        this.isShow = true;
        console.log(this.arr, " this.arr");
    };
    SelectStaffComponent.prototype.addMore = function () {
        this.globalCount++;
        this.arr.push((_a = {
                name: 'name',
                type: 'text',
                StartTableNumber: '',
                EndTableNumber: '',
                labelName1: 'Section Start Number',
                labelName2: 'Section End Number'
            },
            _a['range_' + this.globalCount] = '',
            _a));
        var obj = {
            RestaurantID: this.currentRowInfo.RestaurantID,
            HostessID: this.currentRowInfo.TruflUserID,
            StartTableNumber: this.arr[this.arr.length - 1].StartTableNumber,
            EndTableNumber: this.arr[this.arr.length - 1].EndTableNumber
        };
        console.log(this.savedList);
        this.listOfRanges.push((_b = {},
            _b['range_' + this.globalCount] = '',
            _b));
        var _a, _b;
    };
    SelectStaffComponent.prototype.checkIsObjExists = function (arr, obj) {
        return arr.findIndex(function (_obj) {
            return ((_obj.HostessID === obj.HostessID) && (_obj.StartTableNumber === obj.StartTableNumber) && (_obj.EndTableNumber === obj.EndTableNumber));
        });
    };
    SelectStaffComponent.prototype.checkInListOfRanges = function (key) {
        return this.listOfRanges.findIndex(function (range, index) {
            return Object.keys(range)[0] == key;
        });
    };
    SelectStaffComponent.prototype.CheckRange = function (findRangeArr) {
        var rangeFunc = function (start, end) { return Array.from({ length: (end - start) + 1 }, function (v, k) { return k + start; }); };
        var rangeArray = findRangeArr.map(function (range) {
            var value = range[Object.keys(range)[0]];
            return rangeFunc(+value.split('-')[0], +value.split('-')[1]);
        });
        console.log(rangeArray, "rangeArray");
        return rangeArray;
    };
    SelectStaffComponent.prototype.updateStartEndLogic = function (values, index, isStartOrEnd) {
        var _that = this;
        this.currentRowInfo.ActiveInd = 0;
        this.currentRowInfo.checked = false;
        this.result.map(function (value) {
            value.seatNumbers.map(function (seatnumbers) {
                if (seatnumbers.StartTableNumber !== '' && seatnumbers.EndTableNumber !== '' && values !== "") {
                    value.ActiveInd = 1;
                    _that.currentRowInfo.ActiveInd = 1;
                    _that.currentRowInfo.checked = true;
                }
            });
        });
        values = values < 0 ? 0 : values;
        var arrayrange;
        var obj = this.currentRowInfo.arr[index];
        if (obj.StartTableNumber == '' && obj.EndTableNumber == '') {
            this.currentRowInfo.ActiveInd = 0;
            this.currentRowInfo.checked = false;
            this.arr.splice(index, 1);
            if (this.arr != null && this.arr.length != 0) {
                this.currentRowInfo.ActiveInd = 1;
                this.currentRowInfo.checked = true;
            }
        }
        obj.HostessID = this.currentRowInfo.TruflUserID;
        obj.RestaurantID = this.currentRowInfo.RestaurantID;
        var tempArr = Object.keys(obj).filter(function (str) {
            if (str.includes('range')) {
                return str;
            }
        });
        if (tempArr.length) {
            var findedValueIndex = this.checkInListOfRanges(tempArr[0]);
            if (findedValueIndex !== -1) {
                var keyValue = this.listOfRanges[findedValueIndex][tempArr[0]];
                if (keyValue == '') {
                    this.listOfRanges[findedValueIndex] = (_a = {},
                        _a[tempArr[0]] = isStartOrEnd ? (values + '-') : ('-' + values),
                        _a);
                }
                else {
                    if (keyValue.split('-').length === 2) {
                        this.listOfRanges[findedValueIndex] = (_b = {},
                            _b[tempArr[0]] = isStartOrEnd ? (values + '-' + keyValue.split('-')[1]) : (keyValue.split('-')[0] + '-' + values),
                            _b);
                    }
                }
            }
        }
        if (this.checkIsObjExists(this.savedList, obj) === -1) {
            this.savedList.push(obj);
        }
        // finding range 
        var findRangeArr = this.listOfRanges.filter(function (range) {
            return Object.keys(range)[0] !== tempArr[0];
        });
        arrayrange = this.CheckRange(findRangeArr);
        console.log(arrayrange, "arrayrangehuoyioupupu");
        var that = this;
        this.flag = false;
        arrayrange.map(function (rangeArr) {
            if (obj.StartTableNumber !== '' || obj.EndTableNumber !== '') {
                if (+(obj.StartTableNumber) !== 0 && rangeArr.indexOf(+(obj.StartTableNumber)) !== -1 && that.savedList.length > 1) {
                    that.flag = true;
                    that.message = "Table already allocated";
                }
                else if (+(obj.EndTableNumber) !== 0 && rangeArr.indexOf(+(obj.EndTableNumber)) !== -1 && that.savedList.length > 1) {
                    that.flag = true;
                    that.message = "Table already allocated";
                }
                else if (+(obj.StartTableNumber) !== 0 && +(obj.EndTableNumber) !== 0 && (+obj.StartTableNumber >= +obj.EndTableNumber)) {
                    that.flag = true;
                    that.message = "StartTableNumber is Greaterthan EndTableNumber";
                }
                else if ((+(obj.StartTableNumber) < +(that.staffinforange[0].FirstTableNumber)) || (+(obj.EndTableNumber) > +(that.staffinforange[0].LastTableNumber))) {
                    that.flag = true;
                    that.message = "Exceeded TableRange";
                }
            }
        });
        var _a, _b;
    };
    SelectStaffComponent.prototype.updateServerStatus = function (value, index) {
        if (value == false) {
            this.staff_info.ActiveInd = 0;
        }
    };
    SelectStaffComponent.prototype.updateStartTableNumber = function (value, index) {
        this.updateStartEndLogic(value, index, true);
    };
    SelectStaffComponent.prototype.updateEndTableNumber = function (value, index) {
        this.updateStartEndLogic(value, index, false);
    };
    SelectStaffComponent.prototype.closeProfile = function () {
        this.isShow = false;
    };
    return SelectStaffComponent;
}());
SelectStaffComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'selectStaff',
        template: __webpack_require__("../../../../../src/app/selectstaff/select-staff.component.html"),
        styles: [__webpack_require__("../../../../../src/app/selectstaff/select-staff.style.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__select_staff_service__["a" /* StaffService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__select_staff_service__["a" /* StaffService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_Shared_Service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_Shared_Service__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_login_service__["a" /* LoginService */]) === "function" && _d || Object])
], SelectStaffComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=select-staff.component.js.map

/***/ }),

/***/ "../../../../../src/app/selectstaff/select-staff.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_appsettings__ = __webpack_require__("../../../../../src/app/shared/appsettings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StaffService = (function () {
    function StaffService(http) {
        this.http = http;
    }
    StaffService.prototype.getStaffDetails = function (restaurantid) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_3__shared_appsettings__["a" /* constant */].truflBase + 'WaitListUser/GetRestaurantSelectStaff/' + restaurantid).map(function (res) { return res.json(); });
    };
    StaffService.prototype.postStaffDetails = function (staff_info) {
        console.log(staff_info, "stahh;laksjl;od;o");
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_3__shared_appsettings__["a" /* constant */].truflBase + 'WaitListUser/SaveManageServer', staff_info).map(function (res) { return res.json(); });
    };
    return StaffService;
}());
StaffService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], StaffService);

var _a;
//# sourceMappingURL=select-staff.service.js.map

/***/ }),

/***/ "../../../../../src/app/selectstaff/select-staff.style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\r\n * animate.css -http://daneden.me/animate\r\n * Version - 3.5.1\r\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\r\n *\r\n * Copyright (c) 2016 Daniel Eden\r\n */\r\n/*\r\n.blur {\r\n    filter: blur(3px);\r\n} */\r\n\r\n.blur{\r\n    opacity:0.4;\r\n}\r\n\r\n.animated {\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n\r\n@-webkit-keyframes fadeInRight {\r\n    from {\r\n        opacity: 0;\r\n        -webkit-transform: translate3d(100%, 0, 0);\r\n        transform: translate3d(100%, 0, 0);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: none;\r\n        transform: none;\r\n    }\r\n}\r\n\r\n@keyframes fadeInRight {\r\n    from {\r\n        opacity: 0;\r\n        -webkit-transform: translate3d(100%, 0, 0);\r\n        transform: translate3d(100%, 0, 0);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: none;\r\n        transform: none;\r\n    }\r\n}\r\n\r\n.fadeInRight {\r\n    -webkit-animation-name: fadeInRight;\r\n    animation-name: fadeInRight;\r\n}\r\n\r\n@-webkit-keyframes fadeInRightBig {\r\n    from {\r\n        opacity: 0;\r\n        -webkit-transform: translate3d(2000px, 0, 0);\r\n        transform: translate3d(2000px, 0, 0);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: none;\r\n        transform: none;\r\n    }\r\n}\r\n\r\n@keyframes fadeInRightBig {\r\n    from {\r\n        opacity: 0;\r\n        -webkit-transform: translate3d(2000px, 0, 0);\r\n        transform: translate3d(2000px, 0, 0);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: none;\r\n        transform: none;\r\n    }\r\n}\r\n\r\n.fadeInRightBig {\r\n    -webkit-animation-name: fadeInRightBig;\r\n    animation-name: fadeInRightBig;\r\n}\r\n\r\n#profileSection {\r\n    height: 100vh;\r\n    background: #394165;\r\n    position: fixed;\r\n    right: 0px;\r\n    top: 100px;\r\n    overflow-y: auto;\r\n    width: 300px;\r\n    z-index: 9999;\r\n}\r\n\r\n#close {\r\n    cursor: pointer;\r\n}\r\n.fontFamily {\r\n    font-family: AvenirNext;\r\n    font-size:15px;\r\n}\r\n\r\n.slideform label {\r\n    float: left;\r\n    width: 100%;\r\n    margin: 0 0 5px 0;\r\n    color: #fff;\r\n    font-family: AvenirNext;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n}\r\n\r\n.slideform select {\r\n    float: left;\r\n    width: 100%;\r\n    padding: 5px;\r\n    height: 34px;\r\n    background: #4f5879;\r\n    color: #fff;\r\n    border: #4f5879 solid 1px;\r\n}\r\n.h4{\r\n    color:white;\r\n}\r\n\r\n.name {\r\n    font-family: AvenirNextCondensed;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n    color: #ffffff;\r\n    padding-top: 6%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/Header/header.Component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\" col-md-12 customheaderUL\">\r\n    <div class=\"col-sm-4\">\r\n       <div class=\"accordion\">\r\n            <div>\r\n                <ul class=\" mrgBottom0PaddTop2\">\r\n                    <li>\r\n                        <!--<input id=\"group-1\" type=\"checkbox\" hidden />-->\r\n                        <label for=\"group-1\" class=\"mrtBottom0Width100\" >\r\n                            <a class=\"sub-menu fontSixeXLg\">{{restaurantName}},{{this.userName}}</a>\r\n                            <span class=\"bladeIcon\" *ngIf=\"isRestorantName\"  (click)=\"isOpen=!isOpen\" [ngClass]=\"{'icon-chevron-down':!isOpen ,'icon-chevron-up':isOpen}\"></span>\r\n                        </label>\r\n                        <ul class=\"group-list\" *ngIf=\"isOpen\">\r\n                            <li class=\"group-list-li\" (click)=\"switchUser()\" [ngClass]=\"{'activeLi':isLiactive}\">\r\n                                <a class=\"sub-menu\">\r\n                                        Switch User\r\n                                    </a>\r\n                           </li>\r\n                            <li class=\"group-list-li\" (click)=\"signOut()\" [ngClass]=\"{'activeLi':isLiSignOut}\">\r\n                                <a class=\"sub-menu\">\r\n                                        Sign Out\r\n                                    </a>\r\n                           </li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <!--<div *ngIf=\"adminmenuLoader\" class=\"ngLoader\">\r\n          <loaders-css [loader]=\"ball-spin-fade-loader\" [loaderClass]=\"my-loader\"></loaders-css>\r\n        </div>-->\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"col-sm-8 customheaderrightUL\">\r\n        <ul class=\"mrgLeft\">\r\n            <li *ngFor=\"let header of headers let i=index\" class=\"TopOptionsUL\">\r\n                <a *ngIf=\"header.isShow\" [routerLink]=\"[header.route]\" [routerLinkActive]=\"['active']\">{{header.name}}</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/Header/header.Component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("../../../../../src/app/shared/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.profileVisible = false;
        this.showHeadings = true;
        this.isSettings = false;
        this.showDashboard = true;
        this.employeeVisible = false;
        this.loadHeaders = {};
        this.headers = [];
        this.isOpen = false;
        this.isLiactive = true;
        this.isLiSignOut = false;
        this.restaurantName = localStorage.getItem("restaurantName");
        this.isRestorantName = false;
        this.userType = this.loginService.getUserType();
        this.userName = this.loginService.getUserName();
        if (this.restaurantName == '' || this.restaurantName == 'null') {
            this.isRestorantName = false;
        }
        else {
            this.isRestorantName = true;
        }
        //Keep these load headers in a service-----
        this.loadHeaders = {
            "RA": [
                {
                    "name": "WAITLIST",
                    "active": true,
                    "route": '/waitlist'
                },
                {
                    "name": "SEATED",
                    "active": false,
                    "route": '/seated'
                },
                {
                    "name": "SNAPSHOT",
                    "active": false,
                    "route": '/snapshot'
                },
                {
                    "name": "SETTINGS",
                    "active": false,
                    "route": '/defaultSettings'
                }
            ],
            "TA": [
                {
                    "name": "Dashboard",
                    "active": true,
                    "route": '/dashboard'
                },
                {
                    "name": "Restaurant",
                    "active": false,
                    "route": '/restaurant'
                },
                {
                    "name": "Settings",
                    "active": true,
                    "route": '/settings'
                }
            ]
        };
        this.headers = this.loadHeaders[this.userType];
        if ((router.url === '/waitlist') || (router.url === '/seated') || (router.url === '/snapshot') || (router.url === '/defaultSettings')) {
            this.headers.map(function (obj, index) {
                if ([0, 1, 2, 3].indexOf(index) >= 0) {
                    obj.isShow = true;
                }
                else {
                    obj.isShow = false;
                }
            });
        }
    }
    HeaderComponent.prototype.switchUser = function () {
        this.isLiSignOut = false;
        this.isLiactive = true;
        localStorage.setItem('isDashboard', 'false');
        this.router.navigateByUrl('/login');
    };
    HeaderComponent.prototype.signOut = function () {
        var _this = this;
        this.isLiSignOut = true;
        this.isLiactive = false;
        window.setTimeout(function () {
            _this.router.navigateByUrl('/login');
        }, 2000);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'shared-header',
        template: __webpack_require__("../../../../../src/app/shared/Header/header.Component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/Header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.Component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/Header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n    color: #cbcbd1;\r\n    font-size: 22px;\r\n    font-family: Avenir Next;\r\n    padding-bottom: 3.3px;\r\n}\r\n\r\n.mrgLeft {\r\n    margin-left: 43%;\r\n    margin-top: 1%;\r\n}\r\n\r\n@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {\r\n    .mrgLeft {\r\n        margin-left: 25%;\r\n        margin-top: 2%; \r\n    }\r\n    .group-list {\r\n        background-color: #4f5879;\r\n        width:48%!important;\r\n        Z-INDEX: 1;\r\n        position: absolute;\r\n        margin-top: 3px;\r\n    }\r\n}\r\n.group-list {\r\n    background-color: #4f5879;\r\n    width: 36%;\r\n    Z-INDEX: 1;\r\n    position: absolute;\r\n    margin-top: 3px;\r\n}\r\n.group-list li:first-child {\r\n     margin-top: 5%;\r\n}\r\n.group-list-li {\r\n     padding: 2% 0% 2% 7%;\r\n     /*background-color: #9ea2b3;/*Selected li color*/\r\n}\r\n    .group-list-li :hover{\r\n        cursor:pointer;\r\n    }\r\n    .activeLi {\r\n        background-color: #9ea2b3;\r\n    }\r\n    .activeLi a.sub-menu {\r\n        color: black!important;\r\n    }\r\n.sub-menu {\r\n    color: #cbcbd1;\r\n    font-family: AvenirNext;\r\n    font-size: 22px;\r\n    font-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/Shared.Service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
        this.arraydata = [];
    }
    Object.defineProperty(SharedService.prototype, "addReservation", {
        get: function () {
            return this.addreservation;
        },
        set: function (value) {
            this.addreservation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SharedService.prototype, "guestDetails", {
        get: function () {
            return this._guestDetails;
        },
        set: function (value) {
            this._guestDetails = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SharedService.prototype, "arrayData", {
        get: function () {
            return this.arraydata;
        },
        set: function (value) {
            this.arraydata = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SharedService.prototype, "editguestDetails", {
        get: function () {
            return this.editguest;
        },
        set: function (value) {
            this.editguest = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SharedService.prototype, "userAccept", {
        get: function () {
            return this.useraccept;
        },
        set: function (value) {
            this.useraccept = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SharedService.prototype, "uniqueId", {
        get: function () {
            return this.uniqueid;
        },
        //set editguest_bio(value: object) {
        //    this._editguest_bio=value
        //}
        //get editguest_bio(): object {
        //    return this._editguest_bio;
        //}
        set: function (value) {
            this.uniqueid = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SharedService.prototype, "emailError", {
        get: function () {
            return this.email_error;
        },
        set: function (value) {
            this.email_error = value;
        },
        enumerable: true,
        configurable: true
    });
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SharedService);

//# sourceMappingURL=Shared.Service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/appsettings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return constant; });
var constant = {
    truflAPI: 'http://183.82.48.194:4477/',
    truflBase: 'api/',
};
//truflAPI: 'http://183.82.48.194:4477/',
//# sourceMappingURL=appsettings.js.map

/***/ }),

/***/ "../../../../../src/app/shared/authgaurd.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("../../../../../src/app/shared/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(_loginservice, router) {
        this._loginservice = _loginservice;
        this.router = router;
        this.raRoutes = ['/waitlist', '/seated', '/startservice', '/selectStaff', '/reviewSelections', '/selectselections', '/defineSelections', '/manageServers', '/otherSettings', '/defaultSettings', '/seataGuest', '/addGuest', '/editguest', '/snapshot', '/reservation'];
        this.taRoutes = ['/dashboard', '/restaurant', 'settings'];
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.userType !== null) {
            this.currentUrl = '/' + window.location.href.split('/')[window.location.href.split('/').length - 1];
            if (localStorage.userType === 'RA') {
                if (this.raRoutes.indexOf(this.currentUrl) >= 0 || this.currentUrl === '/login') {
                    console.log(this.currentUrl, "this.router.url");
                    return true;
                }
                else {
                    this.router.navigate(['/login']);
                    localStorage.clear();
                }
            }
            else if (localStorage.userType === 'TA') {
                if (this.taRoutes.indexOf(this.currentUrl) >= 0 || this.currentUrl === '/login') {
                    return true;
                }
                else {
                    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                    localStorage.clear();
                }
            }
            else {
                this.router.navigate(['/Login'], { queryParams: { returnUrl: state.url } });
                localStorage.clear();
            }
        }
        else {
            this.router.navigate(['/Login'], { queryParams: { returnUrl: state.url } });
            localStorage.clear();
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=authgaurd.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__ = __webpack_require__("../../../../../src/app/shared/appsettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.setUserType = function (value) {
        this.userType = value;
        localStorage.setItem('userType', value);
    };
    LoginService.prototype.getUserType = function () {
        this.userType = localStorage.getItem('userType');
        return this.userType;
    };
    LoginService.prototype.setTrufluserID = function (value) {
        this.truflid = value;
        localStorage.setItem('truflid', value);
    };
    LoginService.prototype.getTrufluserID = function () {
        this.truflid = localStorage.getItem('truflid');
        return this.truflid;
    };
    LoginService.prototype.setRestaurantId = function (value) {
        this.restaurantid = value;
        localStorage.setItem('restaurantid', value);
    };
    LoginService.prototype.getRestaurantId = function () {
        this.restaurantid = localStorage.getItem('restaurantid');
        return this.restaurantid;
    };
    LoginService.prototype.setRestaurantName = function (value) {
        this.restaurantName = value;
        localStorage.setItem('restaurantName', value);
    };
    LoginService.prototype.getRestaurantName = function () {
        this.restaurantName = localStorage.getItem('restaurantName');
        return this.restaurantName;
    };
    LoginService.prototype.setUser = function (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(user));
    };
    LoginService.prototype.getUser = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        return this.user;
    };
    LoginService.prototype.setUserName = function (value) {
        this.userName = value;
        localStorage.setItem('userName', value);
    };
    LoginService.prototype.getUserName = function () {
        this.userName = localStorage.getItem('userName');
        return this.userName;
    };
    LoginService.prototype.setErrorMessage = function (value) {
        this.errormessage = value;
        localStorage.setItem('erroeMessage', value);
    };
    LoginService.prototype.getErrorMessage = function () {
        this.errormessage = localStorage.getItem('erroeMessage');
        console.log(this.errormessage, "this.errormessage from service");
        return this.userName;
    };
    //To get User Details
    LoginService.prototype.getLoginDetails = function (userstype, restaurantid) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + 'GetUserTypes/' + userstype + '/' + restaurantid).map(function (res) { return res.json(); });
    };
    //To get Login Member Type
    LoginService.prototype.loginAuthentication = function (user) {
        this.setUser(user);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + 'LoginAuthentication', user).map(function (res) { return res.json(); });
    };
    //To get an email when click on forgot password
    LoginService.prototype.forgotpassword = function (email) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + 'ForgetPassword?LoginEmail=' + email).map(function (res) { return res.json(); });
    };
    //To reset password
    LoginService.prototype.resetPassword = function (reset) {
        delete reset.confirmPassword;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + 'RestPassword', reset).map(function (res) { return res.json(); });
    };
    //To register new user
    LoginService.prototype.create = function (user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + 'SignUp', user).map(function (res) { return res.json(); });
    };
    //To logout
    LoginService.prototype.logout = function () {
        localStorage.clear();
    };
    LoginService.prototype.handleError = function (error) {
        console.error('handleError', error);
        var response = {
            status: error.status,
            message: error.statusText
        };
        try {
            response.message = error.json()._statusMessage;
        }
        catch (e) {
            console.log('could not parse body', e);
        }
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(response);
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/startservice/start-service.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"customheader\">\r\n\r\n    <div class=\"customheaderleft\">\r\n        <h2>Start Service</h2>\r\n    </div>\r\n    <div class=\"customheaderright\">\r\n        <a class=\"secondary-btn\">\r\n            Back\r\n        </a>\r\n        <a (click)=\"next()\" class=\"primary-btn\">\r\n            Next\r\n        </a>\r\n    </div>\r\n\r\n</div>\r\n<div class=\"col-md-12 servicesmain\">\r\n    <span class=\"servicetext\">How early can guests join the waitlist? </span>\r\n    <span class=\"servicetime\"> <input type=\"time\"  [(ngModel)]=\"time\" > </span>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/startservice/start-service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start_service_service__ = __webpack_require__("../../../../../src/app/startservice/start-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StartServiceComponent = (function () {
    function StartServiceComponent(router, _startService) {
        this.router = router;
        this._startService = _startService;
        this.restID = localStorage.getItem('restaurantid');
    }
    StartServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._startService.GetRestaurantOpenTime(this.restID).subscribe(function (res) {
            var resTime = res._Data.RestaurantWaitListOpen[0].OpenTime;
            var val = resTime.split(':');
            var val2 = val[1];
            var minutes = val2.slice(0, 2);
            if (val2.indexOf("A") >= 0) {
                if (val[0] == '0') {
                    var valtemp = '00';
                    _this.time = (valtemp) + ':' + minutes;
                }
                else {
                    _this.time = (val[0]) + ':' + minutes;
                }
            }
            else {
                if (+val[0] == 12) {
                    _this.time = (val[0]) + ':' + minutes;
                }
                else {
                    _this.time = (+val[0] + 12) + ':' + minutes;
                }
            }
        });
    };
    StartServiceComponent.prototype.next = function () {
        this.router.navigateByUrl('/selectselections');
        var val = this.time.split(':');
        if (+val[0] < 12) {
            this.time = val[0] + ':' + val[1] + 'AM';
        }
        else if (+val[0] == 12) {
            this.time = val[0] + ':' + val[1] + 'PM';
        }
        else {
            this.time = (+val[0] - 12) + ':' + val[1] + 'PM';
        }
        this._startService.SaveRestaurantOpenTime(this.restID, this.time).subscribe(function (res) {
            console.log(res);
        });
    };
    return StartServiceComponent;
}());
StartServiceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'startService',
        template: __webpack_require__("../../../../../src/app/startservice/start-service.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__start_service_service__["a" /* startService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__start_service_service__["a" /* startService */]) === "function" && _b || Object])
], StartServiceComponent);

var _a, _b;
//# sourceMappingURL=start-service.component.js.map

/***/ }),

/***/ "../../../../../src/app/startservice/start-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_appsettings__ = __webpack_require__("../../../../../src/app/shared/appsettings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var startService = (function () {
    function startService(http) {
        this.http = http;
    }
    startService.prototype.SaveRestaurantOpenTime = function (RestaurantID, Time) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_3__shared_appsettings__["a" /* constant */].truflBase + '/WaitListUser/SaveRestaurantOpenTime?RestaurantID=' + RestaurantID + '&Time=' + Time, '').map(function (res) { return res.json(); });
    };
    startService.prototype.GetRestaurantOpenTime = function (RestaurantID) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_3__shared_appsettings__["a" /* constant */].truflBase + '/WaitListUser/GetRestaurantWaitTimeOpenSectionStaff/' + RestaurantID + '').map(function (res) { return res.json(); });
    };
    return startService;
}());
startService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], startService);

var _a;
//# sourceMappingURL=start-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/turnOnGetSeatedNow/trunOngetseated.component.Service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrunongetseatedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__ = __webpack_require__("../../../../../src/app/shared/appsettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrunongetseatedService = (function () {
    function TrunongetseatedService(http) {
        this.http = http;
        this.rowdata = {};
    }
    //service for trungetseated tabletypes
    TrunongetseatedService.prototype.getTrungetseated = function (restarauntid) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + 'WaitListUser/GetRestaurantGetSeatedNow/' + restarauntid)
            .map(function (res) { return res.json() || {}; })
            .catch(this.handleError);
    };
    //service for trungetseated getseatsnow
    TrunongetseatedService.prototype.postTrungetseatednow = function (seatedinfo) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflAPI + __WEBPACK_IMPORTED_MODULE_2__shared_appsettings__["a" /* constant */].truflBase + 'WaitListUser/SaveRestaurantGetSeatedNow', seatedinfo)
            .map(function (res) { return res.json() || {}; })
            .catch(this.handleError);
    };
    ////other settings service
    //getOtherSettingsDetails(restarauntid) {
    //    return this.http.get(constant.truflAPI + constant.truflBase + 'Admin/GetRestaurantSettings/' + restarauntid).map(
    //        (res) => res.json())
    //}
    //Handling errors
    TrunongetseatedService.prototype.handleError = function (error) {
        return 'Error';
    };
    return TrunongetseatedService;
}());
TrunongetseatedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TrunongetseatedService);

var _a;
//# sourceMappingURL=trunOngetseated.component.Service.js.map

/***/ }),

/***/ "../../../../../src/app/turnOnGetSeatedNow/turnOngetseated.Component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n    <button class=\"primary-btn2\" (click)=\"turngetseated()\">Turn On Get Seated Now</button>\r\n</div>\r\n<div class=\"row bottomMainDiv col-md-12\" *ngIf=\"isGetSeated\">\r\n    <div class=\"col-md-1\">\r\n            <label class=\"fontSixeXLg\">Get Seated</label>\r\n        </div>\r\n        <div class=\"col-md-9\" *ngIf=\"!isSubmit\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"col-sm-7 noPad\">\r\n                    <label>Table Size</label>\r\n                    <div class=\"col-sm-12 tblsizeDiv\" id=\"tblSizeDiv\"  >\r\n                        <span class=\"noBox squreBox\" *ngFor=\"let _tabletypes of tabletype;\" [ngClass]=\"_tabletypes.TableType === getseatedinfo[0].TableType ? 'ActiveTable' : ''\"><a (click)=\"tabletypes(_tabletypes)\">{{_tabletypes.TableType}}</a></span>\r\n                       \r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <label>Price</label>\r\n                    <div class=\"tblsizeDiv mrfLeft26\" >\r\n                        <a  (click)=\"subPrice()\"><i aria-hidden=\"true\" class=\"bladeIcon icon-minus plusMinusIcons\"></i></a>\r\n                        <span class=\"priceSpan squreBox\" *ngFor=\"let _getseatednow of getseatedinfo\" >${{_getseatednow.OfferAmount}}</span>\r\n                        \r\n                        <a (click)=\"addPrice()\"><i aria-hidden=\"true\" class=\"bladeIcon icon-add plusMinusIcons\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-2 \">\r\n                    <label>Available</label>\r\n                    <div class=\"tblsizeDiv mrgTop0\" *ngFor=\"let _getseatednows of getseatedinfo\">\r\n                        <input type=\"text\" class=\"noBox squreBox mrgTop0\" name=\"available\" [(ngModel)]=\"_getseatednows.NumberOfTables\" (ngModelChange)=\"updateAvailable(_getseatednows.NumberOfTables)\"/>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-9\" *ngIf=\"isSubmit\">\r\n            <div class=\"col-sm-8 mrglft\">\r\n                <div class=\"col-sm-3 noPad\">\r\n                    <label>Table Size</label>\r\n                    <div class=\"col-sm-12 tblsizeDiv\" id=\"tblSizeDiv\">\r\n                        <span class=\"noBox squreBox ActiveTable\" >{{seatedobject.TableType}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <label>Price</label>\r\n                    <div class=\"tblsizeDiv\">\r\n                        <span class=\"priceSpan squreBox\">${{seatedobject.Amount}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <label>Available</label>\r\n                    <div class=\"tblsizeDiv\">\r\n                        <span class=\"noBox squreBox\">{{seatedobject.NoOfTables}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"clearfix\"></div>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n        <div class=\"col-md-2\" *ngIf=\"!isSubmit\">\r\n            <button class=\"primary-btn2 tblsizeDiv btnSubmit\" (click)=\"submit()\">Submit</button>\r\n        </div>\r\n        <div class=\"col-md-2 mrgTop18\" *ngIf=\"isSubmit\">\r\n            <span class=\"cancleStyle\" (click)=\"isSubmit=!isSubmit;isGetSeated=!isGetSeated\"><i aria-hidden=\"true\" class=\"bladeIcon icon-close closeIconSpn\"></i> Cancel</span>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/turnOnGetSeatedNow/turnOngetseated.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return turnOngetseated; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_login_service__ = __webpack_require__("../../../../../src/app/shared/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__turnOnGetSeatedNow_trunOngetseated_component_Service__ = __webpack_require__("../../../../../src/app/turnOnGetSeatedNow/trunOngetseated.component.Service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__defaultsettings_othersettings_other_settings_service__ = __webpack_require__("../../../../../src/app/defaultsettings/othersettings/other-settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var turnOngetseated = (function () {
    function turnOngetseated(_trunongetseated, loginService, router, _othersettingsservice) {
        this._trunongetseated = _trunongetseated;
        this.loginService = loginService;
        this.router = router;
        this._othersettingsservice = _othersettingsservice;
        this.isSubmit = false;
        this.isGetSeated = false;
        this.seatedobject = {};
        this.restarauntid = loginService.getRestaurantId();
    }
    turnOngetseated.prototype.turngetseated = function () {
        var _this = this;
        var that = this;
        var restarauntid;
        restarauntid = this.loginService.getRestaurantId();
        this.isGetSeated = !this.isGetSeated;
        this._trunongetseated.getTrungetseated(restarauntid).subscribe(function (res) {
            _this.trunongetseatedinfo = res._Data;
            _this.tabletype = res._Data.TableType;
            _this.getseatedinfo = res._Data.GetSeatedNow;
            _this._othersettingsservice.getOtherSettingsDetails(restarauntid).subscribe(function (res) {
                _this.othersettingdetails = res._Data;
                console.log(_this.othersettingdetails[0].DefaultTableNowPrice, " this.othersettingdetailskhlh");
                _this.getseatedinfo[0].OfferAmount = _this.getseatedinfo[0].TableType * _this.othersettingdetails[0].DefaultTableNowPrice;
            });
            console.log(_this.trunongetseatedinfo, "this.trunongetseatedinfo");
            console.log(_this.tabletype, "this.tabletype");
            console.log(_this.getseatedinfo, "this.getseatedinfo");
        });
    };
    turnOngetseated.prototype.tabletypes = function (value) {
        this.tabledesc = value.TableTypeDesc;
        // this.selectedtabletype = value.TableType;
        this.getseatedinfo[0].TableType = value.TableType;
        //this.defaulttableprice = this._othersettingsservice.getDefaultgetaTableprice();
        // console.log(this.defaulttableprice, "this.defaulttableprice");
        this.getseatedinfo[0].OfferAmount = this.getseatedinfo[0].TableType * this.othersettingdetails[0].DefaultTableNowPrice;
        console.log(this.getseatedinfo[0].OfferAmount, "this.getseatedinfo.OfferAmount");
        this.seatedobject.RestaurantID = this.restarauntid;
        this.seatedobject.TableType = this.getseatedinfo[0].TableType;
        this.seatedobject.NoOfTables = this.getseatedinfo[0].NumberOfTables;
        this.seatedobject.Amount = this.getseatedinfo[0].OfferAmount;
    };
    turnOngetseated.prototype.updateAvailable = function (value) {
        this.seatedobject.NoOfTables = value;
    };
    turnOngetseated.prototype.addPrice = function () {
        this.getseatedinfo[0].OfferAmount = this.getseatedinfo[0].OfferAmount + 5;
    };
    turnOngetseated.prototype.subPrice = function () {
        this.getseatedinfo[0].OfferAmount = this.getseatedinfo[0].OfferAmount - 5;
    };
    turnOngetseated.prototype.submit = function () {
        this._trunongetseated.postTrungetseatednow(this.seatedobject).subscribe(function (res) {
        });
        console.log(this.seatedobject, " this.seatedobject");
        this.isSubmit = !this.isSubmit;
    };
    return turnOngetseated;
}());
turnOngetseated = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'turnOngetseated',
        template: __webpack_require__("../../../../../src/app/turnOnGetSeatedNow/turnOngetseated.Component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__turnOnGetSeatedNow_trunOngetseated_component_Service__["a" /* TrunongetseatedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__turnOnGetSeatedNow_trunOngetseated_component_Service__["a" /* TrunongetseatedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__defaultsettings_othersettings_other_settings_service__["a" /* OtherSettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__defaultsettings_othersettings_other_settings_service__["a" /* OtherSettingsService */]) === "function" && _d || Object])
], turnOngetseated);

var _a, _b, _c, _d;
//# sourceMappingURL=turnOngetseated.component.js.map

/***/ }),

/***/ "../../../../../src/assets/images/loginbg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "loginbg.932ba7b190199c6ac534.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map