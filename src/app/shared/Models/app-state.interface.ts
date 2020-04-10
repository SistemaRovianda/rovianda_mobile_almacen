import { UserInterface } from "./user.interface";
import { LoginPageInterface } from "./login-page.interface";
import { MenuPageInterface } from "./menu-page.interface";

export interface AppStateInterface {
  user: UserInterface;
  login: LoginPageInterface;
  menu: MenuPageInterface;
}
