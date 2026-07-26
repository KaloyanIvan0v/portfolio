import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TESTIMONIAL_IMAGES } from '../shared/data/testimonials';
import { Testimonial } from '../shared/models/testimonial.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent {
  private translate = inject(TranslateService);

  readonly images = TESTIMONIAL_IMAGES;
  testimonials: Testimonial[] = [];
  currentIndex = 0;

  constructor() {
    // stream() re-emits when the language changes, so the slider stays in sync.
    this.translate
      .stream('feedback')
      .pipe(takeUntilDestroyed())
      .subscribe((data) => {
        this.testimonials = Array.isArray(data) ? data : [];
        if (this.currentIndex >= this.testimonials.length) {
          this.currentIndex = 0;
        }
      });
  }

  get current(): Testimonial | undefined {
    return this.testimonials[this.currentIndex];
  }

  select(index: number): void {
    this.currentIndex = index;
  }

  prevTestimonial(): void {
    const count = this.testimonials.length;
    if (count === 0) return;
    this.currentIndex = (this.currentIndex - 1 + count) % count;
  }

  nextTestimonial(): void {
    const count = this.testimonials.length;
    if (count === 0) return;
    this.currentIndex = (this.currentIndex + 1) % count;
  }
}
