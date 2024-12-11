import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapEditingComponent } from './swap-editing.component';

describe('SwapEditingComponent', () => {
  let component: SwapEditingComponent;
  let fixture: ComponentFixture<SwapEditingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwapEditingComponent]
    });
    fixture = TestBed.createComponent(SwapEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
