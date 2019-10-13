import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TishasCakesComponent } from './tishas-cakes.component';

describe('TishasCakesComponent', () => {
  let component: TishasCakesComponent;
  let fixture: ComponentFixture<TishasCakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TishasCakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TishasCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
