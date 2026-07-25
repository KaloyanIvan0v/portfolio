import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackComponent } from './feedback.component';
import {
  commonTestImports,
  commonTestProviders,
} from '../../testing/common-testing';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackComponent, ...commonTestImports],
      providers: [...commonTestProviders],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    component.testimonials = [
      { author: 'A', feedback: 'first' },
      { author: 'B', feedback: 'second' },
    ];
    component.currentIndex = 0;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should wrap to the last testimonial when going back from the first', () => {
    component.prevTestimonial();
    expect(component.currentIndex).toBe(1);
  });

  it('should wrap to the first testimonial when going past the last', () => {
    component.currentIndex = 1;
    component.nextTestimonial();
    expect(component.currentIndex).toBe(0);
  });

  it('should not throw when there are no testimonials', () => {
    component.testimonials = [];
    component.currentIndex = 0;
    expect(() => component.nextTestimonial()).not.toThrow();
    expect(component.currentIndex).toBe(0);
  });
});
