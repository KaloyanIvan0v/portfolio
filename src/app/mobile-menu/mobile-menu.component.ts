import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { DataService } from '../shared/services/data.service';
import { LanguageSwitchComponent } from '../shared/components/language-switch/language-switch.component';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [TranslateModule, CommonModule, LanguageSwitchComponent],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss',
})
export class MobileMenuComponent {
  constructor(
    private translate: TranslateService,
    public dataService: DataService
  ) {
    this.translate.setDefaultLang('en');
  }

  hideMobileMenu() {
    this.dataService.mobileMenuVisible = false;
  }
}
