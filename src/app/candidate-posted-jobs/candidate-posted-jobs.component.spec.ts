import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatePostedJobsComponent } from './candidate-posted-jobs.component';

describe('CandidatePostedJobsComponent', () => {
  let component: CandidatePostedJobsComponent;
  let fixture: ComponentFixture<CandidatePostedJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatePostedJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatePostedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
