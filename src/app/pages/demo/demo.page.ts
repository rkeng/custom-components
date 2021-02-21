import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rk-demo',
  templateUrl: './demo.page.html',
  styleUrls: ['./demo.page.scss']
})
export class DemoPage implements OnInit {

  selectedDate: Date = new Date(1996, 11, 6);

  constructor() { }

  ngOnInit(): void {
  }

  handleOnSelect(date) {
    this.selectedDate = date;
  }

}
