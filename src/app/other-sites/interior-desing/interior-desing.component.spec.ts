import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorDesingComponent } from './interior-desing.component';

describe('InteriorDesingComponent', () => {
  let component: InteriorDesingComponent;
  let fixture: ComponentFixture<InteriorDesingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteriorDesingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorDesingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
