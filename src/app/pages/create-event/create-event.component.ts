import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from 'src/constants/constants';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  categories: string[] = [];

  ngOnInit(): void {
    this.categories = CATEGORIES;
  }
}
