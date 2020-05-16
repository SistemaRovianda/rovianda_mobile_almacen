import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/Models/app-state.interface";
import { loginReducer } from "src/app/features/landing/store/login/login.reducer";
import { userReducer } from "src/app/features/landing/store/user/user.reducer";
import { menuReducer } from "src/app/features/menu/store/menu/menu.reducer";
import { StepperInitialReducer } from "src/app/features/packaging/store/stepper/stepper-packaging.reducer";
import { PackagingReducer } from "src/app/features/packaging/store/packaging/packaging.reducer";
import { exitReducer } from "src/app/features/packaging/store/exit/exit.reducer";
import { openLotReducer } from "src/app/features/dried/store/open-lot/open-lot.reducer";
import { catalogProductsReducer } from "src/app/features/dried/store/catalog-products/catalog-products.reducer";

export const reducers: ActionReducerMap<AppStateInterface> = {
  login: loginReducer,
  user: userReducer,
  menu: menuReducer,
  stepper: StepperInitialReducer,
  packaging: PackagingReducer,
  packaging_exit: exitReducer,
  openLotDried: openLotReducer,
  catalogProducts: catalogProductsReducer,
};

export const metaReducers: MetaReducer<AppStateInterface>[] = [];
