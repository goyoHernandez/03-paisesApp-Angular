import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [`
    li {
      cursor:pointer;
    }
  `]
})
export class ByCountryComponent {
  txtCountry: string = '';
  existError: boolean = false;
  countries: Country[] = [];
  countriesSuggested: Country[] = [];
  showSuggestions: boolean = false;

  constructor(private countryService: CountryService) { }

  searchCountry = (txtCountry: string) => {
    this.showSuggestions = false;
    this.existError = false;
    this.txtCountry = txtCountry;

    this.countryService.searchCountry(this.txtCountry)
      .subscribe((res) => {
        this.countries = res;
      },
        (err) => {
          this.existError = true;
          this.countries = [];
        });
  }

  suggestions = (txtSuggestions: string) => {
    this.existError = false;
    this.txtCountry = txtSuggestions;
    this.showSuggestions = true;

    this.countryService.searchCountry(txtSuggestions)
      .subscribe(res => this.countriesSuggested = res,
        (err) => this.countriesSuggested = []
      )
  }

  searchSuggestion = (txtSuggestions: string) => {
    this.searchCountry(txtSuggestions);
  }
}
