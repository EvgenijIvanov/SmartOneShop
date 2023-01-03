import { createReducer, on } from '@ngrx/store';
import { IProduct } from "../../../shared/interfaces/all-product.interfaces";
import { initialSelectedDataState } from "../../state";
import { LoadSelectedSuccess} from "../actions/load-selected.actions";
import { ISelectedDataPage } from "../../../shared/interfaces/selected-page.interfaces";
import { AddSelectsSuccess } from "../actions/add-select.actions";
import { DeleteSelectsSuccess } from "../actions/delete-select.actions";

export const SelectedPageReducer = createReducer(
  initialSelectedDataState,
  on(LoadSelectedSuccess, (state: ISelectedDataPage, { data }): ISelectedDataPage => ({
    ...state,
    selectedProducts: data.selected
  })),
  on(AddSelectsSuccess, (state: ISelectedDataPage, { selected }): ISelectedDataPage => ({
    ...state,
    selectedProducts: [ ...state.selectedProducts, selected ]
  })
  ),
  on(DeleteSelectsSuccess, (state: ISelectedDataPage, { id }): ISelectedDataPage => ({
    ...state,
    selectedProducts: state.selectedProducts.filter((item: IProduct) => item.id !== id)
  }))
);
