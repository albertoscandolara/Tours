import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsInfoDetailsComponent } from './as-info-details.component';

describe('AsInfoComponent', () => {
  let component: AsInfoDetailsComponent;
  let fixture: ComponentFixture<AsInfoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsInfoDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsInfoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
