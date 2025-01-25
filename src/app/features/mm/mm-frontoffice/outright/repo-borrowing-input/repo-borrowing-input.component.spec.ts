import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoBorrowingInputComponent } from './repo-borrowing-input.component';

describe('RepoBorrowingInputComponent', () => {
  let component: RepoBorrowingInputComponent;
  let fixture: ComponentFixture<RepoBorrowingInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepoBorrowingInputComponent]
    });
    fixture = TestBed.createComponent(RepoBorrowingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
