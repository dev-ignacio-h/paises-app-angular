import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent {
  term: string = '';
  errorExists: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(term: string) {
    this.errorExists = false;
    this.term = term;
    this.countryService.searchbyCapital(term).subscribe(
      (countries) => (this.countries = countries),
      (err) => {
        this.errorExists = true;
        this.countries = [];
      }
    );
  }

}
