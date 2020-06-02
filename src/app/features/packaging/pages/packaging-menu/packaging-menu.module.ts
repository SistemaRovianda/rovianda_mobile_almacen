import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { PackagingMenuPage } from "./packaging-menu.page";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { Routes, RouterModule } from "@angular/router";
import { ButtonMenuModule } from "src/app/features/menu/components/button-menu/button-menu.module";
import { StepperModule } from 'src/app/shared/components/stepper/stepper.module';

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
  ButtonMenuModule,
  RouterModule,
  // RouterModule.forChild(routes),
  StepperModule
];

const COMMON_DECLARATIONS = [PackagingMenuPage];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
})
export class PackagingMenuModule {}
