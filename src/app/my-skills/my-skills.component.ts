import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss', '../shared/scss/global.scss'],
})
export class MySkillsComponent {
  constructor() {}

  mySkillsData = [
    {
      image: './../../assets/img/02-skills-section/html.png',
      title: 'HTML',
    },
    {
      image: './../../assets/img/02-skills-section/css.png',
      title: 'CSS',
    },
    {
      image: './../../assets/img/02-skills-section/java-script.png',
      title: 'JavaScript',
    },
    {
      image: './../../assets/img/02-skills-section/type-script.png',
      title: 'TypeScript',
    },
    {
      image: './../../assets/img/02-skills-section/angular.png',
      title: 'Angular',
    },
    {
      image: './../../assets/img/02-skills-section/firebase.png',
      title: 'Firebase',
    },
    {
      image: './../../assets/img/02-skills-section/git.png',
      title: 'GIT',
    },
    {
      image: './../../assets/img/02-skills-section/rest-api.png',
      title: 'Rest-Api',
    },
    {
      image: './../../assets/img/02-skills-section/scrum.png',
      title: 'Scrum',
    },
    {
      image: './../../assets/img/02-skills-section/material-design.png',
      title: 'Material Design',
    },
  ];
}
