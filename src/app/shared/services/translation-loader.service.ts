import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TranslateLoader, TranslationObject } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable()
export class TranslationLoader implements TranslateLoader {
  private http = inject(HttpClient);

  getTranslation(lang: string): Observable<TranslationObject> {
    return this.http.get<TranslationObject>(`assets/i18n/${lang}.json`);
  }
}
