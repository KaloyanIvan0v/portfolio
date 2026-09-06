import { provideHttpClient, withXhr } from '@angular/common/http';
import { ApplicationConfig, inject, provideAppInitializer } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import {
  provideTranslateLoader,
  provideTranslateService,
} from '@ngx-translate/core';
import { TranslationLoader } from './shared/services/translation-loader.service';
import { HEADER_OFFSET } from './shared/layout.constants';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      // Without this the router leaves the scroll position untouched, so
      // coming back from a legal page lands mid-page. `enabled` scrolls to the
      // top on a new navigation and restores the old position on back/forward.
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      })
    ),
    // The router's anchor scrolling puts the target element's top at the very
    // top of the viewport — it reads no CSS, so `scroll-margin-top` does not
    // apply and the headline would end up behind the fixed header. Angular's
    // own `scrollOffset` option is not wired up by `withInMemoryScrolling`,
    // so the offset is set on the scroller directly.
    provideAppInitializer(() => {
      inject(ViewportScroller).setOffset([0, HEADER_OFFSET]);
    }),
    provideHttpClient(withXhr()),
    provideTranslateService({
      fallbackLang: 'en',
      loader: provideTranslateLoader(TranslationLoader),
    }),
  ],
};
