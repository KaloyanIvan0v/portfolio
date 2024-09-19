import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  projectsData = [
    {
      imgPath: './../../../assets/img/03-portfolio-section/join-screenshot.png',
      name: 'Join',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      description:
        'Join is a web application that allows users to easily create and join events.',
    },
    {
      imgPath:
        './../../../assets/img/03-portfolio-section/pollys-adventure-screenshot.png',
      name: 'Polys Adventure',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      description:
        'Join is a web application that allows users to easily create and join events.',
    },
    {
      imgPath:
        './../../../assets/img/03-portfolio-section/application-view.png',
      name: 'DA Bubble',
      techStack: ['Angular', 'TypeScript', 'Firebase'],
      description:
        'Join is a web application that allows users to easily create and join events.',
    },
  ];
}
