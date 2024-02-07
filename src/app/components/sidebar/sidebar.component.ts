import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() sidebar_content: any;
  @Input() active_tab: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  handleEvent = (e: Function) => {
    if (!e) return;
    e({ handleGoBack: this.handleGoBack, handleLogout: this.handleLogout });
  };

  handleGoBack = () => {
    this.router.navigate(['/']);
  };

  handleLogout = () => {
    this.authService.logout();
  };
}
