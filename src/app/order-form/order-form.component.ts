import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../order.service';
import { Item } from '../item.model';

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
  // Step 1: Load order number
  this.orderService.getNextOrderNumberAsync().subscribe(orderNumber => {
    // Step 2: Build the form
    this.orderForm = this.fb.group({
      orderNumber: [{ value: orderNumber, disabled: true }],
      customerMobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      customerName: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
      item: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]]
    });

    // Step 3: Load items from API
    this.orderService.fetchItems().subscribe(items => {
      this.items = items;

      // Step 4: Calculate total price when item or quantity changes
      this.orderForm.valueChanges.subscribe(val => {
        const selectedItem = this.items.find(i => i.name === val.item);
        if (selectedItem) {
          this.totalPrice = selectedItem.price * val.quantity;
        }
      });
    });
  });
}


  submitOrder(): void {
    if (this.orderForm.valid) {
      const modalElement = document.getElementById('orderModal');
      if (modalElement) {
        const modal = new window.bootstrap.Modal(modalElement);
        modal.show();
      }
    }
  }
}
