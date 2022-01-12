import { AppStateInterface } from "src/app/shared/models/app-state.interface";
import { createSelector } from "@ngrx/store";

const SELECT_CLOSE_DRIEF = (state: AppStateInterface) =>
  state.closeLotDried;

export const SELECT_CLOSE_DRIEF_LOADING = createSelector(
    SELECT_CLOSE_DRIEF,
  (state) => state.loading
);


