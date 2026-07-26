import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SkillsGridComponent } from './skills-grid/skills-grid.component';

@Component({
  selector: 'app-my-skills',
  imports: [TranslatePipe, SkillsGridComponent],
  templateUrl: './my-skills.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {}
