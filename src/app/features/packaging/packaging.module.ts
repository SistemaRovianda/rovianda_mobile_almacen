import { NgModule } from "@angular/core";
import { PackagingRoutingModule } from "./packaging.routing";

const COMMON_DECLARATIONS = [];

const COMMON_IMPORTS = [PackagingRoutingModule];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: COMMON_IMPORTS,
  exports: COMMON_DECLARATIONS,
})
export class PackagingModule {}
