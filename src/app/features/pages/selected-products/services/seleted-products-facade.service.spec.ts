import { TestBed } from '@angular/core/testing';

import { SeletedProductsFacadeService } from './seleted-products-facade.service';

describe('SeletedProductsFacadeService', () => {
  let service: SeletedProductsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeletedProductsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
