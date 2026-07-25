import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Project } from '../../shared/models/project.model';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss',
})
export class SingleProjectComponent {
  @Input({ required: true }) project!: Project;
  /** Index in the list — even/odd drives the alternating layout via CSS. */
  @Input() index = 0;
}
