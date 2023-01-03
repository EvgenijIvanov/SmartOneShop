import { Injectable } from '@angular/core';
import {map, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  private hasKey(key: string): boolean {
    return !!localStorage.getItem(key);
  }

  private stringify<T>(values: T): string {
    return JSON.stringify(values);
  }

  private parse<T>(values: string): T {
    try {
      return JSON.parse(values);
    } catch {
      console.error('Parse from local storage is crash!');
      return {} as T;
    }
  }

  public setItems<T>(key: string, values: T[]) {
    localStorage.setItem(key, this.stringify<T[]>(values));
  }

  public getItems<T>(key: string): Observable<T[]> {
    const rawData: string = localStorage.getItem(key) || '[]';
    const data: T[] = this.parse<T[]>(rawData);
    return of(data);
  }

  public addItem<T>(key: string, value: T): Observable<T> {
    return this.getItems<T>(key).pipe(
      tap((data: T[]) => {
        const newData: T[] = [ ...data, value ];
        this.setItems<T>(key, newData);
      }),
      map(() => value)
    );

  }

  public deleteItem<T>(key: string, id: number): Observable<number> {
    return this.getItems<T>(key).pipe(
      tap((data: T[]) => {
        // @ts-ignore
        const newData: T[] = data.filter((item) => item['id'] !== id)
        this.setItems<T>(key, newData);
      }),
      map(() => id)
    );

  }

}
