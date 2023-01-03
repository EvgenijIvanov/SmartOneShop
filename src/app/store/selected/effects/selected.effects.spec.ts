import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SelectedEffects } from './selected.effects';

describe('SelectedEffects', () => {
  let actions$: Observable<any>;
  let effects: SelectedEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SelectedEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SelectedEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
