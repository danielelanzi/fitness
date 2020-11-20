import { Component, OnInit } from '@angular/core';
import { faChevronRight, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-informations-current',
  templateUrl: './informations-current.component.html',
  styleUrls: ['./informations-current.component.css']
})
export class InformationsCurrentComponent implements OnInit {

  faChevronRight = faChevronRight;
  faClock = faClock;

  constructor() { }

  ngOnInit(): void {
  }

}
