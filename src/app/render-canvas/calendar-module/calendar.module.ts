import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { DayTileComponent } from './day-tile/day-tile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CalendarComponent,
    CalendarHeaderComponent,
    DayTileComponent
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
