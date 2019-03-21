import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
import { JobService } from './job.service';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  JobForm: FormGroup;
  submitted = false;
  skilesFilter:String;
  public addedSkills:Array<any> = [];
  configSearch = {
    displayKey: "type",
    search: true,
    limitTo: 3
  };
  searchOption = [{id:1,type:"Yes"},{id:1,type:"No"}];
  public postJobForm = { title:'', businessEmail: '', companyName: '',IsSearch:'',experienceMax:'',education:'',skills:'',description:'',salaryMin:'',salaryMax:'',location:'',experienceMin:'',city:'' };
  constructor( private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private jobService: JobService,
    ) { }

  ngOnInit() {
    let states = this.jobService.getStates();
    let educations = this.jobService.getEducations()
    Observable.forkJoin([states,educations])
       .subscribe((response) => {
          console.log(response[0], response[1]);
       });
    

    this.JobForm = this.formBuilder.group({
            
      jobTitle: ['', Validators.required],
      businessEmail: ['', [Validators.required,Validators.email]],
      companyName: ['', [Validators.required]],
      IsSearch: ['', [Validators.required]],
      experienceMax: ['', [Validators.required]],
      experienceMin: ['', [Validators.required]],
      education: ['', [Validators.required]],
      skills: ['', [Validators.required]],
      description: ['', [Validators.required]],
      location: ['', [Validators.required]],
      city: ['', [Validators.required]],
     // salaryMin: ['', [Validators.required]],
      //salaryMax: ['', [Validators.required]],
  });
  }
  get formControls() { return this.JobForm.controls; }
  postJob = function(){
    this.submitted = true;
   if (this.JobForm.invalid) {
         this.toastr.error('Please fill all fields.', 'Post Job Error');
            return;
    }

  }  

  addNewSkill(event){
  if(event.which == "188"){
    let value = event.target.value.replace( /,/g, "" );
    this.addedSkills.push({name:value});
    this.skilesFilter = "";
  }

  }
  remove(val){
    for(var i=0; i<this.addedSkills.length;i++){
      if(this.addedSkills[i].name == val.name){
        this.addedSkills.splice(i,1)
      }
    }
  }

}
