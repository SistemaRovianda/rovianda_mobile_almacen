import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ExitPage } from "./exit.page";
import { Routes, RouterModule } from "@angular/router";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { StepperModule } from "src/app/shared/components/stepper/stepper.module";
import { GenerateReportModule } from "../../dialogs/generate-report/generate-report.module";

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
    // RouterModule.forChild(routes),
    ComponentsModule,
    ReactiveFormsModule,
    StepperModule,
    GenerateReportModule,
  ],
  declarations: [ExitPage],
})
export class ExitPageModule {}
