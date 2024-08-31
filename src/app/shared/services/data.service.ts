import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  projectsData = [
    {
      imgPath:
        './../../../assets/img/03-portfolio-section/application-view.png',
      name: 'Join',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      description:
        'Join is a web application that allows users to easily create and join events.',
    },
    {
      imgPath:
        './../../../assets/img/03-portfolio-section/application-view.png',
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

  testimonialData = [
    {
      imgPath: './../../../assets/img/feedback-section/authors/c-hampel.jpg',
      name: 'C.Hampel',
      position: 'Team Partner',
      testimonial:
        'Die Zusammenarbeit in unserem Teamprojekt mit Kaloyan Ivanov hat zu jeder Zeit sehr gut funktioniert. Durch seine fundierten Kenntnisse in der Webentwicklung war er ein maßgeblicher Faktor für den Erfolg unseres Softwareprojekts. Vor allem seine Hilfsbereitschaft bei Fragen und Problemen anderer Teammitglieder möchte ich hervorheben.',
    },
    {
      imgPath: './../../../assets/img/feedback-section/authors/leila.jpg',
      name: 'Leila',
      position: 'Team Partner',
      testimonial:
        'Ich habe mich sehr gefreut mit Kaloyan zusammen zu arbeiten. Pünktlichkeit und Kreativität sind seine Stärken! Zudem sind seine Fähigkeiten beim Kommunikation und seine Ideen zu erklären sehr anerkennend, würde immer wieder mit dir zusammen arbeiten Kaloyan',
    },
  ];
}
