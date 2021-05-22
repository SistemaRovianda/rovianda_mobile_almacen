import { PackagingInterface } from "src/app/shared/models/packaging.interface";
import { createReducer, on, State } from "@ngrx/store";
import * as fromPackagingActions from "./packaging.actions";
import * as fromOpenLotActions from "../open-lot/open-lot.actions";
import * as fromCloseLotActions from "../close-lot/close-lot.actions";

const STATE_INITIAL_PACKAGING: PackagingInterface = {
  lots: [],
  products: [],
  loading: false,
  errors: null,
};

export const PackagingReducer = createReducer<PackagingInterface>(
  STATE_INITIAL_PACKAGING,
  on(fromPackagingActions.packagingFinishLoad, (state) => ({
    ...state,
    loading: false,
  })),
  on(fromPackagingActions.PackagingFailure, (state, { errors }) => ({
    ...state,
    errors,
  })),
  on(fromPackagingActions.packagingLoadLots, (state, { lots }) => ({
    ...state,
    lots,
  })),
  on(fromPackagingActions.packagingLoadProducts, (state, { products }) => ({
    ...state,
    products,
  })),
  on(fromPackagingActions.packagingSelectLot, (state) => ({
    ...state,
    loading: true,
  })),
  on(fromOpenLotActions.openLotStarLoad, (state) => ({
    ...state,
    loading: true,
  })),
  on(fromCloseLotActions.closeLotStartLoad, (state) => ({
    ...state,
    loading: true,
  })),
  on(fromPackagingActions.packagingClearLots, (state) => ({
    ...state,
    lots: []
  }))
);
