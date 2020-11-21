import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-events',
  templateUrl: './card-events.component.html',
  styleUrls: ['./card-events.component.css']
})
export class CardEventsComponent implements OnInit {

  faChevronRight = faChevronRight;

  constructor() { }

  ngOnInit(): void {
  }

}
