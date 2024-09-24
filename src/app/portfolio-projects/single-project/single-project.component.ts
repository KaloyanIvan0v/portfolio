import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss',
})
export class SingleProjectComponent {
  @Input() innerWidth: number;
  constructor(
    private dataService: DataService,
    public translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
    this.innerWidth = window.innerWidth;
  }
  data = this.dataService.projectsData;
  @Input() dataIndex: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = event.target.innerWidth;
  }
}
