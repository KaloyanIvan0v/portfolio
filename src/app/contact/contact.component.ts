import { Component } from '@angular/core';
import { FormComponent } from '../shared/components/form/form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor() {}
}
