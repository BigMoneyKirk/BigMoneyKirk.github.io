import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BunnieBeauteComponent } from './bunnie-beaute.component';

describe('BunnieBeauteComponent', () => {
  let component: BunnieBeauteComponent;
  let fixture: ComponentFixture<BunnieBeauteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BunnieBeauteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BunnieBeauteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
