import { provideHttpClient, withXhr } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideTranslateLoader,
  provideTranslateService,
} from '@ngx-translate/core';
import { TranslationLoader } from './shared/services/translation-loader.service';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withXhr()),
    provideTranslateService({
      fallbackLang: 'en',
      loader: provideTranslateLoader(TranslationLoader),
    }),
  ],
};
