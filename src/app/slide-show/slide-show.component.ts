import { Component } from '@angular/core';


@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent {

  BreakfastItem1_Pohe: string = "../GorakhAngularDemo1/assets/HomeImages/pohe.jpg";
  BreakfastItem2_MeduVada: string = "../GorakhAngularDemo1/assets/HomeImages/meduVada.jpg";
  BreakfastItem3_Idli: string = "../GorakhAngularDemo1/assets/HomeImages/idli.jpg";

  LunchItem1_ThaliOne: string = "../GorakhAngularDemo1/assets/HomeImages/ThaliOne.jpg";
  LunchItem2_ThaliTwo: string = "../GorakhAngularDemo1/assets/HomeImages/ThaliTwo.jpg";
  LunchItem3_ThaliThree: string = "../GorakhAngularDemo1/assets/HomeImages/ThaliThree.jpg";

  DinnerItem1_ThaliOne: string = "../GorakhAngularDemo1/assets/HomeImages/ThaliOne.jpg";
  DinnerItem2_ThaliTwo: string = "../GorakhAngularDemo1/assets/HomeImages/ThaliTwo.jpg";
  DinnerItem3_ThaliThree: string = "../GorakhAngularDemo1/assets/HomeImages/ThaliThree.jpg";
  

}

