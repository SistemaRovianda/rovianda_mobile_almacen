import { ProductInterface } from "./product.interface";

export interface LotInterface {
  loteId: number;
  name?: string;
  productId?: number;
  quantity?: number;
  date?: string;
  status?: string;
}

type statusLot = "OPENED" | "CLOSE" | "PENDING";

export const STATUS_LOT: { [type in statusLot]: type } = {
  OPENED: "OPENED",
  CLOSE: "CLOSE",
  PENDING: "PENDING",
};

export interface lotResponse {
  loteId: string;
  products: ProductInterface[];
}
