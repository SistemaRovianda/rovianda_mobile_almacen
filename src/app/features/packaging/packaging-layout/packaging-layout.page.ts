import { Component, OnInit, OnChanges } from "@angular/core";
import { ItemBackInterface } from "src/app/shared/Models/item-back.interface";
import { StepperInterface } from "src/app/shared/Models/stepper.interface";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/Models/app-state.interface";
import { packagingStepperInit } from "../store/stepper/stepper-packaging.actions";

@Component({
  selector: "app-packaging-layout",
  templateUrl: "./packaging-layout.page.html",
  styleUrls: ["./packaging-layout.page.scss"],
})
export class PackagingLayoutPage implements OnInit {
  header: ItemBackInterface = {
    path: "/menu",
    titlePath: "Regresar",
    title: "Empaque",
  };

  section: string;

  stepperPackaging: StepperInterface[] = [
    {
      value: false,
    },
  ];

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit() {}

  onBack(event) {
    this.store.dispatch(packagingStepperInit());
  }

  nextSection() {
    console.log(this.section);
  }
}
