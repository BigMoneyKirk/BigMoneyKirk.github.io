import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeatylinsBeautyComponent } from './keatylins-beauty.component';

describe('KeatylinsBeautyComponent', () => {
  let component: KeatylinsBeautyComponent;
  let fixture: ComponentFixture<KeatylinsBeautyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeatylinsBeautyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeatylinsBeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
