import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFactoryComponent } from './form-factory.component';
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";



@NgModule({
  declarations: [
    FormFactoryComponent
  ],
  imports: [
    CommonModule,
    InputNumberModule,
    InputTextareaModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  exports: [FormFactoryComponent]
})
export class FormFactoryModule { }
