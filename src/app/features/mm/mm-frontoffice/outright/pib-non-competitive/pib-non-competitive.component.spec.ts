import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PibNonCompetitiveComponent } from './pib-non-competitive.component';

describe('PibNonCompetitiveComponent', () => {
  let component: PibNonCompetitiveComponent;
  let fixture: ComponentFixture<PibNonCompetitiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PibNonCompetitiveComponent]
    });
    fixture = TestBed.createComponent(PibNonCompetitiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
