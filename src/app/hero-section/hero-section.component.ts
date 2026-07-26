import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  inject,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss', './hero-section-responsive.scss'],
})
export class HeroSectionComponent implements AfterViewInit, OnDestroy {
  private host = inject<ElementRef<HTMLElement>>(ElementRef);
  private resizeObserver?: ResizeObserver;

  ngAfterViewInit(): void {
    const root = this.host.nativeElement;
    const greeting = root.querySelector<HTMLElement>('.intro-greeting p');
    const details = root.querySelector<HTMLElement>('.intro-details');
    if (!greeting || !details) return;

    // Keep the rotated greeting ("I am" / "Ich bin") no taller than the two
    // lines next to it. It re-runs on language switch, font load and resize,
    // because all of those change the observed elements' size.
    this.resizeObserver = new ResizeObserver(() =>
      this.fitGreeting(greeting, details)
    );
    this.resizeObserver.observe(greeting);
    this.resizeObserver.observe(details);
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
  }

  private fitGreeting(greeting: HTMLElement, details: HTMLElement): void {
    // scrollWidth is the natural, pre-rotation text length = the rotated height.
    const naturalLength = greeting.scrollWidth;
    const available = details.offsetHeight;
    if (naturalLength === 0) return;
    const scale = Math.min(1, available / naturalLength);
    greeting.style.transform = `scale(${scale})`;
  }
}
