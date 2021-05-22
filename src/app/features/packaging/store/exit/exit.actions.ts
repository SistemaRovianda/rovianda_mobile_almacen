import { createAction, props } from "@ngrx/store";
import { ProductInterface } from "src/app/shared/models/product.interface";
import { LotInterface } from "src/app/shared/models/lot.interface";

const EXIT_START_LOAD = "[EXIT] Start Load";

const EXIT_LOAD_PRODUCTS = "[EXIT] Load Products";

const EXIT_FINISH_LOAD = "[EXIT] Finish Load";

const EXIT_FAILURE_LOAD = "[EXIT] Failure Load";

const EXIT_LOAD_REQUEST = "[EXIT] Load Request";

const EXIT_LOAD_REQUEST_SUCCESS = "[EXIT] Load Request Success";

export const exitStartLoad = createAction(EXIT_START_LOAD);

export const exitLoadProducts = createAction(
  EXIT_LOAD_PRODUCTS,
  props<{ products: ProductInterface[] }>()
);

export const exitFailureLoad = createAction(
  EXIT_FAILURE_LOAD,
  props<{ error: string }>()
);

export const exitFinishLoad = createAction(EXIT_FINISH_LOAD);

export const exitLoadRequest = createAction(
  EXIT_LOAD_REQUEST,
  props<{ request: LotInterface }>()
);

export const exitLoadRequestSuccess = createAction(EXIT_LOAD_REQUEST_SUCCESS);
