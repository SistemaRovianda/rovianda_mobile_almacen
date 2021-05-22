import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { PackagingExitResolver } from "./shared/resolvers/packaging-exit.resolver";
import { IsAuthGuard } from "./shared/guards/is-auth.guard";
import { AuthGuard } from "./shared/guards/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login",
    canActivate: [IsAuthGuard],
    loadChildren: () =>
      import("./features/landing/layout/layout.module").then(
        (m) => m.LayoutModule
      ),
  },
  {
    path: "menu",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./features/menu/pages/menu/menu.module").then(
        (m) => m.MenuPageModule
      ),
  },
  {
    path: "dried",
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import("./features/dried/dried.module").then((m) => m.DriedModule),
  },
  {
    path: "packaging",
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import("./features/packaging/packaging.module").then(
        (m) => m.PackagingModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
  providers: [PackagingExitResolver],
})
export class AppRoutingModule {}
