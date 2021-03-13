import { Component } from '@angular/core';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [],
})
export class ByRegionComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';

  constructor() {}

  getCSSClass(region: string) {
    return region === this.activeRegion ? 'btn-primary' : 'btn-outline-primary';
  }

  activateRegion(region: string) {
    this.activeRegion = region;
    //TODO: hacer el llamado al servicio
  }
}
