import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsModalComponent } from './as-modal.component';

describe('AsModalComponent', () => {
  let component: AsModalComponent;
  let fixture: ComponentFixture<AsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
