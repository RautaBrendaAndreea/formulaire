import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CreateYourAccount } from '../../models/register.model';



export function emailMatcher(control: AbstractControl) {
  const email = control.get('email')?.value;
  const confirmationEmail = control.get('confirmationEmail')?.value;

  if (email === confirmationEmail) {
    return null;
  }

  return { emailMismatch: true };
}

export function passwordMatcher(control: AbstractControl) {
  const password = control.get('password')?.value;
  const confirmationPassword = control.get('confirmationPassword')?.value;

  if (password === confirmationPassword) {
    return null;
  }

  return { passwordMismatch: true };
}

@Component({
  selector: 'app-create-your-account',
  templateUrl: './create-your-account.component.html',
  styleUrls: ['./create-your-account.component.css']
})
export class CreateYourAccountComponent {
  accountForm: FormGroup;
  showPassword: boolean = false;
  @Output() nextStep: EventEmitter<CreateYourAccount> = new EventEmitter<CreateYourAccount>();
  account: CreateYourAccount = {
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private fb: FormBuilder) {
    this.accountForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.nextStep.emit(this.account);
    }
  }

  isFormValid(): boolean {
    return (
      this.accountForm.valid &&
      this.account.email === this.account.confirmEmail &&
      this.account.password === this.account.confirmPassword
    );
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
