import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { CalendarInputComponent } from './calendar-input/calendar-input.component';
import { RenderCanvasComponent } from './render-canvas/render-canvas.component';
import { WeekdaysHeaderComponent } from './render-canvas/weekdays-header/weekdays-header.component';

import { CalendarModule } from './render-canvas/calendar-module/calendar.module';
import { WeekdayHeaderTileComponent } from './render-canvas/weekdays-header/weekday-header-tile/weekday-header-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarInputComponent,
    RenderCanvasComponent,
    WeekdaysHeaderComponent,
    WeekdayHeaderTileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
