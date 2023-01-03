import { createSelector } from '@ngrx/store';
import { KeysFeatureStateEnum } from "../../../shared/enums/keys-feature-state.enum";
import { IProduct } from "../../../shared/interfaces/all-product.interfaces";
import { ISelectedDataPage } from "../../../shared/interfaces/selected-page.interfaces";
import { AppState } from "../../state";

const selectSelectedPage = (state: AppState) => state[KeysFeatureStateEnum.Selected];

export const selectAllDataPage = createSelector(
  selectSelectedPage,
  (state: ISelectedDataPage): ISelectedDataPage => state
);

export const selectSelectedProducts = createSelector(
  selectSelectedPage,
  (state: ISelectedDataPage): IProduct[] => state.selectedProducts
)

