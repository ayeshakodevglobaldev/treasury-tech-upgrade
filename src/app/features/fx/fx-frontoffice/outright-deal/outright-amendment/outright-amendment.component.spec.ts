import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutrightAmendmentComponent } from './outright-amendment.component';

describe('OutrightAmendmentComponent', () => {
  let component: OutrightAmendmentComponent;
  let fixture: ComponentFixture<OutrightAmendmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutrightAmendmentComponent]
    });
    fixture = TestBed.createComponent(OutrightAmendmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
