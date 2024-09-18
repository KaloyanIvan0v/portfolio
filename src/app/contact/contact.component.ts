import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../shared/components/form/form.component';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
}
