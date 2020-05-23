import { lotResponse } from "./lot.interface";
import { ProductInterface } from "./product.interface";

export interface PackagingInterface {
  lots: lotResponse[];
  products: ProductInterface[];
  loading: boolean;
  errors: string;
}
