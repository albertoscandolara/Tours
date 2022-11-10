import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsMenuItemComponent } from './as-menu-item.component';

describe('AsMenuItemComponent', () => {
  let component: AsMenuItemComponent;
  let fixture: ComponentFixture<AsMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsMenuItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
