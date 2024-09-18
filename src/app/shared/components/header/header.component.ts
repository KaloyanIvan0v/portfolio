import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activeSection: string = 'about';
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
  currentLanguage: string = 'en';
  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'de' ? 'en' : 'de';
    this.translate.use(this.currentLanguage);
  }

  setActive(section: string) {
    this.activeSection = section;
  }
}
