import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsEmailProcessingComponent } from './as-email-processing.component';

describe('AsEmailProcessingComponent', () => {
  let component: AsEmailProcessingComponent;
  let fixture: ComponentFixture<AsEmailProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsEmailProcessingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsEmailProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
