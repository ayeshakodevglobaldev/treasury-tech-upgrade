import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputIssueComponent } from './input-issue.component';

describe('InputIssueComponent', () => {
  let component: InputIssueComponent;
  let fixture: ComponentFixture<InputIssueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputIssueComponent]
    });
    fixture = TestBed.createComponent(InputIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
