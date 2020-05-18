import { createAction, props } from "@ngrx/store";
import { ExitLot } from "src/app/shared/Models/dried.interface";

const OUTPUT = "['LOT'] Outout Lot";

const OUTPUT_SUCCESS = "['LOT'] Outout Lot Success";

const OUTPUT_ERROR = "['LOT'] Outout Lot Error";

export const output = createAction(OUTPUT, props<{ payload: ExitLot }>());

export const outputSuccess = createAction(
  OUTPUT_SUCCESS,
  props<{ payload: ExitLot }>()
);

export const outputError = createAction(
  OUTPUT_ERROR,
  props<{ error: string }>()
);
