import { createAction, props } from "@ngrx/store";
import { LotInterface, lotResponse } from "src/app/shared/Models/lot.interface";
import { ProductInterface } from "src/app/shared/Models/product.interface";

const PACKAGING_START_LOAD = "[PACKAGING] Packaging Start Load";

const PACKAGING_FINISH_LOAD = "[PACKAGING] Packaging Finish Load";

const PACKAGING_FAILURE = "[PACKAGING] Packaging Failure";

const PACKAGING_LOAD_LOTS = "[PACKAGING] Packaging Load Lots";

const PACKAGING_SELECT_LOT = "[PACKAGING] Packaging Select Lot";

const PACKAGING_LOAD_PRODUCTS = "[PACKAGING] Packaging Load Products";

const PACKAGING_LOAD_SUCCESS = "[PACKAGING] Load Success";

export const packagingStartLoad = createAction(
  PACKAGING_START_LOAD,
  props<{ lotsType: string; status: string }>()
);

export const packagingFinishLoad = createAction(PACKAGING_FINISH_LOAD);

export const PackagingFailure = createAction(
  PACKAGING_FAILURE,
  props<{ errors: string }>()
);

export const packagingLoadLots = createAction(
  PACKAGING_LOAD_LOTS,
  props<{ lots: lotResponse[] }>()
);

export const packagingSelectLot = createAction(
  PACKAGING_SELECT_LOT,
  props<{ productId: string, typeLots: string}>()
);

export const packagingLoadProducts = createAction(
  PACKAGING_LOAD_PRODUCTS,
  props<{ products: ProductInterface[] }>()
);

export const packagingLoadSuccess = createAction(PACKAGING_LOAD_SUCCESS);

export const packagingClearLots = createAction('[PACKAGING] Clear lots');
