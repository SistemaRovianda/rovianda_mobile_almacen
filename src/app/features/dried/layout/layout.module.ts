import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule, IonButton } from "@ionic/angular";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { ButtonMenuModule } from "../../menu/components/button-menu/button-menu.module";
import { LayoutComponent } from "./layout.component";
import { RouterModule } from "@angular/router";

const COMMON_IMPORTS = [
  CommonModule,
  FormsModule,
  IonicModule,
  ComponentsModule,
  ButtonMenuModule,
  RouterModule,
];

const COMMON_DECLARATIONS = [LayoutComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class LayoutModule {}
