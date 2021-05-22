import { createReducer, on } from "@ngrx/store";
import * as fromActions from "./catalog-lots.actions";
import { lotResponse } from "src/app/shared/models/lot.interface";

export interface stateLots {
  lots: lotResponse[];
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
