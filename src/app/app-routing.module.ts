import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
import { CandidatePersonalInfoComponent } from './candidate-personal-info/candidate-personal-info.component';
import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { SiteLayoutComponent } from './common/site-layout/site-layout.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { CandidateSidebarComponent } from './common/candidate-sidebar/candidate-sidebar.component';
import { CandidateLayoutComponent } from './common/candidate-layout/candidate-layout.component';
import { CandidateHeaderComponent } from './common/candidate-header/candidate-header.component';
import { CandidateAppliedJobsComponent } from './candidate-applied-jobs/candidate-applied-jobs.component';
import { CandidatePostedJobsComponent } from './candidate-posted-jobs/candidate-posted-jobs.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
          { path: '', component: HomeComponent, pathMatch: 'full'},
         
           
        ]
  },{
    path: '',
    component: CandidateLayoutComponent,
    children: [
          { path: 'dashboard', component: CandidateDashboardComponent, pathMatch: 'full'},
          { path: 'details', component: CandidateDetailComponent, pathMatch: 'full'},
           { path: 'profile', component: CandidateProfileComponent, pathMatch: 'full'},
          { path: 'appliedJobs', component: CandidateAppliedJobsComponent, pathMatch: 'full'},
          
           { path: 'postedJobs', component: CandidatePostedJobsComponent, pathMatch: 'full'},
          { path: 'personalInfo', component: CandidatePersonalInfoComponent, pathMatch: 'full'},
           
          
        ]
  },
  
  {
    path: 'comingsoon',
    component: ComingSoonComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
