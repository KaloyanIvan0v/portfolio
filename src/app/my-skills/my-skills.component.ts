import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SkillsGridComponent } from './skills-grid/skills-grid.component';

@Component({
    selector: 'app-my-skills',
    imports: [TranslateModule, SkillsGridComponent],
    templateUrl: './my-skills.component.html',
    styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {}
