import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectedProductsRoutingModule } from './selected-products-routing.module';
import { SelectedProductsComponent } from './component/selected-products.component';
import { SoTableModule } from "../../ui-modules/so-table/so-table.module";
import {SelectedProductsFacadeService} from "./services/seleted-products-facade.service";


@NgModule({
  declarations: [
    SelectedProductsComponent
  ],
    imports: [
        CommonModule,
        SelectedProductsRoutingModule,
        SoTableModule
    ],
  providers: [SelectedProductsFacadeService]
})
export class SelectedProductsModule { }
