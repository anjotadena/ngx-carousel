# Material Image Slider
![build](https://github.com/anjotadena/ngx-image-slider/workflows/Tests/badge.svg?branch=master&event=push)
[![npm version](https://badge.fury.io/js/ngx-image-slider.svg)](https://badge.fury.io/js/ngx-image-slider)
[![Live demo](https://img.shields.io/badge/demo-blue.svg)](https://anjotadena.github.io/ngx-image-slider/)


## About
This is a image-slider component for Angular using Material Design. See [live demo](https://anjotadena.github.io/ngx-image-slider/).

### History and current status

This is a fork and prolongation of the discontinued [```@ngmodule/material-carousel``` by Gabriel Sanches](https://github.com/gbrlsnchs/material2-carousel).

The current development goal is to keep the package secure and compatible with the most recent Angular version. 

PR's are welcomed; including bugfixes, upgrades and enhancements.

### Installing
`npm install --save ngx-image-slider`

### Importing
```typescript
//...
import { NgxImageSliderModule } from 'ngx-image-slider';

@NgModule({
  // ...
  imports: [
    // ...
    NgxImageSliderModule.forRoot(),
    // ...
  ]
})
export class AppModule {}
```

## Usage
### `NgxImageSliderComponent`
```typescript
import { NgxImageSlider, NgxImageSliderComponent } from 'ngx-image-slider';
```
```html
<image-slider>
  ...
</image-slider>
```
#### Attributes
| Input                 |  Type              | Description                                                                | Default value       |
| --------------------- | ------------------ | -------------------------------------------------------------------------- | :-----------------: |
| `timings`             | `string`           | Timings for slide animation.                                               | `'250ms ease-in'`   |
| `autoplay`            | `boolean`          | Enable automatic sliding.                                                  | `true`              |
| `interval`            | `number`           | Autoplay's interval in milliseconds.                                       | `5000`              |
| `loop`                | `boolean`          | Enable loop through arrows.                                                | `true`              |
| `hideArrows`          | `boolean`          | Hide navigation arrows.                                                    | `false`             |
| `hideIndicators`      | `boolean`          | Hide navigation indicators.                                                | `false`             |
| `color`               | `ThemePalette`     | Color palette from Material.                                               | `'accent'`          |
| `maxWidth`            | `string`           | Maximum width.                                                             | `'auto'`            |
| `maintainAspectRatio` | `boolean`          | If true, use `proportion` to determine height, else `slideHeight` is used. | `true`              |
| `proportion`          | `number`           | Height proportion compared to width.                                       | `25`                |
| `slideHeight`         | `string`           | Explicit slide height. Used when maintainAspectRatio is false.             | `'100%'`            |
| `slides`              | `number`           | Maximum amount of displayed slides.                                        |                     |
| `useKeyboard`         | `boolean`          | Enable keyboard navigation.                                                | `true`              |
| `useMouseWheel`       | `boolean`          | Enable navigation through mouse wheeling.                                  | `false`             |
| `orientation`         | `Orientation`      | Orientation of the sliding panel.                                          | `'ltr'`             |
| `svgIconOverrides`    | `SvgIconOverrides` | Override default image slidericons with registered SVG icons.              |                     |
| `ariaLabel`           | `string`           | Image slider accessible name                                               | `'Sliding image slider'`|
| `lazyLoad`            | `booelan`          | Lazy load content                                                          | false               |

#### Size Considerations and Recommendations
By default, `maintainAspectRatio` is true, which means height is controlled through `proportion`.

If you want to have a image-slider with constant height (regardless of width), you must set `maintainAspectRatio` to false.

By default, `slideHeight` is set to `100%`, which will not work if the parent element height isn't defined (i.e. relative heights do not work if the parent height is `auto`). In that case you could pass a valid css string for `slideHeight`. You can use any valid css height string like `100px` or `25vh`.

Play around with the [demo](https://anjotadena.github.io/ngx-image-slider) to see how you can use this image-slider with or without explicit parent height.

**With parent elements that have height:auto**
* use `proportion` if you want a image-slider that resizes responsively (this is the default configuration).
* use `maintainAspectRatio="false"` and a non-percentage `slideHeight` if you want a fixed height image-slider.
* **DO NOT** use relative (%) values for `slideHeight`; the image-slider will not render.

**With parent elements that have a set height**
* use `maintainAspectRatio="false"` if you want a fixed height image-slider that fills the parent element (`slideHeight` is `100%` by default).
* **DO NOT** use `maintainAspectRatio="false"` **and** `slideHeight` (unless `slideHeight="100%"`); the image-slider will not render correctly because the buttons and indicators will be positioned with respect to the parent.
* **DO NOT** use `proportion`; this will lead to gaps or unwanted overflow.

### `NgxImageSliderComponent`
```typescript
import { NgxImageSliderSlide, NgxImageSliderComponent } from '@ngmodule/material-image-slider';
```
```html
<image-slider>
  <ngx-image-slider>
    ...
  </ngx-image-slider>
</image-slider>
```
#### Attributes
| Input          | Type      | Description                   | Default value |
| -------------- | --------- | ----------------------------- | :-----------: |
| `image`        | `string`  | Image displayed in the slide. |               |
| `overlayColor` | `string`  | Color of the slide's overlay. | `'#00000040'` |
| `hideOverlay`  | `boolean` | Toggle overlay on/off.        | `false`       |
| `ariaLabel`    | `string`  | Image accessible name         | `'Slide'`     |
| `load`         | `boolean` | Override lazyLoad             | `true`        |


## How to develop and test this component

### Testing
`ng test image-slider --watch false`
### Running the demo application
`ng serve demo`
