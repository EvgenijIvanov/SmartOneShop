import { TableBodyCellTypeEnum } from "../enums/table-body-cell-type.enum";
import { Validator, ValidatorFn } from "@angular/forms";

export interface ISoTableConfig {
  field: string;
  label: string;
  typeField: string;
  hide?: boolean;
  isSort?: boolean
  validators?: (Validator | ValidatorFn)[]
  width?: string;
  cellType?: TableBodyCellTypeEnum;
  editableField?: boolean;
  gridWidth?: number

}
