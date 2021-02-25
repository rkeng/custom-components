import { Component } from '@angular/core';
import { ApiProperty } from 'src/app/models/api-property.model';


const DATA: ApiProperty[] = [
  { type: 'Date', name: 'date', default: 'null', description: 'Date to be selected on initialization.' },
  { type: 'EventEmitter<Date>', name: 'onSelect', default: '', description: 'Emits a Date object when a date is selected.' },
];

@Component({
  selector: 'rk-demo-calendar',
  templateUrl: './demo-calendar.container.html',
  styleUrls: ['./demo-calendar.container.scss']
})
export class DemoCalendarContainer {

  selectedDate: Date = new Date(2021, 0, 1);

  displayedColumns: string[] = ['name', 'type', 'default', 'description'];
  dataSource = DATA;

  htmlCode = `<span>Selected Date: {{ selectedDate?.toDateString() }}</span>
<rk-calendar
  [date]="selectedDate"
  (onSelect)="handleOnSelect($event)"
></rk-calendar>`;

  tsCode = `selectedDate: Date = new Date(2021, 0, 1);
handleOnSelect(date: Date) {
  this.selectedDate = date;
}`;

  constructor() { }

  handleOnSelect(date: Date) {
    this.selectedDate = date;
  }

}
