import { Component, DestroyRef, DOCUMENT, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationStart, Router, RouterOutlet, Scroll } from '@angular/router';
import { filter } from 'rxjs';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LanguageService } from './shared/services/language.service';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // Injected so the language is initialised once, app-wide.
  private languageService = inject(LanguageService);
  private router = inject(Router);
  private document = inject(DOCUMENT);
  private destroyRef = inject(DestroyRef);

  /** Path of the current route, fragment stripped. */
  private currentPath = '';

  ngOnInit(): void {
    AOS.init({
      offset: 0,
      duration: 450,
      easing: 'ease-in-out',
      delay: 20,
      once: true,
    });
    this.keepRouteChangesInstant();
  }

  /**
   * `html { scroll-behavior: smooth }` is what makes the header's in-page
   * anchors glide, and the router's scroll inherits it. Gliding is right when
   * the page stays the same, but on a real route change it animates across a
   * whole document that was just swapped in, so smooth is switched off from the
   * start of such a navigation until the router has repositioned the viewport
   * (the `Scroll` event, one frame after `NavigationEnd`).
   */
  private keepRouteChangesInstant(): void {
    this.router.events
      .pipe(
        filter(
          (event) => event instanceof NavigationStart || event instanceof Scroll
        ),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((event) => {
        if (event instanceof Scroll) {
          this.document.documentElement.classList.remove('navigating');
          return;
        }
        const path = this.pathOf(event.url);
        const pathChanged = path !== this.currentPath;
        this.currentPath = path;
        this.document.documentElement.classList.toggle('navigating', pathChanged);
      });
  }

  /** The url without its fragment — `/#skills` and `/#about` are one path. */
  private pathOf(url: string): string {
    const tree = this.router.parseUrl(url);
    tree.fragment = null;
    return tree.toString();
  }
}
