import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit 
{

Designation: string = "";
UserName: string= "";
NoOfTeamMembers: number = 0;
TotalCostOfAllProjects: number= 0;
PendingTasks: number= 0;
UpComingProjects: number= 0;
ProjectCost: number= 0;

CurrentExpenditure: number= 0;
AvailableFunds: number= 0;

  //This ngOnInit() method is use to initialize the properties.
  ngOnInit()
  {
     this.Designation = "Team Leader";
     this.UserName = "Gorakh Shinde";
     this.NoOfTeamMembers = 67;
     this.TotalCostOfAllProjects= 120;
     this.PendingTasks = 50;
     this.UpComingProjects = 2;
     this.CurrentExpenditure = 300;
     this.AvailableFunds = 500;
  }
 

}
