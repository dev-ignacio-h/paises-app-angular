import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';

import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [],
})
export class CountryComponent implements OnInit {
  country!: Country;
  constructor(
    private activatedRouted: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.activatedRouted.params
      .pipe(
        switchMap(({ code }) => this.countryService.getCountryByCode(code)),
        tap(console.log)
      )
      .subscribe((country) => (this.country = country));

    // this.activatedRouted.params.subscribe(({ code }) =>
    //   this.countryService
    //     .getCountryByCode(code)
    //     .subscribe((country) => console.log(country))
    // );
  }
}
