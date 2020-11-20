import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-icon-profile',
  templateUrl: './icon-profile.component.html',
  styleUrls: ['./icon-profile.component.css']
})
export class IconProfileComponent implements OnInit {

  faUserCircle = faUserCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
