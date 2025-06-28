import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item.model';
import { map, Observable, of } from 'rxjs';

interface Order {
  orderId: number;
  menuItemId: number;
  customerName: string;
  customerEmail: string;
  customerMobile: number;
  itemQuantity: number;
  totalPrice: number;
  purchaseDate: string;
  createdById: number;
  createdOn: string;
  updatedById: number;
  updatedOn: string;
  active: boolean;
}

interface MenuItemResponse {
  menuItemId: number;
  menuItemName: string;
  menuItemType: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderApiUrl = '/api/Order';
  private menuApiUrl = '/api/MenuItem';  // <-- Use relative path here for proxy

  private lastOrderNumber: number | null = null;
  private items: Item[] = [];

  constructor(private http: HttpClient) {}

  getNextOrderNumberAsync(): Observable<number> {
    if (this.lastOrderNumber !== null) {
      return of(this.lastOrderNumber++);
    }

    return this.http.get<Order[]>(this.orderApiUrl).pipe(
      map(orders => {
        const nextOrderId = orders.length > 0
          ? Math.max(...orders.map(o => o.orderId)) + 1
          : 1;
        this.lastOrderNumber = nextOrderId + 1;
        return nextOrderId;
      })
    );
  }

  fetchItems(): Observable<Item[]> {
    return this.http.get<MenuItemResponse[]>(this.menuApiUrl).pipe(
      map(menuItems => {
        this.items = menuItems.map(menuItem => ({
          name: menuItem.menuItemName,
          price: menuItem.price
        }));
        return this.items;
      })
    );
  }

  getItems(): Item[] {
    return this.items;
  }
}
