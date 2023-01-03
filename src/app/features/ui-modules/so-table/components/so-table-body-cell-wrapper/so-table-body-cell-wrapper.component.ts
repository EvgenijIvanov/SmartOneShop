import {
  Component,
  ComponentRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { cellComponentMatrix } from "../../configs/so-table-body-cell.config";
import { TableBodyCellTypeEnum } from "../../enums/table-body-cell-type.enum";
import { SoTableCellAbstract } from "../../../../../core/abstracts/so-table-cell.abstract";
import { ISoTableConfig } from "../../interfaces/so-table-config.interfaces";

@Component({
  selector: 'so-table-bode-cell-wrapper',
  templateUrl: './so-table-body-cell-wrapper.component.html',
  styleUrls: ['./so-table-body-cell-wrapper.component.scss']
})
export class SoTableBodyCellWrapperComponent implements OnInit {
  @ViewChild("cellComponentContainer", { read: ViewContainerRef }) cellComponentContainer: ViewContainerRef | undefined;
  @Input() rowData: Record<string, unknown> | undefined;
  @Input() configCol: ISoTableConfig | undefined;
  @Input() rowConfigs: ISoTableConfig[] | undefined;

  @Output() updateRowTable: EventEmitter<Record<string, unknown>> = new EventEmitter();
  @Output() deleteRowTable: EventEmitter<Record<string, unknown>> = new EventEmitter();

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  public ngOnInit(): void {
    this.initCellComponent();
  }

  private initCellComponent(): void {
    const type: TableBodyCellTypeEnum = this.configCol?.cellType ?? TableBodyCellTypeEnum.DEFAULT;
    const element: Type<SoTableCellAbstract> = cellComponentMatrix[type];
    this.setComponent(element)
  }

  private setComponent(element: Type<SoTableCellAbstract>): void {
    const component: ComponentRef<Partial<SoTableCellAbstract>> = this.viewContainerRef.createComponent(element);

    component.instance.rowData = this.rowData;
    component.instance.configCol = this.configCol;
    component.instance.rowConfigs = this.rowConfigs;

    component.instance.updateRow = (row: Record<string, unknown>) => this.updateRowTable.emit(row);
    component.instance.deleteRow = (row: Record<string, unknown>) => this.deleteRowTable.emit(row);
  }

}

