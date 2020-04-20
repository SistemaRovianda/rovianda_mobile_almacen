import { createAction, props } from "@ngrx/store";
import { StepperPackagingInterface } from "src/app/shared/Models/Stepper-packaging.interface";
import { StepperInterface } from "src/app/shared/Models/stepper.interface";

const PACKAGING_STEPPER_NEXT = "[STEPPER-PACKAGING] Packaging Stepper Next";

const PACKAGING_STEPPER_PREV = "[STEPPER-PACKAGING] Packaging Stepper Prev";

const PACKAGING_STEPPER_INIT = "[STEPPER-PACKAGING] Packaging Stepper Init";

export const packagingStepperNext = createAction(
  PACKAGING_STEPPER_NEXT,
  props<{ num: number; step: boolean }>()
);

export const packagingStepperPrev = createAction(PACKAGING_STEPPER_PREV);

export const packagingStepperInit = createAction(PACKAGING_STEPPER_INIT);
