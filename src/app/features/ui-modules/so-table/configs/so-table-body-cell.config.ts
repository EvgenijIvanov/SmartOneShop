import { TableBodyCellTypeEnum } from "../enums/table-body-cell-type.enum";
import { TableBodyCellActionComponent } from "../components/so-table-body-cell-views/so-table-body-cell-action/table-body-cell-action.component";
import { TableBodyCellImageComponent } from "../components/so-table-body-cell-views/so-table-body-cell-image/table-body-cell-image.component";
import { TableBodyCellDefaultComponent } from "../components/so-table-body-cell-views/so-table-body-cell-default/table-body-cell-default.component";
import { Type } from "@angular/core";
import { SoTableCellAbstract } from "../../../../core/abstracts/so-table-cell.abstract";

export const cellComponentMatrix: Record<TableBodyCellTypeEnum, Type<SoTableCellAbstract>> = {
  [TableBodyCellTypeEnum.ACTIONS]: TableBodyCellActionComponent,
  [TableBodyCellTypeEnum.IMAGE]: TableBodyCellImageComponent,
  [TableBodyCellTypeEnum.DEFAULT]: TableBodyCellDefaultComponent
}
