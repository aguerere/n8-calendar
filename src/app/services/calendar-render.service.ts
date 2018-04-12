import { Injectable } from '@angular/core';
import * as moment from 'moment';

import { CalendarMonth } from './calendar-month';
import { CalendarDay } from './calendar-day';

@Injectable()
export class CalendarRenderService {
  private _startDate : Date;
  private _daysCount : number;
  private _countryCode : string;
  private _calendarMonthsCount : number;
  private _calendarMonths : CalendarMonth[];

  constructor() { }

  get startDate() : Date {
    return this._startDate;
  }

  set startDate(newStartDate : Date) {
    this._startDate = newStartDate;
  }

  get daysCount() : number {
    return this._daysCount;
  }

  set daysCount(newDaysCount : number) {
    this._daysCount = newDaysCount;
  }

  get countryCode() : string {
    return this._countryCode;
  }

  set countryCode(newCountryCode : string) {
    this._countryCode = newCountryCode;
  }

  render() {
    let startDate = moment(this._startDate);
    let endDate = moment(this._startDate).add(this._daysCount, 'd');
    this._calendarMonthsCount = endDate.month() - startDate.month();
    this._calendarMonths = [];

    let currentDate = moment(this._startDate);
    let monthDate = moment(this._startDate).date(1);
    let daysToCreate = this._daysCount;
    for (let i : number = 0; i <= this._calendarMonthsCount; i++) {
      //Create month
      let month = new CalendarMonth();
      month.monthName = monthDate.format("MMMM");
      month.year = monthDate.format("YYYY");
      //--create month
      
      //Fill in blanks at the start of the month calendar
      let firstWeekday = moment(currentDate).day();
      //console.log("firstWeekday",firstWeekday);
      if (firstWeekday < 6) { //If current day (first day) is not a saturday
        for (let j : number = 0; j < firstWeekday; j++) {
          let day = new CalendarDay(null);
          month.addDay(day);
        }
        //--Fill blanks
      }

      
      for (let j : number = currentDate.date(); j <= monthDate.daysInMonth() && daysToCreate > 0; j++) {
        let day = new CalendarDay(currentDate);
        month.addDay(day);
        //console.log(currentDate.format());
        currentDate = currentDate.add(1, 'd');
        daysToCreate--;
      }

      //Fill in blanks at the end of the month calendar
      let lastWeekday = moment(currentDate).day();
      //console.log("lastWeekday",lastWeekday);
      if (lastWeekday > 0) { //If current day (last day) is not a sunday
        for (let j : number = lastWeekday; j < 7; j++) {
          let day = new CalendarDay(null);
          month.addDay(day);
        }
      }
      //--Fill blanks

      monthDate = monthDate.add(1, 'M');
      this._calendarMonths.push(month);
    }
    console.log(this._calendarMonths);
  }
}
