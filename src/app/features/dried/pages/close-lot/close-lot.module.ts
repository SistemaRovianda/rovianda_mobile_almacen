import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CloseLotPageComponent } from "./close-lot.page";

const COMMON_IMPORTS = [CommonModule];

const COMMON_DECLARATIONS = [CloseLotPageComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class CloseLotPageModule {}
