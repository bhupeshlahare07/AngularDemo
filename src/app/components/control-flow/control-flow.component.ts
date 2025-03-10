import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {

  isDiv1Visible: boolean = true;
  isDiv2Visible: string = "No";
  dayName: string = "";
  cityList: string[] = ["New York", "Chicago", "Houston", "San Francisco", "Los Angeles"];
  studentList: any[]=[
    {studentId: 101, studentName: 'Sam', studentMobile:'9876543',studentCity:'Pune',isAcvive:false},
    {studentId: 102, studentName: 'John', studentMobile:'9876543',studentCity:'Mumbai',isAcvive:true},
    {studentId: 103, studentName: 'Smith', studentMobile:'9876543',studentCity:'Nagpur',isAcvive:false},
    {studentId: 104, studentName: 'Tom', studentMobile:'9876543',studentCity:'Raipur',isAcvive:true},
    {studentId: 105, studentName: 'Jerry', studentMobile:'9876543',studentCity:'Durg',isAcvive:false},
    {studentId: 106, studentName: 'Tim', studentMobile:'9876543',studentCity:'Amravati',isAcvive:true},
    {studentId: 107, studentName: 'Kim', studentMobile:'9876543',studentCity:'Delhi',isAcvive:true}
  ]

  showHideDiv1(isShow: boolean) {
    debugger;
    this.isDiv1Visible = isShow;
  }

}
