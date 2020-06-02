import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PackagingExitResolver } from "src/app/shared/Resolvers/packaging-exit.resolver";
import { CloseLotPageModule } from "./pages/close-lot/close-lot.module";
import { CloseLotPage } from "./pages/close-lot/close-lot.page";
import { ExitPageModule } from "./pages/exit/exit.module";
import { ExitPage } from "./pages/exit/exit.page";
import { OpenLotePageModule } from "./pages/open-lot/open-lot.module";
import { OpenLotePage } from "./pages/open-lot/open-lot.page";
import { PackagingMenuModule } from "./pages/packaging-menu/packaging-menu.module";
import { PackagingMenuPage } from "./pages/packaging-menu/packaging-menu.page";
import { ReportPageModule } from "./pages/report/report.module";
import { ReportPage } from "./pages/report/report.page";
import { PackagingLotsResolver } from "src/app/shared/Resolvers/packaging-lots.resolver";
import { MenuResolver } from "src/app/shared/Resolvers/menu.resolver";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "menu",
        component: PackagingMenuPage,
        resolve: {
          menu: MenuResolver,
        },
      },
      {
        path: "open-lot",
        data: { type: "PACKING", status: "PENDING" },
        resolve: {
          packaging: PackagingLotsResolver,
        },
        component: OpenLotePage,
      },
      {
        path: "close-lot",
        data: { type: "PACKING", status: "OPENED" },
        resolve: {
          packaging: PackagingLotsResolver,
        },
        component: CloseLotPage,
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
    OpenLotePageModule,
    ExitPageModule,
    CloseLotPageModule,
    ReportPageModule,
  ],
  exports: [RouterModule],
  providers: [PackagingExitResolver, PackagingLotsResolver, MenuResolver],
})
export class PackagingRoutingModule {}
