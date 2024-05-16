import { ListKeyManagerOption } from '@angular/cdk/a11y';
import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { NgxImageSliderItem } from './image-slider-item';

@Component({
  selector: 'ngx-image-slider-item',
  templateUrl: './image-slider-item.component.html',
  styleUrls: ['./image-slider-item.component.scss']
})
export class NgxImageSliderItemComponent
  implements ListKeyManagerOption, NgxImageSliderItem, OnInit {
  @Input() public image: SafeStyle;
  @Input() public overlayColor = '#00000040';
  @Input() public hideOverlay = false;
  @Input() public ariaLabel = '';
  @Input() public disabled = false; // implements ListKeyManagerOption
  @Input() public load = false;

  @ViewChild(TemplateRef) public templateRef: TemplateRef<any>;

  constructor(public sanitizer: DomSanitizer) {
  }

  public ngOnInit(): void {
    if (this.image) {
      this.image = this.sanitizer.bypassSecurityTrustStyle(`url("${this.image}")`);
    }
  }
}
