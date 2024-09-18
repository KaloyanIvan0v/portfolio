import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  aboutMe: string = '';
  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.get('aboutMe').subscribe((translated: string) => {
      this.aboutMe = translated;
    });
  }
}
