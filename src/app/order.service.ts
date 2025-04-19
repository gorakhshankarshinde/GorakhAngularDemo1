import { Injectable } from '@angular/core';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private lastOrderNumber = 1000;

  private items: Item[] = [
    { name: 'Pohe', price: 30 },
    { name: 'Medu Vada', price: 50 },
    { name: 'Idli Sambar', price: 50 },
    { name: 'Masala Dosa', price: 150 },
    { name: 'Classic thali', price: 170 },
    { name: 'Deluxe Idli Sambar', price: 200 },
    { name: 'Tea', price: 20 },
    { name: 'Coffee', price: 20 }
  ];

  getNextOrderNumber(): number {
    return ++this.lastOrderNumber;
  }

  getItems(): Item[] {
    return this.items;
  }
}
