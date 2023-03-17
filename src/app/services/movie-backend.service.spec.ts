import { TestBed } from '@angular/core/testing';

import { MovieBackendService } from './movie-backend.service';

describe('MovieBackendService', () => {
  let service: MovieBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
