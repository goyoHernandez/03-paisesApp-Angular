import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {
  txtCapital: string = '';
  existError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  searchCountryByCapital = (txtCapital: string) => {
    this.existError = false;
    this.txtCapital = txtCapital;

    this.countryService.searchCountryByCapital(txtCapital)
      .subscribe((res) => {
        this.countries = res;
      }, (err) => {
        this.existError = true;
        this.countries = [];
      });
  }
}
