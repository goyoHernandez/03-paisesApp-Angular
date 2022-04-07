import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent {

  regions: string[] = ['africa', 'america', 'asia', 'europe', 'oceania']
  activeRegion: string = '';
  countries: Country[] = [];
  existError: boolean = false;

  constructor(private countryService: CountryService) { }

  activateRegion = (region: string) => {
    if (region === this.activeRegion)
      return;

    this.existError = false;
    this.activeRegion = region;

    this.countryService.searchCountryByRegion(region)
      .subscribe((res) => {
        this.countries = res;
      },
        (err) => {
          this.existError = true;
          this.countries = [];
        });
  }

  getClassActive = (region: string): string => {
    return region === this.activeRegion ? 'btn-primary' : 'btn-outline-primary'
  }
}
