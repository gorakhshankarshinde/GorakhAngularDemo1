import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  GorakhImagePath = 'assets/images/gorakh.jpg';
  AishwaryaImagePath = 'assets/images/aishwarya.jpg';
  Cook = 'assets/images/cook.jpg';
  
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
