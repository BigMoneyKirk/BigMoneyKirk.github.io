import { TestBed } from '@angular/core/testing';

import { NotificationModalService } from './notification-modal.service';

describe('NotificationModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificationModalService = TestBed.get(NotificationModalService);
    expect(service).toBeTruthy();
  });
});
