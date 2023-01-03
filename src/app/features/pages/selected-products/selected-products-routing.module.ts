import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectedProductsComponent } from "./component/selected-products.component";

const routes: Routes = [{
  path: '',
  component: SelectedProductsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectedProductsRoutingModule { }
