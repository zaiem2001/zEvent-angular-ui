import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { localStorageEvents } from 'src/constants/helpers';
import { ERROR_MESSAGES, LOCAL_STORAGE_KEYS } from 'src/constants/constants';

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isUserLoggedIn = this.authService.isLoggedIn();
    // const currentUrl = this.router.url;

    if (isUserLoggedIn) {
      const clonedReq = req.clone({
        headers: new HttpHeaders().append(
          'Authorization',
          this.getAuthHeaders().Authorization
        ),
      });

      return next.handle(clonedReq).pipe(catchError(this.handleError));
    }

    return next.handle(req);
  }

  private handleError = (error: HttpErrorResponse) => {
    switch (error.error.message) {
      case ERROR_MESSAGES.JWT_EXPIRED:
        this.authService.logout();
        break;
    }

    return throwError(() => error);
  };

  private getAuthHeaders = () => {
    return {
      Authorization: `Bearer ${
        localStorageEvents.get(LOCAL_STORAGE_KEYS.USER)?.token
      }`,
    };
  };
}
