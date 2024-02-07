import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorHandler } from 'src/app/helpers/error.helper';
import { AuthService } from 'src/app/services/auth.service';
import { LOCAL_STORAGE_KEYS } from 'src/constants/constants';
import { localStorageEvents } from 'src/constants/helpers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private authService: AuthService,
    private errorhandler: ErrorHandler,
    private router: Router
  ) {}

  onSubmit(formData: NgForm) {
    const { password, confirmPassword } = formData.value;
    if (password !== confirmPassword) return;

    this.authService
      .register(formData.value)
      .pipe(this.errorhandler.handleCatchError())
      .subscribe((response) => {
        localStorageEvents.save(LOCAL_STORAGE_KEYS.USER, response);
        this.authService.isUserLoggedInSubj.next(true);
        this.router.navigate(['/']);
      });
  }
}
