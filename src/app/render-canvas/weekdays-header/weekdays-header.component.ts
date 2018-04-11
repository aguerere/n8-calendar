import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'weekdays-header',
  templateUrl: './weekdays-header.component.html',
  styleUrls: ['./weekdays-header.component.css']
})
export class WeekdaysHeaderComponent implements OnInit {

  weekdays : String[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

  constructor() { }

  ngOnInit() {
  }

}
