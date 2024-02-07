import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { localStorageEvents } from 'src/constants/helpers';
import { LOCAL_STORAGE_KEYS } from 'src/constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showHeader: boolean = true;
  isUserLoggedIn = localStorageEvents.get(LOCAL_STORAGE_KEYS.USER);

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showHeader = !event.url.includes('dashboard');
      }
    });

    this.authService.isUserLoggedInSubj.subscribe((value) => {
      this.isUserLoggedIn = value;
    });
  }
}
