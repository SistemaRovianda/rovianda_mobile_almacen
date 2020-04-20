import { LotInterface } from "./lot.interface";
import { ProductInterface } from "./product.interface";

export interface PackagingInterface {
  lots: LotInterface[];
  products: ProductInterface[];
  loading: boolean;
  errors: string;
}
