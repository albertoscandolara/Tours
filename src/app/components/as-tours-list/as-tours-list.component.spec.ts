import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsToursListComponent } from './as-tours-list.component';

describe('ToursListComponent', () => {
  let component: AsToursListComponent;
  let fixture: ComponentFixture<AsToursListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsToursListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsToursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
