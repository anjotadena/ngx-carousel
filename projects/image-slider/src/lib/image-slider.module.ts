import { NgModule, ModuleWithProviders, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { NgxImageSliderComponent } from './image-slider.component';
import { NgxImageSliderItemComponent } from './image-slider-item/image-slider-item.component';
import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
  HammerModule
} from '@angular/platform-browser';

@Injectable()
export class NgxImageSliderHammerConfig extends HammerGestureConfig {
  overrides = {
    pinch: { enable: false },
    rotate: { enable: false }
  };
}
@NgModule({
  declarations: [NgxImageSliderComponent, NgxImageSliderItemComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, HammerModule],
  exports: [NgxImageSliderComponent, NgxImageSliderItemComponent]
})
export class NgxImageSliderModule {
  static forRoot(): ModuleWithProviders<NgxImageSliderModule> {
    return {
      ngModule: NgxImageSliderModule,
      providers: [
        { provide: HAMMER_GESTURE_CONFIG, useClass: NgxImageSliderHammerConfig }
      ]
    };
  }
}
