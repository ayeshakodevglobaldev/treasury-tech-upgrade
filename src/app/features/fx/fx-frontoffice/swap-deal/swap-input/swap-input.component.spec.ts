import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapInputComponent } from './swap-input.component';

describe('SwapInputComponent', () => {
  let component: SwapInputComponent;
  let fixture: ComponentFixture<SwapInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwapInputComponent]
    });
    fixture = TestBed.createComponent(SwapInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
