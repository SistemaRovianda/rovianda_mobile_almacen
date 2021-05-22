import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { DriedService } from "src/app/shared/services/dried.service";
import * as fromActions from "./output.actions";
import { ToastService } from "src/app/shared/services/toast.service";

@Injectable({
  providedIn: "root",
})
export class OutputEffects {
  constructor(
    private actions$: Actions,
    private driedService: DriedService,
    private toastService: ToastService
  ) {}

  openLote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.output),
      exhaustMap((action) =>
        this.driedService.exitLot(action.payload).pipe(
          map((payload) => fromActions.outputSuccess({ payload })),
          catchError((error) => of(fromActions.outputError(error)))
        )
      )
    )
  );

  outputLotSuccessEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.outputSuccess),
        exhaustMap((_) => {
          this.toastService.presentToastSuccess();
          return [];
        })
      ),
    {
      dispatch: false,
    }
  );

  outputLotErrorEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.outputError),
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
