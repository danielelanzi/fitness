import { Component, OnInit } from '@angular/core';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-activity',
  templateUrl: './card-activity.component.html',
  styleUrls: ['./card-activity.component.css']
})
export class CardActivityComponent implements OnInit {

  faCalendarAlt = faCalendarAlt;
  numberActivity = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
