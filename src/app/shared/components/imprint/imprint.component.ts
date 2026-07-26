import { Component, ChangeDetectionStrategy } from '@angular/core';

import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  imports: [TranslatePipe],
  templateUrl: './imprint.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {}
