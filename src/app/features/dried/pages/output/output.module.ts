import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { ButtonMenuModule } from "src/app/features/menu/components/button-menu/button-menu.module";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { ExitLotFormModule } from "../../components/exit-lot-form/exit-lot-form.module";
import { GenerateReportModule } from "../../dialogs/generate-report/generate-report.module";
import { OutputPageComponent } from "./output.page";

const COMMON_IMPORTS = [
  CommonModule,
  ExitLotFormModule,
  IonicModule,
  ButtonMenuModule,
  ComponentsModule,
  RouterModule,
  GenerateReportModule,
];

const COMMON_DECLARATIONS = [OutputPageComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: [OutputPageComponent],
  exports: COMMON_DECLARATIONS,
})
export class OutputPageModule {}
