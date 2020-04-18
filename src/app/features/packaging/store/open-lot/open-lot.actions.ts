import { createAction, props } from "@ngrx/store";
import { LotInterface } from "src/app/shared/Models/lot.interface";

const OPEN_LOT_START_LOAD = "[OPEN LOT] Start Load";

export const openLotStarLoad = createAction(
  OPEN_LOT_START_LOAD,
  props<{ lot: LotInterface }>()
);
