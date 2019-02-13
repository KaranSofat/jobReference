import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatePersonalInfoComponent } from './candidate-personal-info.component';

describe('CandidatePersonalInfoComponent', () => {
  let component: CandidatePersonalInfoComponent;
  let fixture: ComponentFixture<CandidatePersonalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatePersonalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatePersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
