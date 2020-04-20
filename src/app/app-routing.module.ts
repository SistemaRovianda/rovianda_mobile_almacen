import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { PackagingResolver } from "./shared/Resolvers/packaging.resolver";
import { PackagingExitResolver } from "./shared/Resolvers/packaging-exit.resolver";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login",
    loadChildren: () =>
      import("./features/landing/pages/login/login.module").then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: "menu",
    loadChildren: () =>
      import("./features/menu/pages/menu/menu.module").then(
        (m) => m.MenuPageModule
      ),
  },
  {
    path: "dried",
    loadChildren: () =>
      import("./features/dried/dried.module").then((m) => m.DriedModule),
  },
  {
    path: "packaging",
    loadChildren: () =>
      import(
        "./features/packaging/pages/packaging-menu/packaging-menu.module"
      ).then((m) => m.PackagingMenuModule),
    resolve: {
      packaging: PackagingResolver,
    },
  },
  {
    path: "packaging/open-lot",
    loadChildren: () =>
      import("./features/packaging/pages/open-lot/open-lot.module").then(
        (m) => m.OpenLotePageModule
      ),
  },
  {
    path: "packaging/close-lot",
    loadChildren: () =>
      import("./features/packaging/pages/close-lot/close-lot.module").then(
        (m) => m.CloseLotPageModule
      ),
  },
  {
    path: "packaging/exit",
    loadChildren: () =>
      import("./features/packaging/pages/exit/exit.module").then(
        (m) => m.ExitPageModule
      ),
    resolve: {
      exit: PackagingExitResolver,
    },
  },
  {
    path: "packaging/report",
    loadChildren: () =>
      import("./features/packaging/pages/report/report.module").then(
        (m) => m.ReportPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
  providers: [PackagingResolver, PackagingExitResolver],
})
export class AppRoutingModule {}
