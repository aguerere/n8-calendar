import { Component, OnInit } from '@angular/core';
import { CalendarRenderService } from '../services/calendar-render.service';

@Component({
  selector: 'calendar-input',
  templateUrl: './calendar-input.component.html',
  styleUrls: ['./calendar-input.component.css']
})
export class CalendarInputComponent implements OnInit {
  startDate : Date;
  days : number;
  countryCode : String;
  constructor() {
    this.startDate = new Date();
    this.days = 15;
    this.countryCode = 'US';
  }

  ngOnInit() {
  }

  updateCountryCode(event : any) {
    this.countryCode = event.trim().toUpperCase();
  }

  keyPressCountryCode(event : any) {
    const pattern = /[a-zA-Z]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) event.preventDefault();
  }

  render() {
    console.log(this.startDate, this.days, this.countryCode);
  }

}
