import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SnackBar } from './snackbar.helper';
import { catchError, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ErrorHandler {
  constructor(private snackbar: SnackBar) {}

  handleError(error: HttpErrorResponse) {
    let errorMsg = error?.error?.message || 'Something went Wrong!';

    if (error.error && errorMsg.includes('Server')) {
      errorMsg = 'Invalid username or password';
    }

    this.snackbar.displayMsg(errorMsg);
    return throwError(() => error);
  }

  handleCatchError = () =>
    catchError((err: HttpErrorResponse) => this.handleError(err));
}
