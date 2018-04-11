import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekdaysHeaderComponentComponent } from './weekdays-header-component.component';

describe('WeekdaysHeaderComponentComponent', () => {
  let component: WeekdaysHeaderComponentComponent;
  let fixture: ComponentFixture<WeekdaysHeaderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekdaysHeaderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekdaysHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
