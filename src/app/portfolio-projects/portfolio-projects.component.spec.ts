import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortfolioProjectsComponent } from './portfolio-projects.component';
import { commonTestProviders } from '../../testing/common-testing';

describe('PortfolioProjectsComponent', () => {
  let component: PortfolioProjectsComponent;
  let fixture: ComponentFixture<PortfolioProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioProjectsComponent],
      providers: [...commonTestProviders],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
