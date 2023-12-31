import * as fromStepperActions from "./stepper-packaging.actions";
import { StepperPackagingInterface } from "src/app/shared/models/Stepper-packaging.interface";
import { createReducer, on } from "@ngrx/store";
import { StepperInterface } from "src/app/shared/models/stepper.interface";

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
  on(fromStepperActions.packagingStepperNext, (state, { num, step }) => ({
    ...state,
    steps: state.steps.concat().map((tempStep, i) => {
      if (i === num) {
        return { value: step };
      }
      return tempStep;
    }),
  })),
  on(fromStepperActions.packagingStepperPrev, (state) => ({
    ...state,
    steps: state.steps.slice(1).concat({ value: false }),
  })),
  on(fromStepperActions.packagingStepperInit, (state) => STATE_INITIAL_STEPPER)
);
