import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [],
})
export class ByRegionComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  getCSSClass(region: string) {
    return region === this.activeRegion ? 'btn-primary' : 'btn-outline-primary';
  }

  activateRegion(region: string) {
    if (region !== this.activeRegion) {
      this.activeRegion = region;
      this.countries = [];
      this.countryService
        .searchRegion(region)
        .subscribe((countries) => (this.countries = countries));
    }
  }
}
