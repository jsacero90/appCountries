import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { CountryResponse } from '@country/interfaces/country.inteface';
import { CountryService } from '@country/services/country.service';

@Component( {
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [
  ]
} )
export class SeeCountryComponent implements OnInit
{

  private country!: Observable<CountryResponse>;


  get country$ (): Observable<CountryResponse>
  {
    return this.country;
  }


  constructor ( private activatedRoute: ActivatedRoute, private countryService: CountryService ) { }


  ngOnInit (): void
  {
    this.country = this.activatedRoute.params
      .pipe( switchMap( ( { id } ) => this.countryService.searchAlphaCode( id ) ),
        tap(
        ) )
  }

}
