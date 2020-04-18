import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PackagingService } from "src/app/shared/Services/packaging.service";
import { openLotStarLoad } from "./open-lot.actions";
import { exhaustMap, delay, switchMap, catchError } from "rxjs/operators";
import * as fromPackagingActions from "src/app/features/packaging/store/packaging/packaging.actions";
import { of } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class OpenLoteEffects {
  constructor(
    private action$: Actions,
    private packing: PackagingService,
    private router: Router
  ) {}

  loadOpenLotEffects = createEffect(() =>
    this.action$.pipe(
      ofType(openLotStarLoad),
      exhaustMap((action) =>
        this.packing.entrance(action.lot).pipe(
          delay(3000),
          switchMap((_) => [fromPackagingActions.packagingLoadSuccess()]),
          catchError((errors) =>
            of(
              fromPackagingActions.packagingFinishLoad(),
              fromPackagingActions.PackagingFailure(errors)
            )
          )
        )
      )
    )
  );
}
