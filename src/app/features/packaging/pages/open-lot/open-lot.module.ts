import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { OpenLotePage } from "./open-lot.page";
import { Routes, RouterModule } from "@angular/router";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { StepperModule } from "../../components/stepper/stepper.module";

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
    StepperModule,
    ReactiveFormsModule,
  ],
  declarations: [OpenLotePage],
})
export class OpenLotePageModule {}
