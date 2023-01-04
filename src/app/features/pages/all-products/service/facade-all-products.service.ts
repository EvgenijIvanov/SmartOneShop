import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { LoadAllProductsPage } from "../../../../store/all-products/actions/load-products.actions";
import { IPageFacadeService } from "../../../../shared/interfaces/page-facade-service.interfaces";
import { Observable } from "rxjs";
import { IAllProductsDataPage } from "../../../../shared/interfaces/all-product-data-page.interfaces";
import { selectAllDataPage } from "../../../../store/all-products/selectors/all-products.selectors";
import { AddProduct } from "../../../../store/all-products/actions/add-product.actions";
import { DeleteProduct } from "../../../../store/all-products/actions/delete-product.actions";
import { UpdateProducts } from "../../../../store/all-products/actions/update-product.actions";
import { SetPaginationTableAllProducts } from "../../../../store/all-products/actions/pagination-all-products-table.actions";
import { LoadSelected } from "../../../../store/selected/actions/load-selected.actions";
import { selectSelectedProducts } from "../../../../store/selected/selectors/selected.selectors";
import { IProduct} from "../../../../shared/interfaces/all-product.interfaces";
import { AddSelects} from "../../../../store/selected/actions/add-select.actions";
import { DeleteSelects} from "../../../../store/selected/actions/delete-select.actions";
import { ProductsActionsType } from "../../../../shared/enums/products-actions-type";
import { AppState } from "../../../../store/state";
import { IPaginationSortTable } from "../../../../shared/interfaces/pagination-sort-table.interfaces";

@Injectable()
export class FacadeAllProductsService implements IPageFacadeService<IAllProductsDataPage, IProduct> {
  public matrixFacadeAllProductTableActions: Record<ProductsActionsType, Function> = {
    [ProductsActionsType.Add]: AddProduct,
    [ProductsActionsType.Update]: UpdateProducts,
    [ProductsActionsType.Delete]: DeleteProduct,
  }
  constructor(private store: Store<AppState>) { }

  public loadPage(): void {
    this.store.dispatch(LoadAllProductsPage())
    this.store.dispatch(LoadSelected())
  }

  public getDataPage(): Observable<IAllProductsDataPage> {
    return this.store.select(selectAllDataPage);
  }

  public getDataSelected(): Observable<IProduct[]> {
    return this.store.select(selectSelectedProducts);
  }

  public actionAllProductsTable<D>(data: Record<ProductsActionsType, D>): void {
    const [action] = Object.keys(data) as [ProductsActionsType];
    this.store.dispatch(
      this.matrixFacadeAllProductTableActions[action]({ product: data[action]}))
  }

  public setSettingTable(data: IPaginationSortTable): void {
    this.store.dispatch(SetPaginationTableAllProducts(data));
  }

  public setSelected(product: IProduct): void {
    this.store.dispatch(AddSelects({ product }));
  }

  public setDeselect(product: IProduct): void {
    this.store.dispatch(DeleteSelects({ product }));
  }

}
