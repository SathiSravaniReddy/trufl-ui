import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {LoginService} from './login.service';
import {Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
  private raRoutes;
  private taRoutes;
  private rmRoutes;
  private currentUrl;
  private opendate;
  constructor(private _loginservice: LoginService, private router: Router) {
    // all the restaraunt and admin components routers should be defined over here
    this.raRoutes = ['/waitlist', '/seated', '/startservice', '/selectStaff', '/reviewSelections', '/selectselections', '/defineSelections', '/manageServers', '/otherSettings', '/defaultSettings', '/seataGuest', '/addGuest', '/editguest', '/snapshot', '/reservation', '/resetstartservice', '/CustomerInfo', '/byserver', '/themesettings', '/myprofile', '/turnon', '/assignTableToServer'];
    this.rmRoutes = ['/waitlist', '/manage', '/seated', '/startservice', '/selectStaff', '/reviewSelections', '/selectselections', '/defineSelections', '/manageServers', '/otherSettings', '/defaultSettings', '/seataGuest', '/addGuest', '/editguest', '/snapshot', '/reservation', '/resetstartservice', '/CustomerInfo', '/byserver', '/themesettings', '/myprofile', '/turnon', '/assignTableToServer'];
    this.taRoutes = ['/export','/dashboard', '/restaurant', 'settings'];

  }

  setopendate(openTime) {
    this.opendate = openTime;
  }
  getopendate() {
    return this.opendate;
  }
// can active functionality over here
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('isFromWaitList') == 'true') {
      this.router.navigate(['/login']);
      localStorage.clear();
      return false;
    }

    if (localStorage.userType !== null && localStorage.getItem('isLogin') == 'true') {
      this.currentUrl = '/' + window.location.href.split('/')[window.location.href.split('/').length - 1];
      if (localStorage.userType === 'RA') {
        if (this.raRoutes.indexOf(this.currentUrl) >= 0 || this.currentUrl === '/login') {

          return true;
        } else {
          this.router.navigate(['/login']);
          localStorage.clear();
        }

      } else if (localStorage.userType === 'RM') {
        if (this.rmRoutes.indexOf(this.currentUrl) >= 0 || this.currentUrl === '/login') {
          return true;
        } else {
          this.router.navigate(['/login']);
          localStorage.clear();
        }

      }else if (localStorage.userType === 'TA') {
        if (this.taRoutes.indexOf(this.currentUrl) >= 0 || this.currentUrl === '/login') {
          return true;
        } else {
          this.router.navigate(['/login']);
          localStorage.clear();
        }

      }

      else {
        this.router.navigate(['/Login'], {queryParams: {returnUrl: state.url}});
        localStorage.clear();
      }

    } else {
      this.router.navigate(['/Login'], {queryParams: {returnUrl: state.url}});
      localStorage.clear();
      return false;
    }
  }


}

