import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestBuddiesComponent } from './best-buddies.component';

describe('BestBuddiesComponent', () => {
  let component: BestBuddiesComponent;
  let fixture: ComponentFixture<BestBuddiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestBuddiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestBuddiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
