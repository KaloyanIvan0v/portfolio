import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Project } from '../../shared/models/project.model';

@Component({
  selector: 'app-single-project',
  imports: [TranslatePipe],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss',
})
export class SingleProjectComponent {
  readonly project = input.required<Project>();
  /** Index in the list — even/odd drives the alternating layout via CSS. */
  readonly index = input(0);
}
