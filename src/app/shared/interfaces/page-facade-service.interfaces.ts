import { Observable } from "rxjs";

export interface IPageFacadeService<T, I> {
  loadPage(): void;
  getDataPage(): Observable<T>;

  setSelected(event: I): void

  setDeselect(event: I): void

}
