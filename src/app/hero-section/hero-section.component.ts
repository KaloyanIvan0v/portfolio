import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent implements OnInit {
  public imagePosition: number = 0;

  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.updateImagePosition();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateImagePosition();
  }

  updateImagePosition(): void {
    const innerWidth = window.innerWidth;

    this.imagePosition = innerWidth * 0.5;
  }
}
