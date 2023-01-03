import { createAction, props } from '@ngrx/store';
import { IProduct } from "../../../shared/interfaces/all-product.interfaces";

export const AddProduct = createAction(
  '[AddProduct] Add AddProducts',
  props<{ product: IProduct }>()
);

export const AddProductSuccess = createAction(
  '[AddProduct] Add AddProducts Success',
  props<{ product: IProduct }>()
);

export const AddProductFailure = createAction(
  '[AddProduct] Add AddProducts Failure',
  props<{ error: any }>()
);
