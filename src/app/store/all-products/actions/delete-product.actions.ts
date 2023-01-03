import { createAction, props } from '@ngrx/store';
import { IProduct } from "../../../shared/interfaces/all-product.interfaces";

export const DeleteProduct = createAction(
  '[DeleteProduct] Delete DeleteProducts',
  props<{ product: IProduct }>()
);

export const DeleteProductSuccess = createAction(
  '[DeleteProduct] Delete DeleteProducts Success',
  props<{ product: IProduct }>()
);

export const DeleteProductFailure = createAction(
  '[DeleteProduct] Delete DeleteProducts Failure',
  props<{ error: IProduct }>()
);
