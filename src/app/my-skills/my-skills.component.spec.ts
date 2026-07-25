import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MySkillsComponent } from './my-skills.component';
import {
  commonTestImports,
  commonTestProviders,
} from '../../testing/common-testing';

describe('MySkillsComponent', () => {
  let component: MySkillsComponent;
  let fixture: ComponentFixture<MySkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySkillsComponent, ...commonTestImports],
      providers: [...commonTestProviders],
    }).compileComponents();

    fixture = TestBed.createComponent(MySkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
