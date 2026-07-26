import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LanguageService } from './shared/services/language.service';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // Injected so the language is initialised once, app-wide.
  private languageService = inject(LanguageService);

  ngOnInit(): void {
    AOS.init({
      offset: 0,
      duration: 450,
      easing: 'ease-in-out',
      delay: 20,
      once: true,
    });
  }
}
