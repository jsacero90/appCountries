import { Component } from '@angular/core';
import { CountryResponse } from '@country/interfaces/country.inteface';
import { CountryService } from '@country/services/country.service';
import { Observable } from 'rxjs';

@Component( {
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
} )
export class ByCapitalComponent
{
  public term: string = '';
  private capitals!: Observable<CountryResponse[]>;

  constructor ( private countryService: CountryService ) { }

  get capitals$ (): Observable<CountryResponse[]>
  {
    return this.capitals
  }

  search ( e: string )
  {
    this.term = e;
    this.capitals = this.countryService.searchCapitals( this.term );
  }

  suggestions ( e: string )
  {
    // TODO: Crear sugerencias
  }
}
