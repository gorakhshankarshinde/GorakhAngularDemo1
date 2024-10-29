import { Component } from '@angular/core';

@Component({
  selector: 'app-menucard',
  templateUrl: './menucard.component.html',
  styleUrls: ['./menucard.component.scss']
})
export class MenucardComponent {
  breakfast_items = [
    { Id: '1', Name: 'Pohe (पोहे)', Price: '30 SEK Per Plate' },
    { Id: '2', Name: 'Medu Vada (मेदू वडा)', Price: '50 SEK Per Plate' },
    { Id: '3', Name: 'Idli Sambar (ईडली सांबर)', Price: '50 SEK Per Plate' },
    
    //{ id: '3', status: 'failed', task: 'deploy' }
  ]

  lunch_items = [
    { Id: '1', Name: 'Standard Thali', Price: '150 SEK' },
    { Id: '2', Name: 'Classic Thali', Price: '170 SEK' },
    { Id: '3', Name: 'Bahubali Thali', Price: '200 SEK' },
    
    //{ id: '3', status: 'failed', task: 'deploy' }
  ]

  Dinner_items = [
    { Id: '1', Name: 'Standard Thali', Price: '150 SEK' },
    { Id: '2', Name: 'Classic Thali', Price: '170 SEK' },
    { Id: '3', Name: 'Bahubali Thali', Price: '200 SEK' },
    
    //{ id: '3', status: 'failed', task: 'deploy' }
  ]

  returnZero() {
    return 0
   }
}
