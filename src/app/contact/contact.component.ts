import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormComponent } from '../shared/components/form/form.component';

@Component({
    selector: 'app-contact',
    imports: [TranslateModule, FormComponent],
    templateUrl: './contact.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './contact.component.scss'
})
export class ContactComponent {}
