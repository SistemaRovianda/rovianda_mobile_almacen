import { createAction, props } from "@ngrx/store";
import { LotInterface } from "src/app/shared/Models/lot.interface";

const FETCH_ALL_LOTS = "['LOTS'] Fetch All Lots";

const FETCH_ALL_LOTS_SUCCESS = "['LOTS'] Fetch All Lots Success";

const FETCH_ALL_LOTS_ERROR = "['LOTS'] Fetch All Lots Error";

export const fetchAllLots = createAction(
  FETCH_ALL_LOTS,
  props<{ typeLot: string; status: string }>()
);

export const fetchAllLotsSuccess = createAction(
  FETCH_ALL_LOTS_SUCCESS,
  props<{ lots: LotInterface[] }>()
);

export const fetchAllLotsError = createAction(
  FETCH_ALL_LOTS_ERROR,
  props<{ error: string }>()
);
