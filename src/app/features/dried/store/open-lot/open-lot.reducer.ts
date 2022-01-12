import { createReducer, on } from "@ngrx/store";
import { Entrance } from "src/app/shared/models/dried.interface";
import * as fromActions from "./open-lot.actions";

export interface newState {
  entrance: Entrance;
  error: string;
  loading: boolean;
}

const initialState: newState = {
  entrance: {
    loteId: "",
    productId: null,
    date: "",
    openingDate: "",
    closingDate: ""
  },
  error: null,
  loading: false,
};

export const openLotReducer = createReducer<newState>(
  initialState,
  on(fromActions.openLot, (state, { payload }) => ({
    ...state,
    loading: true,
  })),

  on(fromActions.openLotSuccess, (state, { payload }) => ({
    ...state,
    entrance: payload,
    loading: false,
  })),

  on(fromActions.openLotError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
