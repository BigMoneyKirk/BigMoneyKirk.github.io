import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KevinsVisionComponent } from './kevins-vision.component';

describe('KevinsVisionComponent', () => {
  let component: KevinsVisionComponent;
  let fixture: ComponentFixture<KevinsVisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KevinsVisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KevinsVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
