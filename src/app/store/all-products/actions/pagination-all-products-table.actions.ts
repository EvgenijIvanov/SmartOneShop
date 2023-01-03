import { createAction, props } from '@ngrx/store';

export const SetPaginationTableAllProducts = createAction(
  '[PaginationTable All Products Page] Pagination Table First',
  props<{ first: number, rows: number, sortField: string, sortOrder: number }>()
);

export const SetFirstTableAllProductsSuccess = createAction(
  '[PaginationTable All Products Page] Pagination Table First Success',
  props<{ first: number }>()
);

export const SetRowsTableAllProductsSuccess = createAction(
  '[PaginationTable All Products Page] Pagination Table Rows Success',
  props<{ rows: number }>()
);;

export const SetSortTableAllProductsSuccess = createAction(
  '[PaginationTable All Products Page] Pagination Table Sort Success',
  props<{ sort: string }>()
);

