import { AppStateInterface } from "src/app/shared/Models/app-state.interface";
import { createSelector } from "@ngrx/store";

const SELECT_MENU = (state: AppStateInterface) => state.menu;

export const SELECT_IS_LOADING_MENU = createSelector(
  SELECT_MENU,
  (state) => state.loading
);

export const SELECT_OPTION_SELECTED = createSelector(
  SELECT_MENU,
  (state) => state.itemSelected
);
