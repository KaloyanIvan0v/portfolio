import { Component } from '@angular/core';

import { Skill } from '../../shared/models/skill.model';

@Component({
    selector: 'app-skills-grid',
    imports: [],
    templateUrl: './skills-grid.component.html',
    styleUrl: './skills-grid.component.scss'
})
export class SkillsGridComponent {
  readonly skills: Skill[] = [
    { image: 'assets/img/02-skills-section/html.png', title: 'HTML' },
    { image: 'assets/img/02-skills-section/css.png', title: 'CSS' },
    { image: 'assets/img/02-skills-section/java-script.png', title: 'JavaScript' },
    { image: 'assets/img/02-skills-section/type-script.png', title: 'TypeScript' },
    { image: 'assets/img/02-skills-section/angular.png', title: 'Angular' },
    { image: 'assets/img/02-skills-section/firebase.png', title: 'Firebase' },
    { image: 'assets/img/02-skills-section/git.png', title: 'GIT' },
    { image: 'assets/img/02-skills-section/rest-api.png', title: 'Rest-Api' },
    { image: 'assets/img/02-skills-section/scrum.png', title: 'Scrum' },
    { image: 'assets/img/02-skills-section/material-design.png', title: 'Material Design' },
  ];
}
