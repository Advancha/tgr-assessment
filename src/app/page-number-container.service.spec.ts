import { TestBed } from '@angular/core/testing';

import { PageNumberContainerService } from './page-number-container.service';

describe('PageNumberContainerService', () => {
  let service: PageNumberContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageNumberContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
