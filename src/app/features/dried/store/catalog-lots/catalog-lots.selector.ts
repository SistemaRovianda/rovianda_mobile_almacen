import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/Models/app-state.interface";

const CATALOG_LOTS = (state: AppStateInterface) => state.catalogLots;

export const fetchAllLots = createSelector(CATALOG_LOTS, (state) => state.lots);