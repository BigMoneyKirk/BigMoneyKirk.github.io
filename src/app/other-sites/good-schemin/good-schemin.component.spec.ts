import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodScheminComponent } from './good-schemin.component';

describe('GoodScheminComponent', () => {
  let component: GoodScheminComponent;
  let fixture: ComponentFixture<GoodScheminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodScheminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodScheminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
