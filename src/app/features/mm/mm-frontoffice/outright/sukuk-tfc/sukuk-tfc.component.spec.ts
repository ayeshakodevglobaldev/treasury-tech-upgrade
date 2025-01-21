import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SukukTfcComponent } from './sukuk-tfc.component';

describe('SukukTfcComponent', () => {
  let component: SukukTfcComponent;
  let fixture: ComponentFixture<SukukTfcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SukukTfcComponent]
    });
    fixture = TestBed.createComponent(SukukTfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
