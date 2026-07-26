import { Component } from '@angular/core';
import { SKILLS } from '../../shared/data/skills';

@Component({
  selector: 'app-skills-grid',
  templateUrl: './skills-grid.component.html',
  styleUrl: './skills-grid.component.scss',
})
export class SkillsGridComponent {
  readonly skills = SKILLS;
}
