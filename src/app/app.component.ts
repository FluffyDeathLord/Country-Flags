import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
} from '@angular/forms';

import { CountriesComponent } from './countries/countries.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    CountriesComponent
  ],
})
export class AppComponent {
 

  constructor(private fb: FormBuilder) {
    
  }

 
 
}
