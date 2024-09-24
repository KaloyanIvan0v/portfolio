import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../shared/components/form/form.component';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { SkillsGridComponent } from './skills-grid/skills-grid.component';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, FormComponent, TranslateModule, SkillsGridComponent],
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss', '../shared/scss/global.scss'],
})
export class MySkillsComponent {
  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
}
