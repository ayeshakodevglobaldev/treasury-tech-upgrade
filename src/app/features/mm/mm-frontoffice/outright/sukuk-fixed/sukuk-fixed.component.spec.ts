import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SukukFixedComponent } from './sukuk-fixed.component';

describe('SukukFixedComponent', () => {
  let component: SukukFixedComponent;
  let fixture: ComponentFixture<SukukFixedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SukukFixedComponent]
    });
    fixture = TestBed.createComponent(SukukFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
