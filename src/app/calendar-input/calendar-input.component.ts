import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-input',
  templateUrl: './calendar-input.component.html',
  styleUrls: ['./calendar-input.component.css']
})
export class CalendarInputComponent implements OnInit {
  dt;
  days;
  countryCode;
  constructor() { 
    this.dt = new Date();
    this.days = 15;
    this.countryCode = 'US';
  }

  ngOnInit() {
  }

  render() {
    console.log(this.dt, this.days, this.countryCode);
  }

}
