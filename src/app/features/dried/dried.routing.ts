import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { LayoutModule } from "./layout/layout.module";
import { CloseLotPageModule } from "./pages/close-lot/close-lot.module";
import { CloseLotPageComponent } from "./pages/close-lot/close-lot.page";
import { ExitLotPageModule } from "./pages/exit-lot/exit-lot.module";
import { ExitLotPageComponent } from "./pages/exit-lot/exit-lot.page";
import { OpenLotPageModule } from "./pages/open-lot/open-lot.module";
import { OpenLotPageComponent } from "./pages/open-lot/open-lot.page";
const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "menu",
        component: LayoutComponent,
      },
      {
        path: "open-lot",
        component: OpenLotPageComponent,
      },
      {
        path: "close-lot",
        component: CloseLotPageComponent,
      },
      {
        path: "exit-lot",
        component: ExitLotPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    LayoutModule,
    OpenLotPageModule,
    CloseLotPageModule,
    ExitLotPageModule,
  ],
  exports: [RouterModule],
})
export class DriedRoutingModule {}
