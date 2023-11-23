import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateYourAccount } from '../../models/register.model';

@Component({
  selector: 'app-create-your-account',
  templateUrl: './create-your-account.component.html',
  styleUrls: ['./create-your-account.component.css']
})
export class CreateYourAccountComponent {
  accountForm: FormGroup;

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

  get areRequiredFieldsFilled(): boolean {
    return (
      !!this.accountForm.get('firstName')?.touched &&
      !!this.accountForm.get('lastName')?.touched &&
      !!this.accountForm.get('email')?.touched &&
      !!this.accountForm.get('confirmEmail')?.touched &&
      !!this.accountForm.get('password')?.touched &&
      !!this.accountForm.get('confirmPassword')?.touched &&
      !!this.accountForm.get('firstName')?.value &&
      !!this.accountForm.get('lastName')?.value &&
      !!this.accountForm.get('email')?.value &&
      !!this.accountForm.get('confirmEmail')?.value &&
      !!this.accountForm.get('password')?.value &&
      !!this.accountForm.get('confirmPassword')?.value
    );
  }
  
}
