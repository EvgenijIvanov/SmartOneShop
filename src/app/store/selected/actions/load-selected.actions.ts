import { createAction, props } from '@ngrx/store';
import {IProduct} from "../../../shared/interfaces/all-product.interfaces";

export const LoadSelected = createAction(
  '[Selected] Load Selected'
);

export const LoadSelectedSuccess = createAction(
  '[Selected] Load Selected Success',
  props<{ data: { selected: IProduct[] } }>()
);

export const LoadSelectedFailure = createAction(
  '[Selected] Load Selected Failure',
  props<{ error: any }>()
);
