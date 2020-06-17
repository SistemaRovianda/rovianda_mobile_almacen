import { createAction, props } from "@ngrx/store";
import { Entrance } from "src/app/shared/Models/dried.interface";

const CLOSE_LOT = "['LOT'] Close Lot";

const CLOSE_LOT_SUCCESS = "['LOT'] Close Lot Success";

const CLOSE_LOT_ERROR = "['LOT'] Close Lot Error";

export const closeLot = createAction(
  CLOSE_LOT,
  props<{ payload: Entrance; warehouseDriefId?: string }>()
);

export const closeLotSuccess = createAction(
  CLOSE_LOT_SUCCESS,
  props<{ payload: Entrance }>()
);

export const closeLotError = createAction(
  CLOSE_LOT_ERROR,
  props<{ error: string }>()
);
