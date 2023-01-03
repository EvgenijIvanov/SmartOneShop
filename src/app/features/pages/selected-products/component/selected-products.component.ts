import { Component, OnInit } from '@angular/core';
import { ISoTableConfig } from "../../../ui-modules/so-table/interfaces/so-table-config.interfaces";
import { SELECTED_PRODUCT_TABLE_CONFIG } from "../configs/selected-product-table.config";
import { PageAbstract } from "../../../../core/abstracts/page.abstract";
import { ISelectedDataPage } from "../../../../shared/interfaces/selected-page.interfaces";
import { SelectedProductsFacadeService } from "../services/seleted-products-facade.service";
import { IProduct } from "../../../../shared/interfaces/all-product.interfaces";

@Component({
  selector: 'so-selected-products',
  templateUrl: './selected-products.component.html',
  styleUrls: ['./selected-products.component.scss']
})
export class SelectedProductsComponent extends PageAbstract<ISelectedDataPage, IProduct> implements OnInit {
  public configTableSelectedProducts: ISoTableConfig[] = SELECTED_PRODUCT_TABLE_CONFIG;

  constructor(protected override facade: SelectedProductsFacadeService) {
    super(facade);
  }

  ngOnInit() {
    this.getData();
    this.loadPage('Selected products');
  }
}
