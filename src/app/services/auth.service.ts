import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { BASE_URL, LOCAL_STORAGE_KEYS } from 'src/constants/constants';
import { localStorageEvents } from 'src/constants/helpers';

type LoginUserData = {
  email: string;
  password: string;
};

type RegisterUserData = {
  email: string;
  password: string;
  username: string;
  phoneNumber: string;
};

type UserResponse = {
  id: string;
  username: string;
  email: string;
  token: string;
};

const authUrls = {
  login: `${BASE_URL}/auth/login`,
  register: `${BASE_URL}/auth/register`,
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  isUserLoggedInSubj = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  login(userData: LoginUserData) {
    return this.http.post<UserResponse>(authUrls.login, {
      ...userData,
    });
  }

  register(userData: RegisterUserData) {
    return this.http.post<UserResponse>(`${authUrls.register}`, {
      ...userData,
    });
  }

  logout() {
    localStorageEvents.remove(LOCAL_STORAGE_KEYS.USER);
    this.isUserLoggedInSubj.next(false);
    this.router.navigate(['/']);
  }

  isLoggedIn() {
    const userData = localStorageEvents.get(LOCAL_STORAGE_KEYS.USER);
    const isUserLoggedIn = !!userData?.token;
    this.isUserLoggedInSubj.next(isUserLoggedIn);
    return isUserLoggedIn;
  }

  getLoggedInUserDetails() {
    return localStorageEvents.get(LOCAL_STORAGE_KEYS.USER);
  }
}
