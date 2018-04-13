import { Component, OnInit } from '@angular/core';
import { CalendarRenderService } from '../services/calendar-render.service';

@Component({
  selector: 'render-canvas',
  templateUrl: './render-canvas.component.html',
  styleUrls: ['./render-canvas.component.css']
})
export class RenderCanvasComponent implements OnInit {

  constructor(public calendarRenderService : CalendarRenderService) { }

  ngOnInit() {
  }

}
