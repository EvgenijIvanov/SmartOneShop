import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AllProductsEffects } from './all-products.effects';

describe('AllProductsEffects', () => {
  let actions$: Observable<any>;
  let effects: AllProductsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AllProductsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AllProductsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
