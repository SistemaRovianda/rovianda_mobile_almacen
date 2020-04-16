import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OpenLotPageComponent } from "./open-lot.page";
import { OpenLotFormModule } from "../../components/open-lot-form/open-lot-form.module";
import { IonicModule } from "@ionic/angular";
import { ButtonMenuModule } from "src/app/features/menu/components/button-menu/button-menu.module";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { RouterModule } from "@angular/router";
import { MessageDialogComponent } from "../../dialogs/message-dialog/message-dialog.component";

const COMMON_IMPORTS = [
  CommonModule,
  IonicModule,
  OpenLotFormModule,
  ButtonMenuModule,
  ComponentsModule,
  RouterModule,
];

const COMMON_DECLARATIONS = [OpenLotPageComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: [OpenLotPageComponent, MessageDialogComponent],
  entryComponents: [MessageDialogComponent],
  exports: COMMON_DECLARATIONS,
})
export class OpenLotPageModule {}
