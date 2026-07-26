import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from './../../services/language.service';

// Ensures a unique checkbox id per instance (header + mobile menu render
// this component at the same time, so a fixed id would collide).
let nextId = 0;

@Component({
  selector: 'app-language-switch',
  imports: [CommonModule],
  templateUrl: './language-switch.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./language-switch.component.scss'],
})
export class LanguageSwitchComponent {
  private languageService = inject(LanguageService);

  readonly toggleId = `lang-toggle-${nextId++}`;
  readonly currentLanguage$ = this.languageService.currentLanguage$;

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }
}
