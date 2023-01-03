import { Component } from '@angular/core';
import { SoTableCellAbstract } from "../../../../../../core/abstracts/so-table-cell.abstract";

@Component({
  selector: 'so-table-body-cell-image',
  templateUrl: './table-body-cell-image.component.html',
  styleUrls: ['./table-body-cell-image.component.scss']
})
export class TableBodyCellImageComponent extends SoTableCellAbstract {
  public ENDPOINT: string = 'https://backend-for-applicants.smartoneclub.com'
}
