import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { ButtonMenuModule } from "src/app/features/menu/components/button-menu/button-menu.module";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { CloseLotFormModule } from "../../components/close-lot-form/close-lot-form.module";
import { CloseLotPageComponent } from "./close-lot.page";

const COMMON_IMPORTS = [
  CommonModule,
  IonicModule,
  CloseLotFormModule,
  ButtonMenuModule,
  ComponentsModule,
  RouterModule,
];

const COMMON_DECLARATIONS = [CloseLotPageComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class CloseLotPageModule {}
