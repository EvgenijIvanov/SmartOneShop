import { createAction, props } from '@ngrx/store';
import { Message } from "primeng/api";
import {createEffect} from "@ngrx/effects";

export const AddMessage = createAction(
  '[Messages] Add Message',
  props<{ message: Message }>()
);

export const DeleteMessage = createAction(
  '[Messages] Delete Message',
  props<{ id: number }>()
)





