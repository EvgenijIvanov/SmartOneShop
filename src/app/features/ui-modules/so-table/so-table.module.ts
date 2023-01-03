import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoTableComponent } from './so-table.component';
import { FormFactoryModule } from "../forms/so-form-factory/form-factory.module";
import { FilterArrayModule } from "../../../shared/pipe/filter-array/filter-array.module";
import { SoTableBodyCellWrapperComponent } from './components/so-table-body-cell-wrapper/so-table-body-cell-wrapper.component';
import { TableBodyCellImageComponent } from './components/so-table-body-cell-views/so-table-body-cell-image/table-body-cell-image.component';
import { TableBodyCellActionComponent } from './components/so-table-body-cell-views/so-table-body-cell-action/table-body-cell-action.component';
import { TableBodyCellDefaultComponent } from './components/so-table-body-cell-views/so-table-body-cell-default/table-body-cell-default.component';

import { TableModule } from "primeng/table";
import { RippleModule } from "primeng/ripple";
import { ButtonModule } from "primeng/button";
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MenuModule } from "primeng/menu";





@NgModule({
  declarations: [
    SoTableComponent,
    SoTableBodyCellWrapperComponent,
    TableBodyCellImageComponent,
    TableBodyCellActionComponent,
    TableBodyCellDefaultComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    FilterArrayModule,
    FormFactoryModule,

    ButtonModule,
    RippleModule,
    OverlayPanelModule,
    MenuModule
  ],
  exports: [SoTableComponent]
})
export class SoTableModule { }
