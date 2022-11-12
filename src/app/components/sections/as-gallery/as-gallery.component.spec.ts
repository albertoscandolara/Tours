import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsGalleryComponent } from './as-gallery.component';

describe('AsGalleryComponent', () => {
  let component: AsGalleryComponent;
  let fixture: ComponentFixture<AsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsGalleryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
