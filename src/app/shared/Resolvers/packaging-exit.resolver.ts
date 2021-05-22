import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "../models/app-state.interface";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { exitStartLoad } from "src/app/features/packaging/store/exit/exit.actions";

@Injectable()
export class PackagingExitResolver implements Resolve<boolean> {
  constructor(private store: Store<AppStateInterface>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.store.dispatch(exitStartLoad());
    return true;
  }
}
