import { SafeStyle } from '@angular/platform-browser';

export interface NgxImageSliderItem {
  image: SafeStyle;
  overlayColor: string;
  hideOverlay: boolean;
  disabled: boolean;
  load: boolean;
  ariaLabel: string;
}
