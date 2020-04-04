import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const result = this.authService.isLoggedIn;
    if (!result) {
      console.log('not logged in');
      this.router.navigate(['/login'], {
        queryParams: {
          return: state.url
        }
      });
    }
    return result;
  }

}
