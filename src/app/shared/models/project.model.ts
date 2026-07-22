export interface Project {
  name: string;
  liveTestUrl: string;
  gitHubUrl: string;
  imgPath: string;
  techStack: string[];
  /** i18n key pointing to the translated description in assets/i18n/*.json */
  descriptionKey: string;
}
