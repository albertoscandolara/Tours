import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsInfoMapComponent } from './as-info-map.component';

describe('AsInfoComponent', () => {
  let component: AsInfoMapComponent;
  let fixture: ComponentFixture<AsInfoMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsInfoMapComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsInfoMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
