import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsEmailSubmissionResultComponent } from './as-email-submission-result.component';

describe('AsEmailSubmissionResultComponent', () => {
  let component: AsEmailSubmissionResultComponent;
  let fixture: ComponentFixture<AsEmailSubmissionResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsEmailSubmissionResultComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsEmailSubmissionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
