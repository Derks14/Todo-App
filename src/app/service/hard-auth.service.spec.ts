import { TestBed } from '@angular/core/testing';

import { HardAuthService } from './hard-auth.service';

describe('HardAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardAuthService = TestBed.get(HardAuthService);
    expect(service).toBeTruthy();
  });
});
