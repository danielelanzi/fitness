import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-waitinglist',
  templateUrl: './image-waitinglist.component.html',
  styleUrls: ['./image-waitinglist.component.css']
})
export class ImageWaitinglistComponent implements OnInit {

  img = "../../../../assets/postural.png";

  constructor() { }

  ngOnInit(): void {
  }

}
