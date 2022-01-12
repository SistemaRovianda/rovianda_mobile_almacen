import { AppStateInterface } from "src/app/shared/models/app-state.interface";
import { createSelector } from "@ngrx/store";

const SELECT_PACKAGING_EXIT = (state: AppStateInterface) =>
  state.outputDried;

export const SELECT_DRIEF_EXIT_LOADING = createSelector(
  SELECT_PACKAGING_EXIT,
  (state) => state.loading
);


