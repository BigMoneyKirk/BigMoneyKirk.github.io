import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandrasRecordKeepingComponent } from './sandras-record-keeping.component';

describe('SandrasRecordKeepingComponent', () => {
  let component: SandrasRecordKeepingComponent;
  let fixture: ComponentFixture<SandrasRecordKeepingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandrasRecordKeepingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandrasRecordKeepingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
