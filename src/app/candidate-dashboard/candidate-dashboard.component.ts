import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-candidate-dashboard',
  templateUrl: './candidate-dashboard.component.html',
  styleUrls: ['./candidate-dashboard.component.css']
})
export class CandidateDashboardComponent implements OnInit {
  userDetails = ""
  constructor(private dashboardService: DashboardService, private router: Router) { }

  ngOnInit() {
    this.dashboardService.getUserProfile().subscribe(
      res => {
       console.log(res)
      },
      err => { 
        console.log(err);
        
      }
    );
  }

}
