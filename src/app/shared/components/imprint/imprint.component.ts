import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent implements OnInit {
  constructor(
    public translate: TranslateService,
    public dataService: DataService
  ) {
    this.dataService.currentLanguage$.subscribe((language) => {
      console.log(language);
      this.translate.use(language);
    });
  }

  ngOnInit() {
    this.dataService.currentLanguage$.subscribe((language) => {
      this.translate.use(language);
    });
  }
}
