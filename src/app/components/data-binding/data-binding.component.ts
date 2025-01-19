import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  // String interpolation  
  name : string = 'Angular';
  currentYear : number = new Date().getFullYear();
  currentMonth : number = new Date().getMonth();
  currentDay : number = new Date().getDay();

  // Property binding
  buttonDisabled = true;
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  inputPlaceholder = 'Enter your name';

  // Event binding
  message = '';

  onButtonClick() {
    this.message = 'Button clicked!';
  }

  onKeyUp(event: any) {
    this.message = event.target.value;
  }

  showMessage() {
    alert('Hello, ' + this.message);
  }

  // Two-way data binding
}
