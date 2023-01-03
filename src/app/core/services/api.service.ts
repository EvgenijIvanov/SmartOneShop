import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { IAllProductsDataPage } from "../../shared/interfaces/all-product-data-page.interfaces";
import { IProduct } from "../../shared/interfaces/all-product.interfaces";
import { IAllProductDataPageRequestParams } from "../../shared/interfaces/all-product-data-page-request-params.interfaces";
import { getHttpParams } from "../helpers/getHttpParams";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private endpoint: string = 'https://backend-for-applicants.smartoneclub.com';
  constructor(private http: HttpClient) { }

  public getAllProducts(data: IAllProductDataPageRequestParams): Observable<IAllProductsDataPage> {
    const params: HttpParams = getHttpParams<IAllProductDataPageRequestParams>(data);
    return this.http.get<IAllProductsDataPage>(this.endpoint + '/products', {params});
  }

  public addProduct(product: IProduct): Observable<{ data: IProduct }> {
    return this.http.post<{ data: IProduct }>(this.endpoint + '/product', product)
  }

  public deleteProduct(product: IProduct): Observable<IProduct | {}> {
    return this.http.delete<{ data: string }>(this.endpoint + '/product/' + product.id)
      .pipe(map((result: { data: string }) => result.data === 'product deleted' ? product : {}))
  }

  public updateProduct(product: IProduct): Observable<{ product: IProduct }> {
    return this.http.patch<{ product: IProduct }>(this.endpoint + '/product/' + product.id, product)
  }

  public uploadImage(file: File, productId: number): Observable<{ name: string, success: string }> {
    const fileData: FormData = new FormData();
    fileData.append('file', file, file.name);
    return this.http.post<{ name: string, success: string }>(this.endpoint + '/product/' + productId + '/image', fileData);
  }

}
