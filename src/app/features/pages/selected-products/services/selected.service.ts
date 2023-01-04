import { Injectable } from '@angular/core';
import { map, Observable } from "rxjs";
import { IProduct } from "../../../../shared/interfaces/all-product.interfaces";
import { StorageService } from "../../../../core/services/storage.service";

@Injectable({
  providedIn: 'root'
})
export class SelectedService {
  private storageKey: string = 'selected';
  constructor(private storage: StorageService) { }

  public getSelectedProduct(): Observable<{ selected: IProduct[] }> {
    return this.storage.getItems<IProduct>(this.storageKey).pipe(
      map((selected: IProduct[]) => ({ selected }))
    )
  }

  public addToSelectedProduct(product: IProduct): Observable<IProduct> {
    return this.storage.addItem<IProduct>(this.storageKey, product).pipe(
      map((product: IProduct) => product)
    )
  }

  public deleteToSelectedProduct(product: IProduct): Observable<number> {
    return this.storage.deleteItem<number>(this.storageKey, product.id).pipe(
      map((id: number) => id)
    )
  }
}
