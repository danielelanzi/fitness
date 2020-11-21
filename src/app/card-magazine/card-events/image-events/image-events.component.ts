import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-events',
  templateUrl: './image-events.component.html',
  styleUrls: ['./image-events.component.css']
})
export class ImageEventsComponent implements OnInit {

  img = "../../../../assets/postural.png";

  constructor() { }

  ngOnInit(): void {
  }

}
