import { TestBed } from '@angular/core/testing';
import { provideHttpClient, withXhr } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TranslationLoader } from './translation-loader.service';

describe('TranslationLoader', () => {
  let loader: TranslationLoader;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withXhr()),
        provideHttpClientTesting(),
        TranslationLoader,
      ],
    });
    loader = TestBed.inject(TranslationLoader);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('should fetch the translation file of the requested language', () => {
    let received: unknown;
    loader.getTranslation('de').subscribe((data) => (received = data));

    const request = http.expectOne('assets/i18n/de.json');
    expect(request.request.method).toBe('GET');

    request.flush({ hero: { role: 'Fullstack-Entwickler' } });
    expect(received).toEqual({ hero: { role: 'Fullstack-Entwickler' } });
  });
});
