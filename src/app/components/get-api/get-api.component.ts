import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetAPIComponent {

userList: any[] = [];
empList: any[] = [];

constructor(private http: HttpClient) {
   
}

getUser(){
  this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data:any) => {
    // console.log(data);
    this.userList = data;
  });
}

getEmployee(){
  this.http.get('https://projectapi.gerasim.in/api/EmployeeManagement/GetAllEmployees').subscribe((data:any) => {
    console.log(data);
    this.empList = data;
  });
}

}
