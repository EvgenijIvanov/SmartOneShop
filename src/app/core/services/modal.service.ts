import { Injectable, Type } from '@angular/core';
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { take } from "rxjs";
import { ConfirmDialogComponent } from "../ui-modules/confirm-dialog/confirm-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: DialogService) { }

  public open(component: Type<unknown>, title: string = '', data: unknown = {}, width?: string): DynamicDialogRef {
    return this.dialog
      .open(component, {
        data: data,
        header: title,
        width: width || '60%'
      })
  }

  public confirm(title: string, message: string, data: unknown, callback: Function): void {
    this.dialog
      .open(ConfirmDialogComponent, {
        header: title,
        data: { message, data },
        width: '40%'
      })
      .onClose.pipe(take(1))
        .subscribe((data: unknown) => data && callback(data));
  }

}
