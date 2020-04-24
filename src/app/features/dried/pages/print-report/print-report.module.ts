import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrintReportComponent } from "./print-report.component";
import { IonicModule } from "@ionic/angular";
import { ButtonMenuModule } from "src/app/features/menu/components/button-menu/button-menu.module";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { RouterModule } from "@angular/router";

const COMMON_IMPORTS = [
  CommonModule,
  IonicModule,
  ButtonMenuModule,
  ComponentsModule,
  RouterModule,
];

const COMMON_DECLARATIONS = [PrintReportComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class PrintReportModule {}
