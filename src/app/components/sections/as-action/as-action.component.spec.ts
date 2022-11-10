import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsActionComponent } from './as-action.component';

describe('AsActionComponent', () => {
  let component: AsActionComponent;
  let fixture: ComponentFixture<AsActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsActionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
