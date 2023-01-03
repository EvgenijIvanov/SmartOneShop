import { createAction, props } from '@ngrx/store';
import { IProduct } from "../../../shared/interfaces/all-product.interfaces";

export const UpdateProducts = createAction(
  '[UpdateProduct] Update UpdateProducts',
  props<{ product: IProduct }>()
);

export const UpdateProductSuccess = createAction(
  '[UpdateProduct] Update UpdateProducts Success',
  props<{ product: IProduct }>()
);

export const UpdateProductFailure = createAction(
  '[UpdateProduct] Update UpdateProducts Failure',
  props<{ error: any }>()
);
