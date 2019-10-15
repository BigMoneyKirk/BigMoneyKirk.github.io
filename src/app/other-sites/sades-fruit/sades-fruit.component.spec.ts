import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SadesFruitComponent } from './sades-fruit.component';

describe('SadesFruitComponent', () => {
  let component: SadesFruitComponent;
  let fixture: ComponentFixture<SadesFruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SadesFruitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SadesFruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
