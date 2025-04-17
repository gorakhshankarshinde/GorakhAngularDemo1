import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  
  todayCustomerCount = 5;
  totalCollection = 13450;
  todayInvestment = 3500;
  todayDate = new Date();

  todayCustomers = [
    'Ravi Kumar',
    'Sita Sharma',
    'Amit Patel',
    'Neha Verma',
    'Rajesh Meena'
  ];


  // items = [
  //   { Id: '1', FirstName: 'Gorakh', LastName: 'Shinde' , Email: 'g@gmail.com' },
  //   { Id: '2', FirstName: 'Saisha', LastName: 'Shinde' , Email: 's@gmail.com' },
  //   { Id: '3', FirstName: 'Aishwarya', LastName: 'Shinde' , Email: 'a@gmail.com' },
  //   { Id: '4', FirstName: 'Test', LastName: 'Test' , Email: 'test@gmail.com' },
    
  //   //{ id: '3', status: 'failed', task: 'deploy' }
  // ]

  // returnZero() {
  //   return 0
  //  }

}
