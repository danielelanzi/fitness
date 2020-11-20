import { Component, OnInit } from '@angular/core';
import { faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

  faBell = faBell;
  firstTitle = "Chiusure straordinarie per vacanze di Natale";
  secondTitle = "Chiusure straordinarie per vacanze di Natale";

  constructor() { }

  ngOnInit(): void {
  }

}
