import { isDevMode, NgModule } from '@angular/core';
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";
import { SelectedPageReducer } from "./selected/reducers/selected.reducer";
import { KeysFeatureStateEnum } from "../shared/enums/keys-feature-state.enum";
import { SelectedEffects } from "./selected/effects/selected.effects";
import { reducerMessages } from "./messages/reducers/messages.reducer";
import {MessagesAllProductEffects} from "./messages/effects/messages-all-product.effects";

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({
      [KeysFeatureStateEnum.Selected]: SelectedPageReducer,
      [KeysFeatureStateEnum.Messages]: reducerMessages
    }),
    EffectsModule.forRoot([SelectedEffects, MessagesAllProductEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    })
  ]
})
export class AppStoreModule { }
