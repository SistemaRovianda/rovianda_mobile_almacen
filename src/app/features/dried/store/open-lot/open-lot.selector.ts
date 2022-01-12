import { AppStateInterface } from "src/app/shared/models/app-state.interface";
import { createSelector } from "@ngrx/store";

const SELECT_PACKAGING_OPEN = (state: AppStateInterface) =>
  state.openLotDried;

export const SELECT_DRIEF_OPEN_LOADING = createSelector(
    SELECT_PACKAGING_OPEN,
  (state) => state.loading
);


