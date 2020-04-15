import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "dried-form",
        loadChildren: () =>
          import("./pages/dried/dried.module").then((m) => m.DriedModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
