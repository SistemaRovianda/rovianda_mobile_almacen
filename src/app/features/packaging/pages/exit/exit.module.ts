import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ExitPage } from "./exit.page";
import { Routes, RouterModule } from "@angular/router";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { StepperModule } from "../../components/stepper/stepper.module";

const routes: Routes = [
  {
    path: "",
    component: ExitPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    StepperModule,
    ReactiveFormsModule,
  ],
  declarations: [ExitPage],
})
export class ExitPageModule {}
