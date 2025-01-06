import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PibFloaterComponent } from './pib-floater.component';

describe('PibFloaterComponent', () => {
  let component: PibFloaterComponent;
  let fixture: ComponentFixture<PibFloaterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PibFloaterComponent]
    });
    fixture = TestBed.createComponent(PibFloaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
