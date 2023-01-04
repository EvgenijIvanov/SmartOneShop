import { HttpParams } from "@angular/common/http";

export const getHttpParams = <T extends {}>(data: T): HttpParams => {
  return Object.entries(data).reduce((acc: HttpParams, [key, value]) => {
    return acc.set(key, value as (string | number));
  }, new HttpParams());
}
