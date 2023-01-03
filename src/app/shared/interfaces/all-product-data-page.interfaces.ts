import { IProduct } from "./all-product.interfaces";
import { IAllProductDataPageRequestParams } from "./all-product-data-page-request-params.interfaces";

export interface IAllProductsDataPage extends IAllProductDataPageRequestParams {
  products: IProduct[]
  total: number;
  isLoading: boolean
}
