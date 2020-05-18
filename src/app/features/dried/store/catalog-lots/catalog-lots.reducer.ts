import { createReducer, on } from "@ngrx/store";
import { LotInterface } from "src/app/shared/Models/lot.interface";
import * as fromActions from "./catalog-lots.actions";

export interface stateLots {
  lots: LotInterface[];
  error: string;
  loading: boolean;
}

const initialState: stateLots = {
  lots: [],
  error: null,
  loading: false,
};

export const catalogLotsReducer = createReducer<stateLots>(
  initialState,
  on(fromActions.fetchAllLots, (state) => ({
    ...state,
    loading: true,
  })),

  on(fromActions.fetchAllLotsSuccess, (state, { lots }) => ({
    ...state,
    lots: lots,
    loading: false,
  })),

  on(fromActions.fetchAllLotsError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
