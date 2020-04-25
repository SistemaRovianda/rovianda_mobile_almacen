import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OpenLotePage } from "./pages/open-lot/open-lot.page";
import { ExitPageModule } from "./pages/exit/exit.module";
import { CloseLotPageModule } from "../dried/pages/close-lot/close-lot.module";
import { PackagingMenuModule } from "./pages/packaging-menu/packaging-menu.module";
import { ReportPageModule } from "./pages/report/report.module";
import { PackagingMenuPage } from "./pages/packaging-menu/packaging-menu.page";
import { PackagingResolver } from "src/app/shared/Resolvers/packaging.resolver";
import { PackagingExitResolver } from "src/app/shared/Resolvers/packaging-exit.resolver";
import { OpenLotPageComponent } from "../dried/pages/open-lot/open-lot.page";
import { OpenLotPageModule } from "../dried/pages/open-lot/open-lot.module";
import { CloseLotPageComponent } from "../dried/pages/close-lot/close-lot.page";
import { ExitPage } from "./pages/exit/exit.page";
import { ReportPage } from "./pages/report/report.page";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "menu",
        component: PackagingMenuPage,
        resolve: {
          packaging: PackagingResolver,
        },
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
        component: ExitPage,
        resolve: {
          exit: PackagingExitResolver,
        },
      },
      {
        path: "print-report",
        component: ReportPage,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    PackagingMenuModule,
    OpenLotPageModule,
    ExitPageModule,
    CloseLotPageModule,
    ReportPageModule,
  ],
  exports: [RouterModule],
  providers: [PackagingResolver, PackagingExitResolver],
})
export class PackagingRoutingModule {}
