import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonMenuComponent } from "./button-menu.component";
import { IonicModule } from "@ionic/angular";

const COMMON_DECLARACTIONS = [ButtonMenuComponent];

const IMPORTS = [CommonModule, IonicModule];

@NgModule({
  declarations: COMMON_DECLARACTIONS,
  imports: IMPORTS,
  exports: COMMON_DECLARACTIONS,
})
export class ButtonMenuModule {}
