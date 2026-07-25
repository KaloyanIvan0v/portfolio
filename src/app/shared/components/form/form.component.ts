import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mzzpyqle';
const FEEDBACK_DURATION_MS = 4000;

type FeedbackKind = 'success' | 'error';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, RouterLink],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  checkbox = false;
  sending = false;

  user = {
    name: '',
    email: '',
    message: '',
  };

  /** i18n key of the message shown after submitting, plus its state. */
  feedback: { key: string; kind: FeedbackKind; active: boolean } = {
    key: '',
    kind: 'success',
    active: false,
  };

  onSubmit(userForm: NgForm): void {
    if (!this.checkbox || !userForm.valid || this.sending) {
      userForm.form.markAllAsTouched();
      return;
    }
    this.sendMail(userForm);
  }

  private sendMail(userForm: NgForm): void {
    this.sending = true;
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
        this.sending = false;
      });
  }

  private clearForm(userForm: NgForm): void {
    userForm.resetForm();
    this.checkbox = false;
  }

  private showFeedback(key: string, kind: FeedbackKind): void {
    this.feedback = { key, kind, active: true };
    setTimeout(() => {
      this.feedback.active = false;
    }, FEEDBACK_DURATION_MS);
  }
}
