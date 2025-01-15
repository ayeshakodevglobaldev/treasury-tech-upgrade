import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SukukVariableComponent } from './sukuk-variable.component';

describe('SukukVariableComponent', () => {
  let component: SukukVariableComponent;
  let fixture: ComponentFixture<SukukVariableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SukukVariableComponent]
    });
    fixture = TestBed.createComponent(SukukVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
