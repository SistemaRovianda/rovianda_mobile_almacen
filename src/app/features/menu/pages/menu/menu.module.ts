import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { MenuPage } from "./menu.page";
import { Routes, RouterModule } from "@angular/router";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { ButtonMenuModule } from "../../components/button-menu/button-menu.module";

const routes: Routes = [
  {
    path: "",
    component: MenuPage,
  },
];

const IMPORTS = [
  CommonModule,
  FormsModule,
  IonicModule,
  RouterModule.forChild(routes),
  ComponentsModule,
  ButtonMenuModule,
];
@NgModule({
  imports: IMPORTS,
  declarations: [MenuPage],
})
export class MenuPageModule {}
