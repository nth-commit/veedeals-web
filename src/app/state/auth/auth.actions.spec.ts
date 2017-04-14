import { TestBed, inject } from '@angular/core/testing';

import { AuthActions } from './auth.actions';

describe('AuthActions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthActions]
    });
  });

  it('should ...', inject([AuthActions], (service: AuthActions) => {
    expect(service).toBeTruthy();
  }));
});
