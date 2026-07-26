import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageSwitchComponent } from './language-switch.component';
import { commonTestProviders } from '../../../../testing/common-testing';

describe('LanguageSwitchComponent', () => {
  let component: LanguageSwitchComponent;
  let fixture: ComponentFixture<LanguageSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageSwitchComponent],
      providers: [...commonTestProviders],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
