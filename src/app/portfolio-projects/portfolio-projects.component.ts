import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SingleProjectComponent } from '../portfolio-projects/single-project/single-project.component';
import { FormComponent } from '../shared/components/form/form.component';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-portfolio-projects',
  standalone: true,
  imports: [
    SingleProjectComponent,
    CommonModule,
    FormComponent,
    TranslateModule,
  ],
  templateUrl: './portfolio-projects.component.html',
  styleUrl: './portfolio-projects.component.scss',
})
export class PortfolioProjectsComponent {
  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
}
