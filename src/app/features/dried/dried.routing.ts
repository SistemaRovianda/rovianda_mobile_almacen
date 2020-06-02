import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { LayoutModule } from "./layout/layout.module";
import { CloseLotPageModule } from "./pages/close-lot/close-lot.module";
import { CloseLotPageComponent } from "./pages/close-lot/close-lot.page";
import { OpenLotPageModule } from "./pages/open-lot/open-lot.module";
import { OpenLotPageComponent } from "./pages/open-lot/open-lot.page";
import { OutputPageComponent } from "./pages/output/output.page";
import { OutputPageModule } from "./pages/output/output.module";
import { PrintReportComponent } from "./pages/print-report/print-report.component";
import { PrintReportModule } from "./pages/print-report/print-report.module";
import { MenuResolver } from "src/app/shared/Resolvers/menu.resolver";
const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "menu",
        component: LayoutComponent,
        resolve: {
          menu: MenuResolver,
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
        component: OutputPageComponent,
      },
      {
        path: "print-report",
        component: PrintReportComponent,
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
    OutputPageModule,
    PrintReportModule,
  ],
  exports: [RouterModule],
  providers: [MenuResolver],
})
export class DriedRoutingModule {}
