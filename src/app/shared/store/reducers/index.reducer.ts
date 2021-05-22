import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { catalogLotsReducer } from "src/app/features/dried/store/catalog-lots/catalog-lots.reducer";
import { catalogProductsReducer } from "src/app/features/dried/store/catalog-products/catalog-products.reducer";
import { openLotReducer } from "src/app/features/dried/store/open-lot/open-lot.reducer";
import { outputLotReducer } from "src/app/features/dried/store/output/output.reducer";
import { loginReducer } from "src/app/features/landing/store/login/login.reducer";
import { userReducer } from "src/app/features/landing/store/user/user.reducer";
import { menuReducer } from "src/app/features/menu/store/menu/menu.reducer";
import { exitReducer } from "src/app/features/packaging/store/exit/exit.reducer";
import { PackagingReducer } from "src/app/features/packaging/store/packaging/packaging.reducer";
import { StepperInitialReducer } from "src/app/features/packaging/store/stepper/stepper-packaging.reducer";
import { AppStateInterface } from "src/app/shared/models/app-state.interface";
import { closeLotReducer } from "src/app/features/dried/store/close-lot/close-lot.reducer";

export const reducers: ActionReducerMap<AppStateInterface> = {
  login: loginReducer,
  user: userReducer,
  menu: menuReducer,
  stepper: StepperInitialReducer,
  packaging: PackagingReducer,
  packaging_exit: exitReducer,
  openLotDried: openLotReducer,
  closeLotDried: closeLotReducer,
  outputDried: outputLotReducer,
  catalogProducts: catalogProductsReducer,
  catalogLots: catalogLotsReducer,
};

export const metaReducers: MetaReducer<AppStateInterface>[] = [];
