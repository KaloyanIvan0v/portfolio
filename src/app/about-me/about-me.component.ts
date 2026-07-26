import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  imports: [TranslatePipe],
  templateUrl: './about-me.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {}
