import { createReducer, on } from '@ngrx/store';
import { initialMessagesAppState } from "../../state";
import {AddMessage, DeleteMessage} from "../actions/messages.actions";
import { IStateMessages } from "../../../shared/interfaces/state-messages.interface";
import {Message} from "primeng/api";

export const reducerMessages = createReducer(
  initialMessagesAppState,
  on(AddMessage, (state: IStateMessages, { message }): IStateMessages => ({
    ...state,
    messages: [ ...state.messages, message]
  })),
  on(DeleteMessage, (state: IStateMessages, { id }) => {
    return ({
      ...state,
      messages: state.messages.filter((item: Message) => item.id !== id)
    })
  })
);
