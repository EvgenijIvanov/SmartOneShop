import { Injectable } from '@angular/core';
import { IPageFacadeService } from "../../../../shared/interfaces/page-facade-service.interfaces";
import { ISelectedDataPage } from "../../../../shared/interfaces/selected-page.interfaces";
import { Observable } from "rxjs";
import { IProduct } from "../../../../shared/interfaces/all-product.interfaces";
import { Store } from "@ngrx/store";
import { AddSelects } from "../../../../store/selected/actions/add-select.actions";
import { DeleteSelects } from "../../../../store/selected/actions/delete-select.actions";
import { LoadSelected } from "../../../../store/selected/actions/load-selected.actions";
import { selectAllDataPage } from "../../../../store/selected/selectors/selected.selectors";
import { AppState } from "../../../../store/state";

@Injectable()
export class SelectedProductsFacadeService implements IPageFacadeService<ISelectedDataPage, IProduct> {

  constructor(private store: Store<AppState>) { }

  public loadPage(): void {
    this.store.dispatch(LoadSelected())
  }

  public getDataPage(): Observable<ISelectedDataPage> {
    return this.store.select(selectAllDataPage);
  }

  public setSelected(product: IProduct): void {
    this.store.dispatch(AddSelects({ product }));
  }

  public setDeselect(product: IProduct): void {
    this.store.dispatch(DeleteSelects({ product }))
  }
}
