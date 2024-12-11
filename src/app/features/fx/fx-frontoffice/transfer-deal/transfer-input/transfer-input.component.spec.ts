import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferInputComponent } from './transfer-input.component';

describe('TransferInputComponent', () => {
  let component: TransferInputComponent;
  let fixture: ComponentFixture<TransferInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferInputComponent]
    });
    fixture = TestBed.createComponent(TransferInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
