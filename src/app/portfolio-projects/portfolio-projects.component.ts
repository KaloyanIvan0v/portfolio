import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { PROJECTS } from '../shared/data/projects';

@Component({
    selector: 'app-portfolio-projects',
    imports: [SingleProjectComponent, TranslateModule],
    templateUrl: './portfolio-projects.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './portfolio-projects.component.scss'
})
export class PortfolioProjectsComponent {
  readonly projects = PROJECTS;
}
