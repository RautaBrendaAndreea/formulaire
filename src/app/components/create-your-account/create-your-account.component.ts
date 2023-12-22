import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CreateYourAccount } from '../../models/register.model';
import { ValidatorService } from 'src/app/services/validator-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-your-account',
  templateUrl: './create-your-account.component.html',
  styleUrls: ['./create-your-account.component.css']
})
export class CreateYourAccountComponent {
  accountForm: FormGroup;
  showPassword: boolean = false;
  account: CreateYourAccount = {
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private fb: FormBuilder, 
    private validatorService: ValidatorService,
    private router: Router) {
    this.accountForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/)]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: [
        this.validatorService.emailMatcher.bind(this.validatorService),
        this.validatorService.passwordMatcher.bind(this.validatorService)
      ]
    });
  }

  onSubmit(): void {
    console.log('Form validity:', this.accountForm.valid);
  
    if (this.accountForm.valid) {
      this.router.navigate(['/create-your-account2']);
    } else {
      console.log("Le formulaire n'est pas valide");
      Object.keys(this.accountForm.controls).forEach(key => {
        const control = this.accountForm.get(key);
        console.log(`Control '${key}':`);
        console.log('  Value:', control?.value);
        console.log('  Valid:', control?.valid);
        console.log('  Errors:', control?.errors);
      });
    }
  }
  
  
  getRequiredErrorMessage(field: AbstractControl): string {
    return field.hasError('required') && (field.touched || field.dirty) ? 'This field is required' : '';
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}