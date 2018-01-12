import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateEventComponent } from './date-event.component';

describe('DateEventComponent', () => {
  let component: DateEventComponent;
  let fixture: ComponentFixture<DateEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
