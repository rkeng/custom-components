import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

enum CalendarView {
  Y = 'Year',
  M = 'Month',
  D = 'Day'
};

@Component({
  selector: 'rk-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @Input() date: Date;
  @Output() onSelect = new EventEmitter<Date>();

  year: number = (new Date()).getFullYear();
  month: number = (new Date()).getMonth();
  day: number = (new Date()).getDate();

  calView = CalendarView;
  currView: string;

  constructor() { }

  ngOnInit(): void {
    this.currView = CalendarView.D;

    if (this.date) {
      this.year = this.date.getFullYear();
      this.month = this.date.getMonth();
      this.day = this.date.getDate();
    }
  }

  switchView(view: string) {
    this.currView = view;
  }

  updateYear(year: number) {
    this.year = year;
  }

  updateMonth(month: number) {
    this.month = month;
  }

  updateDay(day: number) {
    this.day = day;
  }

  handleSelectYear(year: number) {
    this.updateYear(year);
    this.updateMonth(null);
    this.updateDay(null);
    this.switchView(CalendarView.M);
  }

  handleSelectMonth(month: number) {
    this.updateMonth(month);
    this.updateDay(null);
    this.switchView(CalendarView.D);
  }

  handleSelectDay(day: number) {
    this.updateDay(day);
    this.onSelect.emit(new Date(this.year, this.month, this.day));
  }
}
