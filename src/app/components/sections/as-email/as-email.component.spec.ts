import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsEmailComponent } from './as-email.component';

describe('AsEmailComponent', () => {
  let component: AsEmailComponent;
  let fixture: ComponentFixture<AsEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsEmailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
