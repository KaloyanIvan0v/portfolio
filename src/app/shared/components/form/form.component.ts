import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
  @Input() checkbox: boolean = false;
  user = {
    name: '',
    email: '',
    message: '',
  };

  @Input() msgSendFeedback: { msg: string; active: boolean } = {
    msg: 'Your message has been sent successfully. Thank you!',
    active: false,
  };

  onSubmit(userForm: NgForm) {
    if (this.checkbox && userForm.valid) {
      this.showFeedback('asdfasdfsadf asdf asdf asdf');
      this.sendMail();
      this.clearForm(userForm);
    } else {
      userForm.form.markAllAsTouched();
      this.showFeedback('asdfasdfsadf asdf asdf asdf');
    }
  }

  clearForm(userForm: NgForm) {
    userForm.reset();
    this.checkbox = false;
  }

  sendMail() {
    const data = JSON.stringify({
      name: this.user.name,
      email: this.user.email,
      message: this.user.message,
    });

    fetch('https://formspree.io/f/mzzpyqle', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })
      .then(() => {
        this.showFeedback(
          'Your message has been sent successfully. Thank you!'
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  showFeedback(msg: string) {
    this.msgSendFeedback = {
      msg: msg,
      active: true,
    };
    setTimeout(() => {
      this.msgSendFeedback.active = false;
    }, 1835);
  }

  onResizeStart(event: MouseEvent, container: HTMLElement) {
    const startY = event.clientY;
    const startHeight = container.offsetHeight;

    const onMouseMove = (e: MouseEvent) => {
      const newHeight = startHeight + (e.clientY - startY);
      container.style.height = `${newHeight}px`;
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }
}
