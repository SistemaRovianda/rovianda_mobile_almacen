import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutModule } from "./layout/layout.module";
import { LayoutComponent } from "./layout/layout.component";
import { CloseLotPageComponent } from "./pages/close-lot/close-lot.page";
import { CloseLotPageModule } from "./pages/close-lot/close-lot.module";
import { OpenLotPageComponent } from "./pages/open-lot/open-lot.page";
import { OutputPageComponent } from "./pages/output/output.component";
import { OutputPageModule } from "./pages/output/output.module";
import { OpenLotModule } from "./pages/open-lot/open-lot.module";
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
        path: "output",
        component: OutputPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    LayoutModule,
    OpenLotModule,
    CloseLotPageModule,
    OutputPageModule,
  ],
  exports: [RouterModule],
})
export class DriedRoutingModule {}
