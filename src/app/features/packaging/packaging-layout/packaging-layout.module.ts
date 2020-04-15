import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { PackagingLayoutPage } from "./packaging-layout.page";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { StepperModule } from "../components/stepper/stepper.module";
const COMMON_IMPORTS = [
  CommonModule,
  FormsModule,
  IonicModule,
  ComponentsModule,
  StepperModule,
];

const COMMON_DECLARATIONS = [PackagingLayoutPage];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
})
export class PackagingLayoutPageModule {}
