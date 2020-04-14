import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { IonicModule } from "@ionic/angular";
import { StepperComponent } from "./stepper/stepper.component";

const DECLARATIONS = [HeaderComponent, StepperComponent];

@NgModule({
  declarations: DECLARATIONS,
  imports: [CommonModule, IonicModule],
  exports: DECLARATIONS,
})
export class ComponentsModule {}
