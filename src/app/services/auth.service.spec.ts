import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { State } from './state';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, State]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
