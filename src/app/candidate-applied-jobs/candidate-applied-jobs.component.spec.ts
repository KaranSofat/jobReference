import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateAppliedJobsComponent } from './candidate-applied-jobs.component';

describe('CandidateAppliedJobsComponent', () => {
  let component: CandidateAppliedJobsComponent;
  let fixture: ComponentFixture<CandidateAppliedJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateAppliedJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateAppliedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
