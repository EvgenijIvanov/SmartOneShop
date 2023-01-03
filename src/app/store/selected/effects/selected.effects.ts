import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoadSelected, LoadSelectedFailure, LoadSelectedSuccess } from "../actions/load-selected.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { IProduct } from "../../../shared/interfaces/all-product.interfaces";
import { AddSelects } from "../actions/add-select.actions";
import { AddProductFailure, AddProductSuccess } from "../../all-products/actions/add-product.actions";
import {DeleteSelects, DeleteSelectsFailure, DeleteSelectsSuccess} from "../actions/delete-select.actions";
import { SelectedService } from "../../../features/pages/selected-products/services/selected.service";

@Injectable()
export class SelectedEffects {

  constructor(private actions$: Actions, private selected: SelectedService) {}

  loadSelectedProducts$ = createEffect(() => this.actions$.pipe(
    ofType(LoadSelected),
    switchMap(() => this.selected.getSelectedProduct().pipe(
        map(({selected}) =>
          ({type: LoadSelectedSuccess.type, data: { selected } })),
        catchError((error) => of({ type: LoadSelectedFailure.type, error: error }))
      ))
  ))

  addSelectedProduct$ = createEffect(() => this.actions$.pipe(
    ofType(AddSelects),
    switchMap(({ product }) => this.selected.addToSelectedProduct(product).pipe(
      map((product: IProduct) => ({type: AddProductSuccess.type, product }) ),
      catchError((error) => of({ type: AddProductFailure.type, error }))
    ))
  ))

  deleteSelectedProduct$ = createEffect(() => this.actions$.pipe(
    ofType(DeleteSelects),
    switchMap(({ product }) => this.selected.deleteToSelectedProduct(product).pipe(
      map((id: number) => ({ type: DeleteSelectsSuccess.type, id })),
      catchError((error) => of({ type: DeleteSelectsFailure.type, error }))
    ))
  ))
}
