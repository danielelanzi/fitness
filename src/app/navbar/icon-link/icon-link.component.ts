import { Component, OnInit } from '@angular/core';
import { faBell, faCalendarAlt, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-link',
  templateUrl: './icon-link.component.html',
  styleUrls: ['./icon-link.component.css']
})
export class IconLinkComponent implements OnInit {

  faHome = faHome;
  faCalendarAlt = faCalendarAlt;
  faBell = faBell;

  constructor() { }

  ngOnInit(): void {
  }

}
