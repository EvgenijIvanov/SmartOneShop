import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoFormImageComponent } from './component/so-form-image.component';
import { FileUploadModule } from "primeng/fileupload";

@NgModule({
  declarations: [
    SoFormImageComponent
  ],
  imports: [
    CommonModule,
    FileUploadModule
  ]
})
export class SoFormImageModule { }
