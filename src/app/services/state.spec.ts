import { TestBed, inject } from '@angular/core/testing';

import { State } from './state.service';

describe('State', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [State]
    });
  });

  it('should be created', inject([State], (service: State) => {
    expect(service).toBeTruthy();
  }));
});
