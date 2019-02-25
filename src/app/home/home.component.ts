import { Component, OnInit } from '@angular/core';
import { DataService } from './../common/shared.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url = "home";
 
  constructor(public dataService: DataService) { }

  ngOnInit() {
   this.dataService.setUrl(this.url);
  }
  scroll(){
  const element = document.querySelector("#scroll-here")

	if (element) 
	{
		element.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}	
	

  }

}
