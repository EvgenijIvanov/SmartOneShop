import {Component, Input} from "@angular/core";
import { ISoTableConfig } from "../../features/ui-modules/so-table/interfaces/so-table-config.interfaces";

export abstract class SoTableCellAbstract {
  public rowData: Record<string, unknown> | undefined;
  public configCol: ISoTableConfig | undefined;
  public rowConfigs: ISoTableConfig[] | undefined;

  public updateRow(row: Record<string, unknown>) {};
  public deleteRow(row: Record<string, unknown>) {};
}
