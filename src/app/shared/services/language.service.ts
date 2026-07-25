import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

export type Language = 'en' | 'de';

const STORAGE_KEY = 'language';

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
    const saved = (localStorage.getItem(STORAGE_KEY) as Language) || 'en';
    this.translate.setDefaultLang('en');
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
