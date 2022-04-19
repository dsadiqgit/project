import { Component, OnInit, HostListener } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private route: Router) {}

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

  public isInViewport(item) {
    var bounding = item.getBoundingClientRect(),
      myElementHeight = item.offsetHeight,
      myElementWidth = item.offsetWidth;

    if (
      bounding.top >= -myElementHeight &&
      bounding.left >= -myElementWidth &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth) +
          myElementWidth &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) +
          myElementHeight
    ) {
      return true;
    } else {
      return false;
    }
  }

  public onSubmit(e: Event) {
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
        this.contactForm.reset();
      }, 4100);

      e.preventDefault();
      emailjs
        .sendForm(
          'service_uh6lbzf',
          'template_7zqrnbx',
          e.target as HTMLFormElement,
          'hcmeQ8mn0wGk88WA6'
        )
        .then(
          (result: EmailJSResponseStatus) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setTimeout(() => {
        this.route.navigate(['/']);
      }, 10000);
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
