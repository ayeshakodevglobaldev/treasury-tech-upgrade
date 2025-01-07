import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmDashboardComponent } from './mm-dashboard.component';

describe('MmDashboardComponent', () => {
  let component: MmDashboardComponent;
  let fixture: ComponentFixture<MmDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MmDashboardComponent]
    });
    fixture = TestBed.createComponent(MmDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
