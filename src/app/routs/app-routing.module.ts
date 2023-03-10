import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  },
  {
    path: 'all',
    loadChildren: () => (import('../features/pages/all-products/all-products.module').then(m => m.AllProductsModule))
  },
  {
    path: 'selected',
    loadChildren: () => (import('../features/pages/selected-products/selected-products.module').then(m => m.SelectedProductsModule))
  },
  {
    path: '**',
    redirectTo: 'all',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
