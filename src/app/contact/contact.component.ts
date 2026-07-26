import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { FormComponent } from '../shared/components/form/form.component';

@Component({
  selector: 'app-contact',
  imports: [TranslatePipe, FormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
