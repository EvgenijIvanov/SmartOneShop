import { ISoTableConfig } from "../../../ui-modules/so-table/interfaces/so-table-config.interfaces";
import { TableBodyCellTypeEnum } from "../../../ui-modules/so-table/enums/table-body-cell-type.enum";
import { Validators } from "@angular/forms";

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
    isSort: true,
    editableField: true,
    validators: [Validators.required],
    gridWidth: 2,
    typeField: 'string',
  },
  {
    field: 'brand',
    label: 'Brand',
    isSort: true,
    editableField: true,
    validators: [Validators.required],
    gridWidth: 2,
    typeField: 'string',
  },
  {
    field: 'price',
    label: 'Price',
    isSort: true,
    editableField: true,
    validators: [Validators.required],
    gridWidth: 2,
    typeField: 'number',
  },
  {
    field: 'category',
    label: 'Category',
    isSort: true,
    editableField: true,
    validators: [Validators.required],
    gridWidth: 2,
    typeField: 'string',
  },
  {
    field: 'description',
    label: 'Description',
    isSort: true,
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
