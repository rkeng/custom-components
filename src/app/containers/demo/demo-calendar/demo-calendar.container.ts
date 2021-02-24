import { Component, OnInit } from '@angular/core';

export interface ApiProperty {
  name: string;
  type: string;
  default: string;
  description: string;
}

const DATA: ApiProperty[] = [
  { type: 'Date', name: 'date', default: 'null', description: 'Date to be selected on initialization.' },
  { type: 'EventEmitter<Date>', name: 'onSelect', default: '', description: 'Emits a Date object when a date is selected.' },
];

@Component({
  selector: 'rk-demo-calendar',
  templateUrl: './demo-calendar.container.html',
  styleUrls: ['./demo-calendar.container.scss']
})
export class DemoCalendarContainer implements OnInit {

  selectedDate: Date = new Date(2021, 0, 1);

  displayedColumns: string[] = ['name', 'type', 'default', 'description'];
  dataSource = DATA;

  htmlCode = `<span>Selected Date: {{ selectedDate?.toDateString() }}</span>
<rk-calendar
  [date]="selectedDate"
  (onSelect)="handleOnSelect($event)"
></rk-calendar>`;

  tsCode = `selectedDate: Date = new Date(1996, 11, 6);
handleOnSelect(date: Date) {
  this.selectedDate = date;
}`;

  constructor() { }

  ngOnInit(): void {
  }

  handleOnSelect(date: Date) {
    this.selectedDate = date;
  }

}
