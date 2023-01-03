import { Injectable } from '@angular/core';
import { IProduct } from "../../../shared/interfaces/all-product.interfaces";
import { ApiService } from "../../../core/services/api.service";
import { IAllProductDataPageRequestParams } from "../../../shared/interfaces/all-product-data-page-request-params.interfaces";
import { IAllProductsDataPage } from "../../../shared/interfaces/all-product-data-page.interfaces";
import { Action, Store } from "@ngrx/store";
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { LoadAllProductsPage, LoadedAllProductsFailure, LoadedAllProductsSuccess } from "../actions/load-products.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { AddProduct, AddProductFailure, AddProductSuccess } from "../actions/add-product.actions";
import { DeleteProduct, DeleteProductFailure, DeleteProductSuccess } from "../actions/delete-product.actions";
import { UpdateProductFailure, UpdateProducts, UpdateProductSuccess } from "../actions/update-product.actions";
import {
  SetFirstTableAllProductsSuccess,
  SetPaginationTableAllProducts,
  SetRowsTableAllProductsSuccess,
  SetSortTableAllProductsSuccess
} from "../actions/pagination-all-products-table.actions";
import { selectRequestParams } from "../selectors/all-products.selectors";
import { sortParamGenerate } from "../../../features/ui-modules/so-table/helpers/sortParamGenerate";

@Injectable()
export class AllProductsEffects {
  constructor(private actions$: Actions, private api: ApiService, private store: Store) {}

  loadAllProductPage$ = createEffect(() => this.actions$.pipe(
    ofType(LoadAllProductsPage),
    // @ts-ignore
    concatLatestFrom(() => this.store.select(selectRequestParams)),
    switchMap(([ , params]: [Action, IAllProductDataPageRequestParams]) => this.api.getAllProducts(params).pipe(
      map((data: IAllProductsDataPage) => ({ type: LoadedAllProductsSuccess.type, data })),
      catchError((err) => of({ type: LoadedAllProductsFailure.type, error: err }))
    ))
  ))

  addProductPage$ = createEffect(() => this.actions$.pipe(
    ofType(AddProduct),
    switchMap(({ product }) => this.api.addProduct(product).pipe(
        map(({data}) => ({ type: AddProductSuccess.type, product: { ...data } })),
        catchError((err) => of({ type: AddProductFailure.type, error: err }))
      ))
  ))
  editProductPage$ = createEffect(() => this.actions$.pipe(
    ofType(UpdateProducts),
    switchMap(({ product }) => this.api.updateProduct(product).pipe(
      map(({ product }) => ({ type: UpdateProductSuccess.type, product })),
      catchError((err) => of({ type: UpdateProductFailure.type, error: err}))
    ))
  ))
  deleteProductPage$ = createEffect(() => this.actions$.pipe(
    ofType(DeleteProduct),
    switchMap(({ product }) => this.api.deleteProduct(product).pipe(
      map((product: IProduct | {}) => ({ type: DeleteProductSuccess.type, product })),
      catchError((err) => of({ type: DeleteProductFailure.type, error: err }))
    ) )
  ))

  paginationTableFirst$ = createEffect(() => this.actions$.pipe(
    ofType(SetPaginationTableAllProducts),
    switchMap(({ first, rows, sortField, sortOrder }) => [
      ({ type: SetFirstTableAllProductsSuccess.type, first }),
      ({ type: SetRowsTableAllProductsSuccess.type, rows }),
      ({ type: SetSortTableAllProductsSuccess.type, sort: sortParamGenerate(sortOrder, sortField) }),
      ({ type: LoadAllProductsPage.type })
    ])
  ))
}
