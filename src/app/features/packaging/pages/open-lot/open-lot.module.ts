import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { OpenLotePage } from "./open-lot.page";
import { Routes, RouterModule } from "@angular/router";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { StepperModule } from "src/app/shared/components/stepper/stepper.module";
import { MessageDialogModule } from "../../dialogs/message-dialog/message-dialog.module";

const routes: Routes = [
  {
    path: "",
    component: OpenLotePage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // RouterModule.forChild(routes),
    ComponentsModule,
    ReactiveFormsModule,
    StepperModule,
    MessageDialogModule,
  ],
  declarations: [OpenLotePage],
})
export class OpenLotePageModule {}
