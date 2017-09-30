import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpanceCalculatorComponent } from './expance-calculator.component';

describe('ExpanceCalculatorComponent', () => {
  let component: ExpanceCalculatorComponent;
  let fixture: ComponentFixture<ExpanceCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpanceCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpanceCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
