import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { PackagingMenuPage } from "./packaging-menu.page";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { StepperModule } from "../../components/stepper/stepper.module";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: PackagingMenuPage,
  },
];

const COMMON_IMPORTS = [
  CommonModule,
  FormsModule,
  IonicModule,
  ComponentsModule,
  StepperModule,
  // RouterModule.forChild(routes),
];

const COMMON_DECLARATIONS = [PackagingMenuPage];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
})
export class PackagingMenuModule {}
