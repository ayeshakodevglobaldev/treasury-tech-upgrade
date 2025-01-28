import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PibEditingComponent } from './pib-editing.component';

describe('PibEditingComponent', () => {
  let component: PibEditingComponent;
  let fixture: ComponentFixture<PibEditingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PibEditingComponent]
    });
    fixture = TestBed.createComponent(PibEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
