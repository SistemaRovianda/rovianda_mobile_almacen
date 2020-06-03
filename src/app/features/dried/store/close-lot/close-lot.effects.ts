import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { DriedService } from "src/app/shared/Services/dried.service";
import * as fromActions from "./close-lot.actions";
import { ToastService } from "src/app/shared/Services/toast.service";

@Injectable({
  providedIn: "root",
})
export class CloseLotDriedEffects {
  constructor(
    private actions$: Actions,
    private driedService: DriedService,
    private toastService: ToastService
  ) {}

  openLote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.closeLot),
      exhaustMap((action) =>
        this.driedService.closeLot(action.payload).pipe(
          map((payload) => fromActions.closeLotSuccess({ payload })),
          catchError((error) => of(fromActions.closeLotError(error)))
        )
      )
    )
  );

  closeLotSuccessEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.closeLotSuccess),
        exhaustMap((_) => {
          this.toastService.presentToastSuccess();
          return [];
        })
      ),
    {
      dispatch: false,
    }
  );
}
