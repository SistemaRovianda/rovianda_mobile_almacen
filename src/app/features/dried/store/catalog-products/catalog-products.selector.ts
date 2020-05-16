import { AppStateInterface } from "src/app/shared/Models/app-state.interface";
import { createSelector } from "@ngrx/store";

const CATALOG_PRODUCTS = (state: AppStateInterface) => state.catalogProducts;

export const fetchAllProducts = createSelector(
  CATALOG_PRODUCTS,
  (state) => state.products
);
