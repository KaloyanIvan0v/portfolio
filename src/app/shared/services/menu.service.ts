import { Injectable, signal } from '@angular/core';

/** Holds the open/closed state of the mobile menu. */
@Injectable({
  providedIn: 'root',
})
export class MenuService {
  readonly mobileMenuVisible = signal(false);

  openMobileMenu(): void {
    this.mobileMenuVisible.set(true);
  }

  closeMobileMenu(): void {
    this.mobileMenuVisible.set(false);
  }
}
