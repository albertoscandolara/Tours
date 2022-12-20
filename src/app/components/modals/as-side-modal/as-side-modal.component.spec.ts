import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsSideModalComponent } from './as-side-modal.component';

describe('AsSideModalComponent', () => {
  let component: AsSideModalComponent;
  let fixture: ComponentFixture<AsSideModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsSideModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsSideModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
