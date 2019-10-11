import { TestBed } from '@angular/core/testing';

import { GlobalImageService } from './global-image.service';

describe('GlobalImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalImageService = TestBed.get(GlobalImageService);
    expect(service).toBeTruthy();
  });
});
