import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnABCDComponent } from './learn-abcd.component';

describe('LearnABCDComponent', () => {
  let component: LearnABCDComponent;
  let fixture: ComponentFixture<LearnABCDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearnABCDComponent]
    });
    fixture = TestBed.createComponent(LearnABCDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
