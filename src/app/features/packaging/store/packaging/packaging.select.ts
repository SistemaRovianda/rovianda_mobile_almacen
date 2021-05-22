import { AppStateInterface } from "src/app/shared/models/app-state.interface";
import { createSelector } from "@ngrx/store";

const SELECT_PACKAGING = (state: AppStateInterface) => state.packaging;

export const SELECT_PACKAGING_LOADING = createSelector(
  SELECT_PACKAGING,
  (state) => state.loading
);

export const SELECT_PACKAGING_LOTS = createSelector(
  SELECT_PACKAGING,
  (state) => state.lots
);

export const SELECT_PACKAGING_PRODUCTS = createSelector(
  SELECT_PACKAGING,
  (state) => state.products
);
