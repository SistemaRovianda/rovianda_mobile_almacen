import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OutputPageComponent } from "./output.page";
import { ExitLotFormModule } from "../../components/exit-lot-form/exit-lot-form.module";
import { IonicModule } from "@ionic/angular";
import { ButtonMenuModule } from "src/app/features/menu/components/button-menu/button-menu.module";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { RouterModule } from "@angular/router";

const COMMON_IMPORTS = [
  CommonModule,
  ExitLotFormModule,
  IonicModule,
  ButtonMenuModule,
  ComponentsModule,
  RouterModule,
];

const COMMON_DECLARATIONS = [OutputPageComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class OutputPageModule {}
