import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatherMaryKayComponent } from './heather-mary-kay.component';

describe('HeatherMaryKayComponent', () => {
  let component: HeatherMaryKayComponent;
  let fixture: ComponentFixture<HeatherMaryKayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatherMaryKayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatherMaryKayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
