import { Component, OnInit, ElementRef, HostListener, ChangeDetectorRef } from '@angular/core';
import { Validators, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Router } from "@angular/router";
import { Country } from '../../models/register.model';
import { RegisterNewInfosUserService } from '../../services/register.service';
import { DynamicGeocodingService } from 'src/app/services/geocoding-service.service';
import { AdresseComplet } from 'src/app/models/geocoding.model';


@Component({
  selector: 'app-create-your-account2',
  templateUrl: './create-your-account2.component.html',
  styleUrls: ['./create-your-account2.component.css']
})
export class CreateYourAccount2Component implements OnInit {
  countries: Country[];
  account2Form: FormGroup;
  selectedAddress: AdresseComplet | null = null;
  addressSuggestions: AdresseComplet[] = [];
  showAddressSuggestions: boolean = false;
  addressSelected = false;

  constructor(private registerNewInfosUserService: RegisterNewInfosUserService,
    private router: Router,
    private dynamicGeocodingService: DynamicGeocodingService,
    private cdRef: ChangeDetectorRef,
    private elRef: ElementRef) {

    this.account2Form = new FormGroup({
      sexe: new FormControl ('', Validators.required),
      dateOfBirth: new FormControl ('', Validators.required),
      country: new FormControl ('', Validators.required),
      city: new FormControl ('', Validators.required),
      adress: new FormControl ('', Validators.required),
      postalCode: new FormControl ('', Validators.required),
      phoneNumber: new FormControl ('', Validators.required),

    });
    this.countries = []
  }

ngOnInit() {
  this.registerNewInfosUserService.getCountries().subscribe((countries) => {
    this.countries = countries.sort((a, b) => a.nom_en_gb.localeCompare(b.nom_en_gb, 'en', { sensitivity: 'base' }));
  });



  this.account2Form.get('adress')?.valueChanges
    .subscribe((query: string) => {
      this.dynamicGeocodingService.searchAddresses(query)
        .subscribe((addresses: AdresseComplet[]) => {
          this.addressSuggestions = [];
          let count: number = 1;
          addresses.forEach((address: AdresseComplet, index: number) => {
            this.addressSuggestions.push(
              {
                adresse: address.adresse,
                city: address.city,
                postalCode: address.postalCode,
                id: index +1
              });
            count++;
          });
        });
    });   
}


selectAddress(selectedAddress: AdresseComplet): void {
  if (selectedAddress) {
    this.account2Form.patchValue({
      adress: selectedAddress.adresse,
      postalCode: selectedAddress.postalCode,
      city: selectedAddress.city,
    });
    this.addressSuggestions = [];
    this.addressSelected = true;
  }
}
  

@HostListener('document:click', ['$event'])
handleDocumentClick(event: Event): void {
  const clickedInside = this.elRef.nativeElement.contains(event.target);

  if (clickedInside && !this.addressSelected) {
    this.showAddressSuggestions = true;
  } else {
    this.showAddressSuggestions = false;
  }
}

onAddressInputFocus() {
  this.addressSelected = false;
  this.showAddressSuggestions = true;
  this.cdRef.detectChanges();
}
searchAddresses(query: string): void {
  this.addressSuggestions = this.filterAddresses(query);
}

getRequiredErrorMessage(field: AbstractControl): string {
  return field.hasError('required') && (field.touched || field.dirty) ? 'This field is required' : '';
}

filterAddresses(query: string): AdresseComplet[] {
  return this.addressSuggestions.filter(
    (address) =>
      address.adresse.toLowerCase().includes(query.toLowerCase()) ||
      address.city.toLowerCase().includes(query.toLowerCase()) ||
      address.postalCode.includes(query)
  );
}

onSubmit(): void {
  if (this.account2Form.valid) {

    this.router.navigate(['/create-your-account']);

  } else {
    this.account2Form.markAllAsTouched();
  }
}

}
