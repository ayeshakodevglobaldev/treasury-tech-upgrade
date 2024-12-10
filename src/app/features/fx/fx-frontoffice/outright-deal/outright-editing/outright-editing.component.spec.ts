import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutrightEditingComponent } from './outright-editing.component';

describe('OutrightEditingComponent', () => {
  let component: OutrightEditingComponent;
  let fixture: ComponentFixture<OutrightEditingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutrightEditingComponent]
    });
    fixture = TestBed.createComponent(OutrightEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
