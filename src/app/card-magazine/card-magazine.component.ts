import { Component, OnInit } from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-magazine',
  templateUrl: './card-magazine.component.html',
  styleUrls: ['./card-magazine.component.css']
})
export class CardMagazineComponent implements OnInit {

  faCircle = faCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
