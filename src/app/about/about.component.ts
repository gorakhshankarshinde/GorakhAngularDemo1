import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  GorakhImagePath: string = "../GorakhAngularDemo1/assets/Images/Gorakh.jpg";
  AishwaryaImagePath: string = "../GorakhAngularDemo1/assets/Images/Aishwarya.jpg";
  Cook: string = "../GorakhAngularDemo1/assets/Images/cook.jpg";
}
