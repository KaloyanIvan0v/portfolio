import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-privacy-policy',
    imports: [CommonModule, TranslateModule],
    templateUrl: './privacy-policy.component.html',
    styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {}
