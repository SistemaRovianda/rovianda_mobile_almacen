import { PackagingExitInterface } from "src/app/shared/models/packaging-exit.interface";
import { createReducer, on } from "@ngrx/store";
import * as fromPackagingExitActions from "./exit.actions";

const STATE_INITIAL_EXIT: PackagingExitInterface = {
  error: null,
  loading: false,
  products: [],
  request: null,
};

export const exitReducer = createReducer(
  STATE_INITIAL_EXIT,
  on(fromPackagingExitActions.exitLoadProducts, (state, { products }) => ({
    ...state,
    products,
  })),
  on(fromPackagingExitActions.exitStartLoad, (state) => ({
    ...state,
    loading: true,
  })),
  on(fromPackagingExitActions.exitFinishLoad, (state) => ({
    ...state,
    loading: false,
  })),
  on(fromPackagingExitActions.exitFailureLoad, (state, { error }) => ({
    ...state,
    error,
  })),
  on(fromPackagingExitActions.exitLoadRequest, (state) => ({
    ...state,
    loading: true,
  })),
  on(fromPackagingExitActions.exitLoadRequestSuccess,(state)=>({
    ...state,
    isLoading: false
  }))
);
