import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { SingleProjectComponent } from '../portfolio-projects/single-project/single-project.component';

@Component({
  selector: 'app-portfolio-projects',
  standalone: true,
  imports: [SingleProjectComponent, CommonModule],
  templateUrl: './portfolio-projects.component.html',
  styleUrl: './portfolio-projects.component.scss',
})
export class PortfolioProjectsComponent {}
