import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  @Input() checkbox: boolean = false;
  user = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit(userForm: NgForm) {
    if (this.checkbox && userForm.valid) {
      this.sendMail();
      this.clearForm(userForm);
    } else {
      userForm.form.markAllAsTouched();
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
        console.log('Success!');
      })
      .catch((error) => {
        console.log(error);
      });
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
