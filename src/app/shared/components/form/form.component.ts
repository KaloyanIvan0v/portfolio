import {
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mzzpyqle';
const FEEDBACK_DURATION_MS = 4000;

type FeedbackKind = 'success' | 'error';
interface Feedback {
  key: string;
  kind: FeedbackKind;
  active: boolean;
}

@Component({
  selector: 'app-form',
  imports: [FormsModule, TranslatePipe, RouterLink],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  private hideFeedbackTimer?: ReturnType<typeof setTimeout>;

  readonly checkbox = signal(false);
  readonly sending = signal(false);

  /** i18n key of the message shown after submitting, plus its state. */
  readonly feedback = signal<Feedback>({
    key: '',
    kind: 'success',
    active: false,
  });

  // Plain object rather than a signal: ngModel owns these values and every
  // change originates from an input event in this component's own template.
  user = {
    name: '',
    email: '',
    message: '',
  };

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.hideFeedbackTimer));
  }

  onSubmit(userForm: NgForm): void {
    if (!this.checkbox() || !userForm.valid || this.sending()) {
      userForm.form.markAllAsTouched();
      return;
    }
    this.sendMail(userForm);
  }

  private sendMail(userForm: NgForm): void {
    this.sending.set(true);
    const body = JSON.stringify(this.user);

    fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        this.showFeedback('form.successMessage', 'success');
        this.clearForm(userForm);
      })
      .catch(() => {
        this.showFeedback('form.errorMessage', 'error');
      })
      .finally(() => {
        this.sending.set(false);
      });
  }

  private clearForm(userForm: NgForm): void {
    userForm.resetForm();
    this.checkbox.set(false);
  }

  private showFeedback(key: string, kind: FeedbackKind): void {
    this.feedback.set({ key, kind, active: true });
    // Restart the countdown, otherwise the timer of a previous submission
    // would hide this message early.
    clearTimeout(this.hideFeedbackTimer);
    this.hideFeedbackTimer = setTimeout(() => {
      this.feedback.update((feedback) => ({ ...feedback, active: false }));
    }, FEEDBACK_DURATION_MS);
  }
}
