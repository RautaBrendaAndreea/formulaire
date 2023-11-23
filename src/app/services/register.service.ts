import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/register.model';


@Injectable({
  providedIn: 'root'
})
export class RegisterNewInfosUserService {

  constructor(private http: HttpClient) {} 
    getCountries() {
      return this.http.get<Country[]>('../../assets/data/country.json')
    }    
  }
