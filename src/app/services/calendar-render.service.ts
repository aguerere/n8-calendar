import { Injectable } from '@angular/core';

@Injectable()
export class CalendarRenderService {
  private _startDate : Date;
  private _daysCount : number;
  private _countryCode : string;

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
}
