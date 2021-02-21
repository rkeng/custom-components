import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'rk-calendar-nav',
  templateUrl: './calendar-nav.component.html',
  styleUrls: ['./calendar-nav.component.scss']
})
export class CalendarNavComponent implements OnInit {

  @Input() title: string;
  @Input() isMiddleBtnDisabled: boolean;

  @Output() onLeftBtnClick = new EventEmitter();
  @Output() onMiddleBtnClick = new EventEmitter();
  @Output() onRightBtnClick = new EventEmitter();

  leftBtn = faChevronLeft;
  rightBtn = faChevronRight;

  constructor() { }

  ngOnInit(): void {
  }

}
