import { UserInterface } from "./user.interface";
import { LoginPageInterface } from "./login-page.interface";
import { MenuPageInterface } from "./menu-page.interface";
import { StepperPackagingInterface } from "./Stepper-packaging.interface";
import { PackagingInterface } from "./packaging.interface";
import { PackagingExitInterface } from "./packaging-exit.interface";

export interface AppStateInterface {
  user: UserInterface;
  login: LoginPageInterface;
  menu: MenuPageInterface;
  stepper: StepperPackagingInterface;
  packaging: PackagingInterface;
  packaging_exit: PackagingExitInterface;
  openLotDried: any;
}
