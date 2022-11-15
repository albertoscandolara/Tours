import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsEmailFormComponent } from './as-email-form.component';

describe('AsEmailFormComponent', () => {
  let component: AsEmailFormComponent;
  let fixture: ComponentFixture<AsEmailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsEmailFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsEmailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
