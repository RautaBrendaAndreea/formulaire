import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiResponse, AdresseComplet } from '../models/geocoding.model';

@Injectable({
  providedIn: 'root',
})
export class DynamicGeocodingService {
  private apiUrl = 'https://api-adresse.data.gouv.fr/search/';

  constructor(private http: HttpClient) {}

  private handleError(error: any): Observable<never> {
    return of(null).pipe(map(() => { throw error; }));
  }

  searchAddresses(query: string): Observable<AdresseComplet[]> {
    const params = new HttpParams().set('q', query).set('limit', '5');
    return this.http.get<ApiResponse>(this.apiUrl, { params }).pipe(
      map(data => data.features?.map(feature => ({
        adresse: feature?.properties?.label || '',
        postalCode: feature?.properties?.postcode || '',
        city: feature?.properties?.city || '',
      } as AdresseComplet)) || []),
      catchError(this.handleError)
    );
  }
}
