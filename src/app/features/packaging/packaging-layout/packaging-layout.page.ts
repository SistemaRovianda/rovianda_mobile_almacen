import { Component, OnInit, OnChanges } from "@angular/core";
import { ItemBackInterface } from "src/app/shared/Models/item-back.interface";
import { StepperInterface } from "src/app/shared/Models/stepper.interface";

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

  constructor() {}

  ngOnInit() {}

  nextSection() {
    console.log(this.section);
  }
}
