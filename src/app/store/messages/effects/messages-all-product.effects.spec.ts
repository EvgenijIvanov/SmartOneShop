import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { MessagesAllProductEffects } from './messages-all-product.effects';

describe('MessagesAllProductEffects', () => {
  let actions$: Observable<any>;
  let effects: MessagesAllProductEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MessagesAllProductEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(MessagesAllProductEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
