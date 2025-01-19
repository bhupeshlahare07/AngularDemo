import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  name : string = 'Angular';
  currentYear : number = new Date().getFullYear();
  currentMonth : number = new Date().getMonth();
  currentDay : number = new Date().getDay();

  buttonDisabled = true;
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  inputPlaceholder = 'Enter your name';
}
