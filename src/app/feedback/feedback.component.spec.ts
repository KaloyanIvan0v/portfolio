import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackComponent } from './feedback.component';
import { commonTestProviders } from '../../testing/common-testing';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackComponent],
      providers: [...commonTestProviders],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    component.testimonials.set([
      { author: 'A', feedback: 'first' },
      { author: 'B', feedback: 'second' },
    ]);
    component.currentIndex.set(0);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should wrap to the last testimonial when going back from the first', () => {
    component.prevTestimonial();
    expect(component.currentIndex()).toBe(1);
  });

  it('should wrap to the first testimonial when going past the last', () => {
    component.currentIndex.set(1);
    component.nextTestimonial();
    expect(component.currentIndex()).toBe(0);
  });

  it('should not throw when there are no testimonials', () => {
    component.testimonials.set([]);
    component.currentIndex.set(0);
    expect(() => component.nextTestimonial()).not.toThrow();
    expect(component.currentIndex()).toBe(0);
  });
});
