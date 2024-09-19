import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
}
