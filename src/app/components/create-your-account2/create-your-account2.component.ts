import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CreateYourAccount2, Country } from '../../models/register.model';
import { RegisterNewInfosUserService } from '../../services/register.service';

@Component({
  selector: 'app-create-your-account2',
  templateUrl: './create-your-account2.component.html',
  styleUrls: ['./create-your-account2.component.css']
})
export class CreateYourAccount2Component {
  @Input() accountFromStep1: CreateYourAccount2 | undefined;
  @Output() submitForm: EventEmitter<CreateYourAccount2> = new EventEmitter<CreateYourAccount2>();
  countries: Country[] = [];

  account2: CreateYourAccount2 = {
    dateOfBirth: '',
    country: '',
    address: '',
    postalCode: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private registerService: RegisterNewInfosUserService) {}

  ngOnInit() {
    this.registerService.getCountries().subscribe((data: Country[]) => {
      this.countries = data;
    });
  }

  onSubmit() {

  }
}
