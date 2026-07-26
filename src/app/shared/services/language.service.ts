import { DOCUMENT, Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type Language = 'en' | 'de';

const STORAGE_KEY = 'language';
const LANGUAGES: readonly Language[] = ['en', 'de'];
const FALLBACK: Language = 'en';

/**
 * localStorage is user-writable and may hold a value from an older build, so
 * anything unknown falls back instead of being handed to TranslateService —
 * an unknown code would 404 its i18n file and leave the UI showing raw keys.
 */
function readStoredLanguage(): Language {
  const stored = localStorage.getItem(STORAGE_KEY);
  return LANGUAGES.includes(stored as Language) ? (stored as Language) : FALLBACK;
}

/**
 * Single owner of the app language: keeps TranslateService,
 * localStorage and all readers in sync.
 */
@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private translate = inject(TranslateService);
  private document = inject(DOCUMENT);

  private readonly language = signal<Language>(FALLBACK);

  /** The language currently in use. */
  readonly currentLanguage = this.language.asReadonly();

  constructor() {
    const saved = readStoredLanguage();
    this.translate.setFallbackLang(FALLBACK);
    this.translate.use(saved);
    this.document.documentElement.lang = saved;
    this.language.set(saved);
  }

  changeLanguage(language: Language): void {
    this.translate.use(language);
    localStorage.setItem(STORAGE_KEY, language);
    this.document.documentElement.lang = language;
    this.language.set(language);
  }

  toggleLanguage(): void {
    this.changeLanguage(this.language() === 'en' ? 'de' : 'en');
  }
}
