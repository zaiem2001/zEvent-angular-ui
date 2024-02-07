import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class SnackBar {
  constructor(private snackBar: MatSnackBar) {}

  displayMsg = (
    message: string,
    action: string = '',
    options: MatSnackBarConfig = {
      duration: 3000,
      verticalPosition: 'bottom',
    }
  ) => {
    this.snackBar.open(message, action, options);
  };
}
