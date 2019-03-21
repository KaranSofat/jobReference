import { Component, OnInit } from '@angular/core';
import { DataService } from './../common/shared.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  constructor(public dataService: DataService) { }

  ngOnInit() {
   
  }
  scroll(){
  const element = document.querySelector("#scroll-here")

	if (element) 
	{
		element.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}	
	

  }

}
