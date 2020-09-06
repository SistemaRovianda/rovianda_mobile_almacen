import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/Models/app-state.interface";

const CATALOG_LOTS = (state: AppStateInterface) => state.catalogLots;

export const LOTS_SELECTOR = createSelector(CATALOG_LOTS, (state) => state.lots);

export const getProductWarehouseDriefId = createSelector(
  CATALOG_LOTS,
  (state, props) =>
    state.lots.products.find((product) => product.id == props.id)
);
