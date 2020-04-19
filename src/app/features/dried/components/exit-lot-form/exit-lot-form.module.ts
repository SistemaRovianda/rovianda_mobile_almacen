import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExitLotFormComponent } from "./exit-lot-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

const COMMON_IMPORTS = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  IonicModule,
];

const COMMON_DECLARATIONS = [ExitLotFormComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class ExitLotFormModule {}
