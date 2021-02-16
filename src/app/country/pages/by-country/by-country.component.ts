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

  buscar() {
    this.errorExists = false;
    console.log(this.term);
    this.countryService.searchCountry(this.term).subscribe(
      (countries) => {
        this.countries = countries;
        console.log(countries);
      },
      (err) => {
        this.errorExists = true;
        this.countries = [];
      }
    );
  }
}
