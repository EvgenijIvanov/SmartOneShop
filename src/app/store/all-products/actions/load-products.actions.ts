import { createAction, props } from '@ngrx/store';
import { IAllProductsDataPage } from "../../../shared/interfaces/all-product-data-page.interfaces";

export const LoadAllProductsPage = createAction(
  '[AllProducts] Load All Products'
);

export const LoadedAllProductsSuccess = createAction(
  '[AllProducts] Loaded All Products Data SoPageAbstract Success',
  props<{ data: IAllProductsDataPage }>()
);

export const LoadedAllProductsFailure = createAction(
  '[AllProducts] Loaded All Products Data SoPageAbstract Failure',
  props<{ error: any }>()
);
