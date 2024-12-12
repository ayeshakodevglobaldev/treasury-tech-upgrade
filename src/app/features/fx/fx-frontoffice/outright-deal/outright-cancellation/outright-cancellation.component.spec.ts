import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutrightCancellationComponent } from './outright-cancellation.component';

describe('OutrightCancellationComponent', () => {
  let component: OutrightCancellationComponent;
  let fixture: ComponentFixture<OutrightCancellationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutrightCancellationComponent]
    });
    fixture = TestBed.createComponent(OutrightCancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
