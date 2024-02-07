import { Injectable, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
class PermissionService {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isUserLoggedIn = this.authService.isLoggedIn();

    if (state.url.includes('login') || state.url.includes('register')) {
      if (isUserLoggedIn) {
        return this.router.navigate(['/']);
      }
      return true;
    }

    if (isUserLoggedIn) return true;

    return this.redirectionUrl('/login');
  }

  private redirectionUrl(url: string) {
    this.router.navigate([url]);
    return false;
  }
}

export const canActivateRoute: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => inject(PermissionService).canActivate(route, state);
