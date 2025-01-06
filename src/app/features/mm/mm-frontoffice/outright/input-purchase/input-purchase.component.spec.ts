import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPurchaseComponent } from './input-purchase.component';

describe('InputPurchaseComponent', () => {
  let component: InputPurchaseComponent;
  let fixture: ComponentFixture<InputPurchaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputPurchaseComponent]
    });
    fixture = TestBed.createComponent(InputPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
