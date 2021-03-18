import { Country } from './../../interfaces/country.interface';
import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCountryComponent {
  term: string = '';
  errorExists: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggestions: boolean = false;

  constructor(private countryService: CountryService) {}

  search(term: string) {
    this.showSuggestions = false;
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
    this.term = term;
    this.showSuggestions = true;
    this.countryService.searchCountry(term).subscribe(
      (countries) => (this.suggestedCountries = countries.splice(0, 5)),
      (err) => (this.suggestedCountries = [])
    );
  }

}
