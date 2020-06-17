import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { DriedService } from "src/app/shared/Services/dried.service";
import * as fromActions from "./open-lot.actions";
import { Router } from "@angular/router";
import { ToastService } from "src/app/shared/Services/toast.service";

@Injectable({
  providedIn: "root",
})
export class OpenLotEffects {
  constructor(
    private actions$: Actions,
    private driedService: DriedService,
    private toastService: ToastService
  ) {}

  openLote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.openLot),
      exhaustMap((action) =>
        this.driedService.openLot(action.payload, action.warehouseDriefId).pipe(
          map((payload) => fromActions.openLotSuccess({ payload })),
          catchError((error) => of(fromActions.openLotError(error)))
        )
      )
    )
  );

  openLotSuccessEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.openLotSuccess),
        exhaustMap((_) => {
          this.toastService.presentToastSuccess();
          return [];
        })
      ),
    {
      dispatch: false,
    }
  );

  openLotErrorEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.openLotError),
        exhaustMap((_) => {
          this.toastService.presentToastError();
          return [];
        })
      ),
    {
      dispatch: false,
    }
  );
}
