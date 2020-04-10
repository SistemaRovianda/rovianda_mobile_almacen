import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import * as fromMenuActions from "./menu.action";
import { delay, exhaustMap, switchMap, catchError, tap } from "rxjs/operators";
import { from, forkJoin, of } from "rxjs";
import { Store } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/Models/app-state.interface";
import { SELECT_OPTION_SELECTED } from "./menu.selector";

@Injectable()
export class MenuEffects {
  constructor(private router: Router, private action$: Actions) {}

  loadOptionSelectedEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromMenuActions.StartLoadMenuOption),
      delay(2000),
      switchMap((itemSelected) => [
        fromMenuActions.loadMenuOption({ itemSelected }),
        fromMenuActions.finishLoadMenuOption(),
      ])
    )
  );
}
