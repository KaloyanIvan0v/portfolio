import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent {
  @Input() testimonialIndex: number = 0;
  testimonialData: any[] = [];
  currentTestimonial: any = {};

  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.loadTestimonials();
  }

  loadTestimonials() {
    this.translate.get('feedback').subscribe((data: any) => {
      this.testimonialData = data;
      this.currentTestimonial = this.testimonialData[this.testimonialIndex];
    });
  }

  prevTestimonial() {
    this.testimonialIndex--;
    if (this.testimonialIndex < 0) {
      this.testimonialIndex = this.testimonialData.length - 1;
    }
    this.currentTestimonial = this.testimonialData[this.testimonialIndex];
  }

  nextTestimonial() {
    this.testimonialIndex++;
    if (this.testimonialIndex >= this.testimonialData.length) {
      this.testimonialIndex = 0;
    }
    this.currentTestimonial = this.testimonialData[this.testimonialIndex];
  }
}
