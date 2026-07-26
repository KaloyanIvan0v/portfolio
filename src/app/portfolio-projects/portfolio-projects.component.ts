import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { PROJECTS } from '../shared/data/projects';

@Component({
  selector: 'app-portfolio-projects',
  imports: [SingleProjectComponent, TranslatePipe],
  templateUrl: './portfolio-projects.component.html',
  styleUrl: './portfolio-projects.component.scss',
})
export class PortfolioProjectsComponent {
  readonly projects = PROJECTS;
}
