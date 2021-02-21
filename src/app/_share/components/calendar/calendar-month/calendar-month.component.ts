import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rk-calendar-month',
  templateUrl: './calendar-month.component.html',
  styleUrls: ['./calendar-month.component.scss']
})
export class CalendarMonthComponent implements OnInit {

  @Input() year: number;
  @Input() month: number;

  @Output() onSelectMonth = new EventEmitter<number>();
  @Output() yearChanged = new EventEmitter<number>();
  @Output() switchToYearView = new EventEmitter();

  NUM_MONTHS = 12;
  currYear: number;

  constructor() { }

  ngOnInit(): void {
    this.currYear = this.year;
  }

  handleLeftBtnClick() {
    this.yearChanged.emit(--this.currYear);
  }

  handleRightBtnClick() {
    this.yearChanged.emit(++this.currYear);
  }

}
