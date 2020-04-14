import { Component, OnInit, Input } from "@angular/core";
import { StepperInterface } from "../../Models/stepper.interface";

@Component({
  selector: "rovianda-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.scss"],
})
export class StepperComponent implements OnInit {
  @Input() steppers: StepperInterface[];
  constructor() {}
  step = 0;

  ngOnInit() {}
  update(step, value) {
    if (!value) {
      this.steppers.fill({ value: false }, step, this.steppers.length - 1);
    }
    this.steppers[step].value = value;
  }

  getStep(step) {
    return this.steppers[step].value;
  }
}
