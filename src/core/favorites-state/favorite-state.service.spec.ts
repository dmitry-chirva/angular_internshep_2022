import { TestBed } from '@angular/core/testing';

import { FavoriteStateService } from './favorite-state.service';

describe('FavoriteStateService', () => {
  let service: FavoriteStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
