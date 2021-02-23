import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'rk-demo',
  templateUrl: './demo.page.html',
  styleUrls: ['./demo.page.scss']
})
export class DemoPage implements OnInit {

  selectedDate: Date = new Date(1996, 11, 6);

  dateControl = new FormControl(this.selectedDate);

  faGithub = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

  handleOnSelect(date) {
    this.selectedDate = date;
  }

}
