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

  showHideDiv1(isShow: boolean) {
    debugger;
    this.isDiv1Visible = isShow;
  }

}
