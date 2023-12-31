import { createAction, props } from "@ngrx/store";
import { Entrance } from "src/app/shared/models/dried.interface";

const OPEN_LOT = "['LOT'] Open Lot";

const OPEN_LOT_SUCCESS = "['LOT'] Open Lot Success";

const OPEN_LOT_ERROR = "['LOT'] Open Lot Error";

export const openLot = createAction(
  OPEN_LOT,
  props<{ payload: Entrance; warehouseDriefId?: string }>()
);

export const openLotSuccess = createAction(
  OPEN_LOT_SUCCESS,
  props<{ payload: Entrance }>()
);

export const openLotError = createAction(
  OPEN_LOT_ERROR,
  props<{ error: string }>()
);
