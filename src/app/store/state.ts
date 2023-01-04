import { IAllProductsDataPage } from "../shared/interfaces/all-product-data-page.interfaces";
import { KeysFeatureStateEnum } from "../shared/enums/keys-feature-state.enum";
import { ISelectedDataPage } from "../shared/interfaces/selected-page.interfaces";
import { IStateMessages } from "../shared/interfaces/state-messages.interface";

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

export const initialMessagesAppState: IStateMessages = {
  messages: []
}

export interface AppState {
  [KeysFeatureStateEnum.AllProducts]: IAllProductsDataPage;
  [KeysFeatureStateEnum.Selected]: ISelectedDataPage,
  [KeysFeatureStateEnum.Messages]: IStateMessages;
}
