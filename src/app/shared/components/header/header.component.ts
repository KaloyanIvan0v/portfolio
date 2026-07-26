import { Component, DestroyRef, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { LanguageSwitchComponent } from './../language-switch/language-switch.component';
import { MenuService } from './../../services/menu.service';

@Component({
    selector: 'app-header',
    imports: [CommonModule, TranslateModule, RouterLink, LanguageSwitchComponent],
    templateUrl: './header.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  private router = inject(Router);
  private menuService = inject(MenuService);
  private destroyRef = inject(DestroyRef);

  activeSection = 'about me';
  showMenu = true;

  readonly mobileMenuVisible = this.menuService.mobileMenuVisible;

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        const url = this.router.url;
        this.showMenu = !(
          url.includes('imprint') || url.includes('privacy-policy')
        );
      });
  }

  setActive(section: string): void {
    this.activeSection = section;
  }

  showMobileMenu(trigger: HTMLElement): void {
    this.menuService.openMobileMenu(trigger);
  }
}
