import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CalendarInputComponent } from './calendar-input/calendar-input.component';
import { RenderCanvasComponent } from './render-canvas/render-canvas.component';
import { WeekdaysHeaderComponent } from './render-canvas/weekdays-header/weekdays-header.component';

import { AppMaterialModule } from './app-material-module/app-material.module';
import { CalendarModule } from './render-canvas/calendar-module/calendar.module';

@NgModule({
  declarations: [
    AppComponent,
    CalendarInputComponent,
    RenderCanvasComponent,
    WeekdaysHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppMaterialModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
