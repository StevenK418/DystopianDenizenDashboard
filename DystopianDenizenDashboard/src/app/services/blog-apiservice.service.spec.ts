import { TestBed } from '@angular/core/testing';

import { BlogAPIServiceService } from './blog-apiservice.service';

describe('BlogAPIServiceService', () => {
  let service: BlogAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
