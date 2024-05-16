import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxImageSliderItemComponent } from './image-slider-item.component';

describe('NgxImageSliderItemComponent', () => {
  let component: NgxImageSliderItemComponent;
  let fixture: ComponentFixture<NgxImageSliderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxImageSliderItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxImageSliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
