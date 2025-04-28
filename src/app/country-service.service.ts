import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  apiUrl= '';
  constructor(private http: HttpClient) { 
    this.apiUrl = 'https://restcountries.com/v3.1/all';
  }

  getData(): Observable<Country[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(data =>
        data.map(item => ({
          name: item.name?.common,
          flag: item.flags?.png
        }))
      )
    );
  }

}
export interface Country {
  name: string;
  flag: string;
}