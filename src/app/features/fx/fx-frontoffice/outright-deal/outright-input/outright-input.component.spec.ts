import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutrightInputComponent } from './outright-input.component';

describe('OutrightInputComponent', () => {
  let component: OutrightInputComponent;
  let fixture: ComponentFixture<OutrightInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutrightInputComponent]
    });
    fixture = TestBed.createComponent(OutrightInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
