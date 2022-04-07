import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country, Languages, Name } from '../../interfaces/country.interface';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [
  ]
})
export class ShowCountryComponent implements OnInit {
  countries: Country[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.searchCoutryByCode(id)),
        tap(res => console.log(res[0].translations)
        )
      )
      .subscribe(res => this.countries = res);

    // this.activatedRoute.params
    //   .subscribe(({ id }) => {
    //     this.countryService.searchCoutryByCode(id)
    //       .subscribe(country => {
    //         console.log(country);
    //       },
    //         (err) => {

    //         });
    //   });
  }
}
