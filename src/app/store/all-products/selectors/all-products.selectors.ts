import { createSelector } from '@ngrx/store';
import { AppState } from "../../state";
import { KeysFeatureStateEnum } from "../../../shared/enums/keys-feature-state.enum";
import { IAllProductsDataPage } from "../../../shared/interfaces/all-product-data-page.interfaces";
import { IProduct } from "../../../shared/interfaces/all-product.interfaces";
import { IAllProductDataPageRequestParams } from "../../../shared/interfaces/all-product-data-page-request-params.interfaces";

const selectAllProductsPage = (state: AppState) => state[KeysFeatureStateEnum.AllProducts];

export const selectAllDataPage = createSelector(
  selectAllProductsPage,
  (state: IAllProductsDataPage): IAllProductsDataPage => state
);

export const selectProducts = createSelector(
  selectAllProductsPage,
  (state: IAllProductsDataPage): IProduct[] => state.products
);

export const selectRequestParams = createSelector(
  selectAllProductsPage,
  ({ limit, ordering, skip }): IAllProductDataPageRequestParams => ({ limit, ordering, skip })
)

export const selectPagination = createSelector(
  selectAllProductsPage,
  ({ limit, skip }) => ({ limit, skip })
)
