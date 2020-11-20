import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-current',
  templateUrl: './image-current.component.html',
  styleUrls: ['./image-current.component.css']
})
export class ImageCurrentComponent implements OnInit {

  img = "../../../../assets/postural.png";

  constructor() { }

  ngOnInit(): void {
  }

}
