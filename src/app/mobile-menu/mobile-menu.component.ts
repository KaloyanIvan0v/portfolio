import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MenuService } from '../shared/services/menu.service';
import { LanguageSwitchComponent } from '../shared/components/language-switch/language-switch.component';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [TranslateModule, CommonModule, LanguageSwitchComponent],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss',
})
export class MobileMenuComponent {
  readonly menuService = inject(MenuService);

  hideMobileMenu(): void {
    this.menuService.closeMobileMenu();
  }
}
