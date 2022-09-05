import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Observable } from 'rxjs';
import { CountryResponse } from '@country/interfaces/country.inteface';

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
  public term: string = '';
  public displaySuggestions: boolean = false;
  private countries!: Observable<CountryResponse[]>;
  private suggestedCountries!: Observable<CountryResponse[]>;

  get countries$(): Observable<CountryResponse[]> {
    return this.countries;
  }

  get suggestedCountries$(): Observable<CountryResponse[]> {
    return this.suggestedCountries;
  }

  constructor(private countryService: CountryService) {}

  search(e: string) {
    this.displaySuggestions = false;
    this.term = e;
    this.countries = this.countryService.searchCountries(this.term);
  }

  suggestions(e: string) {
    if (e.length < 3) {
      return;
    }
    this.term = e;
    this.displaySuggestions = true;
    this.suggestedCountries = this.countryService.searchCountries(this.term);
  }

  searchSuggested(term: string) {
    this.search(term);
  }
}
