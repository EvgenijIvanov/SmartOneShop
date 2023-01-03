import { createAction, props } from '@ngrx/store';
import { IProduct } from "../../../shared/interfaces/all-product.interfaces";

export const DeleteSelects = createAction(
  '[DeleteSelect] Delete Delete Select',
  props<{ product: IProduct }>()
);

export const DeleteSelectsSuccess = createAction(
  '[DeleteSelect] Delete Delete Select Success',
  props<{ id: number }>()
);

export const DeleteSelectsFailure = createAction(
  '[DeleteSelect] Delete Delete Select Failure',
  props<{ error: any }>()
);
