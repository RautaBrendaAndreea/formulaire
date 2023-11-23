import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreateYourAccount2, Country } from '../../models/register.model';
import { RegisterNewInfosUserService } from '../../services/register.service';

@Component({
  selector: 'app-create-your-account2',
  templateUrl: './create-your-account2.component.html',
  styleUrls: ['./create-your-account2.component.css']
})
export class CreateYourAccount2Component implements OnInit {
  @Input() accountFromStep1: CreateYourAccount2 | undefined;
  @Output() submitForm: EventEmitter<CreateYourAccount2> = new EventEmitter<CreateYourAccount2>();
  countries: Country[];
  account2Form: FormGroup;

  constructor(private registerService: RegisterNewInfosUserService, private fb: FormBuilder) {
    this.account2Form = this.fb.group({
      dateOfBirth: ['', Validators.required],
      country: ['', Validators.required],
      address: ['', Validators.required],
      postalCode: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
    this.countries = []
  }

  ngOnInit() {
    this.registerService.getCountries().subscribe((countries) => {
      this.countries = countries
    });
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.submitForm.emit(this.account2Form.value);
    }
  }


  private isFormValid(): boolean {
    return this.account2Form.valid;
  }

  isFieldValid(fieldName: string): boolean {
    const control = this.account2Form.get(fieldName);
    return !!control && control.valid && control.touched;
  }
}
