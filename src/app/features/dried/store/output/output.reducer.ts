import { createReducer, on } from "@ngrx/store";
import { ExitLot } from "src/app/shared/models/dried.interface";
import * as fromActions from "./output.actions";

export interface stateClosetLot {
  entrance: ExitLot;
  error: string;
  loading: boolean;
}

const initialState: stateClosetLot = {
  entrance: {
    loteId: "",
    productId: null,
    observations: "",
    date: "",
    closingDate:"",
    openingDate:""
  },
  error: null,
  loading: false,
};

export const outputLotReducer = createReducer<stateClosetLot>(
  initialState,
  on(fromActions.output, (state, { payload }) => ({
    ...state,
    loading: true,
  })),

  on(fromActions.outputSuccess, (state, { payload }) => ({
    ...state,
    entrance: payload,
    loading: false,
  })),

  on(fromActions.outputError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
