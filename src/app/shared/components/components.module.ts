import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { IonicModule } from "@ionic/angular";
import { StepperModule } from "./stepper/stepper.module";

const DECLARATIONS = [HeaderComponent];

@NgModule({
  declarations: DECLARATIONS,
  imports: [CommonModule, IonicModule],
  exports: DECLARATIONS,
})
export class ComponentsModule {}
