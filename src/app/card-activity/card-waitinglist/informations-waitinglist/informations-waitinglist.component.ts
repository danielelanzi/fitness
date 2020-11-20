import { Component, OnInit } from '@angular/core';
import { faChevronRight, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-informations-waitinglist',
  templateUrl: './informations-waitinglist.component.html',
  styleUrls: ['./informations-waitinglist.component.css']
})
export class InformationsWaitinglistComponent implements OnInit {

  faChevronRight = faChevronRight;
  faClock = faClock;
  numberWaitingList = 2;

  constructor() { }

  ngOnInit(): void {
  }

}
