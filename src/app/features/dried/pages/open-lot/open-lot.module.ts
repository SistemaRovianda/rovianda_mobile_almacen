import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OpenLotPageComponent } from "./open-lot.page";

const COMMON_IMPORTS = [CommonModule];

const COMMON_DECLARATIONS = [OpenLotPageComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class OpenLotModule {}
