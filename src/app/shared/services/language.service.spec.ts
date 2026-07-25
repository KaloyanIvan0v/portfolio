import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';
import {
  commonTestImports,
  commonTestProviders,
} from '../../../testing/common-testing';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    localStorage.removeItem('language');
    TestBed.configureTestingModule({
      imports: [...commonTestImports],
      providers: [...commonTestProviders],
    });
    service = TestBed.inject(LanguageService);
  });

  it('should default to english', () => {
    expect(service.currentLanguage).toBe('en');
  });

  it('should toggle the language and persist it', () => {
    service.toggleLanguage();
    expect(service.currentLanguage).toBe('de');
    expect(localStorage.getItem('language')).toBe('de');
    service.toggleLanguage();
    expect(service.currentLanguage).toBe('en');
  });

  it('should reflect the chosen language on the document element', () => {
    service.changeLanguage('de');
    expect(document.documentElement.lang).toBe('de');
  });
});
