import { ProductInterface } from "./product.interface";
import { LotInterface } from "./lot.interface";

export interface PackagingExitInterface {
  loading: boolean;
  error: string;
  products: ProductInterface[];
  request: LotInterface;
}
