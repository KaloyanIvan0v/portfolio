import { Component, ChangeDetectionStrategy } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-imprint',
    imports: [TranslateModule],
    templateUrl: './imprint.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './imprint.component.scss'
})
export class ImprintComponent {}
