import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-announcements',
  templateUrl: './modal-announcements.component.html',
  styleUrls: ['./modal-announcements.component.css'],
})
export class ModalAnnouncementsComponent implements OnInit {

  firstTitle = "Chiusure straordinarie per vacanze di Natale";
  secondTitle = "Chiusure straordinarie per vacanze di Natale";

  constructor() { }

  ngOnInit(): void {
  }

}
