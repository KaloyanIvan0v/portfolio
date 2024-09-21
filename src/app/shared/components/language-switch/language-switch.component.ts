import { Component } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-language-switch',
  standalone: true,
  templateUrl: './language-switch.component.html',
  styleUrls: ['./language-switch.component.scss'],
})
export class LanguageSwitchComponent {
  currentLanguage: 'en' | 'de' = 'en';
  constructor(private dataService: DataService) {
    this.dataService.currentLanguage$.subscribe((language) => {
      this.currentLanguage = language;
    });
  }

  toggleLanguage() {
    const newLanguage: 'en' | 'de' =
      this.currentLanguage === 'en' ? 'de' : 'en';
    this.dataService.changeLanguage(newLanguage);
  }
}
