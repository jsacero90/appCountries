import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountryResponse } from '@country/interfaces/country.inteface';
import { environment } from '@enviroment/environment';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  searchCountries(country: string): Observable<CountryResponse[]> {
    return this.http
      .get<CountryResponse[]>(`${this.apiUrl}/name/${country}`)
      .pipe(catchError(_err => of([])));
  }

  searchCapitals(capital: string): Observable<CountryResponse[]> {
    return this.http
      .get<CountryResponse[]>(`${this.apiUrl}/capital/${capital}`)
      .pipe(catchError(_err => of([])));
  }

  searchAlphaCode(alpha: string): Observable<any> {
    return this.http
      .get<CountryResponse[]>(`${this.apiUrl}/alpha/${alpha}`)
      .pipe(
        map((resp: CountryResponse[]) => {
          let translations = this.objOfTraslations(resp);
          return { ...resp[0], translations };
        }),
        catchError(_err => of())
      );
  }

  private objOfTraslations(country: CountryResponse[]) {
    return Object.entries(country[0].translations).map(([language, list]) => ({
      language,
      common: list.common,
      official: list.official,
    }));
  }
}
