import { Component } from '@angular/core';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.scss']
})
export class DinnerComponent {

  DinnerItem1_ThaliOne: string = "../GorakhAngularDemo1/assets/HomeImages/LunchStandardThali.jpg";
  DinnerItem2_ThaliTwo: string = "../GorakhAngularDemo1/assets/HomeImages/LunchClassicThali.jpg";
  DinnerItem3_ThaliThree: string = "../GorakhAngularDemo1/assets/HomeImages/LunchBahubaliThali.jpg";
  
}
