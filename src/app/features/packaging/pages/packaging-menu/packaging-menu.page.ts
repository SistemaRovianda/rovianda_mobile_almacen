import { Component, OnInit, OnChanges } from "@angular/core";
import { ItemBackInterface } from "src/app/shared/Models/item-back.interface";
import { StepperInterface } from "src/app/shared/Models/stepper.interface";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/Models/app-state.interface";
import { packagingStepperInit } from "../../store/stepper/stepper-packaging.actions";
import { Router } from "@angular/router";

@Component({
  selector: "app-packaging-layout",
  templateUrl: "./packaging-menu.page.html",
  styleUrls: ["./packaging-menu.page.scss"],
})
export class PackagingMenuPage implements OnInit {
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

  constructor(
    private store: Store<AppStateInterface>,
    private router: Router
  ) {}

  ngOnInit() {}


  nextSection() {
    console.log(this.section);

    this.router.navigate(["/packaging/" + this.section]);
    this.section = undefined;
  }
}
