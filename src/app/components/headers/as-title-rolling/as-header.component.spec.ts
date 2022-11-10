import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsHeaderComponent } from './as-header.component';

describe('AsHeaderComponent', () => {
  let component: AsHeaderComponent;
  let fixture: ComponentFixture<AsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
