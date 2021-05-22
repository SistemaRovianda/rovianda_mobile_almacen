import { AppStateInterface } from "src/app/shared/models/app-state.interface";
import { createSelector } from "@ngrx/store";

const CATALOG_PRODUCTS = (state: AppStateInterface) => state.catalogProducts;

export const fetchAllProducts = createSelector(
  CATALOG_PRODUCTS,
  (state) => state.products
);
