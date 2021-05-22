import { Component, OnInit, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { SELECT_STEPS } from "src/app/features/packaging/store/stepper/stepper-packaging.select";
import { StepperInterface } from "src/app/shared/models/stepper.interface";
import { AppStateInterface } from "src/app/shared/models/app-state.interface";
import * as fromStepperActions from "../../../features/packaging/store/stepper/stepper-packaging.actions";

@Component({
  selector: "warehouse-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.scss"],
})
export class StepperComponent implements OnInit {
  steppers: StepperInterface[] = [];
  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit() {
    this.store
      .select(SELECT_STEPS)
      .subscribe((tempSteps) => (this.steppers = tempSteps));
  }
  next(num, step) {
    this.store.dispatch(
      fromStepperActions.packagingStepperNext({
        num,
        step,
      })
    );
  }

  prev() {
    this.store.dispatch(fromStepperActions.packagingStepperPrev());
  }

  getStep(step) {
    return this.steppers[step].value;
  }
}
