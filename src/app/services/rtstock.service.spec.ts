import { TestBed } from '@angular/core/testing';

import { RtstockService } from './rtstock.service';

describe('RtstockService', () => {
  let service: RtstockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RtstockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
