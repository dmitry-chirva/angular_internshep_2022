import { TestBed } from '@angular/core/testing';

import { TransformDataDetailsService } from './transform-data-details.service';

describe('TransformDataDetailsService', () => {
  let service: TransformDataDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransformDataDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
