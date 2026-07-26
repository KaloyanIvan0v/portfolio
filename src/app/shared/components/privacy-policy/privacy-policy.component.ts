import { Component, ChangeDetectionStrategy } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-privacy-policy',
    imports: [TranslateModule],
    templateUrl: './privacy-policy.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {}
