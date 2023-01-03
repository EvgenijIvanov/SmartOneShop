import { IAllProductsDataPage } from "../shared/interfaces/all-product-data-page.interfaces";
import { KeysFeatureStateEnum } from "../shared/enums/keys-feature-state.enum";
import { ISelectedDataPage } from "../shared/interfaces/selected-page.interfaces";

export const initialAllProductsDataState: IAllProductsDataPage = {
  limit: 5,
  ordering: 'id',
  products: [],
  skip: 0,
  total: 0,
  isLoading: true
};

export const initialSelectedDataState: ISelectedDataPage = {
  selectedProducts: []
}

export interface AppState {
  [KeysFeatureStateEnum.AllProducts]: IAllProductsDataPage;
  [KeysFeatureStateEnum.Selected]: ISelectedDataPage
}
