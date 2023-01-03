import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'so-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  public message: string = '';
  public data: unknown = {};

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
  }

  ngOnInit() {
    this.initConfig();
  }

  public initConfig() {
    const { message, data } = this.config.data
    this.message = message;
    this.data = data;
  }

  public confirm(): void {
    this.ref.close(this.data);
  }
  public cancel(): void {
    this.ref.close();
  }


}
