import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import * as fromMenuActions from "./menu.action";
import { delay, exhaustMap, switchMap, catchError, tap } from "rxjs/operators";
import { StepperInterface } from "src/app/shared/Models/stepper.interface";

@Injectable()
export class MenuEffects {
  constructor(private router: Router, private action$: Actions) {}

  loadOptionSelectedEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromMenuActions.StartLoadMenuOption),
      switchMap((itemSelected) => [
        fromMenuActions.loadMenuOption({ itemSelected }),
        fromMenuActions.finishLoadMenuOption(),
      ])
    )
  );
}
