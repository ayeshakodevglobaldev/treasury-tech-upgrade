import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapCancellationComponent } from './swap-cancellation.component';

describe('SwapCancellationComponent', () => {
  let component: SwapCancellationComponent;
  let fixture: ComponentFixture<SwapCancellationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwapCancellationComponent]
    });
    fixture = TestBed.createComponent(SwapCancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
