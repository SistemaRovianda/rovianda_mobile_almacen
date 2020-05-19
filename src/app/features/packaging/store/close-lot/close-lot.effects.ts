import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PackagingService } from "src/app/shared/Services/packaging.service";
import * as fromPackagingActions from "src/app/features/packaging/store/packaging/packaging.actions";
import { closeLotStartLoad } from "./close-lot.actions";
import { exhaustMap, delay, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class CloseLotEffects {
  constructor(private action$: Actions, private packing: PackagingService) {}

  loadCloseLotEffects = createEffect(() =>
    this.action$.pipe(
      ofType(closeLotStartLoad),
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
