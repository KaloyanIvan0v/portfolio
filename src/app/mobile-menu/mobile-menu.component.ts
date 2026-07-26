import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  effect,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MenuService } from '../shared/services/menu.service';
import { LanguageSwitchComponent } from '../shared/components/language-switch/language-switch.component';

@Component({
    selector: 'app-mobile-menu',
    imports: [TranslateModule, CommonModule, LanguageSwitchComponent],
    templateUrl: './mobile-menu.component.html',
    styleUrl: './mobile-menu.component.scss'
})
export class MobileMenuComponent {
  readonly menuService = inject(MenuService);

  @ViewChild('closeButton') private closeButton?: ElementRef<HTMLElement>;

  constructor() {
    // Move focus into the menu when it opens, so keyboard users land inside it
    // instead of tabbing on through the page behind it.
    effect(() => {
      if (this.menuService.mobileMenuVisible()) {
        this.closeButton?.nativeElement.focus();
      }
    });
  }

  @HostListener('document:keydown.escape')
  hideMobileMenu(): void {
    this.menuService.closeMobileMenu();
  }
}
