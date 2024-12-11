import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapAmendmentComponent } from './swap-amendment.component';

describe('SwapAmendmentComponent', () => {
  let component: SwapAmendmentComponent;
  let fixture: ComponentFixture<SwapAmendmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwapAmendmentComponent]
    });
    fixture = TestBed.createComponent(SwapAmendmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
