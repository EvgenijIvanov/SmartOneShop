import { HttpParams } from "@angular/common/http";

export const getHttpParams = <T>(data: T): HttpParams => {
  return Object.keys(data as object).reduce((acc: HttpParams, key: string) => {
    // @ts-ignore
    return acc.set(key, data[key]);
  }, new HttpParams());
}
