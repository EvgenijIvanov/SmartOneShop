import { createAction, props } from '@ngrx/store';
import { IProduct } from "../../../shared/interfaces/all-product.interfaces";

export const AddSelects = createAction(
  '[AddSelect] Add AddSelect',
  props<{ product: IProduct }>()
);

export const AddSelectsSuccess = createAction(
  '[AddSelect] Add AddSelect Success',
  props<{ selected: IProduct }>()
);

export const AddSelectsFailure = createAction(
  '[AddSelect] Add AddSelect Failure',
  props<{ error: any }>()
);
