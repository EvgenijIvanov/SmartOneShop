import { ISoTableConfig } from "../../../ui-modules/so-table/interfaces/so-table-config.interfaces";
import { TableBodyCellTypeEnum } from "../../../ui-modules/so-table/enums/table-body-cell-type.enum";

export const ALL_PRODUCTS_TABLE_CONFIG: ISoTableConfig[] = [
  {
    field: 'id',
    label: '',
    typeField: 'number',
    hide: true
  },
  {
    field: 'title',
    label: 'Title',
    editableField: true,
    gridWidth: 2,
    typeField: 'string',
  },
  {
    field: 'brand',
    label: 'Brand',
    editableField: true,
    gridWidth: 2,
    typeField: 'string',
  },
  {
    field: 'price',
    label: 'Price',
    editableField: true,
    gridWidth: 2,
    typeField: 'number',
  },
  {
    field: 'category',
    label: 'Category',
    editableField: true,
    gridWidth: 2,
    typeField: 'string',
  },
  {
    field: 'description',
    label: 'Description',
    editableField: true,
    gridWidth: 1,
    typeField: 'textArea',
  },
  {
    field: 'image',
    label: 'Image',
    width: '51px',
    typeField: 'image',
    cellType: TableBodyCellTypeEnum.IMAGE
  },
  {
    field: 'actions',
    label: '',
    width: '30px',
    typeField: 'actions',
    cellType: TableBodyCellTypeEnum.ACTIONS,
  }
]
