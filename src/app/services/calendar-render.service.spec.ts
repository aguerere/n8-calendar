import { TestBed, inject } from '@angular/core/testing';

import { CalendarRenderService } from './calendar-render.service';

describe('CalendarRenderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarRenderService]
    });
  });

  it('should be created', inject([CalendarRenderService], (service: CalendarRenderService) => {
    expect(service).toBeTruthy();
  }));
});
