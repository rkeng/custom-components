import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rk-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent implements OnInit {

  @Input() year: number;
  @Input() month: number;
  @Input() day: number;
  @Input() selectedDate: Date;

  @Output() onSelectDay = new EventEmitter<number>();
  @Output() yearChanged = new EventEmitter<number>();
  @Output() monthChanged = new EventEmitter<number>();
  @Output() switchToMonthView = new EventEmitter();

  NUM_DAYS_IN_WEEK = 7;
  NUM_DAYS_IN_DAY_LIST = this.NUM_DAYS_IN_WEEK * 6; // 7 days a week * 6 rows = 42
  currYear: number;
  currMonth: number;
  currDay: number;

  // day lists of previous, current, and next months
  prevList: number[];
  currList: number[];
  nextList: number[];

  constructor() { }

  ngOnInit(): void {
    this.currYear = this.year;
    this.currMonth = this.month;

    this.generateDayList();
  }

  handleLeftBtnClick() {
    if (this.currMonth === 0) {
      this.currMonth = 11;
      this.monthChanged.emit(this.currMonth);
      this.yearChanged.emit(--this.currYear);
    } else {
      this.monthChanged.emit(--this.currMonth);
    }

    this.generateDayList();
  }

  handleRightBtnClick() {
    if (this.currMonth === 11) {
      this.currMonth = 0;
      this.monthChanged.emit(this.currMonth);
      this.yearChanged.emit(++this.currYear);
    } else {
      this.monthChanged.emit(++this.currMonth);
    }

    this.generateDayList();
  }

  isToday(day): boolean {
    return (new Date(this.currYear, this.currMonth, day)).setHours(0, 0, 0, 0) === (new Date()).setHours(0, 0, 0, 0);
  }

  isSelected(day) {
    return (new Date(this.currYear, this.currMonth, day)).setHours(0, 0, 0, 0) === (new Date(this.selectedDate)).setHours(0, 0, 0, 0);
  }

  private generateDayList() {
    // get day of week of first day of month
    const firstDayOffset = new Date(this.currYear, this.currMonth, 1).getDay();
    // get number of days in current month
    const numDaysCurrMonth = new Date(this.currYear, this.currMonth + 1, 0).getDate();
    // get number of days in previous month
    const numDaysPrevMonth = new Date(this.currYear, this.currMonth, 0).getDate();

    // populate last days of previous month
    this.prevList = [];
    for (let i = 0; i < firstDayOffset; i++) {
      this.prevList.push(numDaysPrevMonth - firstDayOffset + 1 + i);
    }

    // populate days of current month
    this.currList = [];
    for (let i = 0; i < numDaysCurrMonth; i++) {
      this.currList.push(i + 1);
    }

    // populate first days of next month
    this.nextList = [];
    for (let i = 0; i < this.NUM_DAYS_IN_DAY_LIST - firstDayOffset - numDaysCurrMonth; i++) {
      this.nextList.push(i + 1);
    }
  }
}
