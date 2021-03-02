import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [],
})
export class CountryComponent implements OnInit {
  constructor(
    private activatedRouted: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.activatedRouted.params.subscribe(({ code }) =>
      this.countryService
        .getCountryByCode(code)
        .subscribe((country) => console.log(country))
    );
  }
}
