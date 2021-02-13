import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  term: string = 'Hola mundo';

  constructor(private countryService: CountryService) {}

  buscar() {
    console.log(this.term);
    this.countryService.searchCountry(this.term).subscribe((resp) => {
      console.log(resp);
    });
  }
}
