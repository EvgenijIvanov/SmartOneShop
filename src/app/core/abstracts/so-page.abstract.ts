import { EMPTY, Observable } from "rxjs";
import { IPageFacadeService } from "../../shared/interfaces/page-facade-service.interfaces";

export abstract class SoPageAbstract<T, I> {
  public title: string = '';
  public dataPage: Observable<T> = EMPTY;

  constructor(protected facade: IPageFacadeService<T, I>) {}
  public loadPage(): void {
    this.facade?.loadPage();
  }

  public setTitle(title: string): void {
    this.title = title ?? this.title;
  }

  public getData(): void {
    this.dataPage = this.facade.getDataPage();
  }

  public onSelected(event: I): void {
    this.facade.setSelected(event);
  }

  public onDeselected(event: I): void {
    this.facade.setDeselect(event);
  }

}
