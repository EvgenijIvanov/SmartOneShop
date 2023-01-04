import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISoTableConfig } from "./interfaces/so-table-config.interfaces";
import { FormFactoryComponent } from "../forms/so-form-factory/form-factory.component";
import { take } from "rxjs";
import { ModalService } from "../../../core/services/modal.service";
import { IPaginationSortTable } from "../../../shared/interfaces/pagination-sort-table.interfaces";

@Component({
  selector: 'so-table',
  templateUrl: './so-table.component.html',
  styleUrls: ['./so-table.component.scss']
})
export class SoTableComponent<D> {
  @Input() configs: ISoTableConfig[] | undefined;
  @Input() data: D[] | undefined;
  @Input() total: number = 0;
  @Input() skip: number = 0;
  @Input() limit: number = 0;
  @Input() loading: boolean = true;
  @Input() selection: D[] | null = [];
  @Input() paginator: boolean = false;
  @Input() lazy: boolean = false;
  @Input() selectAll: boolean = false;
  @Input() actionPanelVisible: boolean = false;

  @Output() onChangeTable: EventEmitter<Record<string, unknown>> = new EventEmitter<Record<string, unknown>>();
  // @ts-ignore
  @Output() onChangeSetting: EventEmitter<IPaginationSortTable> = new EventEmitter<IPaginationSortTable>();
  @Output() onSelected: EventEmitter<D> = new EventEmitter<D>();
  @Output() onDeselected: EventEmitter<D> = new EventEmitter<D>();

  constructor(private modal: ModalService) {
  }

  public updateRowTable(e: Record<string, unknown>): void {
    this.onChangeTable.emit({ update: e });
  }

  public deleteRowTable(e: Record<string, unknown>): void {
    this.onChangeTable.emit({ delete: e });
  }

  public addRowTable(e: Record<string, unknown>) {
    this.onChangeTable.emit({ add: e });
  }

  public actionAdd(): void {
      this.modal.open(FormFactoryComponent, 'Add product', { row: [], config: this.configs })
        .onClose.pipe(take(1))
        .subscribe((row: Record<string, unknown>) => this.addRowTable(row));
  }

  public lazyLoadData(event: Partial<{ first: number, rows: number, sortField: string, sortOrder: number }>): void {
    const { first, rows, sortField, sortOrder } = event;
    // @ts-ignore
    this.onChangeSetting.emit({ first, rows, sortField, sortOrder })
  }

  selectionChange(item: D, checked: boolean) {
    checked ? this.onSelected.emit(item) : this.onDeselected.emit(item)
  }

}
