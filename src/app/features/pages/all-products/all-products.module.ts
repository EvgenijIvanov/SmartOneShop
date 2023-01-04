import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsRoutingModule } from './all-products-routing.module';
import { AllProductsComponent } from './component/all-products.component';
import { StoreModule } from "@ngrx/store";
import { KeysFeatureStateEnum } from "../../../shared/enums/keys-feature-state.enum";
import { allProductPageReducer } from "../../../store/all-products/reducers/all-products.reducer";
import { EffectsModule } from '@ngrx/effects';
import { AllProductsEffects } from '../../../store/all-products/effects/all-products.effects';
import { FacadeAllProductsService } from "./service/facade-all-products.service";
import { SoTableModule } from "../../ui-modules/so-table/so-table.module";
import { SoFormImageModule } from "../../ui-modules/forms/so-form-image/so-form-image.module";
import { MessagesAllProductEffects } from '../../../store/messages/effects/messages-all-product.effects';
import { MessageService } from "primeng/api";

@NgModule({
  declarations: [
    AllProductsComponent
  ],
  imports: [
    CommonModule,
    AllProductsRoutingModule,
    StoreModule.forFeature(
      KeysFeatureStateEnum.AllProducts,
      allProductPageReducer
    ),
    EffectsModule.forFeature([
      AllProductsEffects,
      MessagesAllProductEffects
    ]),
    SoTableModule,
    SoFormImageModule,
  ],
  providers: [FacadeAllProductsService, MessageService]
})
export class AllProductsModule { }
