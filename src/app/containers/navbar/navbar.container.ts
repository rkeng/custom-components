import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'rk-navbar',
  templateUrl: './navbar.container.html',
  styleUrls: ['./navbar.container.scss']
})
export class NavbarContainer implements OnInit {

  faGithub = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

}
