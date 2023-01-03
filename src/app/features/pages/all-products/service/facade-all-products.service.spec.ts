import { TestBed } from '@angular/core/testing';

import { FacadeAllProductsService } from './facade-all-products.service';

describe('FacadeAllProductsService', () => {
  let service: FacadeAllProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacadeAllProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
