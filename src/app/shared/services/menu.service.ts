import { Injectable, effect, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

/** Holds the open/closed state of the mobile menu. */
@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private readonly document = inject(DOCUMENT);

  readonly mobileMenuVisible = signal(false);

  constructor() {
    // Lock the page behind the fullscreen menu so only the menu is reachable.
    effect(() => {
      this.document.documentElement.classList.toggle(
        'menu-open',
        this.mobileMenuVisible()
      );
    });
  }

  openMobileMenu(): void {
    this.mobileMenuVisible.set(true);
  }

  closeMobileMenu(): void {
    this.mobileMenuVisible.set(false);
  }
}
