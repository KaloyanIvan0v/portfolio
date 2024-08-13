import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { PortfolioProjectsComponent } from '../portfolio-projects/portfolio-projects.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    HeroSectionComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioProjectsComponent,
    FeedbackComponent,
    ContactComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
