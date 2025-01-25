import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PibIssueInputComponent } from './pib-issue-input.component';

describe('PibIssueInputComponent', () => {
  let component: PibIssueInputComponent;
  let fixture: ComponentFixture<PibIssueInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PibIssueInputComponent]
    });
    fixture = TestBed.createComponent(PibIssueInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
