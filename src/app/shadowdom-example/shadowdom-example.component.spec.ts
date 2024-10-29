import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowdomExampleComponent } from './shadowdom-example.component';

describe('ShadowdomExampleComponent', () => {
  let component: ShadowdomExampleComponent;
  let fixture: ComponentFixture<ShadowdomExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShadowdomExampleComponent]
    });
    fixture = TestBed.createComponent(ShadowdomExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
