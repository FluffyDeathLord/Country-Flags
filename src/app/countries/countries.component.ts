import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Country, CountryService } from '../country-service.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule, MatButtonModule,  MatTableModule, MatCardModule, HttpClientModule],
  providers: [ HttpClient,  CountryService],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css',
})
export class CountriesComponent implements OnInit {
  countries: Country[] = [];
  columns: string[] = ['name', 'flag'];
  constructor(
    private country: CountryService
  ) {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.country.getData().subscribe((data) => {
      this.countries = data;
    });
  }
}
