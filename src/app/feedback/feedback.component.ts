import { Component, computed, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TESTIMONIAL_IMAGES } from '../shared/data/testimonials';
import { Testimonial } from '../shared/models/testimonial.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent {
  private translate = inject(TranslateService);

  readonly images = TESTIMONIAL_IMAGES;
  readonly testimonials = signal<Testimonial[]>([]);
  readonly currentIndex = signal(0);
  readonly current = computed(() => this.testimonials()[this.currentIndex()]);

  constructor() {
    // stream() re-emits when the language changes, so the slider stays in sync.
    this.translate
      .stream('feedback')
      .pipe(takeUntilDestroyed())
      .subscribe((data) => {
        this.testimonials.set(Array.isArray(data) ? data : []);
        if (this.currentIndex() >= this.testimonials().length) {
          this.currentIndex.set(0);
        }
      });
  }

  select(index: number): void {
    this.currentIndex.set(index);
  }

  prevTestimonial(): void {
    this.step(-1);
  }

  nextTestimonial(): void {
    this.step(1);
  }

  private step(direction: 1 | -1): void {
    const count = this.testimonials().length;
    if (count === 0) return;
    this.currentIndex.update((index) => (index + direction + count) % count);
  }
}
