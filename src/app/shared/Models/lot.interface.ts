export interface LotInterface {
  loteId: number;
  name?: string;
  productId?: number;
  quantity?: number;
  date?: string;
  status?: string;
}

type statusLot = "OPEN" | "CLOSE" | "PENDING";

export const STATUS_LOT: { [type in statusLot]: type } = {
  OPEN: "OPEN",
  CLOSE: "CLOSE",
  PENDING: "PENDING",
};
