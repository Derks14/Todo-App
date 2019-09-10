import { TestBed } from '@angular/core/testing';

import { BasicAuthenticationServiceService } from './basic-authentication-service.service';

describe('BasicAuthenticationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicAuthenticationServiceService = TestBed.get(BasicAuthenticationServiceService);
    expect(service).toBeTruthy();
  });
});
