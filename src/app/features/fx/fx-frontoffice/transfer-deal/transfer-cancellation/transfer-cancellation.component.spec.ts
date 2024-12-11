import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferCancellationComponent } from './transfer-cancellation.component';

describe('TransferCancellationComponent', () => {
  let component: TransferCancellationComponent;
  let fixture: ComponentFixture<TransferCancellationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferCancellationComponent]
    });
    fixture = TestBed.createComponent(TransferCancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
