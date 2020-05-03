import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrevenForwardComponent } from './screven-forward.component';

describe('ScrevenForwardComponent', () => {
  let component: ScrevenForwardComponent;
  let fixture: ComponentFixture<ScrevenForwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrevenForwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrevenForwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
