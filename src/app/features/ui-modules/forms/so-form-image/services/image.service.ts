import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from "rxjs";
import { ApiService } from "../../../../../core/services/api.service";

@Injectable()
export class ImageService {
  constructor(private api: ApiService) { }

  public onUpload(file: File, id: number): Observable<{ name: string, success: string } | void> {
    return this.api.uploadImage(file, id)
      .pipe(
        tap((result: { name: string, success: string }) => console.log(result)),
        catchError((error) => of(console.log(error)))
      )
  }
}
