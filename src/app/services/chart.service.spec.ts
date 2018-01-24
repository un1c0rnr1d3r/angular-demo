import { TestBed, inject } from '@angular/core/testing';

import { ChartService } from './chart.service';
import { State } from './state';

describe('ChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartService, State]
    });
  });

  it('should be created', inject([ChartService], (service: ChartService) => {
    expect(service).toBeTruthy();
  }));
});
