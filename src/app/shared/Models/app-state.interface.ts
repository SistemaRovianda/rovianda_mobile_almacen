import { UserInterface } from "./user.interface";
import { LoginPageInterface } from "./login-page.interface";
import { MenuPageInterface } from "./menu-page.interface";
import { StepperPackagingInterface } from "./Stepper-packaging.interface";
import { PackagingInterface } from "./packaging.interface";
import { PackagingExitInterface } from "./packaging-exit.interface";
import { newState } from "src/app/features/dried/store/catalog-products/catalog-products.reducer";
import { stateLots } from "src/app/features/dried/store/catalog-lots/catalog-lots.reducer";
import { stateExitLot } from "src/app/features/dried/store/close-lot/close-lot.reducer";

export interface AppStateInterface {
  user: UserInterface;
  login: LoginPageInterface;
  menu: MenuPageInterface;
  stepper: StepperPackagingInterface;
  packaging: PackagingInterface;
  packaging_exit: PackagingExitInterface;
  openLotDried: any;
  closeLotDried: stateExitLot;
  outputDried: any;
  catalogProducts: newState;
  catalogLots: stateLots;
}
