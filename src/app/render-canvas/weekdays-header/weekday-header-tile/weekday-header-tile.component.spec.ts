import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekdayHeaderTileComponent } from './weekday-header-tile.component';

describe('WeekdayHeaderTileComponent', () => {
  let component: WeekdayHeaderTileComponent;
  let fixture: ComponentFixture<WeekdayHeaderTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekdayHeaderTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekdayHeaderTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
