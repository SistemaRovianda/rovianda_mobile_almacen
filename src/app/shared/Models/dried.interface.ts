export interface Entrance {
  loteId: string;
  productId: number;
  date: string;
  status?: string;
}

export interface ExitLot {
  loteId: string;
  productId: number;
  observations: string;
  date: string;
  status?: string;
}
