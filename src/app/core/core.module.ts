import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { LayoutModule } from "./ui-modules/layout/layout.module";
import { SidebarMenuModule } from "./ui-modules/sidebar-menu/sidebar-menu.module";
import { HeaderModule } from "./ui-modules/header/header.module";
import { DialogService } from "primeng/dynamicdialog";
import { ConfirmationService } from "primeng/api";
import { ConfirmDialogModule } from "./ui-modules/confirm-dialog/confirm-dialog.module";

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    LayoutModule,
    SidebarMenuModule,
    HeaderModule,
    ConfirmDialogModule
  ],
  exports: [
    LayoutModule,
    SidebarMenuModule,
    HeaderModule,
    ConfirmDialogModule
  ],
  providers: [
    DialogService,
    ConfirmationService
  ]
})
export class CoreModule { }
