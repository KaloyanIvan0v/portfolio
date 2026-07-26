import { Injectable, effect, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

/** Holds the open/closed state of the mobile menu. */
@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private readonly document = inject(DOCUMENT);

  /** The element that opened the menu — focus returns to it on close. */
  private trigger: HTMLElement | null = null;

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

  openMobileMenu(trigger?: HTMLElement): void {
    this.trigger = trigger ?? null;
    this.mobileMenuVisible.set(true);
  }

  closeMobileMenu(): void {
    if (!this.mobileMenuVisible()) return;
    this.mobileMenuVisible.set(false);
    this.trigger?.focus();
    this.trigger = null;
  }
}
