import { Component, OnInit } from '@angular/core';
import { SoPageAbstract } from "../../../../core/abstracts/so-page.abstract";
import { IAllProductsDataPage } from "../../../../shared/interfaces/all-product-data-page.interfaces";
import { FacadeAllProductsService } from "../service/facade-all-products.service";
import { ISoTableConfig } from "../../../ui-modules/so-table/interfaces/so-table-config.interfaces";
import { ALL_PRODUCTS_TABLE_CONFIG } from "../configs/all-product-table.config";
import { Observable, of} from "rxjs";
import { IProduct } from "../../../../shared/interfaces/all-product.interfaces";
import { IPaginationSortTable } from "../../../../shared/interfaces/pagination-sort-table.interfaces";

@Component({
  selector: 'so-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent extends SoPageAbstract<IAllProductsDataPage, IProduct> implements OnInit {
  public configTableAllProducts: ISoTableConfig[] = ALL_PRODUCTS_TABLE_CONFIG;
  public selected: Observable<IProduct[]> = of([]);

  constructor(public override facade: FacadeAllProductsService) {
    super(facade);
  }

  ngOnInit(): void {
    this.getData();
    this.setTitle('All products');
  }

  public override getData(): void {
    this.selected = this.facade.getDataSelected();
    super.getData();
  }

  public changeTable(event: Record<string, unknown>): void {;
    this.facade.actionAllProductsTable<unknown>(event);
  }

  public onChangeSetting(event: IPaginationSortTable): void {
    this.facade.setSettingTable(event);
  }
}
