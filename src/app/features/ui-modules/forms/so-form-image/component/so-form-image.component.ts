import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { ImageService } from "../services/image.service";
import { take } from "rxjs";
import { updateFieldImageHelper } from "../helpers/generate-url-image.helper";
import { IProduct } from "../../../../../shared/interfaces/all-product.interfaces";

@Component({
  selector: 'so-image-input',
  templateUrl: './so-form-image.component.html',
  styleUrls: ['./so-form-image.component.scss'],
  providers: [ImageService]
})
export class SoFormImageComponent {
  public rowData: IProduct | null = null;

  constructor(private image: ImageService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.rowData = this.config.data.row;
  }

  public uploadFile(e: { files: File[] }) {
    const [file] = e.files;
    const id = this.rowData?.id;

    file && id &&
      this.image.onUpload(file, id)
        .pipe(take(1))
        .subscribe(data => {
          if (data?.hasOwnProperty('success') && file && this.rowData) {
            this.ref.close(updateFieldImageHelper(file, this.rowData))
          }
        });
  }

}
