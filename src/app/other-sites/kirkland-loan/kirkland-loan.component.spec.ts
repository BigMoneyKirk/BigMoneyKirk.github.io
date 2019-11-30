import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KirklandLoanComponent } from './kirkland-loan.component';

describe('KirklandLoanComponent', () => {
  let component: KirklandLoanComponent;
  let fixture: ComponentFixture<KirklandLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KirklandLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KirklandLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
