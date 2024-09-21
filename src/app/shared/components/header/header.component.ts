import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { DataService } from './../../services/data.service';
import { LanguageSwitchComponent } from './../language-switch/language-switch.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, LanguageSwitchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activeSection: string = 'about';
  currentLanguage: 'en' | 'de' = 'en';
  constructor(
    private translate: TranslateService,
    public dataService: DataService
  ) {
    this.dataService.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language;
      this.translate.use(language);
    });
  }

  setActive(section: string) {
    this.activeSection = section;
  }

  showMobileMenu() {
    this.dataService.mobileMenuVisible = true;
  }
}
