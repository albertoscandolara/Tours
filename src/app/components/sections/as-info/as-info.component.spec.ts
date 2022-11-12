import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsInfoComponent } from './as-info.component';

describe('AsInfoComponent', () => {
  let component: AsInfoComponent;
  let fixture: ComponentFixture<AsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
