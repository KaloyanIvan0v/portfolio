import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    name: 'DA Bubble',
    liveTestUrl: 'https://da-bubble.kaloyanivanov.de',
    gitHubUrl: 'https://github.com/KaloyanIvan0v/daBubble.git',
    imgPath: 'assets/img/03-portfolio-section/dabubble-screenshot.png',
    techStack: ['Angular', 'TypeScript', 'Firebase'],
    descriptionKey: 'portfolio.project-descriptions.0',
  },
  {
    name: 'Join',
    liveTestUrl: 'https://join.kaloyanivanov.de',
    gitHubUrl: 'https://github.com/KaloyanIvan0v/Join',
    imgPath: 'assets/img/03-portfolio-section/join-screenshot.png',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    descriptionKey: 'portfolio.project-descriptions.1',
  },
  {
    name: 'Pollys Adventure',
    liveTestUrl: 'https://pollys-adventure.kaloyanivanov.de/',
    gitHubUrl: 'https://github.com/KaloyanIvan0v/JumpAndRun-Polly-s-Adventure-.git',
    imgPath: 'assets/img/03-portfolio-section/pollys-adventure-screenshot.png',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    descriptionKey: 'portfolio.project-descriptions.2',
  },
];
