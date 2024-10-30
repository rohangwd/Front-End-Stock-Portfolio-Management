import { TestBed } from '@angular/core/testing';

import { HistoricalstockService } from './historicalstock.service';

describe('HistoricalstockService', () => {
  let service: HistoricalstockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricalstockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
