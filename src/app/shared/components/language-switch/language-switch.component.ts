import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from './../../services/language.service';

@Component({
  selector: 'app-language-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switch.component.html',
  styleUrls: ['./language-switch.component.scss'],
})
export class LanguageSwitchComponent {
  private languageService = inject(LanguageService);

  readonly currentLanguage$ = this.languageService.currentLanguage$;

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }
}
