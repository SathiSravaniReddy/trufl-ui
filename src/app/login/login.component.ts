
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../shared/login.service';
import { User } from './user';
//import { Reset } from './reset';
import { ToastOptions } from 'ng2-toastr';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [ToastsManager, ToastOptions]
})
export class LoginComponent {
    private logininfo: any;
    private user = new User();
    private errorMsg;
    public showForgotPassword = false;
    public showResetPassword = false;
    public showlogin = true;
    private email;
    private loginDetails: any;
    private emailDetails;
    private returnUrl;
    private reset: any = {};
    public showReset: boolean=false;
    private errorcode: any;
    private statusmessage: any;
    private errormessage: any;
    private restarauntid;
    constructor(private loginService: LoginService, private router: Router, private _toastr: ToastsManager, vRef: ViewContainerRef, private route: ActivatedRoute) {
        this._toastr.setRootViewContainerRef(vRef);
        //called first time before the ngOnInit()
    }
    ngOnInit() {

    }
    register() {
        this.router.navigateByUrl('/register');
    }
    //login
    signIn() {
        var that = this;
        // get return url from route parameters or default to '/'
       this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        this.loginService.setUserType(this.user.usertype);
        if (this.user.usertype == null) {
            window.setTimeout(() => {
                this._toastr.error("Please Select UserType");

            }, 500);
        }


            this.loginService.setUserType(this.user.usertype);
            this.loginService.loginAuthentication(this.user).subscribe((res: any) => {
                this.errorcode = res._ErrorCode;
                this.statusmessage = res._StatusMessage;
                this.errormessage = "an error occured";
                this.loginService.setErrorMessage(this.errormessage);
                console.log(this.errorcode, this.statusmessage, "this.errorcode, this.statusmessage, ");
                if (this.errorcode === "0") {
                    res._Data.map((item: any) => {
                        this.loginDetails = item;

                        this.loginService.setTrufluserID(this.loginDetails.TruflUSERID);
                        this.loginService.setRestaurantId(this.loginDetails.RestaurantID);
                        this.loginService.setRestaurantName(this.loginDetails.RestaurantName);
                        this.loginService.setUserName(this.loginDetails.FullName);
                        console.log(this.loginDetails, "this.loginDetails");
                        /*verifylogin*/

                        this.restarauntid = this.loginService.getRestaurantId();
                        console.log(this.restarauntid, "this.restarauntidasdasedasedasdasdsad");
                        this.loginService.VerifyLogin(this.restarauntid).subscribe((res: any) => {
                            console.log(res,"rsdhasfloipj");
                            if (res._Data === 0) {
                                this.router.navigateByUrl('/startservice');
                            }
                            else if (res._Data === 1) {
                                this.router.navigateByUrl('/waitlist');
                            }
                        })

        /*verifylogin end */
                    });
                }
                else if(this.errorcode === "1"){
                this._toastr.error(this.statusmessage);
                }
                if (this.loginDetails) {

                    if (this.loginDetails.TruflMemberType === "RA ")
                    {
                        if (this.loginDetails.ForgetPasswordStatus) {
                            this.ResetPasswordShow();
                        }
                        else if (!this.loginDetails.ForgetPasswordStatus && localStorage.getItem('isWaitlist') === 'false') {
                            this.router.navigateByUrl('/waitlist');
                            localStorage.removeItem('isWaitlist');
                        }


                    }
                    else if (this.loginDetails.TruflMemberType === "TA ")
                    {
                        if (this.loginDetails.ForgetPasswordStatus) {
                            this.ResetPasswordShow();
                        }


                    }
                }
                else if (this.errorcode === "50000") {
                    window.setTimeout(() => {
                        this._toastr.error(this.statusmessage);

                    }, 500);

            }

                else {
                    window.setTimeout(() => {
                        this._toastr.error(this.errormessage);

                    }, 500);
                }

            });







    }
    showOnlyLogin() {
        this.user = new User();
        this.showResetPassword = false;
        this.showForgotPassword = false;
        this.showlogin = true;
        this.showReset = false;
    }
    showLogin() {
        this.user = new User();
        this.showResetPassword = false;
        this.showForgotPassword = false;
        this.showlogin = false;
        this.showReset = true;
    }

    //Forgot Password
    forgotPasswordShow() {
        this.showlogin = false;
        this.showResetPassword = false;
        this.showForgotPassword = true;
        this.showReset = false;
    }
    forgotPasswordImpl() {
        this.showlogin = false;
        this.showForgotPassword = false;
        this.showResetPassword = true;
        this.loginService.forgotpassword(this.email).subscribe((res: any) => {
            res._Data.map((item: any) => {
                this.emailDetails = item;
            });

        });

    }

    //Reset Password
    ResetPasswordShow() {
        this.showlogin = false;
        this.showResetPassword = false;
        this.showForgotPassword = false;
        this.showReset = true;
    }
    resetPasswordImpl() {
        this.reset.UserEmail = this.reset.UserEmail;
        this.reset.UserName = '';
        this.reset.UserID = '';
        this.reset.LoginPassword = this.reset.LoginPassword;
        this.reset.NewLoginPassword = this.reset.NewLoginPassword;

        console.log(this.reset, "reset password details");


        this.loginService.resetPassword(this.reset).subscribe((res: any) => {
            window.setTimeout(() => {
                this._toastr.success("Password changed successfully");

            }, 500);
            window.setTimeout(() => {
                this.showlogin = true;

                this.showReset = false;
                this.user.emailid = '';
                this.user.password = '';
                this.user.usertype = '';
            }, 1000);

        })
    }

}
