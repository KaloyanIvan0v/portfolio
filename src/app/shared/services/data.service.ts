import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {
    const savedLanguage =
      (sessionStorage.getItem('language') as 'en' | 'de') || 'en';
    this.languageSubject.next(savedLanguage);
  }

  private languageSubject = new BehaviorSubject<'en' | 'de'>('en');
  currentLanguage$ = this.languageSubject.asObservable();

  changeLanguage(language: 'en' | 'de') {
    this.languageSubject.next(language);
    sessionStorage.setItem('language', language);
  }

  mobileMenuVisible: boolean = false;

  projectsData = [
    {
      liveTestUrl: 'https://join.kaloyanivanov.de',
      gitHubUrl: 'https://github.com/KaloyanIvan0v/Join',
      imgPath: './../../../assets/img/03-portfolio-section/join-screenshot.png',
      name: 'Join',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      description:
        'Join is a web application that allows users to easily create and join events.',
    },
    {
      liveTestUrl: 'https://pollys-adventure.kaloyanivanov.de/',
      gitHubUrl:
        'https://github.com/KaloyanIvan0v/JumpAndRun-Polly-s-Adventure-.git',
      imgPath:
        './../../../assets/img/03-portfolio-section/pollys-adventure-screenshot.png',
      name: 'Polys Adventure',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      description:
        'Join is a web application that allows users to easily create and join events.',
    },
    {
      liveTestUrl: '',
      gitHubUrl: '',
      imgPath: './../../../assets/img/03-portfolio-section/join-screenshot.png',
      name: 'DA Bubble',
      techStack: ['Angular', 'TypeScript', 'Firebase'],
      description:
        'Join is a web application that allows users to easily create and join events.',
    },
  ];
}
