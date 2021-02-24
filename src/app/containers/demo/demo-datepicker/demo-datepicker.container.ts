import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface ApiProperty {
  name: string;
  type: string;
  default: string;
  description: string;
}

const DATA: ApiProperty[] = [
  { type: 'string', name: 'placeholder', default: 'yyyy-MM-dd', description: 'Date to be selected on initialization.' },
  { type: 'FormControl', name: 'formControl', default: '', description: 'Inherited from ControlValueAccessor. Assigns a reference to the FormControl instance.' },
];

@Component({
  selector: 'rk-demo-datepicker',
  templateUrl: './demo-datepicker.container.html',
  styleUrls: ['./demo-datepicker.container.scss']
})
export class DemoDatepickerContainer implements OnInit {

  dateControl = new FormControl(new Date(2021, 0, 1));

  displayedColumns: string[] = ['name', 'type', 'default', 'description'];
  dataSource = DATA;

  htmlCode = `<span>Selected Date: {{ dateControl.value?.toDateString() }}</span>
<rk-datepicker
  [formControl]="dateControl"
  placeholder="Select a date"
></rk-datepicker>`;

  tsCode = `dateControl = new FormControl(new Date(1996, 11, 6));`;

  constructor() { }

  ngOnInit(): void {
  }

}
