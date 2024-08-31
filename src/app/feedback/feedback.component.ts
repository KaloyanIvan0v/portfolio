import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../shared/services/data.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
})
export class FeedbackComponent {
  @Input() testimonialIndex: number = 0;

  constructor(private dataService: DataService) {}
  testimonialData = this.dataService.testimonialData;
  @Input() currentTestimonialIndex: object = this.testimonialData[0];
  prevTestimonial() {
    this.testimonialIndex--;
    if (this.testimonialIndex < 0) {
      this.testimonialIndex = this.testimonialData.length - 1;
    }
    this.currentTestimonialIndex = this.testimonialData[this.testimonialIndex];
  }

  nextTestimonial() {
    this.testimonialIndex++;
    if (this.testimonialIndex > this.testimonialData.length - 1) {
      this.testimonialIndex = 0;
    }
    this.currentTestimonialIndex = this.testimonialData[this.testimonialIndex];
  }
}
