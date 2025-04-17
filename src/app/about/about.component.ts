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

  teamMembers = [
    {
      name: 'Gorakh Shinde',
      role: 'CEO & Founder',
      bio: 'Master in Computer Science.',
      image: this.GorakhImagePath
    },
    {
      name: 'Aishwarya Shinde',
      role: 'Art Director',
      bio: 'Master in Computer Applications.',
      image: this.AishwaryaImagePath
    },
    {
      name: 'S Shinde',
      role: 'Hotel Manager',
      bio: 'Specialist in Hotel Management.',
      image: this.Cook
    }
  ];
}
