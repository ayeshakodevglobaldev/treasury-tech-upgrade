import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapAuthorizeComponent } from './swap-authorize.component';

describe('SwapAuthorizeComponent', () => {
  let component: SwapAuthorizeComponent;
  let fixture: ComponentFixture<SwapAuthorizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwapAuthorizeComponent]
    });
    fixture = TestBed.createComponent(SwapAuthorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
