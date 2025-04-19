import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrderService } from '../order.service';
import { Item } from '../item.model';
import { Validators } from '@angular/forms';
declare var window: any;

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  orderForm!: FormGroup;
  items: Item[] = [];
  totalPrice: number = 0;

  constructor(private fb: FormBuilder, private orderService: OrderService) {}

  ngOnInit(): void {
    const orderNumber = this.orderService.getNextOrderNumber();
    this.items = this.orderService.getItems();

    this.orderForm = this.fb.group({
      orderNumber: [orderNumber],
      customerMobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      customerName: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
      item: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]]
    });

    this.orderForm.valueChanges.subscribe(val => {
      const selectedItem = this.items.find(i => i.name === val.item);
      if (selectedItem) {
        this.totalPrice = selectedItem.price * val.quantity;
      }
    });
  }

  
  submitOrder(): void {
    if (this.orderForm.valid) {
      // Bootstrap modal JS logic
      const modalElement = document.getElementById('orderModal');
      if (modalElement) {
        const modal = new window.bootstrap.Modal(modalElement);
        modal.show();
      }
    }
  }

  
}
