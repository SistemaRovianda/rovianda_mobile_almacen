import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { OpenLotFormComponent } from "./open-lot-form.component";

const COMMON_IMPORTS = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  IonicModule,
];

const COMMON_DECLARATIONS = [OpenLotFormComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class OpenLotFormModule {}
