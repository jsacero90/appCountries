import { Component, Input } from '@angular/core';
import { CountryResponse } from '@country/interfaces/country.inteface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styles: [],
})
export class CountryTableComponent {
  @Input() countries: CountryResponse[] = [];
}
