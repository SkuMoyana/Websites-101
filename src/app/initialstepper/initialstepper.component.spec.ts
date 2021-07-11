import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialstepperComponent } from './initialstepper.component';

describe('InitialstepperComponent', () => {
  let component: InitialstepperComponent;
  let fixture: ComponentFixture<InitialstepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialstepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialstepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
