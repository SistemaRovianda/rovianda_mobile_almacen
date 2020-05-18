import { createReducer, on } from "@ngrx/store";
import { Entrance } from "src/app/shared/Models/dried.interface";
import * as fromActions from "./close-lot.actions";

export interface stateExitLot {
  entrance: Entrance;
  error: string;
  loading: boolean;
}

const initialState: stateExitLot = {
  entrance: {
    loteId: "",
    productId: null,
    date: "",
  },
  error: null,
  loading: false,
};

export const closeLotReducer = createReducer<stateExitLot>(
  initialState,
  on(fromActions.closeLot, (state, { payload }) => ({
    ...state,
    loading: true,
  })),

  on(fromActions.closeLotSuccess, (state, { payload }) => ({
    ...state,
    entrance: payload,
    loading: false,
  })),

  on(fromActions.closeLotError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
