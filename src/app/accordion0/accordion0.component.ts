import { Input, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-accordion0',
  templateUrl: './accordion0.component.html',
  styleUrls: ['./accordion0.component.css']
})
export class Accordion0Component implements OnInit {

  @ViewChild('myaccordion') accordion: MatAccordion;

  firstTitle = "Chiusure straordinarie per vacanze di Natale";
  dateTitle = '20/11/2020';
  panelOpenState = false;
  openParagaph = false;
  str = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae aliquid perferendis fugiat itaque officiis temporibus deleniti aut quaerat, est voluptatem, expedita aspernatur sapiente quo eum repellendus, voluptatum ipsa optio! Labore.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Libero, neque asperiores, incidunt officia dolore illo debitis nostrum modi eligendi nesciunt molestiae? Sapiente laudantium minus ipsam pariatur illum reprehenderit dolore corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit.Delectus in harum ipsa animi illo velit deleniti similique culpa corrupti accusantium dolorem debitis dignissimos consequuntur, architecto quasi? Numquam nesciunt quod cumque?";

  constructor() { }

  ngOnInit(): void {
  }

}
