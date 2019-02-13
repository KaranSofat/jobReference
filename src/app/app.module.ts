import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { DialogService } from './dialogService/dialoge-service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LoginComponent } from './pops/login/login.component';
import { SignupComponent } from './pops/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION } from 'ngx-ui-loader';
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'red',
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  fgsType: SPINNER.threeStrings,
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 2, // progress bar thickness
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CandidateDashboardComponent,
    CandidatePersonalInfoComponent,
    CandidateProfileComponent,
    ComingSoonComponent,
    SiteLayoutComponent,
    HeaderComponent,
    FooterComponent,
    CandidateSidebarComponent,
    CandidateLayoutComponent,
    CandidateHeaderComponent,
    CandidateAppliedJobsComponent,
    CandidatePostedJobsComponent,
    CandidateDetailComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
        FormsModule, 
     ReactiveFormsModule,
     ToastrModule.forRoot({progressBar:true,preventDuplicates: true}), // ToastrModule added
       MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  providers: [DialogService],
  bootstrap: [AppComponent],
   entryComponents: [ LoginComponent,SignupComponent ],
})
export class AppModule { }
