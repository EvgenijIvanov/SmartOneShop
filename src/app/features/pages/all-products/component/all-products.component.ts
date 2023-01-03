import { Component, OnInit } from '@angular/core';
import { PageAbstract } from "../../../../core/abstracts/page.abstract";
import { IAllProductsDataPage } from "../../../../shared/interfaces/all-product-data-page.interfaces";
import { FacadeAllProductsService } from "../service/facade-all-products.service";
import { ISoTableConfig } from "../../../ui-modules/so-table/interfaces/so-table-config.interfaces";
import { ALL_PRODUCTS_TABLE_CONFIG } from "../configs/all-product-table.config";
import { EMPTY, Observable } from "rxjs";
import { IProduct } from "../../../../shared/interfaces/all-product.interfaces";

@Component({
  selector: 'so-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent extends PageAbstract<IAllProductsDataPage, IProduct> implements OnInit {
  public configTableAllProducts: ISoTableConfig[] = ALL_PRODUCTS_TABLE_CONFIG;
  public selected: Observable<IProduct[]> = EMPTY;

  constructor(protected override facade: FacadeAllProductsService) {
    super(facade);
  }

  ngOnInit(): void {
    this.getData();
    this.loadPage('All products');
  }

  public override getData() {
    this.selected = this.facade.getDataSelected();
    super.getData();
  }

  public changeTable(event: Record<string, unknown>) {;
    this.facade.actionAllProductsTable<unknown>(event);
  }

  public onChangeSetting(event: any) {
    this.facade.setSettingTable(event);
  }
}
