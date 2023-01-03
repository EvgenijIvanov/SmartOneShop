import { createReducer, on } from '@ngrx/store';
import { initialAllProductsDataState } from "../../state";
import { IAllProductsDataPage } from "../../../shared/interfaces/all-product-data-page.interfaces";
import { IProduct } from "../../../shared/interfaces/all-product.interfaces";
import {LoadAllProductsPage, LoadedAllProductsSuccess} from "../actions/load-products.actions";
import { AddProductSuccess } from "../actions/add-product.actions";
import { DeleteProductSuccess } from "../actions/delete-product.actions";
import { UpdateProductSuccess } from "../actions/update-product.actions";
import {
  SetFirstTableAllProductsSuccess,
  SetRowsTableAllProductsSuccess,
  SetSortTableAllProductsSuccess
} from "../actions/pagination-all-products-table.actions";

export const allProductPageReducer = createReducer(
  initialAllProductsDataState,
  on(LoadAllProductsPage, (state: IAllProductsDataPage): IAllProductsDataPage => ({
    ...state,
    isLoading: true
  })),
  on(LoadedAllProductsSuccess, (state: IAllProductsDataPage, { data }): IAllProductsDataPage => ({
    ...data,
    isLoading: false
  })),
  on(AddProductSuccess, (state: IAllProductsDataPage, { product }): IAllProductsDataPage => ({
    ...state,
    products: [ ...state.products, product ]
  })
  ),
  on(DeleteProductSuccess, (state: IAllProductsDataPage, { product }): IAllProductsDataPage => ({
    ...state,
    products: state.products.filter((item: IProduct) => item.id !== product.id)
  })),
  on(UpdateProductSuccess, (state: IAllProductsDataPage, { product }): IAllProductsDataPage => {
    const currentElem: any = state.products.find((item: IProduct) => item.id === product.id);
    const updateElem: any = { ...currentElem, ...product };
    return ({
      ...state,
      products: state.products.map((elem: IProduct) => (updateElem && elem.id === updateElem.id) ? updateElem : elem)
    })
    }
  ),
  on(SetFirstTableAllProductsSuccess, (state: IAllProductsDataPage, { first }): IAllProductsDataPage => ({
    ...state,
    skip: first
  })),
  on(SetRowsTableAllProductsSuccess, (state: IAllProductsDataPage, { rows }): IAllProductsDataPage => ({
    ...state,
    limit: rows
  })),
  on(SetSortTableAllProductsSuccess, (state: IAllProductsDataPage, { sort }): IAllProductsDataPage => ({
    ...state,
    ordering: sort
  }))
);
