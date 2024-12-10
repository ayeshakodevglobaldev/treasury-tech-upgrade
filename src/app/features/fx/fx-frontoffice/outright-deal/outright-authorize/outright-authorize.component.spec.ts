import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutrightAuthorizeComponent } from './outright-authorize.component';

describe('OutrightAuthorizeComponent', () => {
  let component: OutrightAuthorizeComponent;
  let fixture: ComponentFixture<OutrightAuthorizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutrightAuthorizeComponent]
    });
    fixture = TestBed.createComponent(OutrightAuthorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
