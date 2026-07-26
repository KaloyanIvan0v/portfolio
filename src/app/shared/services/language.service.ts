import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
 * localStorage and all subscribers in sync.
 */
@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private translate = inject(TranslateService);

  private languageSubject: BehaviorSubject<Language>;
  currentLanguage$;

  constructor() {
    const saved = readStoredLanguage();
    this.translate.setDefaultLang(FALLBACK);
    this.translate.use(saved);
    document.documentElement.lang = saved;
    this.languageSubject = new BehaviorSubject<Language>(saved);
    this.currentLanguage$ = this.languageSubject.asObservable();
  }

  get currentLanguage(): Language {
    return this.languageSubject.value;
  }

  changeLanguage(language: Language): void {
    this.translate.use(language);
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
    this.languageSubject.next(language);
  }

  toggleLanguage(): void {
    this.changeLanguage(this.currentLanguage === 'en' ? 'de' : 'en');
  }
}
