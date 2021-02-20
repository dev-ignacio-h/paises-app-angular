import { Country } from './../../interfaces/country.interface';
import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  term: string = '';
  errorExists: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  buscar(term: string) {
    this.errorExists = false;
    this.term = term;
    this.countryService.searchCountry(term).subscribe(
      (countries) => (this.countries = countries),
      (err) => {
        this.errorExists = true;
        this.countries = [];
      }
    );
  }

  suggestions(term: string) {
    this.errorExists = false;
    // TODO: create suggestions
  }
}
