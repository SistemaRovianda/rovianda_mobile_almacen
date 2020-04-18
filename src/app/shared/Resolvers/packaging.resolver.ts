import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "../Models/app-state.interface";
import * as fromPackagingActions from "src/app/features/packaging/store/packaging/packaging.actions";
import { packagingStepperInit } from 'src/app/features/packaging/store/stepper/stepper-packaging.actions';

@Injectable()
export class PackagingResolver implements Resolve<boolean> {
  constructor(private store: Store<AppStateInterface>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.store.dispatch(fromPackagingActions.packagingStartLoad());
    this.store.dispatch(packagingStepperInit());
    return true;
  }
}
