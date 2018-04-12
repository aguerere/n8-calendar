import { Component, OnInit, Input } from '@angular/core';
import { CalendarMonth } from '../../../services/calendar-month';

@Component({
  selector: 'calendar-month',
  templateUrl: './calendar-month.component.html',
  styleUrls: ['./calendar-month.component.css']
})
export class CalendarMonthComponent implements OnInit {

  @Input() month : CalendarMonth;

  constructor() { }

  ngOnInit() {
  }

}
