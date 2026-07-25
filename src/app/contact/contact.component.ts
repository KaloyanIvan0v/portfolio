import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormComponent } from '../shared/components/form/form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule, FormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
