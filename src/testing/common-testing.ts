import { provideRouter } from '@angular/router';
import { provideHttpClient, withXhr } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideTranslateService } from '@ngx-translate/core';

/** Shared providers so standalone components can be tested in isolation. */
export const commonTestProviders = [
  provideRouter([]),
  provideHttpClient(withXhr()),
  provideHttpClientTesting(),
  provideTranslateService(),
];
