import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "../models/app-state.interface";
import { packagingStepperInit } from "src/app/features/packaging/store/stepper/stepper-packaging.actions";

@Injectable()
export class MenuResolver implements Resolve<boolean> {
  constructor(private store: Store<AppStateInterface>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.store.dispatch(packagingStepperInit());
    return true;
  }
}
