import { TestBed } from '@angular/core/testing';

import { BasicAnimationService } from './basic-animation.service';

describe('BasicAnimationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicAnimationService = TestBed.get(BasicAnimationService);
    expect(service).toBeTruthy();
  });
});
