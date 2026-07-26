import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleProjectComponent } from './single-project.component';
import { Project } from '../../shared/models/project.model';
import { commonTestProviders } from '../../../testing/common-testing';

const PROJECT: Project = {
  name: 'Test Project',
  liveTestUrl: 'https://example.com',
  gitHubUrl: 'https://github.com/example',
  imgPath: 'assets/img/example.png',
  techStack: ['Angular', 'TypeScript'],
  descriptionKey: 'portfolio.project-descriptions.0',
};

describe('SingleProjectComponent', () => {
  let component: SingleProjectComponent;
  let fixture: ComponentFixture<SingleProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleProjectComponent],
      providers: [...commonTestProviders],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleProjectComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('project', PROJECT);
    fixture.componentRef.setInput('index', 1);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the project name and tech stack', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.project-title')?.textContent).toContain('Test Project');
    expect(el.querySelectorAll('.tech-stack .tech').length).toBe(2);
  });

  it('should reverse layout on odd index', () => {
    const section = (fixture.nativeElement as HTMLElement).querySelector('section');
    expect(section?.classList.contains('reverse')).toBeTrue();
  });
});
