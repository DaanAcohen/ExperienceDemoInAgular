Dear Colleague,

Below is a guide to building a reusable, text‑only carousel component in Angular with a clear separation between data (model) and presentation (view and logic). It assumes you have a working Angular project and familiarity with TypeScript, templates, and basic RxJS/Angular lifecycle hooks.

---

## 1. Overview

A well‑structured carousel should consist of:

* **Data Model**: A plain TypeScript interface that defines what a “slide” contains.
* **Presentation Component**: An Angular component responsible only for rendering and animating slides, accepting the slide data via `@Input()`.
* **Host (Consumer) Component**: Supplies the slide data and configuration to the carousel component.

By keeping these layers distinct, you ensure reusability, testability, and maintainability.

---

## 2. Define the Slide Model

Create a simple interface in `src/app/models/slide.model.ts`:

```ts
export interface Slide {
  title:   string;
  content: string;
}
```

> **Why?**
>
> * The carousel component remains agnostic of where or how slides are sourced.
> * Future extensions (e.g. adding `subtitle`, `link`, etc.) only require updating the model.

---

## 3. Build the Carousel Component

### 3.1 Component Class (`carousel.component.ts`)

```ts
import {
  Component,
  Input,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Slide } from '../models/slide.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  /** Array of slides to display */
  @Input() slides: Slide[] = [];

  /** Auto‑advance configuration */
  @Input() autoPlay = true;
  @Input() interval = 5000; // milliseconds

  currentIndex = 0;
  private timerId: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  /** Begin or resume auto‑advancing */
  private startAutoPlay() {
    if (this.autoPlay && this.slides.length > 1) {
      this.timerId = setInterval(() => this.next(), this.interval);
    }
  }

  /** Pause auto‑advance (e.g. on hover) */
  pauseAutoPlay() {
    this.clearTimer();
  }

  /** Resume auto‑advance (e.g. on mouse leave) */
  resumeAutoPlay() {
    this.startAutoPlay();
  }

  /** Clear any running interval */
  private clearTimer() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  /** Show previous slide */
  prev() {
    this.currentIndex =
      this.currentIndex > 0
        ? this.currentIndex - 1
        : this.slides.length - 1;
  }

  /** Show next slide */
  next() {
    this.currentIndex =
      this.currentIndex < this.slides.length - 1
        ? this.currentIndex + 1
        : 0;
  }

  /** Jump to a specific slide */
  goTo(index: number) {
    this.currentIndex = index;
  }
}
```

### 3.2 Template (`carousel.component.html`)

```html
<div class="carousel"
     (mouseenter)="pauseAutoPlay()"
     (mouseleave)="resumeAutoPlay()">
  
  <!-- Slides container -->
  <div class="track"
       [style.transform]="'translateX(-' + currentIndex * 100 + '%)'"
       style="transition: transform 0.5s ease;">
    
    <div class="slide" *ngFor="let slide of slides">
      <h2>{{ slide.title }}</h2>
      <p>{{ slide.content }}</p>
    </div>
  </div>

  <!-- Navigation controls -->
  <button class="arrow prev" (click)="prev()" aria-label="Previous slide">‹</button>
  <button class="arrow next" (click)="next()" aria-label="Next slide">›</button>

  <!-- Pagination dots -->
  <div class="dots">
    <button *ngFor="let slide of slides; let i = index"
            class="dot"
            [class.active]="i === currentIndex"
            (click)="goTo(i)"
            [attr.aria-label]="'Go to slide ' + (i + 1)">
    </button>
  </div>
</div>
```

### 3.3 Styles (`carousel.component.scss`)

```scss
.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 250px; // adjust as needed

  .track {
    display: flex;
    height: 100%;
  }

  .slide {
    flex: 0 0 100%;
    padding: 1rem;
    box-sizing: border-box;
  }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: rgba(0,0,0,0.4);
    color: #fff;
    font-size: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    z-index: 10;
  }

  .prev { left: 0.5rem; }
  .next { right: 0.5rem; }

  .dots {
    position: absolute;
    bottom: 0.75rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 0.5rem;

    .dot {
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
      border: none;
      background: rgba(255,255,255,0.6);
      cursor: pointer;
      &.active {
        background: #fff;
      }
    }
  }
}
```

---

## 4. Consume the Carousel in a Host Component

This component owns the data. It remains responsible for fetching or constructing slide objects; the carousel component merely displays them.

### 4.1 Host Class (`carousel-host.component.ts`)

```ts
import { Component } from '@angular/core';
import { Slide } from '../models/slide.model';

@Component({
  selector: 'app-carousel-host',
  templateUrl: './carousel-host.component.html'
})
export class CarouselHostComponent {
  /** Example dataset—could come from a service or API */
  public slides: Slide[] = [
    {
      title:   'Welcome to Quantum Safe Audit',
      content: 'Our audit methodology ensures maximum data security.'
    },
    {
      title:   'Our Process',
      content: '1. Planning → 2. Analysis → 3. Reporting'
    },
    {
      title:   'Why Choose Us?',
      content: 'Expertise, precision, and quantum‑resistant techniques.'
    }
  ];
}
```

### 4.2 Host Template (`carousel-host.component.html`)

```html
<app-carousel
  [slides]="slides"
  [autoPlay]="true"
  [interval]="6000">
</app-carousel>
```

---

## 5. Advantages of This Separation

1. **Single Responsibility**

    * The carousel component focuses on display and behavior only.
    * The host component focuses on data sourcing and business logic.

2. **Reusability**

    * You can import and configure `<app-carousel>` in any module, supplying different slide arrays.

3. **Testability**

    * Unit tests for the carousel can supply mock `slides` without worrying about external services.

4. **Maintainability**

    * Future changes to slide format (e.g. adding metadata) require updating only the model and the host—core carousel logic remains untouched.

---

Please let me know if you require further details or examples (such as swipe support or ARIA enhancements).

Kind regards,
Mr Acohen
