import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { ButtonMenuModule } from "src/app/features/menu/components/button-menu/button-menu.module";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { OpenLotFormModule } from "../../components/open-lot-form/open-lot-form.module";
import { MessageDialogModule } from "../../dialogs/message-dialog/message-dialog.module";
import { OpenLotPageComponent } from "./open-lot.page";

const COMMON_IMPORTS = [
  CommonModule,
  IonicModule,
  OpenLotFormModule,
  ButtonMenuModule,
  ComponentsModule,
  RouterModule,
  MessageDialogModule,
];

const COMMON_DECLARATIONS = [OpenLotPageComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class OpenLotPageModule {}
