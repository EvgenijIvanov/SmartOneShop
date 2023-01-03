import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { ISoTableConfig } from "../../so-table/interfaces/so-table-config.interfaces";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'so-form-factory',
  templateUrl: './form-factory.component.html',
  styleUrls: ['./form-factory.component.scss']
})
export class FormFactoryComponent implements OnInit {
  public rowData: Record<string, unknown> = {};
  public configData: ISoTableConfig[] = [];
  public form: FormGroup = new FormGroup<any>({});

  public filterForm = (e: ISoTableConfig) => e.editableField;
  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
  }

  ngOnInit() {
    this.initConfigs(this.config?.data);
    this.createFormControls();
  }

  public createFormControls() {
    this.configData.forEach((item: ISoTableConfig) => {
      if (item.editableField) {
        this.form.addControl(item.field, new FormControl(this.rowData[item.field], Validators.required))
      }
    })
  }

  public initConfigs(data: { row: Record<string, unknown> , config: ISoTableConfig[] }): void {
    if (data) {
      const { row, config } = data;
      this.rowData = row;
      this.configData = config;
    }
  }

  public submit(): void {
    this.ref.close(this.form.value);
  }




}
