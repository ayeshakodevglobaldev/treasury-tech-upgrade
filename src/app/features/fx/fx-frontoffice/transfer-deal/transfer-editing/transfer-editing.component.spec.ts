import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferEditingComponent } from './transfer-editing.component';

describe('TransferEditingComponent', () => {
  let component: TransferEditingComponent;
  let fixture: ComponentFixture<TransferEditingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferEditingComponent]
    });
    fixture = TestBed.createComponent(TransferEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
