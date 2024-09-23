import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { DataService } from './../../services/data.service';
import { LanguageSwitchComponent } from './../language-switch/language-switch.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, LanguageSwitchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  activeSection: string = 'about';
  currentLanguage: 'en' | 'de' = 'en';
  showMenu: boolean = true;
  constructor(
    private translate: TranslateService,
    public dataService: DataService,
    private router: Router
  ) {
    this.dataService.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language;
      this.translate.use(language);
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      const currentUrl = this.router.url;
      this.showMenu = !(
        currentUrl.includes('imprint') || currentUrl.includes('privacy-policy')
      );
    });
  }

  setActive(section: string) {
    this.activeSection = section;
  }

  showMobileMenu() {
    this.dataService.mobileMenuVisible = true;
  }
}
