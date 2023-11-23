// parent.component.ts
import { Component } from '@angular/core';
import { CreateYourAccount, CreateYourAccount2 } from '../../models/register.model';

@Component({
  selector: 'app-parent',
  template: `
    <app-create-your-account (nextStep)="onNextStep($event)"></app-create-your-account>
    <app-create-your-account2 [accountFromStep1]="accountDataFromStep1" (submitForm)="onFormSubmitted($event)"></app-create-your-account2>
    <!-- Ajoutez d'autres composants ou du contenu ici -->
  `
})
export class ParentComponent {
  accountDataFromStep1: CreateYourAccount2 | undefined;

  onNextStep(data: CreateYourAccount) {
    this.accountDataFromStep1 = { ...data, dateOfBirth: '', country: '', address: '', postalCode: '', phoneNumber: '' };
  }

  onFormSubmitted(data: CreateYourAccount2) {
    console.log('Form data from step 2:', data);
  }
}
