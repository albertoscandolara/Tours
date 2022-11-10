import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsMainComponent } from './as-main.component';

describe('ToursListComponent', () => {
  let component: AsMainComponent;
  let fixture: ComponentFixture<AsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsMainComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
