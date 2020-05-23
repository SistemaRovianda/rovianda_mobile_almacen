import { createReducer, on } from "@ngrx/store";
import * as fromActions from "./catalog-lots.actions";

export interface stateLots {
  lots: any;
  error: string;
  loading: boolean;
}

const initialState: stateLots = {
  lots: null,
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
