
import { Component, EventEmitter, Output } from '@angular/core';
import { CreateYourAccount } from '../../models/register.model';

@Component({
  selector: 'app-create-your-account',
  templateUrl: './create-your-account.component.html',
  styleUrls: ['./create-your-account.component.css']
})
export class CreateYourAccountComponent {
  @Output() nextStep: EventEmitter<CreateYourAccount> = new EventEmitter<CreateYourAccount>();

  account: CreateYourAccount = {
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: ''
  };

  onSubmit() {
    this.nextStep.emit(this.account);
  }
}
