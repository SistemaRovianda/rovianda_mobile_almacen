export interface Entrance {
  loteId: string;
  productId: number;
  date: string;
  status?: string;  
  openingDate:string,
  closingDate:string
}

export interface ExitLot {
  loteId: string;
  productId: number;
  observations: string;
  date: string;
  status?: string;
  openingDate:string;
  closingDate:string;
}
