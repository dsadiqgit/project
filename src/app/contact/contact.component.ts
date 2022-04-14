import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  public onSubmit() {
    console.log(this.contactForm.get('firstName'));
    this.contactForm.markAllAsTouched();
    if (this.contactForm.valid) {
      const btn = document.getElementById('submit-btn') as HTMLElement;
      const success = document.getElementById('success') as HTMLElement;

      btn.classList.add('btn-progress');
      setTimeout(() => {
        btn.classList.add('btn-fill');
      }, 500);

      setTimeout(() => {
        btn.classList.remove('btn-fill');
      }, 4100);

      setTimeout(() => {
        btn.classList.add('btn-complete');
        success.classList.add('active');
      }, 4100);
    }

    if (!this.contactForm.valid) {
      const btn = document.getElementById('submit-btn') as HTMLElement;
      const errorMsg = document.getElementById('error-msg') as HTMLElement;

      setTimeout(() => {
        btn.classList.add('error');
        errorMsg.classList.add('active');
      }, 50);

      setTimeout(() => {
        btn.classList.remove('error');
        errorMsg.classList.remove('active');
      }, 4100);
    }
  }
}
