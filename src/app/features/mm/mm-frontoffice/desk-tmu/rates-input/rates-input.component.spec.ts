import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesInputComponent } from './rates-input.component';

describe('RatesInputComponent', () => {
  let component: RatesInputComponent;
  let fixture: ComponentFixture<RatesInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatesInputComponent]
    });
    fixture = TestBed.createComponent(RatesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
