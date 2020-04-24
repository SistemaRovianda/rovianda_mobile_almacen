import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { ButtonMenuModule } from "../../menu/components/button-menu/button-menu.module";
import { LayoutComponent } from "./layout.component";
import { PrintReportModule } from "../pages/print-report/print-report.module";

const COMMON_IMPORTS = [
  CommonModule,
  FormsModule,
  IonicModule,
  ComponentsModule,
  ButtonMenuModule,
  RouterModule,
  PrintReportModule,
];

const COMMON_DECLARATIONS = [LayoutComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class LayoutModule {}
