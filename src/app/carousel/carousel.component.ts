import {
  Component,
  Input,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Slide } from '../models/slide.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
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
