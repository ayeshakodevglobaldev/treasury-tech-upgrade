import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementInputComponent } from './placement-input.component';

describe('PlacementInputComponent', () => {
  let component: PlacementInputComponent;
  let fixture: ComponentFixture<PlacementInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlacementInputComponent]
    });
    fixture = TestBed.createComponent(PlacementInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
