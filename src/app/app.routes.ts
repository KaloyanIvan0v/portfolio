import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  // Rarely visited legal pages, and by far the largest templates — lazy so they
  // stay out of the initial bundle.
  {
    path: 'imprint',
    loadComponent: () =>
      import('./shared/components/imprint/imprint.component').then(
        (m) => m.ImprintComponent
      ),
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import(
        './shared/components/privacy-policy/privacy-policy.component'
      ).then((m) => m.PrivacyPolicyComponent),
  },
  // Anything unknown lands on the portfolio rather than an empty page.
  { path: '**', redirectTo: '' },
];
