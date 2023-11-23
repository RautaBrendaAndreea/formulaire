import { Component } from '@angular/core';
import { CreateYourAccount, CreateYourAccount2 } from '../../models/register.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']

})
export class ParentComponent {
  accountDataFromStep1: CreateYourAccount2 | undefined;

  constructor(private router: Router) {}

  onNextStep(data: CreateYourAccount) {
    this.accountDataFromStep1 = { ...data,sexe: '', dateOfBirth: '', country: '', address: '', postalCode: '', phoneNumber: '' };
    this.router.navigate(['/create-your-account2']);
  }

  onFormSubmitted(data: CreateYourAccount2) {
    console.log('Form data from step 2:', data);
  }
}
