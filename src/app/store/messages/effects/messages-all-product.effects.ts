import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AddProductFailure, AddProductSuccess } from "../../all-products/actions/add-product.actions";
import { delay, map } from "rxjs";
import { AddMessage, DeleteMessage } from "../actions/messages.actions";
import { DeleteProductFailure, DeleteProductSuccess } from "../../all-products/actions/delete-product.actions";
import { UpdateProductFailure, UpdateProductSuccess } from "../../all-products/actions/update-product.actions";
import { AddSelectsSuccess } from "../../selected/actions/add-select.actions";
import { DeleteSelectsSuccess } from "../../selected/actions/delete-select.actions";
import { generateProductMessagesSuccess } from "../../../core/helpers/generate-messages.helper";

@Injectable()
export class MessagesAllProductEffects {

  constructor(private actions$: Actions) {}

  addProductMessage$ = createEffect(() => this.actions$.pipe(
      ofType(AddProductSuccess),
      map(({ product }) =>
         ({ type: AddMessage.type, message: generateProductMessagesSuccess(product.id, product.title, 'Add')}))))

  deleteProductMessage$ = createEffect(() => this.actions$.pipe(
      ofType(DeleteProductSuccess),
      map(({ product }) =>
         ({ type: AddMessage.type, message: generateProductMessagesSuccess(product.id, product.title, 'Delete')}))))

  updateProductMessage$ = createEffect(() => this.actions$.pipe(
      ofType(UpdateProductSuccess),
      map(({ product }) =>
         ({ type: AddMessage.type, message: generateProductMessagesSuccess(product.id, product.title, 'Update')}))))

  selectedProductMessage$ = createEffect(() => this.actions$.pipe(
      ofType(AddSelectsSuccess),
      map(({ selected }) =>
         ({ type: AddMessage.type, message: generateProductMessagesSuccess(selected.id, selected.title, 'Add1', ' to selected product')}))))

  unSelectedProductMessage$ = createEffect(() => this.actions$.pipe(
      ofType(DeleteSelectsSuccess),
      map(({ id }) =>
         ({ type: AddMessage.type, message: generateProductMessagesSuccess(id, 'Delete product by selected products')}))))

  failureMessage$ = createEffect(() => this.actions$.pipe(
      ofType(AddProductFailure, DeleteProductFailure, UpdateProductFailure),
      map(({ error }) =>
         ({ type: AddMessage.type, message: generateProductMessagesSuccess(error.id, 'Crush action!')}))))

  deleteMessageProduct$ = createEffect(() => this.actions$.pipe(
    ofType(AddMessage),
    delay(3000),
    map(({ message }) => ({ type: DeleteMessage.type, id: message.id }))))
}
