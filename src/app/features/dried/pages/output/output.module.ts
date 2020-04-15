import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OutputPageComponent } from "./output.component";

const COMMON_IMPORTS = [CommonModule];

const COMMON_DECLARATIONS = [OutputPageComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
})
@NgModule({
  imports: [CommonModule],
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class OutputPageModule {}
