import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PackagingLayoutPage } from "./packaging-layout/packaging-layout.page";
import { PackagingLayoutPageModule } from "./packaging-layout/packaging-layout.module";

const ROUTES: Routes = [
  {
    path: "",
    component: PackagingLayoutPage,
    children: [],
  },
];

const COMMON_DECLARATIONS = [];

const COMMON_IMPORTS = [
  RouterModule.forChild(ROUTES),
  PackagingLayoutPageModule,
];

const COMMON_PROVIDERS = [];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: COMMON_IMPORTS,
  exports: COMMON_DECLARATIONS,
  providers: COMMON_PROVIDERS,
})
export class PackagingRoutingModule {}
