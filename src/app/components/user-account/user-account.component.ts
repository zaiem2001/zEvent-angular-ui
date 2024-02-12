import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css'],
})
export class UserAccountComponent implements OnInit {
  @Input() user_details: any;
  editMode = false;

  ngOnInit(): void {}

  getLogo() {
    return this.user_details.username[0];
  }

  onEditMode() {
    this.editMode = true;
  }

  onSubmit(f: NgForm) {
    console.log('Hello world');
  }

  onCancel(f: NgForm) {
    this.user_details = { ...this.user_details };
    this.editMode = false;
  }
}
