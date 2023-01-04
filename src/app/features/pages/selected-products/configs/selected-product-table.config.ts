import { ISoTableConfig } from "../../../ui-modules/so-table/interfaces/so-table-config.interfaces";
import { TableBodyCellTypeEnum } from "../../../ui-modules/so-table/enums/table-body-cell-type.enum";

export const SELECTED_PRODUCT_TABLE_CONFIG: ISoTableConfig[] = [
  {
    field: 'id',
    label: '',
    typeField: 'number',
    hide: true
  },
  {
    field: 'title',
    label: 'Title',
    isSort: true,
    typeField: 'string',
  },
  {
    field: 'brand',
    label: 'Brand',
    isSort: true,
    typeField: 'string',
  },
  {
    field: 'price',
    label: 'Price',
    isSort: true,
    typeField: 'number',
  },
  {
    field: 'category',
    label: 'Category',
    isSort: true,
    typeField: 'string',
  },
  {
    field: 'description',
    label: 'Description',
    isSort: true,
    typeField: 'textArea',
  },
  {
    field: 'image',
    label: 'Image',
    width: '51px',
    typeField: 'image',
    cellType: TableBodyCellTypeEnum.IMAGE
  }
]
