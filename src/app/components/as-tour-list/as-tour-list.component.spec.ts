import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsTourListComponent } from './as-tour-list.component';

describe('TourPreviewComponent', () => {
  let component: AsTourListComponent;
  let fixture: ComponentFixture<AsTourListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsTourListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsTourListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
