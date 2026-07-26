import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-hero-section',
    imports: [TranslateModule],
    templateUrl: './hero-section.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./hero-section.component.scss', './hero-section-responsive.scss']
})
export class HeroSectionComponent {}
