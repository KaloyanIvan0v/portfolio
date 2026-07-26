import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer',
    imports: [TranslateModule, RouterLink],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
}
