import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { ISoTableConfig } from "../../so-table/interfaces/so-table-config.interfaces";
import {FormControl, FormGroup, Validator, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'so-form-factory',
  templateUrl: './form-factory.component.html',
  styleUrls: ['./form-factory.component.scss']
})
export class FormFactoryComponent implements OnInit {
  public rowData: Record<string, unknown> = {};
  public configData: ISoTableConfig[] = [];
  public form: FormGroup = new FormGroup<{}>({});

  public filterForm = (e: ISoTableConfig) => e.editableField;
  public checkRequired = (item: (Validator | ValidatorFn)) => item === Validators.required;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
  }

  ngOnInit(): void {
    this.initConfigs(this.config?.data);
    this.createFormControls();
  }

  public createFormControls(): void {
    this.configData.forEach((item: ISoTableConfig) => {
      if (item.editableField) {
        const validators: any[] = item?.validators ?? [];
        this.form.addControl(item.field, new FormControl(this.rowData[item.field], validators ))
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
