import { AppStateInterface } from "src/app/shared/models/app-state.interface";
import { createSelector } from "@ngrx/store";

const SELECT_PACKAGING_EXIT = (state: AppStateInterface) =>
  state.packaging_exit;

export const SELECT_PACKAGING_EXIT_PRODUCTS = createSelector(
  SELECT_PACKAGING_EXIT,
  (state) => state.products
);

export const SELECT_PACKAGING_EXIT_LOADING = createSelector(
  SELECT_PACKAGING_EXIT,
  (state) => state.loading
);

export const SELECT_PACKAGING_EXIT_ERROR = createSelector(
  SELECT_PACKAGING_EXIT,
  (state) => state.error
);
