import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Observable } from 'rxjs';
import { CountryResponse } from '@country/interfaces/country.inteface';

@Component( {
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
} )
export class ByCountryComponent
{
  public term: string = '';
  private countries!: Observable<CountryResponse[]>;

  constructor ( private countryService: CountryService ) { }

  get countries$ (): Observable<CountryResponse[]>
  {
    return this.countries
  }

  search ( e: string )
  {
    this.term = e;
    this.countries = this.countryService.searchCountries( this.term );
  }

  suggestions ( e: string )
  {
    // TODO: Crear sugerencias
  }
}
