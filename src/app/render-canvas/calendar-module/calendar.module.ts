import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarMonthComponent } from './calendar-month/calendar-month.component';

import { AppMaterialModule } from '../../app-material-module/app-material.module';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  declarations: [
    CalendarMonthComponent
  ],
  exports: [
    CalendarMonthComponent
  ],
  providers: [
    
  ]
})
export class CalendarModule { }
