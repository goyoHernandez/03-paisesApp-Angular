import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,population,flags');
  }

  searchCountry = (txtCountry: string): Observable<Country[]> => {
    const url = `${this.apiUrl}/name/${txtCountry}`;
    return this.httpClient.get<Country[]>(url);
  }

  searchCountryByCapital = (txtCapital: string): Observable<Country[]> => {
    const url = `${this.apiUrl}/capital/${txtCapital}`;
    return this.httpClient.get<Country[]>(url, { params: this.httpParams });
  }

  searchCoutryByCode = (id: string): Observable<Country[]> => {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.httpClient.get<Country[]>(url);
  }

  searchCountryByRegion = (region: string): Observable<Country[]> => {
    const url = `${this.apiUrl}/region/${region}`;
    return this.httpClient.get<Country[]>(url, { params: this.httpParams });
  }
}