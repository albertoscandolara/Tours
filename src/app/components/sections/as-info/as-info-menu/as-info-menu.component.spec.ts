import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsInfoMenuComponent } from './as-info-menu.component';

describe('AsInfoComponent', () => {
  let component: AsInfoMenuComponent;
  let fixture: ComponentFixture<AsInfoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsInfoMenuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsInfoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
