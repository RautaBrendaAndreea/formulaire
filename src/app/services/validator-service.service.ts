import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  emailMatcher(control: AbstractControl) {
    const email = control.get('email')?.value;
    const confirmationEmail = control.get('confirmEmail')?.value;

    if (email === confirmationEmail) {
      return null;
    }

    return { emailMismatch: true };
  }

  passwordMatcher(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmationPassword = control.get('confirmPassword')?.value;

    if (password === confirmationPassword) {
      return null;
    }

    return { passwordMismatch: true };
  }
}
