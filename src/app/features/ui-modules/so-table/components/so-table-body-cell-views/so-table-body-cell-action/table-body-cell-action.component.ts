import {Component, Type} from '@angular/core';
import { SoTableCellAbstract } from "../../../../../../core/abstracts/so-table-cell.abstract";
import { MenuItem } from "primeng/api";
import { FormFactoryComponent } from "../../../../forms/so-form-factory/form-factory.component";
import { take } from "rxjs";
import { ModalService } from "../../../../../../core/services/modal.service";
import {SoFormImageComponent} from "../../../../forms/so-form-image/component/so-form-image.component";

@Component({
  selector: 'so-table-body-cell-action',
  templateUrl: './table-body-cell-action.component.html',
  styleUrls: ['./table-body-cell-action.component.scss']
})
export class TableBodyCellActionComponent extends SoTableCellAbstract {
  public items: (MenuItem & { type: string })[] = [
    { label: 'Edit', icon: 'pi pi-fw pi-file-edit', type: 'edit', command: this.clickMenuItem.bind(this) },
    { label: 'Delete', icon: 'pi pi-fw pi-times', type: 'remove', command: this.clickMenuItem.bind(this) },
    { label: 'Edit image', icon: 'pi pi-fw pi-image', type: 'image', command: this.clickMenuItem.bind(this) }
  ];

  public actionMatrix: Record<string, Function> = {
    ['edit']: this.edit,
    ['remove']: this.delete,
    ['image']: this.image
  }

  constructor(private modal: ModalService) {
    super();
  }

  public clickMenuItem(e: { originalEvent: Event, item: MenuItem & { type: string } }): void {
    if (e.item?.type) {
      this.actionMatrix[e.item.type].call(this, e.item);
    }
  }

  public edit(component: Type<unknown>, title: string, data: unknown): void {
    this.modal.open(component, 'Edit product', { row: this.rowData, config: this.rowConfigs })
      .onClose.pipe(take(1))
      .subscribe((row: Record<string, unknown>) => this.editRow(row));
  }

  private editRow(row: Record<string, unknown>) {
    const newRowData: Record<string, unknown> = { ...this.rowData, ...row };
    this.updateRow(newRowData);
  }

  public delete(): void {
    this.modal.confirm(
      'Delete product',
      'Are you sure you want to delete the selected product?',
      this.rowData,
      this.deleteRow.bind(this)
      )
  }

  public image(): void {
    this.modal.open(SoFormImageComponent, 'Edit image', { row: this.rowData })
      .onClose.pipe(take(1))
      .subscribe((row: any) => this.editRow(row));
  }
}
