import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() sidebar_content: any;
  @Input() active_tab: string = '';

  constructor(private router: Router) {}

  handleEvent = (e: Function) => {
    if (!e) return;
    e({ handleGoBack: this.handleGoBack });
  };

  handleGoBack = () => {
    this.router.navigate(['/explore']);
  };
}
