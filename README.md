# Material Image Slider

![build](https://github.com/anjotadena/ngx-image-slider/workflows/Tests/badge.svg?branch=master&event=push)
[![npm version](https://badge.fury.io/js/ngx-image-slider.svg)](https://badge.fury.io/js/ngx-image-slider)
[![Live demo](https://img.shields.io/badge/demo-blue.svg)](https://anjotadena.github.io/ngx-image-slider/)

## About

This is an image slider component built with [Angular](https://angular.io) and [Angular Material](https://material.angular.io). Check out the live demo [here](https://anjotadena.github.io/ngx-image-slider).

## History and Current Status

This project is a fork and continuation of the now-discontinued [`@ngmodule/material-carousel` by Gabriel Sanches](https://github.com/gbrlsnchs/material2-carousel) created by Gabriel Sanches. Our current focus is to maintain package security and ensure compatibility with the latest Angular version. We welcome pull requests, including bug fixes, upgrades, and enhancements to the component.

## Installation

Install the package using npm:

```bash
npm install --save ngx-image-slider
```

### Importing the Module

In your Angular application's main module (usually app.module.ts), import the NgxImageSliderModule:

```typescript
import { NgModule } from "@angular/core";
import { NgxImageSliderModule } from "ngx-image-slider";

// ... other imports

@NgModule({
  // ...
  imports: [
    // ... other modules
    NgxImageSliderModule.forRoot(),
    // ... other modules
  ],
  // ...
})
export class AppModule {}
```

## Usage

The component is named ngx-image-slider. Here's how to use it in your component template:

### `NgxImageSliderComponent`

```typescript
// Import modules
import { NgModule } from '@angular/core';
import { NgxImageSliderModule } from 'ngx-image-slider';

@NgModule({
  // ...
  imports: [
    // ... others module
    NgxImageSliderModule.forRoot(),
  ],
  // ...
})
export class FeatureModule {} // or it could be AppModule

// Component level
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxImageSliderItemComponent, Orientation } from 'ngx-image-slider';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
  images = [
    "https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1&i=1",
    "https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1&i=2",
    "https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1&i=3",
    "https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1&i=4",
    "https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1&i=5"
  ];

  constructor() {}
}
```

```html
<!-- This is just an example! feel free to set attributes -->
<ngx-image-slider
  timings="250ms ease-in"
  maxWidth="auto"
  [slides]="images.length"
  [hideArrows]="false"
  [useKeyboard]="true"
  [useMouseWheel]="false"
  orientation="ltr"
  proportion="50"
>
  <ngx-image-slider-item
    *ngFor="let image of images"
    [image]="image"
    [hideOverlay]="true"
  ></ngx-image-slider-item>
</ngx-image-slider>
```

#### Attributes

| Input                 | Type               | Description                                                                | Default value            |
| --------------------- | ------------------ | -------------------------------------------------------------------------- | ------------------------ |
| `timings`             | `string`           | Timings for slide animation.                                               | `'250ms ease-in'`        |
| `autoplay`            | `boolean`          | Enable automatic sliding.                                                  | `true`                   |
| `interval`            | `number`           | Autoplay's interval in milliseconds.                                       | `5000`                   |
| `loop`                | `boolean`          | Enable loop through arrows.                                                | `true`                   |
| `hideArrows`          | `boolean`          | Hide navigation arrows.                                                    | `false`                  |
| `hideIndicators`      | `boolean`          | Hide navigation indicators.                                                | `false`                  |
| `color`               | `ThemePalette`     | Color palette from Material.                                               | `'accent'`               |
| `maxWidth`            | `string`           | Maximum width.                                                             | `'auto'`                 |
| `maintainAspectRatio` | `boolean`          | If true, use `proportion` to determine height, else `slideHeight` is used. | `true`                   |
| `proportion`          | `number`           | Height proportion compared to width.                                       | `25`                     |
| `slideHeight`         | `string`           | Explicit slide height. Used when `maintainAspectRatio` is false.           | `'100%'`                 |
| `slides`              | `number`           | Maximum amount of displayed slides.                                        |                          |
| `useKeyboard`         | `boolean`          | Enable keyboard navigation.                                                | `true`                   |
| `useMouseWheel`       | `boolean`          | Enable navigation through mouse wheeling.                                  | `false`                  |
| `orientation`         | `Orientation`      | Orientation of the sliding panel.                                          | `'ltr'`                  |
| `svgIconOverrides`    | `SvgIconOverrides` | Override default image slider icons with registered SVG icons.             |                          |
| `ariaLabel`           | `string`           | Image slider accessible name                                               | `'Sliding image slider'` |
| `lazyLoad`            | `boolean`          | Lazy load content                                                          | `false`                  |

#### Size Considerations and Recommendations

By default, `maintainAspectRatio` is true, which means height is controlled through `proportion`.

If you want to have an image slider with constant height (regardless of width), you must set `maintainAspectRatio` to false.

By default, `slideHeight` is set to `100%`, which will not work if the parent element height isn't defined (i.e. relative heights do not work if the parent height is `auto`). In that case you can use a fixed CSS unit for `slideHeight`. You can use any valid css height string like `100px` or `25vh`.

Play around with the demo [here](https://anjotadena.github.io/ngx-image-slider) to see how you can use this image slider with or without explicit parent height.

**With parent elements that have height:auto**

- use `proportion` if you want an image slider that resizes responsively (this is the default configuration).
- use `maintainAspectRatio="false"` and a non-percentage `slideHeight` if you want a fixed height image slider.
- **DO NOT** use relative (%) values for `slideHeight`; the image slider will not render.

**With parent elements that have a set height**

- use `maintainAspectRatio="false"` if you want a fixed height image slider that fills the parent element (`slideHeight` is `100%` by default).
- **DO NOT** use `maintainAspectRatio="false"` **and** `slideHeight` (unless `slideHeight="100%"`); the image slider will not

## How to develop and test this component

### Testing

`ng test image-slider --watch false`

### Running the demo application

`ng serve demo`
