import { TableBodyCellTypeEnum } from "../enums/table-body-cell-type.enum";

export interface ISoTableConfig {
  field: string;
  label: string;
  typeField: string;
  hide?: boolean;
  width?: string;
  cellType?: TableBodyCellTypeEnum;
  editableField?: boolean;
  gridWidth?: number

}
