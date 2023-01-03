import { IProduct } from "../../../../../shared/interfaces/all-product.interfaces";

export const updateFieldImageHelper = (file: File, product: IProduct): IProduct => {
  return (file?.name && product.id) ? {
    ...product,
    image: '/media/images/' + product.id + '/' + file?.name
  } : product;
}
