import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { FormComponent } from './form.component';
import {
  commonTestImports,
  commonTestProviders,
} from '../../../../testing/common-testing';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComponent, ...commonTestImports],
      providers: [...commonTestProviders],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mark the form as touched and not send when invalid', () => {
    const markAllAsTouched = jasmine.createSpy('markAllAsTouched');
    const fetchSpy = spyOn(window, 'fetch');
    const form = {
      valid: false,
      form: { markAllAsTouched },
    } as unknown as NgForm;

    component.checkbox = false;
    component.onSubmit(form);

    expect(markAllAsTouched).toHaveBeenCalled();
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('should not send when the privacy checkbox is unchecked', () => {
    const fetchSpy = spyOn(window, 'fetch');
    const form = {
      valid: true,
      form: { markAllAsTouched: jasmine.createSpy('markAllAsTouched') },
    } as unknown as NgForm;

    component.checkbox = false;
    component.onSubmit(form);

    expect(fetchSpy).not.toHaveBeenCalled();
  });
});
