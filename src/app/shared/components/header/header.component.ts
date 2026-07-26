import {
  Component,
  DestroyRef,
  DOCUMENT,
  HostListener,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { LanguageSwitchComponent } from './../language-switch/language-switch.component';
import { MenuService } from './../../services/menu.service';

/** Nav entries in document order; the id matches the section's anchor. */
const SECTIONS = [
  { id: 'about', label: 'about me' },
  { id: 'skills', label: 'skills' },
  { id: 'portfolio', label: 'portfolio' },
] as const;

/** Height of the fixed header — a section counts as active once it reaches it. */
const HEADER_OFFSET = 112;

@Component({
  selector: 'app-header',
  imports: [TranslatePipe, RouterLink, LanguageSwitchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private router = inject(Router);
  private menuService = inject(MenuService);
  private destroyRef = inject(DestroyRef);
  private document = inject(DOCUMENT);

  /** Guards against running the scroll math more than once per frame. */
  private scrollScheduled = false;

  readonly activeSection = signal<string>(SECTIONS[0].label);
  readonly showMenu = signal(true);
  readonly mobileMenuVisible = this.menuService.mobileMenuVisible;

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        const url = this.router.url;
        this.showMenu.set(
          !(url.includes('imprint') || url.includes('privacy-policy'))
        );
      });
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (this.scrollScheduled) return;
    this.scrollScheduled = true;
    requestAnimationFrame(() => {
      this.scrollScheduled = false;
      this.updateActiveSection();
    });
  }

  setActive(section: string): void {
    this.activeSection.set(section);
  }

  showMobileMenu(trigger: HTMLElement): void {
    this.menuService.openMobileMenu(trigger);
  }

  /**
   * The last section whose top has passed under the header is the active one.
   * Elements are looked up lazily because they belong to the routed component
   * and only exist on the main page.
   */
  private updateActiveSection(): void {
    let active: string = SECTIONS[0].label;
    for (const section of SECTIONS) {
      const element = this.document.getElementById(section.id);
      if (element && element.getBoundingClientRect().top <= HEADER_OFFSET) {
        active = section.label;
      }
    }
    this.activeSection.set(active);
  }
}
