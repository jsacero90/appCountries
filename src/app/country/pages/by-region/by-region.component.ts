import { Component } from '@angular/core';
import { CountryResponse } from '@country/interfaces/country.inteface';
import { CountryService } from '@country/services/country.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [],
})
export class ByRegionComponent {
  public regions: string[] = [
    'africa',
    'americas',
    'asia',
    'europe',
    'oceania',
  ];
  public activeRegion: string = '';
  private countries!: Observable<CountryResponse[]>;

  get countries$(): Observable<CountryResponse[]> {
    return this.countries;
  }
  constructor(private countryService: CountryService) {}

  activateRegion(region: string) {
    if (region === this.activeRegion) {
      return;
    }
    this.activeRegion = region;
    this.countries = this.countryService.searchRegion(region);
  }
}
