import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';

import { AppMaterialModule } from '../../app-material-module/app-material.module';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  declarations: [
    CalendarComponent
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
