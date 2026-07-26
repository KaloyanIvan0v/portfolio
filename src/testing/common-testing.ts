import { provideRouter } from '@angular/router';
import { provideHttpClient, withXhr } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';

/** Shared imports/providers so standalone components can be tested in isolation. */
export const commonTestImports = [TranslateModule.forRoot()];

export const commonTestProviders = [
  provideRouter([]),
  provideHttpClient(withXhr()),
  provideHttpClientTesting(),
];
