import { ProductInterface } from "./product.interface";

export interface LotInterface {
  loteId?: number;
  name?: string;
  productId?: number;
  quantity?: number;
  date?: string;
  status?: string;
  lot?: string;
  warehouseId?: string;
}

type statusLot = "OPENED" | "CLOSED" | "PENDING";

export const STATUS_LOT: { [type in statusLot]: type } = {
  OPENED: "OPENED",
  CLOSED: "CLOSED",
  PENDING: "PENDING",
};

export interface lotResponse {
  loteId: string;
  products: ProductInterface[];
}
