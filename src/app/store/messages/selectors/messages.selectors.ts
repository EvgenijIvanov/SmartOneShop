import { createSelector } from '@ngrx/store';
import { KeysFeatureStateEnum } from "../../../shared/enums/keys-feature-state.enum";
import { IStateMessages } from "../../../shared/interfaces/state-messages.interface";
import { AppState } from "../../state";

const messageStateSelect = (state: AppState) => state[KeysFeatureStateEnum.Messages];

export const messagesSelect = createSelector(
  messageStateSelect,
  (state: IStateMessages) => state.messages
);
