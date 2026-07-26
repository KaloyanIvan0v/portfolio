import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Project } from '../../shared/models/project.model';

@Component({
  selector: 'app-single-project',
  imports: [TranslatePipe],
  templateUrl: './single-project.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './single-project.component.scss',
})
export class SingleProjectComponent {
  @Input({ required: true }) project!: Project;
  /** Index in the list — even/odd drives the alternating layout via CSS. */
  @Input() index = 0;
}
