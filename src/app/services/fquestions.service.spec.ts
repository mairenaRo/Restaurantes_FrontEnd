import { TestBed } from '@angular/core/testing';

import { FquestionsService } from './fquestions.service';

describe('FquestionsService', () => {
  let service: FquestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FquestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
