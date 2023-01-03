import { EMPTY, Observable, of } from "rxjs";
import { IPageFacadeService } from "../../shared/interfaces/page-facade-service.interfaces";
import { Optional } from "@angular/core";

export abstract class PageAbstract<T, I> {
  public title: string = '';
  public dataPage: Observable<T> = EMPTY;

  constructor(
    @Optional() protected facade: IPageFacadeService<T, I>
  ) {}
  public loadPage(title?: string): void {
    this.title = title || '';
    this.facade?.loadPage();
  }

  public getData(): void {
    this.dataPage = this.facade.getDataPage();
  }

  public onSelected(event: I) {
    this.facade.setSelected(event);
  }

  public onDeselected(event: I) {
    this.facade.setDeselect(event);
  }

}
