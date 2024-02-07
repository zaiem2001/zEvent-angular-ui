import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { ErrorHandler } from 'src/app/helpers/error.helper';

import { AuthService } from 'src/app/services/auth.service';
import { LOCAL_STORAGE_KEYS } from 'src/constants/constants';
import { localStorageEvents } from 'src/constants/helpers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private errorHandler: ErrorHandler
  ) {}

  onSubmit(formData: NgForm) {
    const { value } = formData;

    this.authService
      .login(value)
      .pipe(this.errorHandler.handleCatchError())
      .subscribe((response) => {
        localStorageEvents.save(LOCAL_STORAGE_KEYS.USER, response);
        this.authService.isUserLoggedInSubj.next(true);
        this.router.navigate(['/']);
      });
  }
}
