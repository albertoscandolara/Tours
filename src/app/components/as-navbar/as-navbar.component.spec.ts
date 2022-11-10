import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsNavbarComponent } from './as-navbar.component';

describe('TourPreviewComponent', () => {
  let component: AsNavbarComponent;
  let fixture: ComponentFixture<AsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsNavbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
