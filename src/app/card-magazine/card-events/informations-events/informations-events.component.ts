import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informations-events',
  templateUrl: './informations-events.component.html',
  styleUrls: ['./informations-events.component.css']
})
export class InformationsEventsComponent implements OnInit {

  title = 'Gli eventi dicembre e gennaio';
  dateTitle = '20/11/2020';
  str = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt reprehenderit, similique id rem harum quisquam quo omnis nulla, ullam fugiat ex molestias alias praesentium quae tempora quibusdam voluptatem voluptates at?';

  constructor() { }

  ngOnInit(): void {
  }

}
