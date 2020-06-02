import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { ButtonMenuModule } from "src/app/features/menu/components/button-menu/button-menu.module";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { CloseLotFormModule } from "../../components/close-lot-form/close-lot-form.module";
import { MessageDialogModule } from "../../dialogs/message-dialog/message-dialog.module";
import { CloseLotPageComponent } from "./close-lot.page";
import { StepperModule } from "src/app/shared/components/stepper/stepper.module";

const COMMON_IMPORTS = [
  CommonModule,
  IonicModule,
  CloseLotFormModule,
  ButtonMenuModule,
  ComponentsModule,
  RouterModule,
  MessageDialogModule,
  StepperModule,
];

const COMMON_DECLARATIONS = [CloseLotPageComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class CloseLotPageModule {}
