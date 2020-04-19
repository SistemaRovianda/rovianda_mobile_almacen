import * as fromStepperActions from "./stepper-packaging.actions";
import { StepperPackagingInterface } from "src/app/shared/Models/Stepper-packaging.interface";
import { createReducer, on } from "@ngrx/store";
import { StepperInterface } from "src/app/shared/Models/stepper.interface";

const STATE_INITIAL_STEPPER: StepperPackagingInterface = {
  steps: [
    {
      value: false,
    },
    {
      value: false,
    },
  ],
};

export const StepperInitialReducer = createReducer<StepperPackagingInterface>(
  STATE_INITIAL_STEPPER,
  on(fromStepperActions.packagingStepperNext, (state, { step }) => ({
    ...state,
    steps: state.steps.slice(1).concat(step).reverse(),
  })),
  on(fromStepperActions.packagingStepperPrev, (state) => ({
    ...state,
    steps: state.steps.slice(1).concat({ value: false }),
  })),
  on(fromStepperActions.packagingStepperInit, (state) => STATE_INITIAL_STEPPER)
);
