import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service'; // Import the service

@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.scss']
})
export class UserMasterComponent implements OnInit {
  users: any[] = [];  // Array to store user data

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  // Method to load users using the service
  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;  // Assign response data to users array
        console.log('User data:', data);  // Log the user data
      },
      (error) => {
        console.error('Error fetching users:', error);  // Handle error
      }
    );
  }
}
