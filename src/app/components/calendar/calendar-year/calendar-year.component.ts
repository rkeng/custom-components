import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rk-calendar-year',
  templateUrl: './calendar-year.component.html',
  styleUrls: ['./calendar-year.component.scss']
})
export class CalendarYearComponent implements OnInit {

  @Input() year: number;

  @Output() onSelectYear = new EventEmitter<number>();

  ENABLED_RANGE = 10;
  start: number;

  constructor() {
  }

  ngOnInit(): void {
    this.start = this.year - this.year % 10;
  }

  handleLeftBtnClick() {
    this.start -= 10;
  }

  handleRightBtnClick() {
    this.start += 10;
  }

}
